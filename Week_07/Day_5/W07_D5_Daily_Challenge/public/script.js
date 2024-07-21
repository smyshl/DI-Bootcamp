const _radios = document.getElementsByName("name");
const emoji_place = document.getElementById("emoji_place");
const score_place = document.getElementById("score");
const best_score_place = document.getElementById("best_score");
const _headers = {"Content-Type": "application/json"};
let score = 0;

async function get_emogi(){
    try {
        let random_emoji = await fetch('http://localhost:5000/api/emoji');
        let random_emoji_json = await random_emoji.json();
        render_emoji(random_emoji_json);
    } catch (error) {
        console.log(error);        
    }
}


function render_emoji(_emoji_json){
    emoji_place.textContent = _emoji_json.char;
    for (let i = 0; i < _radios.length; i++) {
        _radios[i].labels[0].textContent = _emoji_json.name[i];
        _radios[i].value = _emoji_json.name[i];
    };
}


function render_score(){
    score_place.textContent = score;
}


async function get_best_score(){
    try {
        let _best_score = await fetch('http://localhost:5000/api/score');
        let _best_score_json = await _best_score.json();
        render_best_score(_best_score_json.best_score);
    } catch (error) {
        console.log(error);        
    }
}


function render_best_score(_best_score){
    best_score_place.textContent = _best_score;
}


get_emogi();
render_score();
get_best_score();


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


async function check_answer(char, name){
    let _body = {char, name}

    try {
        let _response = await fetch('http://localhost:5000/api/emoji', {
            method: 'POST',
            headers: _headers,
            body: JSON.stringify(_body)     
        });
        let result = await _response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}


async function check_best_score(_score){
    let _body = {"score": _score}
    try {
        let _response = await fetch('http://localhost:5000/api/score', {
            method: 'PUT',
            headers: _headers,
            body: JSON.stringify(_body)     
        });
        let result = await _response.json();

        if (result.new_record){
            render_best_score(result.best_score);
        }
    } catch (error) {
        console.log(error);
    }
}


function submit_my_form(e){
    e.preventDefault();
    
    if (!form_is_checked()){
        alert("Please choose name");
        return;
    }

    let user_answer = get_user_answer();

    check_answer(emoji_place.textContent, user_answer)
    .then(_json => {
        if (_json.result){
            alert("Congrats! You won!");
            score += 1;
            render_score();
            check_best_score(score);
            e.target.reset();
        } else {
            alert(`You lose\nRight answer is: ${_json.right_answer}`)
            e.target.reset();
        }
    })
    .catch(error => console.log(error));

    get_emogi();

};


document.getElementById("my_form").addEventListener('submit', submit_my_form);