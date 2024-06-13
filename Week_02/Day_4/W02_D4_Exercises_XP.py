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


def make_shirt(size=L, text="I love Python"):
     print(f"The size of the shirt is {size} and the text is '{text}'")

make_shirt(52, "fuck putin")