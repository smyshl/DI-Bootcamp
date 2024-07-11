const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

const _form = document.getElementById("search_form");
const _search_input = document.getElementById("search_input");
const _search_results = document.getElementById("search_results")

function find_robots(_input_value) {
    let _found_robots = [];
    robots.forEach((robot) => {
        if (robot.name.toLowerCase().includes(_input_value)) {
            _found_robots.push(robot);
        };
    });
    return _found_robots;
};

function put_robots_on_page(_robots){
    _search_results.innerHTML = '';     // clear results of previous search
    _robots.forEach((robot) => {
        let _robo_card = document.createElement("div");
        _robo_card.setAttribute("class", "robo_card");

        _search_results.appendChild(_robo_card);
        _robo_card.innerHTML = `<img src=${robot.image}/>
                                <p class="name_text">${robot.name}</p>
                                <p class="email_text">${robot.email}</p>`

    })
}

put_robots_on_page(robots);

function show_robots(e) {
    e.preventDefault();

    let _input_value = _search_input.value.toLowerCase().trim();

    if (_input_value === '' && e.type === 'submit') {
        alert("Please enter the name of your Robo-Friend")
        return;
    };

    let _found_robots = find_robots(_input_value);
    put_robots_on_page(_found_robots);

};




_form.addEventListener("submit", show_robots);
_form.addEventListener("input", show_robots)