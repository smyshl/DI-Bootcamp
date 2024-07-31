# Week 9 Day 2 Daily Challenge Voting App

Instructions : React Voting App

Your goal is to create a voting app as follows:

Steps

    In the App.js create an array of objects in the state. Each object contains the language and the number of votes per language.
    Use the below object as a starting point:

    const [languages, setLanguages] = useState([
                                                {name: "Php", votes: 0},
                                                {name: "Python", votes: 0},
                                                {name: "JavaSript", votes: 0},
                                                {name: "Java", votes: 0}
                                              ])

    Create a function that increases the state of the votes by one, when you click on a specific language button.
