# Exercise 1 : What are you learning ?

#     Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
#     Call the function, and make sure the message displays correctly.

print("--------------------Exercise 1----------------------")

def display_message():
    print("This is the message from the display_message() function:\nIn this part of course we're learning Puthon programming language")

display_message()



#  Exercise 2: What’s your favorite book ?

#     Write a function called favorite_book() that accepts one parameter called title.
#     The function should print a message, such as "One of my favorite books is <title>".
#     For example: “One of my favorite books is Alice in Wonderland”
#     Call the function, make sure to include a book title as an argument when calling the function.

print("--------------------Exercise 2----------------------")

def favorite_book(book):
        print("One of my favorite books is", book)

favorite_book("Alice in Wonderland")



# Exercise 3 : Some Geography

#     Write a function called describe_city() that accepts the name of a city and its country as parameters.
#     The function should print a simple sentence, such as "<city> is in <country>".
#     For example “Reykjavik is in Iceland”
#     Give the country parameter a default value.
#     Call your function.

print("--------------------Exercise 3----------------------")

def describe_city(city, country="Israel"):
      print(city, "is in", country)

describe_city("Netanya")


# Exercise 4 : Random

#     Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
#     Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

print("--------------------Exercise 4----------------------")

import random

def randomize(number):
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Congrats, the numbers are equal")
    else:
        print(f"Given number {number} is not equal random number {random_number}")

randomize(53)


# Exercise 5 : Let’s create some personalized shirts !

#     Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
#     The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
#     Call the function make_shirt().

#     Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
#     Call the function, in order to make a large shirt with the default message
#     Make medium shirt with the default message
#     Make a shirt of any size with a different message.

#     Bonus: Call the function make_shirt() using keyword arguments.

print("--------------------Exercise 5----------------------")

def make_shirt(size="L", text="I love Python"):
     print(f"The size of the shirt is {size} and the text is '{text}'")

make_shirt(52, "weoiruworieuw")
make_shirt()
make_shirt("M")
make_shirt("XL", "I love Israel")
make_shirt(text="I like coding", size="S")


# Exercise 6 : Magicians …

# Using this list of magician’s names
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
#     Create a function called show_magicians(), which prints the name of each magician in the list.
#     Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
#     Call the function make_great().
#     Call the function show_magicians() to see that the list has actually been modified.

print("--------------------Exercise 6----------------------")

def show_magicians(list_of_magicians):
    magician_names = [mag.split(' ')[0] for mag in list_of_magicians]
    print("Names of magicians:", ', '.join(magician_names))

def make_great(list_of_magicians):
    for i in range(len(list_of_magicians)):
        list_of_magicians[i] = "the Great " + list_of_magicians[i]

    return list_of_magicians


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

show_magicians(magician_names)
print("Magicians was made great:", ', '.join(make_great(magician_names)))
show_magicians(magician_names)


# Exercise 7 : Temperature Advice
#     Create a function called get_random_temp().
#         This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#         Test your function to make sure it generates expected results.
#     Create a function called main().
#         Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#         Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
#     Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#         below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#         between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#         between 16 and 23
#         between 24 and 32
#         between 32 and 40
#     Change the get_random_temp() function:
#         Add a parameter to the function, named ‘season’.
#         Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
#         Now that we’ve changed get_random_temp(), let’s change the main() function:
#             Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#             Use the season as an argument when calling get_random_temp().
#     Bonus: Give the temperature as a floating-point number instead of an integer.
#     Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

print("--------------------Exercise 7----------------------")

# def get_random_temp(season="spring"):
#     if season == "winter":
#         temp = random.uniform(-10, 15)
#     elif season == "spring" or season == "autumn":
#         temp = random.uniform(16, 23)    
#     elif season == "summer":
#         temp = random.uniform(24, 40)            
#     return temp

# def main():
#     month = int(input("Please enter the number of the month (1 = January, 12 = December): "))

#     if month == 12 or month == 1 or month == 2:
#         season = "winter"
#     elif month == 3 or month == 4 or month == 5:
#         season = "spring"
#     elif month == 6 or month == 7 or month == 8:
#         season = "summer"
#     else:
#         season = "autumn"

#     temp = get_random_temp(season)
#     print(f"The temperature right now is {round(temp, 1)} degrees Celsius")
#     if temp < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     elif temp <= 16:
#         print("Quite chilly! Don't forget your coat")
#     elif temp <= 23:
#         print("The summer is coming or already has gone")
#     elif 24 <= temp <= 32:
#         print("Yeaah, it's summer!")
#     elif 32 < temp <= 40:
#         print("It's not a summer, it's hell!")

# main()


# Exercise 8 : Star Wars Quiz
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.
# Here is an array of dictionaries, containing those questions and answers
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
#     Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list og_answrs
#     Create a function that informs the user of his number of correct/incorrect answers.
#     Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
#     If he had more then 3 wrong answers, ask him to play again.

print("--------------------Exercise 7----------------------")


def inform_about_answers(asked_questions, wrong_answers):
    print(f"You gave {len(asked_questions) - len(wrong_answers)} correct answers and {len(wrong_answers)} incorrect answers")
    print("Here is your incorrect answer(s):")
    for answer in wrong_answers:
        print(f"Question: {answer['question']} Your answer: {answer['answer']}. Correct answer: {answer['correct_answer']}")


def ask_question(data):
    wrong_user_answers = []
    for i, question in enumerate(data):
        # print(question)
        print(f"The question {i + 1} of {len(data)}: {question['question']}")
        answer = input("Please enter your answer: ")
        if answer != question["answer"]:
            wrong_user_answers.append({"question": question["question"], "answer": answer, "correct_answer": question["answer"]})

    inform_about_answers(data, wrong_user_answers)

    return (wrong_user_answers)


data = [
    {   "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"},
    {   "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"},
    {   "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"},
    {   "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"},
    {   "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"},
    {   "question": "What species is Chewbacca?",
        "answer": "Wookiee"}
]

incorrect_answers_num = len(ask_question(data))

if incorrect_answers_num > 3:
    print("You've made more than 3 mistakes, do you whant play one more time?")
    play_again_choice = input("Play again? y/n ")
    first_step_flag = 1
    
    while play_again_choice == "y":     
        if first_step_flag == 1:
            incorrect_answers_num = len(ask_question(data))
            first_step_flag = 0
            continue
        else:
            incorrect_answers_num = len(ask_question(data))

        if incorrect_answers_num > 3:
            print("You've made more than 3 mistakes, do you whant play one more time?")
            play_again_choice = input("Play again? y/n ")


