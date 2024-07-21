const fs = require ('fs');

async function get_all_emojies(){
    let emojies = await fetch('https://unpkg.com/emoji.json/emoji.json');
    let emojies_json = await emojies.json();
    fs.writeFileSync('./emoji.json', JSON.stringify(emojies_json), 'utf-8');
    // console.log(emojies_json);
};


function read_emojies(){
    let emojies = fs.readFileSync('./emoji.json', 'utf-8');
    return JSON.parse(emojies);
};

const emojies = read_emojies();

function get_random_emoji(_emojies){
    let random_emoji_index = Math.floor(Math.random() * emojies.length);
    let random_emoji = _emojies[random_emoji_index];
    
    let random_emoji_group = _emojies.filter((item) => 
        item.group === random_emoji.group && item.char != random_emoji.char
    )

    console.log(random_emoji, random_emoji.group);
    console.log(random_emoji_group);


};

get_random_emoji(emojies);



module.exports = emojies;