# Exercise 1: Hello World
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world

print("Hello world\n" * 5)

# Exercise 2 : Some Math
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

print(99**3*8)


# Exercise 3 : What is the output ?
# Predict the output of the following code snippets:
# --------------------------------------> My predictions:
# >>> 5 < 3 ----------------------------> False
# >>> 3 == 3 ---------------------------> True
# >>> 3 == "3" -------------------------> False
# >>> "3" > 3 --------------------------> False
# >>> "Hello" == "hello" ---------------> False


# Exercise 4 : Your computer brand
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "Honor"
print(f"I have a {computer_brand} computer")


# Exercise 5 : Your information
#     Create a variable called name, and set it’s value to your name.
#     Create a variable called age, and set it’s value to your age.
#     Create a variable called shoe_size, and set it’s value to your shoe size.
#     Create a variable called info and set it’s value to an interesting sentence about yourself.
#                        The sentence must contain all the variables created in parts 1, 2 and 3.
#     Have your code print the info message.
#     Run your code

my_name = "Eugene"
my_age = 46
my_shoe_size = 43
info = f"\nMy name is {my_name}\nMy age is {my_age}\nMy shoe size is {my_shoe_size} and I need a new sneakers"
print(info)


# Exercise 6 : A & B
#     Create two variables, a and b.
#     Each variable value should be a number.
#     If a is bigger then b, have your code print Hello World.

a_number = 3
b_number = 7
if a_number > b_number:
    print("\nHello World\n")
else:
    print("\nGood buy World\n")


# Exercise 7 : Odd or Even
#     Write code that asks the user for a number and determines whether this number is odd or even.

input_number = int(input("Please enter integer number: "))
if input_number % 2 == 0:
    print(input_number, "- even number")
else:
    print(input_number, "- odd number")


# Exercise 8 : What’s your name ?
#     Write code that asks the user for their name and determines whether or not you have the same name, 
#        print out a funny message based on the outcome.

name_i_have = "Donald"
user_name = input("\nPlease enter your name: ")
if user_name.capitalize() == name_i_have:
    print(f"Hi, {user_name}, I've been waiting for you so long!\n")
else:
    print(f"Hi, {user_name}, nice to meet you!\nBut I'm waiting for {name_i_have}\n")


# Exercise 9 : Tall enough to ride a roller coaster
#     Write code that will ask the user for their height in centimeters.
#     If they are over 145cm print a message that states they are tall enough to ride.
#     If they are not tall enough print a message that says they need to grow some more to ride.

users_height = float(input("\nPlease enter your height in centimeters: "))
if users_height > 145:
    print("Congrats, you can ride!\n")
else:
    print(f"Sorry, your tall is not enough to ride\nCome again after you grow {round((145.1 - users_height), 1)} more centimeters\n")