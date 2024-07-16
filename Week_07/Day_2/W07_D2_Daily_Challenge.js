/*Instructions
    Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
    In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
    In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
    The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
    Allow the user to delete a specific gif by clicking the DELETE button.
    Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
*/

let url_template = 'https://api.giphy.com/v1/gifs/random?';
let query_obj = {
    "tag": "",
    "rating": "g",
    "api_key": "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
};
let render_target = document.getElementById("search_results");


function make_url(template, query_obj){
    query_keys = Object.keys(query_obj);
    for (item in query_keys){
        if (item == 0){
            template += query_keys[item] + '=' + query_obj[query_keys[item]];
        }else {
             template += '&' + query_keys[item] + '=' + query_obj[query_keys[item]];
        };
    };
    return template;
}


function delete_gif(e){
    e.target.parentElement.remove();
};


function render(gif_url){

    if (document.getElementById("delete_all_button") === null) {
        render_target.innerHTML = `<div><button id="delete_all_button">Delete all GIFs</button></div>\n`;
        document.getElementById("delete_all_button").addEventListener('click', () => {
            render_target.innerHTML = '';
            document.getElementById("my_form").reset()});
    };

    let _new_div = document.createElement('div');
    let _new_img = document.createElement('img');
    let _new_button = document.createElement('button');

    _new_img.setAttribute('src', gif_url);
    _new_img.style.height = '100px';
    _new_img.style.verticalAlign = 'middle';
    _new_button.textContent = "Delete";
    _new_button.style.verticalAlign = 'middle';

    render_target.appendChild(_new_div);
    render_target.lastChild.appendChild(_new_img);
    render_target.lastChild.appendChild(_new_button);

    render_target.lastChild.lastChild.addEventListener('click', delete_gif)
}


async function search_submit(e){
    e.preventDefault();
    query_obj.tag = e.target.search_input.value;
    let _url = make_url(url_template, query_obj);

    e.target.reset();

    try {
        let response = await fetch(_url);

        if (response.ok) {
            let _data = await response.json();
            let gif_url = _data.data.images.original.url

            render(gif_url);

        } else {
            throw new Error ("Response is NOT ok")
        };

    } catch (error) {
        console.log(error);
    }
};