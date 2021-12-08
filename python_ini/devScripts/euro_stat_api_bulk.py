"""
####
Date: 20th of March 2019
Author: Sidney Niccolson
Purpose: Fetch from eurostat data.
        Uses similar code as euro_stat_api.py however no url requests are made, but downloaded bulk data is used.
        Code is not optimized, particularly the retrieve_json functions aren't intelligently implemented
Usage:
    The file reads in a file that contains nuts2 mapping to exiobase countries. It uses bulk data CSV files to gather data in a structured fasion.
    It requires create_hierarchy_country.py to be executed first.
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
TIME_IDX = 7
# exclude switzerland (not present in dataset for income)
EXCLUDE_CH = True

NUTS2_MAP_FILE_LOC = '../input_data/nuts2_map.json' # map of nuts2 to countries

######## INCOME SETTINGS
INCOME_NA_ITEM = "B5N" # see dataset for NA_Item options nama_10r_2hhinc on the eurostat web explorer
INCOME_UNIT = "MIO_EUR"
INCOME_DIRECTION_OF_FLOW = "BAL"
INCOME_DATASET_NAME = "nama_10r_2hhinc"


####### PERSON EMPLOYED SETTINGS
SBS_DATASET_NAME = "sbs_r_nuts06_r2"
SBS_INDIC_SB = "V16110"
NACE_SBS_FILE = "../input_data/SBS_codes_new.csv"
NACE_LEVEL = 3 # level of depth to try to fetch info

####### AGRICULTURE SETTINGS
AGRI_DATASET_NAME = "agr_r_accts"
AGRI_UNIT = "MIO_EUR"
INDIC_AG = "PROD_BP"

NACE_AGRI_FILE = "../input_data/EEA_codes.csv"
AGRI_BULK = "../input_data/agr_r_accts.tsv"

###### GROSS FIXED CAPITAL FORMATION SETTINGS
CAP_DATASET_NAME = "nama_10r_2gfcf"
CAP_CURRENCY = "MIO_EUR"
NACE_CAP_FILE = "../input_data/CAPITAL_FORMATION_codes.csv"

OPTIONS = {1: "Income of households by NUTS 2 regions[nama_10r_2hhinc]["+TIME+"]["+""+INCOME_UNIT+\
           "]["""+INCOME_DIRECTION_OF_FLOW+"]["+INCOME_NA_ITEM+"]" , 2: "SBS data by NUTS 2 regions and NACE Rev. 2 "
                                                                    "(from 2008 onwards) [sbs_r_nuts06_r2]["+
                                                                       TIME+"]["+""+SBS_INDIC_SB+"]",
           3: "Agriculture data by NUTS 2 regions and NACE Rev. 2 " "(from 2008 onwards) [agr_r_accts]["+
            TIME+"]["+""+INDIC_AG+"]", 4: "Gross fixed capital formation by NUTS 2 regions and NACE Rev. 2" " [nama_10r_2gfcf]["+
            TIME+"]["+""+CAP_CURRENCY+"]"}


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


def generate_sbs_descriptors(ct_name, nuts2_map):
    nuts_cd_list = []
    if EXCLUDE_CH:
        if ct_name[:2] != "CH":
            nuts2_list = nuts2_map[ct_name]
            for nuts_cd in nuts2_list:
                    nuts_cd_list.append(nuts_cd)
            return nuts_cd_list
        else:
            return None


def retrieve_json_income(url):
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
def retrieve_json_sbs(sbs_code, nuts_code):
    print("not implemented")
    sys.exit()



