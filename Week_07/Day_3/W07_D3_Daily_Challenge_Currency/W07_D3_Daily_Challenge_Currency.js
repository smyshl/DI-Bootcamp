/*
Instructions
You will create a currencies converter:
In this application we’re going receive data from two asynchronous sources.
You will use :
    This documentation
    Create your own API key by signing up - you will be able to make more requests :)
Note
    The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.
    First, you need to fetch all the supported currencies, in order to add the currencies options (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.
    To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. Check out this page on Pair conversion requests from the ExchangeRate API documentation.
    Hint: You could also supply an optional AMOUNT variable in the query of the request.
    Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
    Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.
*/

let currencies_url = 'https://v6.exchangerate-api.com/v6/349cf1b6381ea6b5091d8832/codes';

let first_currency_selector = document.getElementById('first_currency');
let target_currency_selector = document.getElementById('target_currency');


function create_new_option(_arr){
    let _new_option = document.createElement('option')
    _new_option.value = _arr[0];
    _new_option.textContent = _arr[1];
    return _new_option;
}


function selectors_render(_currencies_array){
    _currencies_array.forEach(currency => {
        first_currency_selector.appendChild(create_new_option(currency));
        target_currency_selector.appendChild(create_new_option(currency));
});
}


function switch_currencies(e){
    e.preventDefault();
    [first_currency_selector.value, target_currency_selector.value] = [target_currency_selector.value, first_currency_selector.value]
}


async function get_data_from_api(_url, currencies = true){

    try {       // trying to fetch character data from API
        let response = await fetch (_url);
        // console.log(response);
        if (response.ok) {
            let data = await response.json();

            if (currencies) {
                selectors_render(data.supported_codes);
            } else {


            }



        } else {

            throw new Error ("Response character data NOT ok")
        }
    } catch (error) {
        console.log(error);
    };
};

get_data_from_api(currencies_url);