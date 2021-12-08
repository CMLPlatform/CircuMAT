"""
####
Date: 25th of February 2019
Author: Sidney Niccolson
Purpose: Fetch from eurostat data
Usage:
    The file reads in a file that contains nuts2 mapping to exiobase countries
    It also reads other files containing codes per dataset.
    It requires create_hierarchy_country.py to be executed first.
    A know issue with the server is that it doesn't allow too much data to be gathered. Please refer to euro_stat_api_bulk.py for bulk data retrieval.
####
"""

import requests
import collections
import csv
import os
import json
import time
import sys
from urllib.parse import urlparse, parse_qs


TIME = "2011"
# exclude switzerland (not present in dataset for income)
EXCLUDE_CH = True

NUTS2_MAP_FILE_LOC = '../input_data/nuts2_map.json' # map of nuts2 to countries

######## INCOME SETTINGS
INCOME_NA_ITEM = "B5N" # see dataset for NA_Item options nama_10r_2hhinc on the eurostat web explorer
INCOME_UNIT = "MIO_EUR"
INCOME_DIRECTION_OF_FLOW = "BAL"
INCOME_DATASET_NAME = "nama_10r_2hhinc"
INCOME_PART_URL =  "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/"+INCOME_DATASET_NAME+"?na_item="+INCOME_NA_ITEM+\
                   "&precision=1&unit="+INCOME_UNIT+"&direct="+INCOME_DIRECTION_OF_FLOW+"&time="+TIME+""


####### PERSON EMPLOYED SETTINGS
SBS_DATASET_NAME = "sbs_r_nuts06_r2"
SBS_INDIC_SB = "V16110"
SBS_PART_URL = "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/"+SBS_DATASET_NAME+"?&precision=1&unit="+SBS_INDIC_SB+\
                "&time="+TIME
SBS_INDIC_POS = 2 # position of output values, in most cases its 0 except for the SBS person employed where it is 2
NACE_SBS_FILE = "../input_data/SBS_codes_new.csv"
NACE_LEVEL = 3 # level of depth to try to fetch info

####### POPULATION SETTINGS
POP_DATASET_NAME = "tgs00096"
POP_UNIT = "NR"
POP_PART_URL = "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/"+POP_DATASET_NAME+"?precision=1&unit="+POP_UNIT+\
                "&time="+TIME+"&age=TOTAL"+"&sex=T"


####### AGRICULTURE SETTINGS
AGRI_DATASET_NAME = "agr_r_accts"
AGRI_UNIT = "MIO_EUR"
INDIC_AG = "PROD_BP"
AGRI_PART_URL = "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/"+AGRI_DATASET_NAME+"?&precision=1&unit="+AGRI_UNIT+\
                "&time="+TIME+"&indic_ag="+INDIC_AG
NACE_AGRI_FILE = "../input_data/EEA_codes.csv"
AGRI_INDIC_POS = 0 # position of output values, in most cases its 0 except for the SBS person employed

###### GROSS FIXED CAPITAL FORMATION SETTINGS
CAP_DATASET_NAME = "nama_10r_2gfcf"
CAP_CURRENCY = "MIO_EUR"
CAP_PART_URL = "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/"+CAP_DATASET_NAME+"?&precision=1&currency="+CAP_CURRENCY+\
                "&time="+TIME
NACE_CAP_FILE = "../input_data/CAPITAL_FORMATION_codes.csv"
CAP_INDIC_POS = 0 # position of output values, in most cases its 0 except for the SBS person employed
# sample : nama_10r_2gfcf?precision=1&geo=AT&currency=MIO_EUR&nace_r2=C
OPTIONS = {1: "Income of households by NUTS 2 regions[nama_10r_2hhinc]["+TIME+"]["+""+INCOME_UNIT+\
           "]["""+INCOME_DIRECTION_OF_FLOW+"]["+INCOME_NA_ITEM+"]" , 2: "SBS data by NUTS 2 regions and NACE Rev. 2 "
                                                                    "(from 2008 onwards) [sbs_r_nuts06_r2]["+
                                                                       TIME+"]["+""+SBS_INDIC_SB+"]",
           3: "Agriculture data by NUTS 2 regions and NACE Rev. 2 " "(from 2008 onwards) [agr_r_accts]["+
            TIME+"]["+""+INDIC_AG+"]", 4: "Gross fixed capital formation by NUTS 2 regions and NACE Rev. 2" " [nama_10r_2gfcf]["+
            TIME+"]["+""+CAP_CURRENCY+"]", 5: "Population on 1 January by NUTS 2 region" + "[" + POP_DATASET_NAME +"]"
           +"["+TIME+"]"+"["+POP_UNIT +"]"}