def retrieve_json_agri(sbs_code, nuts_code, bulk_data):

    dataset_dict = {}

    for row in bulk_data:
        indicator,sbs_cd,unit,nuts_cd = row[0].split(",")
        year_data = row[TIME_IDX]
        # try to do a cleaning operation
        data = year_data.replace("e", "")
        data = data.replace(" ", "")
        # create unique keys and add the data into it
        dataset_dict[sbs_cd+"_"+nuts_cd+"_"+unit+"_"+indicator] = data


    # Try to find the data and convert to float
    try:

        value = dataset_dict[sbs_code+"_"+nuts_code+"_"+AGRI_UNIT+"_"+INDIC_AG]
        cleaned_data = float(value)
        return cleaned_data, str(200)
    except:
        # there is a match, but the data is not available
        return None, str(404)

    # if there is no match return failure status
    else:
        return None, str(404)





def retrieve_json_cap(sbs_code, nuts_code):
    print("not implemented")
    sys.exit()


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


def update_per_sbs_code(nace, filter_nace):
    nace_urls = []
    nace_codes = []
    for x in nace:
        code = x[0]
        if filter_nace:
            # only get codes at a lower level of detail omit codes longer than 4 characters
            if len(code) <= NACE_LEVEL:
                nace_codes.append(code)
        else:

            nace_codes.append(code)
    return nace_codes


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


def run_pipeline(ct_name, nace_file, indicator, filter_nace, ds_name, dt_type, bulk_dataset):
    nace_code_set = get_nace(nace_file)

    file_name = TIME + "_" + ds_name+ "_" + ct_name + "_" + indicator
    sbs_codes = get_sbs_codes(nace_code_set, filter_nace)
    sbs_export_header(sbs_codes, file_name)

    # instead of generating a single url containing each region we make urls for every region in a country.
    nuts_codes = generate_sbs_descriptors(ct_name, nuts2_map)


    if nuts_codes is not None:

        for idx, nuts_code in enumerate(nuts_codes):
            print("***Retrieving data from:" + ct_name + " relating to: " + nuts_codes[idx] + "***")

            sbs_codes = update_per_sbs_code(nace_code_set, filter_nace)

            # start timer
            collected_data = []
            collected_nuts_cds = []
            for idx2, sbs_code in enumerate(sbs_codes):
                if dt_type == "SBS":
                # this is in a fairly deep loop (over regions and each url is a specific nace code from the dataset
                    data, status = retrieve_json_sbs(sbs_code, nuts_code, bulk_dataset)
                elif dt_type == "AGRI":
                    data, status = retrieve_json_agri(sbs_code, nuts_code, bulk_dataset)
                elif dt_type == "CAP":
                    data, status = retrieve_json_cap(sbs_code, nuts_code, bulk_dataset)
                if data is None:
                    failed_output(status, sbs_code, dt_type)
                    data = float('nan')
                    collected_data.append(data)
                    collected_nuts_cds.append(nuts_code)
                else:
                    collected_data.append(data)
                    collected_nuts_cds.append(nuts_code)

            sbs_export_data(collected_data, collected_nuts_cds, file_name)


if __name__ == '__main__':
    nuts2_map = get_nuts2(NUTS2_MAP_FILE_LOC)
    print("\n Welcome to the API retriever for EuroStat, make sure you have in the output_data no error files. "
          "Otherwise remove them before continuing.'. \n")

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
    
    if selection_key == 1:
        print("not implemented...")
        sys.exit()

    if selection_key == 2:
        print("not implemented...")
        sys.exit()

    if selection_key == 3:
        bulk_dataset = get_nace(AGRI_BULK)
        for ct_name in nuts2_map:
                if ct_name == "DE_Germany" or ct_name == "UK_United Kingdom" or ct_name == "CZ_Czech Republic"\
                        or ct_name == "BE_Belgium" or ct_name == "PL_Poland" or ct_name == "LT_Lithuania" \
                        or ct_name == "DK_Denmark" or ct_name == "SI_Slovenia":

                    run_pipeline(ct_name, NACE_AGRI_FILE, INDIC_AG, False, AGRI_DATASET_NAME, "AGRI", bulk_dataset)

    if selection_key == 4:
        print("not implemented...")
        sys.exit()


