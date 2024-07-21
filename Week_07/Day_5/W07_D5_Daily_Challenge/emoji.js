const fs = require ('fs');
const lodash = require ('lodash');

const emojies_categories = [
    "Smileys & Emotion".toLowerCase(),
    "Animals & Nature".toLowerCase(),
    "Food & Drink".toLowerCase(),
    "Travel & Places".toLowerCase(),
    "Activities".toLowerCase()
];

async function get_all_emojies(){
    let emojies = await fetch('https://unpkg.com/emoji.json/emoji.json');
    let emojies_json = await emojies.json();
    let filtered_emojies = emojies_json.filter((item) => emojies_categories.includes(item.group.toLowerCase()))
    console.log(filtered_emojies.length, "emmojies recorded");
    fs.writeFileSync('./emoji.json', JSON.stringify(filtered_emojies), 'utf-8');
};

// get_all_emojies();


function read_emojies(){
    let emojies = fs.readFileSync('./emoji.json', 'utf-8');
    return JSON.parse(emojies);
};

const emojies = read_emojies();

function get_random_emoji(_emojies){
    let random_emoji_index = Math.floor(Math.random() * emojies.length);
    let random_emoji = _emojies[random_emoji_index];
    let emoji_with_answers = {"char": random_emoji.char, "group": random_emoji.group, "name": [random_emoji.name]};

    // I wanted to get 3 incorrect names, two from same group and one from different
    // there is some hard coding, but I couldn't think of anything better
    
    let filtered_emojies = lodash.shuffle(emojies.filter((item) => item.group === random_emoji.group && item.char != random_emoji.char));
    emoji_with_answers.name.push(filtered_emojies[0].name);
    emoji_with_answers.name.push(filtered_emojies[1].name);
    
    filtered_emojies = lodash.shuffle(emojies.filter((item) => item.group != random_emoji.group));
    emoji_with_answers.name.push(filtered_emojies[0].name);

    emoji_with_answers.name = lodash.shuffle(emoji_with_answers.name);

    return emoji_with_answers;
};

// get_random_emoji(emojies);


function check_emoji(_emoji_char, _answer){
    let target_emoji = emojies.find((item) => item.char === _emoji_char);
    if (target_emoji.name.toLowerCase() === _answer.toLowerCase()){
        return [true, target_emoji.name];
    } else {
        return [false, target_emoji.name];
    }
};


module.exports = {
    emojies,
    get_random_emoji,
    check_emoji
};