def get_nace(file):
    # open the file
    f = open(file, 'r')
    # get the content
    F = f.read()
    # split (make an array where each element is determined by an enter)
    U = F.split('\n')
    # Create empty list
    data = []
    # fill the empty list with the data (this time split even further by tabs)
    for line in U:
        line = line.split('\t')
        data.append(line)
    # remove header and last line -> it is always structured the same and we reconstruct later in a modified manner
    data.pop(-1)

    return data


def get_nuts2(file):
    # get the nuts2 dictionary
    with open(file, 'r') as f:
        nuts2_mp = json.load(f)
        return nuts2_mp


def generate_url(ct_name, nuts2_map, first_part_url):
    if EXCLUDE_CH:
        if ct_name[:2] != "CH":
            nuts2_list = nuts2_map[ct_name]
            nuts2_list_as_url_part = []
            for nuts_code in nuts2_list:
                nuts2_list_as_url_part.append("&geo="+nuts_code)
            nuts2_as_url_part = ''.join(nuts2_list_as_url_part)
            gen_url = first_part_url + nuts2_as_url_part
            return gen_url
        else:
            return None


def generate_url_sbs(ct_name, nuts2_map, first_part_url):
    url_list = []
    nuts_cd_list = []
    if EXCLUDE_CH:
        if ct_name[:2] != "CH":
            nuts2_list = nuts2_map[ct_name]
            for nuts_cd in nuts2_list:
                short_url = first_part_url + "&geo="+nuts_cd
                url_list.append(short_url)
                nuts_cd_list.append(nuts_cd)
            return url_list, nuts_cd_list
        else:
            return None


def retrieve_json_income_or_population(url):
    response = requests.get(url)
    if response.status_code == 200:
        # this is a JSON API
        json_result = response.json()
        # get dataset index positions linked to labels
        dataset_idx_pos = json_result["dimension"]["geo"]["category"]["index"]
        # get the unit inside nested dict
        dataset_unit = json_result["dimension"]["unit"]["category"]["label"]
        dataset_unit = list(dataset_unit.values())[0]
        actual_data = json_result['value']
        return dataset_idx_pos, dataset_unit, actual_data, response.status_code
    else:
        # quick fix
        return None, None, None, str(response.status_code)


# this is an different API structure and more complex output that needs to be generated
# namely the structure of output is trivial (4 values are returned per specific region (ES11) and specific SBS (B)
# hence we send an url for each region and take the index 3 to get the person employed value
def retrieve_json_sbs(url):
    response = requests.get(url)

    if response.status_code == 200:

        # this is a JSON API
        json_result = response.json()
        # get dataset index positions linked to labels
        dataset_idx_pos = json_result["dimension"]["geo"]["category"]["index"]
        sector_or_product = json_result["dimension"]["nace_r2"]["category"]["label"]
        # instead of getting the unit inside nested dict, we hard code the unit we want due to the api
        dataset_unit = SBS_INDIC_SB
        actual_data = json_result['value']
        if str(SBS_INDIC_POS) in actual_data:
            # get the datapoint relating to the indicator person employed
            actual_data = actual_data[str(SBS_INDIC_POS)]
            return dataset_idx_pos, dataset_unit, actual_data, sector_or_product, response.status_code
        else:
            return None, None, None, None, str(response.status_code)
    else:
        return None, None, None, None, str(response.status_code)


def retrieve_json_agri(url):
    response = requests.get(url)

    if response.status_code == 200:
        # this is a JSON API
        json_result = response.json()
        # get dataset index positions linked to labels
        dataset_idx_pos = json_result["dimension"]["geo"]["category"]["index"]
        sector_or_product = json_result["dimension"]["indic_ag"]["category"]["label"]
        # instead of getting the unit inside nested dict, we hard code the unit we want due to the api
        dataset_unit = AGRI_INDIC_POS
        actual_data = json_result['value']

        if str(AGRI_INDIC_POS) in actual_data:
            # get the datapoint relating to the indicator person employed
            actual_data = actual_data[str(AGRI_INDIC_POS)]
            return dataset_idx_pos, dataset_unit, actual_data, sector_or_product, response.status_code
        else:
            return None, None, None, None, str(response.status_code)
    else:
        return None, None, None, None, str(response.status_code)


