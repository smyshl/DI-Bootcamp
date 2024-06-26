import json
from random import choices

import requests, psycopg2

from constants import DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD


def get_countries_json():
    r = requests.get('https://restcountries.com/v3.1/all')
    countries_json = r.json()
    return countries_json


def get_countries_info(countries_json):


    countries_info = [
        {"name": countrie['name']['official'],
         "capital": countrie['capital'][0],
         "subregion": countrie['subregion'],
         "flag": countrie['flag'],
         "population": countrie['population']
        }

    ]


    # print(choices(get_countries_json(), k=10)[0])
    countries_dict = get_countries_json()[99]
    # print(countries_dict['name']['common'])
    print(countries_dict['name']['official'])
    printc)




def connect_to_db():
    connection = psycopg2.connect(dbname=DATABASE_NAME, user=DATABASE_USER, password=DATABASE_PASSWORD)
    return connection





def main():

    get_countries_info(get_countries_json)


if __name__ == "__main__":
    main()