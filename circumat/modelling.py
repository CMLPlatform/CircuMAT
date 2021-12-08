import numpy as np
from circumat import productindexmanger as pim
from circumat import querymanagement

 
class Modelling:
    """
    This class contains the methods for modeling
    """

    def __init__(self, ready_model_details, Y_data, load_A, year, model_details):
        self.Y_data = Y_data
        self.L = None
        self.A = None
        self.ready_model_details = ready_model_details
        self.load_A = load_A
        self.year = year
        self.model_details = model_details

    def apply_model(self):
        # copy Y to prevent any race conditions
        self.Y = self.Y_data.copy()
        # if we need to load A
        if True in self.load_A:
            self.A = querymanagement.get_numpy_objects(self.year, "A")
        # else just use L
        else:
            self.L = querymanagement.get_numpy_objects(self.year, "L")

        # loop over the different interventions, such that we can apply changes individually
        A_modified = False

        # unpack data structures
        products = self.unpack(self.ready_model_details.items(), 'product')
        consumed_by = self.unpack(self.ready_model_details.items(), 'consumedBy')
        consumed_reg = self.unpack(self.ready_model_details.items(), 'consumedReg')
        tech_changes = self.unpack(self.ready_model_details.items(), 'techChange')
        identifiers = self.unpack(self.ready_model_details.items(), 'identifiers')

        # loop over any of the unpacked datastructures as their length are the same
        for intervention_idx, value in enumerate(products):
            product = value

            product_idx = np.arange(0, 200)
            country_idx = np.arange(0, 49)

            # convert to numpy arrays explicitly
            calc_ready_product = querymanagement.convert_to_numpy(product)
            #calc_ready_origin_reg = querymanagement.convert_to_numpy(origin_reg[intervention_idx])
            # overwrite origin reg variable with the full country set for circumat
            calc_ready_origin_reg = np.arange(0,49)
            calc_ready_consumed_reg = querymanagement.convert_to_numpy(consumed_reg[intervention_idx])
            calc_ready_consumed_by = consumed_by[intervention_idx]
            tech_change = tech_changes[intervention_idx]

            # consuming_cat = [0, 1, 10, 76, 199] # mock up for testing
            if identifiers[intervention_idx] == "FINALCONSUMPTION":  # needs to be adapted to take ids
                # identify local coordinates
                ids = pim.ProductIndexManager(calc_ready_product,
                                              calc_ready_origin_reg,
                                              product_idx,
                                              country_idx
                                              )
                rows = ids.get_consumed_product_ids()
                columns = calc_ready_consumed_reg
                self.Y = self.model_final_demand(self.Y, rows, columns, tech_change, calc_ready_consumed_by[0])
            else:  # needs to be adapted to take ids
                ids = pim.ProductIndexManager(calc_ready_product,
                                              calc_ready_origin_reg,
                                              calc_ready_consumed_by,
                                              calc_ready_consumed_reg
                                              )

                rows = ids.get_consumed_product_ids()
                columns = ids.get_produced_product_ids()

                self.A = self.model_intermediates(self.A, rows, columns, tech_change)

                A_modified = True

        if A_modified is True:
            with np.errstate(divide="ignore", invalid="ignore"):
                self.L = np.linalg.inv(np.identity(len(self.A)) - self.A)
                self.L[self.L == np.inf] = 0
                self.L[self.L == np.nan] = 0
        # else load the original L
        else:
            self.L = self.L

        return self.Y, self.L

    # noinspection PyMethodMayBeStatic
    def model_final_demand(self, Y, rows, columns, tech_change,user_selection_for_final_demand_division):
        """
        It allows for modification of values within final demand
        for scenario building
        """
        n_y = 7  # this is the number of different parts in the ny
        if user_selection_for_final_demand_division==1:
            # if user selection for the final demand division is all, that is represented by 1
            new_set_of_columns = np.arange(n_y * columns, n_y * (columns + 1))
            Y[np.ix_(rows, new_set_of_columns)] = Y[np.ix_(rows, new_set_of_columns)] * (1 - -float(tech_change[0]) * 1e-2)
        else:
            # else if user selection for the final demand division is for instance household demand that is 0 and so on...
            #thus there is an offset of -2
            # return just a single column for that country for that division
            new_set_of_columns = np.arange(n_y * columns + user_selection_for_final_demand_division-2, n_y * (columns + 1), n_y)
            Y[np.ix_(rows, new_set_of_columns)] = Y[np.ix_(rows, new_set_of_columns)] * (1 - -float(tech_change[0]) * 1e-2)
        # and continue for the rest of division selections
        return Y

    # noinspection PyMethodMayBeStatic
    def model_intermediates(self, A, rows, columns, tech_change):
        """
        It allows for modification of values within intermediates
        for scenario building

        """
        # Work in progress
        A[np.ix_(rows, columns)] = A[np.ix_(rows, columns)] * (1 - -float(tech_change[0]) * 1e-2)

        return A

    # noinspection PyMethodMayBeStatic
    def unpack(self, structure, name):
        """
        Unpack deep structure of modelling details (these are arrays of local ids per intervention)

        """
        array_obj = [val for key, val in structure if key == name]
        # remove outer list
        [array_obj] = array_obj
        return array_obj