def retrieve_json_cap(url):
    response = requests.get(url)

    if response.status_code == 200:

        # this is a JSON API
        json_result = response.json()

        # get dataset index positions linked to labels
        dataset_idx_pos = json_result["dimension"]["geo"]["category"]["index"]
        sector_or_product = json_result["dimension"]["nace_r2"]["category"]["label"]
        # instead of getting the unit inside nested dict, we hard code the unit we want due to the api
        dataset_unit = CAP_INDIC_POS
        actual_data = json_result['value']
        if str(CAP_INDIC_POS) in actual_data:
            # get the datapoint relating to the indicator person employed
            actual_data = actual_data[str(CAP_INDIC_POS)]
            return dataset_idx_pos, dataset_unit, actual_data, sector_or_product, response.status_code
        else:
            return None, None, None, None, str(response.status_code)
    else:
        return None, None, None, None, str(response.status_code)


def get_sbs_codes(nace, filter_nace):
    nace_codes = []
    for x in nace:
        code = x[0]
        if filter_nace:

            # only get codes at a lower level of detail omit codes longer than 4 characters
            if len(code) <= NACE_LEVEL :
                nace_codes.append(code)
        else:
            nace_codes.append(code)
    return nace_codes


def update_per_sbs_code(url, nace, descriptor, filter_nace):
    nace_urls = []
    nace_codes = []
    for x in nace:
        code = x[0]

        if filter_nace:
            # only get codes at a lower level of detail omit codes longer than 4 characters
            if len(code) <= NACE_LEVEL:
                # for each of the code retrieve data so make the url for it
                full_url = url + descriptor + code
                nace_urls.append(full_url)
                nace_codes.append(code)
        else:
            full_url = url + descriptor + code
            nace_urls.append(full_url)
            nace_codes.append(code)
    return nace_urls, nace_codes


def failed_output(file_name, status, dt_type):
    with open('../output_data/error_'+dt_type, 'a') as file:
        file.write(str(status)+" error in country: "+ file_name+"\n")


def swap(idx_dict):
    # swap the keys with values such that we can match later on
    res = dict((v, k) for k, v in idx_dict.items())
    return res


def order(idx_dict, data):
    # order the dictionaries to match them by index
    idx_dict = collections.OrderedDict(sorted(idx_dict.items()))
    data = collections.OrderedDict(sorted(data.items()))
    return idx_dict, data


