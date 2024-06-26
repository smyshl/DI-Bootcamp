import json
from random import choices

import requests, psycopg2

from constants import DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD


def get_countries_json():
    r = requests.get('https://restcountries.com/v3.1/all')
    countries_json = r.json()
    return choices(countries_json, k=10)


def get_countries_info(countries_json):

    countries_info = [
        {"name": countrie['name']['official'],
         "capital": countrie['capital'][0],
         "subregion": countrie['subregion'],
         "flag": countrie['flag'],
         "population": countrie['population']
        }
        for countrie in countries_json
    ]

    return countries_info


def create_table():
    conn = connect_to_db()
    with conn.cursor() as cur:
        cur.execute("CREATE TABLE IF NOT EXISTS countries (id SERIAL PRIMARY KEY, name VARCHAR(60), capital VARCHAR(40),"
                   "flag VARCHAR(4), subregion VARCHAR(30), population INTEGER)")
    conn.commit()
    conn.close()


def connect_to_db():
    connection = psycopg2.connect(dbname=DATABASE_NAME, user=DATABASE_USER, password=DATABASE_PASSWORD)
    return connection


def insert_countries(countries_info):
    conn = connect_to_db()
    with conn.cursor() as cur:
        for countrie in countries_info:
            cur.execute("INSERT INTO countries (name, capital, flag, subregion, population)"
                        "VALUES (%s, %s, %s, %s, %s)", (countrie['name'], countrie['capital'], countrie['flag'],
                                                        countrie['subregion'], countrie['population']))
    conn.commit()
    conn.close()



def main():


    countries = get_countries_info(get_countries_json())
    create_table()
    insert_countries(countries)
    



if __name__ == "__main__":
    main()