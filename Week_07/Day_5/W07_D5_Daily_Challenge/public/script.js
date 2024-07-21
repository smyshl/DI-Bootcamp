const _radios = document.getElementsByName("name");

async function get_emogi(){
    try {
        let random_emoji = await fetch('http://localhost:5000/api/emoji');
        let random_emoji_json = await random_emoji.json();
        console.log(random_emoji_json);
        render_emoji(random_emoji_json);
    } catch (error) {
        console.log(error);        
    }
}


function render_emoji(_emoji_json){
    document.getElementById("emoji_place").textContent = _emoji_json.char;
    console.log((_radios));
    for (let i = 0; i < _radios.length; i++) {
        _radios[i].labels[0].textContent = _emoji_json.name[i];
        _radios[i].value = _emoji_json.name[i];
        console.log(i, _radios[i].labels[0].textContent, _radios[i].checked);
    };
}


get_emogi();


function form_is_checked(){
    let _is_checked = false;
    _radios.forEach((item) => _is_checked = _is_checked || item.checked);
    return _is_checked;
}


function get_user_answer(){
    for (let i = 0; i < _radios.length; i++) {
        if (_radios[i].checked === true) {
            return _radios[i].value;
        }
    }
};


async function check_answer(given_emoji_char, _answer){

}


function submit_my_form(e){
    e.preventDefault();
    
    if (!form_is_checked()){
        alert("Please choose name");
        return;
    }

    let user_answer = get_user_answer();

    console.log(user_answer);




};


document.getElementById("my_form").addEventListener('submit', submit_my_form);