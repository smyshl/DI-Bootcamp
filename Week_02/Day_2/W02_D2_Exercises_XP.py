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

print("\nElements with even indexes (if indexes start from 0): ")

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

