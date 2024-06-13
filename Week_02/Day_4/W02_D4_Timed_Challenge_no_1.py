# Count occurence

# Write a program which takes a string and a character as an input, and finds out the number of occurrences the character has in the string.

# String: Programming is cool!
# Character: o
# 3

# String: This is a great example
# Character: y
# 0

input_string = input("Please input string: ")
input_char = input("Please input character: ")

print("The number of occurrences the character has in the string: ", input_string.count(input_char))