import time

import requests


# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.


def main():

    web_pages = ['https://google.com', 
                 'https://www.gov.il',
                 'https://github.com']

    for page in web_pages:
        time_1 = time.time()
        r = requests.get(page)
        time_2 = time.time()
        print("page -", page, " - time -", round(time_2 - time_1, 3), "\bs, response status -", r.status_code)
    

if __name__ == "__main__":
    main()