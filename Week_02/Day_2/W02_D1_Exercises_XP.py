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


