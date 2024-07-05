/*
Instructions

In todays exercise we will be creating a Mad Libs game.
If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
In this exercise you work with the HTML code presented below.
Follow these steps :
    Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
    Make sure the values are not empty
    Write a story that uses each of the values.
    Make sure you check the console for errors when playing the game.
    Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Challenge: Mad Libs</title>
 </head>
 <body>

    <h1>Mad Libs</h1>

    <form id="libform">
        <label for="noun">Noun:</label><input type="text" id="noun"><br>
        <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
        <label for="person">Someone's Name:</label><input type="text" id="person"><br>
        <label for="verb">Verb:</label><input type="text" id="verb"><br>
        <label for="place">A place:</label><input type="text" id="place"><br>
        <button id="lib-button">Lib it!</button>
    </form>

    <p>Generated story: 
    <span id="story"></span>
    </p>

    <script src="..."></script>

 </body>
</html>
*/

let _form = document.getElementById("libform");
let _place_for_story = document.getElementById("story");
let _words_types = ["noun", "adjective", "person", "verb", "place"];
let _told_stories = [];
let _input_words = {};

function getFormValues(){
  let _values = {};
  for (word of _words_types){
    _values[word] = document.getElementById(word).value.trim();
  };
  return _values;
};

function _form_submit(e){
  e.preventDefault();
  values = getFormValues();

  for (_name in values){
    if (values[_name] === ''){
      alert("Please enter all words");
      return;
    };
  };

  _told_stories = [];
  story = _make_story(values);
  _place_story(story, e);

  _input_words = values;
};

_form.addEventListener("submit", _form_submit);

function _make_story(input){
  let _stories_templates = [
    `Once upon a time, in a very ${input.adjective} ${input.place}, there lived a ${input.adjective} ${input.noun} named ${input.person}. Every day, ${input.person} would ${input.verb} around the ${input.place} and make everyone laugh.`,
    `In the heart of ${input.place}, a ${input.adjective} ${input.noun} named ${input.person} loved to ${input.verb} every morning. The ${input.adjective} ${input.noun} always brought joy to ${input.place} and inspired others to ${input.verb} too.`,
    `Long ago in the ${input.adjective} kingdom of ${input.place}, there was a ${input.noun} who was known as ${input.person}. ${input.person} had a special talent for ${input.verb} and made the ${input.place} a ${input.adjective} input.place to live.`,
    `Every summer, ${input.person} travels to the ${input.adjective} ${input.place}. One day, while ${input.verb} near the ${input.noun}, they discovered something truly amazing.`,
    `In a ${input.adjective} ${input.place}, a ${input.noun} was feeling very bored. To make things interesting, ${input.person} decided to ${input.verb} and ended up having the best adventure ever.`
  ];

  let story_num = 0

  if (_told_stories.length < _stories_templates.length){

    story_num = Math.floor(Math.random() * (_stories_templates.length));

    while (_told_stories.includes(story_num)){
      story_num = Math.floor(Math.random() * (_stories_templates.length));
    };

    _told_stories.push(story_num);  
    return _stories_templates[story_num];

  }else {
    return "This is the end of this story"
  };
};

function _place_story(story, e){
  if (e.type === "submit"){
    _place_for_story.textContent = story;

    if (!document.getElementById('shuffle')){
        let _button = document.createElement("button");
        _button.textContent = "Shuffle";
        _button.setAttribute("id", "shuffle")
        _body = document.getElementsByTagName("body")[0];
        _body.appendChild(_button)
        document.getElementById('shuffle').addEventListener("click", _shuffle_story);
    };

    _form.reset()
    
  } else {
    _place_for_story.textContent = story;
  };
};

function _shuffle_story(e){
    story = _make_story(_input_words);
  _place_story(story, e);
};