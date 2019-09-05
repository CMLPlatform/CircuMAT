import logging
import json
import numpy as np
from circumat import productindexmanger as pim
from circumat import querymanagement
from django.conf import settings
import pandas as pd
import os
log = logging.getLogger(__name__)


class Analyze:
    """
    This class contains the method for calculations
    """
    # class variable
    __prd_cnt = 200
    __cntr_cnt = 49

    def __init__(self, product_calc_indices, country_calc_indices, indicator_calc_indices, querySelection, idx_units,
                 job_name, job_id, s_country_idx, Y_data, B_data, L_data):
        self.product_calc_indices = product_calc_indices
        self.country_calc_indices = country_calc_indices
        self.indicator_calc_indices = indicator_calc_indices
        self.job_name = job_name
        self.job_id = job_id
        self.querySelection = querySelection
        self.idx_units = idx_units
        self.s_country_idx = s_country_idx
        self.Y_data = Y_data
        self.B_data = B_data
        self.L_data = L_data
        self.global_id_nuts2 = querySelection["nodesReg"][0]
        self.year = str(querySelection["year"])

    def route_one(self):
        """Perform calculations according to route one.


        Returns:
            json: json result data
        """
        p_product_idx = np.arange(0, 200)
        p_country_idx = np.arange(0, 49)

        # Expand selected ids ranges
        ids = pim.ProductIndexManager(self.product_calc_indices, self.s_country_idx, p_product_idx, p_country_idx)
        full_c_product_idx = ids.get_consumed_product_ids()
        full_p_product_idx = ids.get_produced_product_ids()
        selected_s_cntr_cnt = ids.get_selected_s_country_count()
        selected_c_prd_cnt = ids.get_selected_c_product_count()

        # Get data
        L = self.L_data
        B = self.B_data
        # implement function to return a new Y
        Y = self.update_y()
        # Set-up final demand based on selected consuming countries
        # Select and aggregate countries/regions
        y = np.sum(Y[:, self.country_calc_indices], axis=1, keepdims=True)

        # Calculated total output from every sector associated
        # with the final consumption of every selected product
        # Consumed products not selected are skipped.
        X = np.array([np.multiply(y[idx], L[:, idx]) for idx in full_c_product_idx])
        X = np.transpose(X)
        # Select those sectors and regions from B and X
        # that are of interest to the user - single selection only
        X = X[full_p_product_idx, :]
        b = B[self.indicator_calc_indices, :]
        b = b[:, full_p_product_idx]

        # Calculate emissions associated with
        # every selected consumed product supplied
        # by each country
        m = np.dot(b, X)

        # Aggregate the emissions based on the
        # country selling final product selection
        m = m.reshape(selected_s_cntr_cnt, selected_c_prd_cnt)
        m = np.sum(m, axis=0)

        # Return dictionary with results. Multiple values, one value
        # for each product that is consumed
        m = m.flatten()
        result = {}
        for idx, value in np.ndenumerate(self.product_calc_indices):
            result[value] = m[idx[0]]

        # after calc we expect an dict, we pass that into get_aggregations_xxxx function
        result_as_global_ids = querymanagement.get_aggregations_products(self.querySelection, result)

        # invoke with returned object get_calc_names_xxxx function
        result_as_names = querymanagement.get_calc_names_product(result_as_global_ids)

        # built json object for saving
        data = {}
        data['job_name'] = self.job_name
        data['job_id'] = self.job_id
        data['unit'] = self.idx_units
        # save the final dict result in rawResultData
        data['rawResultData'] = result_as_names
        json_data = json.dumps(data)
        return json_data

    def route_two(self):
        """Perform calculations according to route two.


        Returns:
            json: json result data
        """
        p_product_idx = np.arange(0, 200)
        p_country_idx = np.arange(0, 49)

        # Expand selected ranges
        ids = pim.ProductIndexManager(self.product_calc_indices, self.s_country_idx, p_product_idx, p_country_idx)
        full_c_product_idx = ids.get_consumed_product_ids()
        full_p_product_idx = ids.get_produced_product_ids()
        tot_prd_cnt = ids.get_product_count()
        tot_cntr_cnt = ids.get_country_count()
        selected_c_cntr_cnt = len(self.country_calc_indices)

        # Get data
        Y = self.Y_data
        L = self.L_data
        B = self.B_data

        # Set-up final demand. Select consuming countries and
        # set the non-selected consumed product categories to zero
        Y = Y[:, self.country_calc_indices]
        mask = np.zeros((tot_cntr_cnt * tot_prd_cnt, selected_c_cntr_cnt), dtype=bool)
        mask[full_c_product_idx, :] = True
        Y[~mask] = 0

        # Calculate total output needed to satisfy the
        # selected final demand of countries
        X = np.dot(L, Y)

        # Select those sectors, regions from B and X
        # that are of interest of the user - single selection
        X = X[full_p_product_idx, :]
        b = B[self.indicator_calc_indices, :]
        b = b[:, full_p_product_idx]

        # calculate final result
        m = np.dot(b, X)

        # Return dictionary with results. Multiple values, one value
        # for each selected country where consumption takes place
        m = m.flatten()
        result = {}
        for idx, value in np.ndenumerate(self.country_calc_indices):
            result[value] = m[idx[0]]

        # after calc we expect an dict, we pass that into get_aggregations_xxxx function
        result_as_global_ids = querymanagement.get_aggregations_countries(self.querySelection, result)

        # invoke with returned object get_calc_names_xxxx function
        result_as_names = querymanagement.get_calc_names_country(result_as_global_ids)

        # built json object for saving
        data = {}
        data['job_name'] = self.job_name
        data['job_id'] = self.job_id
        data['unit'] = self.idx_units
        # save the final dict result in rawResultData
        data['rawResultData'] = result_as_names
        json_data = json.dumps(data)
        return json_data

    def route_three(self):
        """Perform calculations according to route three.


        Returns:
            json: json result data
        """
        c_product_idx = np.arange(0, 200)
        c_country_idx = np.arange(0, 49)

        # Expand selected ranges
        ids = pim.ProductIndexManager(c_product_idx, self.s_country_idx, self.product_calc_indices,
                                      self.country_calc_indices)
        full_c_product_idx = ids.get_consumed_product_ids()
        full_p_product_idx = ids.get_produced_product_ids()
        tot_prd_cnt = ids.get_product_count()
        tot_cntr_cnt = ids.get_country_count()
        selected_p_prd_cnt = ids.get_selected_p_product_count()
        selected_p_cntr_cnt = ids.get_selected_p_country_count()

        # Get data
        Y = self.Y_data
        L = self.L_data
        B = self.B_data

        # Set-up final demand. Select consuming countries and
        # set the non-selected consumed product categories to zero
        y = np.sum(Y[:, c_country_idx], axis=1, keepdims=True)
        mask = np.zeros((tot_cntr_cnt * tot_prd_cnt, 1), dtype=bool)
        mask[full_c_product_idx, :] = True
        y[~mask] = 0

        # Calculate total output needed to satisfy the
        # selected final demand of countries
        x = np.dot(L, y)

        # Calculate extensions for each selected product
        # Non selected products are simply skipped. M
        # only retains selected sectors and regions of
        # emission
        b = B[self.indicator_calc_indices, :]
        (row_cnt, col_cnt) = np.shape(b)
        M = np.array([np.multiply(x[prd_idx, 0], b[0, prd_idx]) for prd_idx in full_p_product_idx])
        M = np.transpose(M)

        # Aggregate M per selected country/region
        M = M.reshape(row_cnt, selected_p_cntr_cnt, selected_p_prd_cnt)
        m = np.sum(M, axis=2)

        # Return dictionary with results. Multiple values, one value
        # for each selected country where emission takes place
        m = m.flatten()
        result = {}
        test = {}
        for idx, value in np.ndenumerate(self.country_calc_indices):
            result[value] = m[idx[0]]
            str_value = str(value)
            test[str_value] = m[idx[0]]

        # after calc we expect an dict, we pass that into get_aggregations_xxxx function
        result_as_global_ids = querymanagement.get_aggregations_countries(self.querySelection, result)

        # invoke with returned object get_calc_names_xxxx function
        result_as_names = querymanagement.get_calc_names_country(result_as_global_ids)

        # built json object for saving
        data = {}
        data['job_name'] = self.job_name
        data['job_id'] = self.job_id
        data['unit'] = self.idx_units
        # save the final dict result in rawResultData
        data['rawResultData'] = result_as_names
        json_data = json.dumps(data)
        return json_data

    def route_four(self):
        """Perform calculations according to route four.


        Returns:
            json: json result data
        """
        c_product_idx = np.arange(0, 200)
        c_country_idx = np.arange(0, 49)

        # Expand selected ranges
        ids = pim.ProductIndexManager(c_product_idx, self.s_country_idx, self.product_calc_indices,
                                      self.country_calc_indices)
        full_c_product_idx = ids.get_consumed_product_ids()
        full_p_product_idx = ids.get_produced_product_ids()
        tot_prd_cnt = ids.get_product_count()
        tot_cntr_cnt = ids.get_country_count()
        selected_p_prd_cnt = ids.get_selected_p_product_count()
        selected_p_cntr_cnt = ids.get_selected_p_country_count()

        # Get data
        Y = self.Y_data
        L = self.L_data
        B = self.B_data
        # here, you  Y is updated as it should be summed up for all countries and for all sub categories
        # Set-up final demand. Select countries
        y = np.sum(Y, axis=1, keepdims=True)  # select all countries/regions
        # Calculate total output needed to satisfy
        # selected final demand of countries
        x = np.dot(L, y)

        emp_shares= self.scale_output_vectors()

        # Calculate extensions for each selected product
        # Non selected products are simply skipped. M
        # only retains selected sectors and regions of
        # emission
        b = B[self.indicator_calc_indices, :]
        (row_cnt, col_cnt) = np.shape(b)
        M = np.array([np.multiply(x[prd_idx, 0], b[:, prd_idx]) for prd_idx in full_p_product_idx])
        M = np.transpose(M)

        M=M*(emp_shares[self.product_calc_indices,1])


        # Aggregate M per selected product
        M = M.reshape(row_cnt, selected_p_prd_cnt, selected_p_cntr_cnt, order='F')
        m = np.sum(M, axis=2)
        # Return dictionary with results. Multiple values, one value
        # for each selected country where emission takes place
        m = m.flatten()
        result = {}
        for idx, value in np.ndenumerate(self.product_calc_indices):
            result[value] = m[idx[0]]

        # after calc we expect an dict, we pass that into get_aggregations_xxxx function
        result_as_global_ids = querymanagement.get_aggregations_products(self.querySelection, result)

        # invoke with returned object get_calc_names_xxxx function
        result_as_names = querymanagement.get_calc_names_product(result_as_global_ids)

        # built json object for saving
        data = {}
        data['job_name'] = self.job_name
        data['job_id'] = self.job_id
        data['unit'] = self.idx_units
        # save the final dict result in rawResultData
        data['rawResultData'] = result_as_names
        json_data = json.dumps(data)
        return json_data

    def update_y(self):
        OFFSET = 1
        regions = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,'eurostatdata', "circumat_regions.xlsx"))

        # number of different parts in the final demand. THIS must be known
        n_y = 7
        # the sequence of the gross capital formation in Y THIS must be known (starting from 1)
        n_gcf = 4
        # the sequence of the exports  in Y THIS must be known  (starting from 1)
        n_exports = 7

        # number of countries in the original mrio
        n_c = self.__cntr_cnt # number of countries in the original mrio
        n_c = int(n_c)
        n_s = self.__prd_cnt  # number of sectors (or products in the original mrio)
        n_s = int(n_s)
        n_r = 2  # this is always two, we will divide country in the exiobase into two parts

        # find the region of interest =rof in the exiobase, i.e. the parent country of the region.
        # this is according to the exiobase numbering
        # here the exiobase starts from 1, parent id
        rof = self.country_calc_indices[0] + OFFSET
        # find the name of the country
        name_rof = (regions.iloc[int(np.where(regions.iloc[:, 2] == (rof + OFFSET))[0]), 0])

        # find the  id  of the nuts2; the code of it
        id_nuts2 = (regions.iloc[int(np.where(regions.iloc[:, 2] == self.global_id_nuts2)[0]), 1])
        # find the label of the country; the code of it. that is the frst two letter of above
        id_rof = id_nuts2[0:2]

        # according to the country code, read the income data
        reg_exp_shares_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year, 'eurostatdata/Income/2011_income_'+ '%s' % id_rof + '_' + '%s' % name_rof + '_B5N_MIO_EUR.csv'), header=None, sep='\t')

        # fill NAN values with a small number. *later it may be filled with the avarage value  of the existing values or manually corrected so that no NAN exists.
        reg_exp_shares_all = reg_exp_shares_all.fillna(0.0001)
        # turn reg_exp_shares_all of the country into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        reg_exp_shares = np.zeros((n_y, n_r))
        # first fınd the nuts 2
        internal_id_nuts2 = ((np.where(reg_exp_shares_all.iloc[:, 0] == id_nuts2)[0])[0])
        # write the nuts 2 income data into the second column, and scale it with the sum of all income in the country
        reg_exp_shares[:, 1] = reg_exp_shares_all.iloc[internal_id_nuts2, 1] / np.sum(reg_exp_shares_all.iloc[:, 1],
                                                                                      axis=0)
        # then fll in the rest of the nation details i.e. all sum minus the nuts2 in the column 1
        reg_exp_shares[:, 0] = (np.sum(reg_exp_shares_all.iloc[:, 1], axis=0) - reg_exp_shares_all.iloc[
            internal_id_nuts2, 1]) / np.sum(reg_exp_shares_all.iloc[:, 1], axis=0)

        # according to the country code, read the gross capital formation
        gcf_exp_shares_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year,
                     'eurostatdata/Capital_Formation_By_Sector/2011_nama_10r_2gfcf_' + '%s' % id_rof + '_' + '%s' % name_rof + '_MIO_EUR.csv'),   sep = '\t')

        # fill nan s with a small number *
        gcf_exp_shares_all = gcf_exp_shares_all.fillna(0.0001)
        # turn gcf_exp_shares_all of the country into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        gcf_exp_shares = np.zeros((gcf_exp_shares_all.shape[1] - 1, n_r))
        # first fınd the nuts 2

        internal_id_nuts2 = ((np.where(gcf_exp_shares_all.iloc[:, 0] == id_nuts2)[0])[0])
        # write the nuts 2 gcf data into the second column,
        gcf_exp_shares[:, 1] = gcf_exp_shares_all.iloc[internal_id_nuts2, 1:gcf_exp_shares_all.shape[1]]

        # then fll in the rest of the nation details i.e. all sum minus the nuts2


        gcf_exp_shares[:, 0] = np.sum(gcf_exp_shares_all.iloc[:, 1:gcf_exp_shares_all.shape[1]],
                                      axis=0) - gcf_exp_shares[:, 1]

        # according to the country code, read the aggriculture employnment data
        agg_emp_numbers_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year,
                     'eurostatdata/Agriculture_By_Sector/2011_agrraccts_' + '%s' % id_rof + '_' + '%s' % name_rof + '_PROD_BP.csv'),  sep = '\t')

        # fill nan s with a small number *
        agg_emp_numbers_all = agg_emp_numbers_all.fillna(0.0001)
        # turn agg employment numbers_all of the country into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        agg_emp_numbers = np.zeros((agg_emp_numbers_all.shape[1] - 1, n_r))
        # first fınd the nuts 2
        internal_id_nuts2 = ((np.where(agg_emp_numbers_all.iloc[:, 0] == id_nuts2)[0])[0])
        # write the nuts 2 agg data into the second column,
        agg_emp_numbers[:, 1] = agg_emp_numbers_all.iloc[internal_id_nuts2, 1:agg_emp_numbers_all.shape[1]]
        # then fll in the rest of the nation details i.e. all sum minus the nuts2
        agg_emp_numbers[:, 0] = np.sum(agg_emp_numbers_all.iloc[:, 1:agg_emp_numbers_all.shape[1]],
                                       axis=0) - agg_emp_numbers[:, 1]

        # according to the country code, read the sbs employnment data
        sbs_emp_numbers_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year,
                     'eurostatdata/Employment_By_Sector/2011_SBS_' + '%s' % id_rof + '_' + '%s' % name_rof + '_V16110.csv'),sep = '\t')


        # fill nan s with a small number *
        sbs_emp_numbers_all = sbs_emp_numbers_all.fillna(0.0001)
        # turn it into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        sbs_emp_numbers = np.zeros((sbs_emp_numbers_all.shape[1] - 1, n_r))
        # first fınd the nuts 2
        internal_id_nuts2 = ((np.where(sbs_emp_numbers_all.iloc[:, 0] == id_nuts2)[0])[0])
        # first fill the nuts 2 region details
        sbs_emp_numbers[:, 1] = sbs_emp_numbers_all.iloc[internal_id_nuts2, 1:sbs_emp_numbers_all.shape[1]]
        # then fll in the rest of the nation details i.e. all sum minus the nuts2
        sbs_emp_numbers[:, 0] = np.sum(sbs_emp_numbers_all.iloc[:, 1:sbs_emp_numbers_all.shape[1]],
                                       axis=0) - sbs_emp_numbers[:, 1]

        # convert them to numpy arrays
        sbs_emp_numbers = np.array(sbs_emp_numbers)
        agg_emp_numbers = np.array(agg_emp_numbers)
        reg_exp_shares = np.array(reg_exp_shares)
        gcf_exp_shares = np.array(gcf_exp_shares)

        # conversıon of the sectors ın eurostat to exıobase starts..
        # for agriculture

        conversion_matrix = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,
                                 'eurostatdata/agg_MATCH.xlsx'), sheet_name='matrix', header=None)
        conversion_matrix = np.array(conversion_matrix)
        tmp = conversion_matrix.shape
        ncols = tmp[1]
        nrows = tmp[0]
        # this should be NONZERO unless that is a parent sector that is already existing. otherwise data can be lost!
        rowsum_conversion_matrix = np.sum(conversion_matrix, axis=1)
        # multipply  the conversion matrix  qith employment numbers and divide withthe row sum of the conversion matrix
        agg_emp_numbers_all_in_exiobase = (np.dot(np.transpose(agg_emp_numbers), conversion_matrix * np.reshape(
            np.repeat(1 / (rowsum_conversion_matrix + +10 ** (-31)), ncols), [nrows, ncols])))
        agg_emp_numbers_all_in_exiobase = np.transpose(agg_emp_numbers_all_in_exiobase)
        # for sbs
        conversion_matrix = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,
                                                       'eurostatdata/SBS_MATCH.xlsx'), sheet_name='matrix', header=None)
        conversion_matrix = np.array(conversion_matrix)
        tmp = conversion_matrix.shape
        nrows = tmp[0]
        ncols = tmp[1]
        # multipply with the conversion matrix and divide withthe crow sum of the conversion matrix
        rowsum_conversion_matrix = np.sum(conversion_matrix,
                                          axis=1)  # this should be NONZERO! BUT unless it is a parent sector!
        sbs_emp_numbers_all_in_exiobase = (np.dot(np.transpose(sbs_emp_numbers), conversion_matrix * np.reshape(
            np.repeat(1 / (rowsum_conversion_matrix + +10 ** (-31)), ncols), [nrows, ncols])))
        sbs_emp_numbers_all_in_exiobase = np.transpose(sbs_emp_numbers_all_in_exiobase)
        # for gcf

        conversion_matrix = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,
                                                       'eurostatdata/gfc_MATCH.xlsx'), sheet_name='matrix', header=None)

        conversion_matrix = np.array(conversion_matrix)
        tmp = conversion_matrix.shape
        nrows = tmp[0]
        ncols = tmp[1]
        # multipply with the conversion matrix and divide withthe crow sum of the conversion matrix
        rowsum_conversion_matrix = np.sum(conversion_matrix,
                                          axis=1)  # this should be NONZERO! BUT unless it is a parent sector!
        gcf_exp_shares_all_in_exiobase = (np.dot(np.transpose(gcf_exp_shares), conversion_matrix * np.reshape(
            np.repeat(1 / (rowsum_conversion_matrix + +10 ** (-31)), ncols), [nrows, ncols])))
        gcf_exp_shares_all_in_exiobase = np.transpose(gcf_exp_shares_all_in_exiobase)
        # scale the  gcf such that the row sum is 1
        tmp = (np.sum(gcf_exp_shares_all_in_exiobase, axis=1) + 10 ** (-31))
        gcf_exp_shares_all_in_exiobase[:, 0] = gcf_exp_shares_all_in_exiobase[:, 0] / tmp
        gcf_exp_shares_all_in_exiobase[:, 1] = gcf_exp_shares_all_in_exiobase[:, 1] / tmp

        # the total number of the employment is the sum of sbs and agg
        reg_emp_numbers = sbs_emp_numbers_all_in_exiobase + agg_emp_numbers_all_in_exiobase + 0.001
        # calculate the total  employment for each sector in whole country
        tot_emp = np.dot(reg_emp_numbers, np.ones((n_r, 1)))
        # calculate the employment shares in each region for each sector
        # what is the ratio between (sector S workers in region R) and (total employment of sector S)
        # it shows the share of that sector per region
        emp_shares = np.multiply(reg_emp_numbers, np.reciprocal(tot_emp + 10 ** (-31)))

        # find the rows and column indices of the country in the exiobase in python (as exiobase index starts from 1 subsract 1 from rof)
        ycolumns_of_rof = np.array(range(rof * n_y - (n_y - 1) - 1, rof * n_y))
        y_gcfcolumn_of_rof = rof * n_y - (n_y - 1) - 1 + (n_gcf - 1)
        y_exportcolumn_of_rof = rof * n_y - (n_y - 1) - 1 + (n_exports - 1)


        Y = self.Y_data

        # division of the final demand according to the income
        y_r1 = Y[:, ycolumns_of_rof] * np.transpose(np.reshape(np.array(reg_exp_shares[:, 0]), (n_y, 1)))
        y_r2 = Y[:, ycolumns_of_rof] * np.transpose(np.reshape(np.array(reg_exp_shares[:, 1]), (n_y, 1)))
        # division of the final demand (only the column for gcf) according to the gross capital formation
        y_r1[:, n_gcf - 1] = Y[:, y_gcfcolumn_of_rof] * np.repeat(gcf_exp_shares_all_in_exiobase[:, 0], n_c)
        y_r2[:, n_gcf - 1] = Y[:, y_gcfcolumn_of_rof] * np.repeat(gcf_exp_shares_all_in_exiobase[:, 1], n_c)
        # division of the final demand (only the column for export) according to the output shares (employment numbers)
        y_r1[:, n_exports - 1] = Y[:, y_exportcolumn_of_rof] * np.repeat(emp_shares[:, 0], n_c)
        y_r2[:, n_exports - 1] = Y[:, y_exportcolumn_of_rof] * np.repeat(emp_shares[:, 1], n_c)

        Y_updated=np.zeros((9800, 49))

        Y_updated[:, rof - 1]=np.sum(y_r2,axis=1)
        if sbs_emp_numbers_all.shape[0]==1: #if there is a single region
            Y_updated[:, rof - 1]=np.sum(y_r1+y_r2,axis=1) #just take the sum

        return Y_updated


    def scale_output_vectors(self):
        OFFSET = 1
        regions = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,'eurostatdata', "circumat_regions.xlsx"))

        # number of different parts in the final demand. THIS must be known
        n_y = 1
        # the sequence of the gross capital formation in Y THIS must be known (starting from 1)
        n_gcf = 1
        # the sequence of the exports  in Y THIS must be known  (starting from 1)
        n_exports = 1

        # number of countries in the original mrio
        n_c = self.__cntr_cnt # number of countries in the original mrio
        n_c = int(n_c)
        n_s = self.__prd_cnt  # number of sectors (or products in the original mrio)
        n_s = int(n_s)
        n_r = 2  # this is always two, we will divide country in the exiobase into two parts

        # find the region of interest =rof in the exiobase, i.e. the parent country of the region.
        # this is according to the exiobase numbering
        # here the exiobase starts from 1, parent id
        rof = self.country_calc_indices[0] + OFFSET
        # find the name of the country
        name_rof = (regions.iloc[int(np.where(regions.iloc[:, 2] == (rof + OFFSET))[0]), 0])

        # find the  id  of the nuts2; the code of it
        id_nuts2 = (regions.iloc[int(np.where(regions.iloc[:, 2] == self.global_id_nuts2)[0]), 1])
        # find the label of the country; the code of it. that is the frst two letter of above
        id_rof = id_nuts2[0:2]

        # according to the country code, read the income data
        reg_exp_shares_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year, 'eurostatdata/Income/2011_income_'+ '%s' % id_rof + '_' + '%s' % name_rof + '_B5N_MIO_EUR.csv'), header=None, sep='\t')

        # fill NAN values with a small number. *later it may be filled with the avarage value  of the existing values or manually corrected so that no NAN exists.
        reg_exp_shares_all = reg_exp_shares_all.fillna(0.0001)
        # turn reg_exp_shares_all of the country into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        reg_exp_shares = np.zeros((n_y, n_r))
        # first fınd the nuts 2
        internal_id_nuts2 = ((np.where(reg_exp_shares_all.iloc[:, 0] == id_nuts2)[0])[0])
        # write the nuts 2 income data into the second column, and scale it with the sum of all income in the country
        reg_exp_shares[:, 1] = reg_exp_shares_all.iloc[internal_id_nuts2, 1] / np.sum(reg_exp_shares_all.iloc[:, 1],
                                                                                      axis=0)
        # then fll in the rest of the nation details i.e. all sum minus the nuts2 in the column 1
        reg_exp_shares[:, 0] = (np.sum(reg_exp_shares_all.iloc[:, 1], axis=0) - reg_exp_shares_all.iloc[
            internal_id_nuts2, 1]) / np.sum(reg_exp_shares_all.iloc[:, 1], axis=0)

        # according to the country code, read the gross capital formation
        gcf_exp_shares_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year,
                     'eurostatdata/Capital_Formation_By_Sector/2011_nama_10r_2gfcf_' + '%s' % id_rof + '_' + '%s' % name_rof + '_MIO_EUR.csv'),   sep = '\t')

        # fill nan s with a small number *
        gcf_exp_shares_all = gcf_exp_shares_all.fillna(0.0001)
        # turn gcf_exp_shares_all of the country into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        gcf_exp_shares = np.zeros((gcf_exp_shares_all.shape[1] - 1, n_r))
        # first fınd the nuts 2

        internal_id_nuts2 = ((np.where(gcf_exp_shares_all.iloc[:, 0] == id_nuts2)[0])[0])
        # write the nuts 2 gcf data into the second column,
        gcf_exp_shares[:, 1] = gcf_exp_shares_all.iloc[internal_id_nuts2, 1:gcf_exp_shares_all.shape[1]]

        # then fll in the rest of the nation details i.e. all sum minus the nuts2


        gcf_exp_shares[:, 0] = np.sum(gcf_exp_shares_all.iloc[:, 1:gcf_exp_shares_all.shape[1]],
                                      axis=0) - gcf_exp_shares[:, 1]

        # according to the country code, read the aggriculture employnment data
        agg_emp_numbers_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year,
                     'eurostatdata/Agriculture_By_Sector/2011_agrraccts_' + '%s' % id_rof + '_' + '%s' % name_rof + '_PROD_BP.csv'),  sep = '\t')

        # fill nan s with a small number *
        agg_emp_numbers_all = agg_emp_numbers_all.fillna(0.0001)
        # turn agg employment numbers_all of the country into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        agg_emp_numbers = np.zeros((agg_emp_numbers_all.shape[1] - 1, n_r))
        # first fınd the nuts 2
        internal_id_nuts2 = ((np.where(agg_emp_numbers_all.iloc[:, 0] == id_nuts2)[0])[0])
        # write the nuts 2 agg data into the second column,
        agg_emp_numbers[:, 1] = agg_emp_numbers_all.iloc[internal_id_nuts2, 1:agg_emp_numbers_all.shape[1]]
        # then fll in the rest of the nation details i.e. all sum minus the nuts2
        agg_emp_numbers[:, 0] = np.sum(agg_emp_numbers_all.iloc[:, 1:agg_emp_numbers_all.shape[1]],
                                       axis=0) - agg_emp_numbers[:, 1]

        # according to the country code, read the sbs employnment data
        sbs_emp_numbers_all = pd.read_csv(os.path.join(settings.DATASET_DIR, self.year,
                     'eurostatdata/Employment_By_Sector/2011_SBS_' + '%s' % id_rof + '_' + '%s' % name_rof + '_V16110.csv'),sep = '\t')


        # fill nan s with a small number *
        sbs_emp_numbers_all = sbs_emp_numbers_all.fillna(0.0001)
        # turn it into another matrix the rest of the country  as region 1 and the selected nuts 2 as region 2
        sbs_emp_numbers = np.zeros((sbs_emp_numbers_all.shape[1] - 1, n_r))
        # first fınd the nuts 2
        internal_id_nuts2 = ((np.where(sbs_emp_numbers_all.iloc[:, 0] == id_nuts2)[0])[0])
        # first fill the nuts 2 region details
        sbs_emp_numbers[:, 1] = sbs_emp_numbers_all.iloc[internal_id_nuts2, 1:sbs_emp_numbers_all.shape[1]]
        # then fll in the rest of the nation details i.e. all sum minus the nuts2
        sbs_emp_numbers[:, 0] = np.sum(sbs_emp_numbers_all.iloc[:, 1:sbs_emp_numbers_all.shape[1]],
                                       axis=0) - sbs_emp_numbers[:, 1]

        # convert them to numpy arrays
        sbs_emp_numbers = np.array(sbs_emp_numbers)
        agg_emp_numbers = np.array(agg_emp_numbers)
        reg_exp_shares = np.array(reg_exp_shares)
        gcf_exp_shares = np.array(gcf_exp_shares)

        # conversıon of the sectors ın eurostat to exıobase starts..
        # for agriculture

        conversion_matrix = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,
                                 'eurostatdata/agg_MATCH.xlsx'), sheet_name='matrix', header=None)
        conversion_matrix = np.array(conversion_matrix)
        tmp = conversion_matrix.shape
        ncols = tmp[1]
        nrows = tmp[0]
        # this should be NONZERO unless that is a parent sector that is already existing. otherwise data can be lost!
        rowsum_conversion_matrix = np.sum(conversion_matrix, axis=1)
        # multipply  the conversion matrix  qith employment numbers and divide withthe row sum of the conversion matrix
        agg_emp_numbers_all_in_exiobase = (np.dot(np.transpose(agg_emp_numbers), conversion_matrix * np.reshape(
            np.repeat(1 / (rowsum_conversion_matrix + +10 ** (-31)), ncols), [nrows, ncols])))
        agg_emp_numbers_all_in_exiobase = np.transpose(agg_emp_numbers_all_in_exiobase)
        # for sbs
        conversion_matrix = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,
                                                       'eurostatdata/SBS_MATCH.xlsx'), sheet_name='matrix', header=None)
        conversion_matrix = np.array(conversion_matrix)
        tmp = conversion_matrix.shape
        nrows = tmp[0]
        ncols = tmp[1]
        # multipply with the conversion matrix and divide withthe crow sum of the conversion matrix
        rowsum_conversion_matrix = np.sum(conversion_matrix,
                                          axis=1)  # this should be NONZERO! BUT unless it is a parent sector!
        sbs_emp_numbers_all_in_exiobase = (np.dot(np.transpose(sbs_emp_numbers), conversion_matrix * np.reshape(
            np.repeat(1 / (rowsum_conversion_matrix + +10 ** (-31)), ncols), [nrows, ncols])))
        sbs_emp_numbers_all_in_exiobase = np.transpose(sbs_emp_numbers_all_in_exiobase)
        # for gcf

        conversion_matrix = pd.read_excel(os.path.join(settings.DATASET_DIR, self.year,
                                                       'eurostatdata/gfc_MATCH.xlsx'), sheet_name='matrix', header=None)

        conversion_matrix = np.array(conversion_matrix)
        tmp = conversion_matrix.shape
        nrows = tmp[0]
        ncols = tmp[1]
        # multipply with the conversion matrix and divide withthe crow sum of the conversion matrix
        rowsum_conversion_matrix = np.sum(conversion_matrix,
                                          axis=1)  # this should be NONZERO! BUT unless it is a parent sector!
        gcf_exp_shares_all_in_exiobase = (np.dot(np.transpose(gcf_exp_shares), conversion_matrix * np.reshape(
            np.repeat(1 / (rowsum_conversion_matrix + +10 ** (-31)), ncols), [nrows, ncols])))
        gcf_exp_shares_all_in_exiobase = np.transpose(gcf_exp_shares_all_in_exiobase)
        # scale the  gcf such that the row sum is 1
        tmp = (np.sum(gcf_exp_shares_all_in_exiobase, axis=1) + 10 ** (-31))
        gcf_exp_shares_all_in_exiobase[:, 0] = gcf_exp_shares_all_in_exiobase[:, 0] / tmp
        gcf_exp_shares_all_in_exiobase[:, 1] = gcf_exp_shares_all_in_exiobase[:, 1] / tmp

        # the total number of the employment is the sum of sbs and agg
        reg_emp_numbers = sbs_emp_numbers_all_in_exiobase + agg_emp_numbers_all_in_exiobase + 0.001
        # calculate the total  employment for each sector in whole country
        tot_emp = np.dot(reg_emp_numbers, np.ones((n_r, 1)))
        # calculate the employment shares in each region for each sector
        # what is the ratio between (sector S workers in region R) and (total employment of sector S)
        # it shows the share of that sector per region
        emp_shares = np.multiply(reg_emp_numbers, np.reciprocal(tot_emp + 10 ** (-31)))

        if sbs_emp_numbers_all.shape[0]==1:
            emp_shares=np.ones((200,2))
        return emp_shares
