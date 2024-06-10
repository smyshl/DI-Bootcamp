# Exercise 1 : Favorite Numbers
#     Create a set called my_fav_numbers with all your favorites numbers.
#     Add two new numbers to the set.
#     Remove the last number.
#     Create a set called friend_fav_numbers with your friend’s favorites numbers.
#     Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {3, 7, 15}
my_fav_numbers.update({6, 8})
my_fav_numbers.remove(8)

friend_fav_numbers = {3, 18, 4, 25}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)


# Exercise 2: Tuple
#     Given a tuple which value is integers, is it possible to add more integers to the tuple?

print("It's imposible because tuples are immutable type of data")


# Exercise 3: List
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

#     Remove “Banana” from the list.
#     Remove “Blueberries” from the list.
#     Add “Kiwi” to the end of the list.
#     Add “Apples” to the beginning of the list.
#     Count how many apples are in the basket.
#     Empty the basket.
#     Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print("There is", basket.count("Apples"), "Apples in the basket")
basket.clear()
print("Items in basket: ", basket)


# Exercise 4: Floats

#     Recap – What is a float? What is the difference between an integer and a float?
#     Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#     Can you think of another way to generate a sequence of floats?

list_of_floats = []
float_item = 1.5

while float_item <= 5:
    list_of_floats.append(float_item)
    float_item += 0.5
    if int(float_item) == float_item:
        float_item = int(float_item)

print(list_of_floats)


# Exercise 5: For Loop

#     Use a for loop to print all numbers from 1 to 20, inclusive.
#     Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1, 20+1):
    print(i, ' ', end='')

print("\nElements with even indexes: ", end='')

for i in range(1, 20+1):
    if i % 2 == 0:
        print(i, ' ', end='')

# If indexes start from 0, then:

print("\nElements with even indexes (if indexes start from 0): ", end='')

for i in range(1, 20+1):
    if (i - 1) % 2 == 0:
        print(i, ' ', end='')

print()

# Exercise 6 : While Loop

#     Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = "Eugene"
input_name = ""
loops_counter = 0

while my_name != input_name.capitalize():
    input_name = input("Please enter my name: ")
    loops_counter +=1
    if input_name.capitalize() == my_name:
        print("Congrats, my name is", input_name.capitalize())
    else:
        print("No, my name is not", input_name.capitalize(), '\b, try again')
    if loops_counter > 10:
        print("Too much attempts")
        break


# Exercise 7: Favorite fruits

#     Ask the user to input their favorite fruit(s) (one or several fruits).
#     Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#     Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#     Now that we have a list of fruits, ask the user to input a name of any fruit.
#         If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#         If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


list_of_fav_fruits = list(input("Please input your favorite fruit(s) separated with a space: ").split(" "))
another_fruit = input("Please input a name of any fruit: ")

if another_fruit in list_of_fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who ordered a pizza ?

#     Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#     As they enter each topping, print a message saying you’ll add that topping to their pizza.
#     Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).


toppings_list = []
input_topping = ""
loops_counter = 0

while input_topping.upper() != "QUIT":
    input_topping = input(f"Please enter a name of topping or 'quit' for exit ({10 - loops_counter} left): ")
    
    if input_topping.upper() != "QUIT":
        toppings_list.append(input_topping)
        loops_counter += 1
    else:
        print("Toppings for your pizza: ", end='')
        print(*toppings_list, sep=", ")
        print("Total price: ", 10 + 2.5 * len(toppings_list))

    if loops_counter > 10:
        print("Too much toppings, not more than 10")
        break


# Exercise 9: Cinemax

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Ask a family the age of each person who wants a ticket.

#     Store the total cost of all the family’s tickets and print it out.

#     A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#     Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#     At the end, print the final list.

# Family tickets

ages_list = list(input("Please input the age of each person who wants a ticket separated by space: ").split(','))
total_price = 0
for age in ages_list:
    if int(age) >= 12:
        total_price += 15
    elif 3 <= int(age) < 12:
        total_price += 10

print("The total price for your tickets is: ", total_price, "$")

# Teenagers control

names_list = list(input("Please input the names of each person who wants to watch a movie separated with space: ").split(' '))
names_who_may_watch = []

for name in names_list:
    age = int(input(f"{name}, please enter your age: "))
    if age < 16 or age > 21:
        print(f"Sorry {name}, you are too young/old to watch this movie")
    else:
        print(f"Congrats {name}, you may watch this movie")
        names_who_may_watch.append(name)

print("Who whanted to watch a movie: ", end='')
print(*names_list, sep=", ")
print("Who allowed to watch a movie: ", end='')
print(*names_who_may_watch, sep=", ")


# Exercise 10 : Sandwich Orders
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#     The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
#     We need to prepare the orders of the clients:
#         Create an empty list called finished_sandwiches.
#         One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#     After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

while sandwich_orders:
    finished_sandwiches.append(sandwich_orders[0])
    del sandwich_orders[0]

for sandwich in finished_sandwiches:
    print("I made your", sandwich.lower())