def export(idx, unit, data, file_name):
    with open('../output_data/' + os.path.basename(file_name+".csv"), 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter='\t',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
        # try to match the dict keys with each other before writing to file
        for (k, v), (k2, v2) in zip(idx.items(), data.items()):
            nuts_code = v
            value = v2
            writer.writerow([nuts_code,value,unit])


def sbs_export_header(codes, file_name):
    copy_codes = codes
    copy_codes.insert(0, ' ')
    # create header first
    with open('../output_data/' + os.path.basename(file_name+".csv"), 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter='\t',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(codes)


def sbs_export_data(data, nuts, file_name):
    if nuts and data:
        nuts = nuts[0]
        data.insert(0, nuts)

        # create header first
        with open('../output_data/' + os.path.basename(file_name+".csv"), 'a') as csvfile:
            writer = csv.writer(csvfile, delimiter='\t',
                                quotechar='|', quoting=csv.QUOTE_MINIMAL)
            writer.writerow(data)


def run_pipeline(ct_name, nace_file, part_url, indicator, descriptor, filter_nace, ds_name, dt_type):
    nace_code_set = get_nace(nace_file)

    file_name = TIME + "_" + ds_name+ "_" + ct_name + "_" + indicator
    sbs_codes = get_sbs_codes(nace_code_set, filter_nace)
    sbs_export_header(sbs_codes, file_name)

    # instead of generating a single url containing each region we make urls for every region in a country.
    url_incomplete, nuts_code = generate_url_sbs(ct_name, nuts2_map, part_url)


    if url_incomplete is not None:

        for idx, url in enumerate(url_incomplete):

            print("***Retrieving data from:" + ct_name + " relating to: " + nuts_code[idx] + "***")
            urls, sbs_codes = update_per_sbs_code(url, nace_code_set, descriptor, filter_nace)
            # start timer
            collected_data = []
            collected_nuts_cds = []
            for idx2, url2 in enumerate(urls):
                count = 0
                while count < 0:
                    count = count + 1
                    print("Sleeping...:", count)
                    time.sleep(1)
                print(url2)
                if dt_type == "SBS":
                # this is in a fairly deep loop (over regions and each url is a specific nace code from the dataset
                    ds_idx, ds_unit, data, sector_or_prd, status = retrieve_json_sbs(url2)
                elif dt_type == "AGRI":
                    ds_idx, ds_unit, data, sector_or_prd, status = retrieve_json_agri(url2)
                elif dt_type == "CAP":
                    ds_idx, ds_unit, data, sector_or_prd, status = retrieve_json_cap(url2)
                if ds_idx is None and ds_unit is None and data is None:
                    failed_output(status, url2, dt_type)
                    data = float('nan')
                    parsed_url = urlparse(url)
                    filter = parse_qs(parsed_url.query)
                    # get the original geo code
                    ds_idx = {filter["geo"][0]: 0}
                    collected_data.append(data)
                    collected_nuts_cds.append((next(iter(ds_idx))))

                else:
                    collected_data.append(data)
                    collected_nuts_cds.append((next(iter(ds_idx))))

            sbs_export_data(collected_data, collected_nuts_cds, file_name)


if __name__ == '__main__':
    nuts2_map = get_nuts2(NUTS2_MAP_FILE_LOC)
    print("\n Welcome to the API retriever for EuroStat, make sure you have in the output_data no error files. "
          "Otherwise remove them before continuing. \n The eurostat server sometimes doesn't allow requests due to high traffic, this can lead to 'connection reset by peer issues'. \n")

    number = input("Enter the number of the data you wish to retrieve data. \n"
                   + str(OPTIONS) + "\n")
    try:
        number = int(number)
        if number in OPTIONS:
            selection_value = OPTIONS[number]
            selection_key = number
            if EXCLUDE_CH:
                print("***Excluding switzerland (CH)***")
        else:
            print("Couldn't find selection.")
            sys.exit()
    except:
        print("Wrong input...aborting")
        sys.exit()
    
    # get income by households according to nuts2
    if selection_key == 1:
        for ct_name in nuts2_map:
            # sleep to let the API rest a bit
            count = 0
            while count < 5:
                count = count + 1
                print("Sleeping...:", count)
                time.sleep(1)
            file_name = TIME+"_income_"+ct_name+"_"+INCOME_NA_ITEM+"_"+INCOME_UNIT+"_"+INCOME_DIRECTION_OF_FLOW
            url = generate_url(ct_name, nuts2_map, INCOME_PART_URL)
            if url is not None:
                print("***Retrieving data from:"+ct_name +"***")
                ds_idx, ds_unit, data, status = retrieve_json_income_or_population(url)
                if ds_idx is None and ds_unit is None and data is None:
                    print("failed to retrieve country (see error.txt): ", ct_name)
                    failed_output(file_name, status, "income")
                else:
                    print("***Data retrieved of: " + ct_name + " ***")
                    ds_idx = swap(ds_idx)
                    ds_idx, ds_data = order(ds_idx, data)
                    export(ds_idx, ds_unit, ds_data, file_name)
                    print("***Data written to file: " + file_name + " as csv.***")

    if selection_key == 2:
        for ct_name in nuts2_map:
            run_pipeline(ct_name, NACE_SBS_FILE, SBS_PART_URL, SBS_INDIC_SB, "&nace_r2=", True, SBS_DATASET_NAME, "SBS")

    if selection_key == 3:
        for ct_name in nuts2_map:
            run_pipeline(ct_name, NACE_AGRI_FILE, AGRI_PART_URL, INDIC_AG, "&itm_newa=", False, AGRI_DATASET_NAME, "AGRI")

    if selection_key == 4:
        for ct_name in nuts2_map:
            run_pipeline(ct_name, NACE_CAP_FILE, CAP_PART_URL, CAP_CURRENCY, "&nace_r2=", False, CAP_DATASET_NAME, "CAP")
    if selection_key == 5:
        for ct_name in nuts2_map:
            # sleep to let the API rest a bit
            count = 0
            while count < 5:
                count = count + 1
                print("Sleeping...:", count)
                time.sleep(1)
            file_name = TIME + "_population_" + ct_name + "_" + POP_UNIT
            url = generate_url(ct_name, nuts2_map, POP_PART_URL)
            if url is not None:
                print("***Retrieving data from:" + ct_name + "***")
                ds_idx, ds_unit, data, status = retrieve_json_income_or_population(url)
                if ds_idx is None and ds_unit is None and data is None:
                    print("failed to retrieve country (see error.txt): ", ct_name)
                    failed_output(file_name, status, "population")
                else:
                    print("***Data retrieved of: " + ct_name + " ***")
                    ds_idx = swap(ds_idx)
                    ds_idx, ds_data = order(ds_idx, data)
                    export(ds_idx, ds_unit, ds_data, file_name)
                    print("***Data written to file: " + file_name + " as csv.***")

