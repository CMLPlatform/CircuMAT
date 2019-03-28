"""
####
Date: 25th of February 2019
Author: Sidney Niccolson
Purpose: Prepare a CSV for hierarchical tree structures related to NUTS2 for CircuMat
Usage:
    The file reads in two files, one is a NUTS file containing all nuts classifications
    ,the other file contains EXIOBASE classifications. Country codes are used to match countries with NUTS.
    Nuts2 are filtered by using character count (2-letter countrycode + 2 digit numbers for nuts2).
    Note1: United kingdom is originally with 2-letter code GB in DESIRE/EXIOBASE, this is modified in the EXIOBASE classification
    Note2: Greece is named GR but EL in NUTS2 this is also modified.
    Note3: Iceland (IS), Montenegro (ME), Macedonia (MK), Liechtenstein (LI) are not represented in EXIOBASE
    Note4: Turkey is excluded
####
"""

import csv
import os
import collections
import json

ORIGINAL_EXIO_FILE = '../input_data/final_countryTree_exiovisuals.csv'
NUTS_CLASSIFICATIONS = '../input_data/NUTS_2016L_20190228_185914.csv'
HEADER = ["name", "code", "global_id", "parent_id", "local_id", "level"]
FIRST_ROW = ["EU NUTS2", "ALL_EU_NUTS2", "1", "0", "1", "1"]
# SECOND_ROW = ["Rest of world", "REST_WORLD", "2", "0", "2", "1"]
# start the counter on 1, because of the one pre-determined row
OFFSET = 1
COUNTRIES_TO_EXCLUDE = ["TR"]
OUTPUTFILENAME = "circumat_regions"
# if false use a default counter, otherwise fix to 50 (extra column/row in EXIOBASE)
FIX_NUTS2_LOCAL_ID = True
# filter extra regions out
TAKE_OUT_ZZ = True


def getfile(myfile):
    # open the file
    # *** > give the path to the file.
    f = open(myfile, 'r')

    # get the content
    file = f.read()

    # split (make an array where each element is determined by an enter)
    splitted_file = file.split('\n')

    # Create empty list
    data = []

    # fill the empty list with the data (this time split even further by tabs)
    for line in splitted_file:

        data.append(line.split('\t'))
    # remove header and last line -> it is always structured the same and we reconstruct later in a modified manner
    data.pop(0)
    data.pop(-1)
    return data


def filter_nuts(origin, nuts):
    ct_nuts2_dict = collections.OrderedDict()
    nuts2_map = collections.defaultdict(list)
    # match nuts2 regions and countries from exiobase
    for row1 in origin:
        country_code = row1[1]
        country_name = row1[0]
        exiobase_id_plus_one = row1[4]
        for row2 in nuts:
            country_code_nuts = row2[0]
            actual_code_nuts = row2[1]
            nuts_name = row2[2]
            if country_code_nuts == country_code and country_code not in COUNTRIES_TO_EXCLUDE:
                # get only nuts2 regions (char length = 4)
                if len(actual_code_nuts) == 4:
                    if TAKE_OUT_ZZ:
                        if actual_code_nuts[2:4] != "ZZ":
                            # create a dictionary with key relating to the country name
                            # and the values are lists of nuts2 regions
                            ct_nuts2_dict.setdefault(country_name+"#"+country_code+"#"+exiobase_id_plus_one, [])\
                                .append(actual_code_nuts+"#"+nuts_name+"#"+country_code_nuts)
                            nuts2_map[country_code+"_"+country_name].append(actual_code_nuts)

    return ct_nuts2_dict, nuts2_map


def create_csv(dataset, nuts2_map):
    with open('../output_data/' + os.path.basename(OUTPUTFILENAME+".csv"), 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter='\t',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(HEADER)
        writer.writerow(FIRST_ROW)
        # writer.writerow(SECOND_ROW)
        nuts2_global_id = 0 + OFFSET
        ct_nuts2_final = []
        for key, value in dataset.items():
            nuts2_global_id += 1
            ct_name, ct_code, ct_local_id = key.split("#")
            writer.writerow([ct_name, ct_code, nuts2_global_id, "1", ct_local_id, "2"])

            for region in value:
                nuts2_parents_ids = nuts2_global_id

                ct_nuts2_final.append(region+"#"+str(nuts2_parents_ids))
        counter = nuts2_global_id
        nuts_local_id = 0
        for x in ct_nuts2_final:
            counter += 1
            nuts_local_id += 1
            nuts_code, nuts_name, __, parent_id = x.split("#")
            if FIX_NUTS2_LOCAL_ID:
                writer.writerow([nuts_name, nuts_code, counter, parent_id, 50, "3"])
            else:
                writer.writerow([nuts_name, nuts_code, counter, parent_id, nuts_local_id, "3"])
    # put this into input_data for reuse in euro_stat_api.py
    with open('../input_data/nuts2_map.json', 'w') as outfile:
        json.dump(nuts2_map, outfile)

    print("***NUTS2_map and " + os.path.basename(OUTPUTFILENAME+".csv") + "files generated***")


# Start execution here!
if __name__ == '__main__':
    origin = getfile(ORIGINAL_EXIO_FILE)
    nuts = getfile(NUTS_CLASSIFICATIONS)
    dataset, nuts_map = filter_nuts(origin, nuts)
    create_csv(dataset, nuts_map)
