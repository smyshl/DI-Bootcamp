import random

# Instructions
#     Using the input function, ask the user for a string. The string must be 10 characters long.
#         If it’s less than 10 characters, print a message which states “string not long enough”.
#         If it’s more than 10 characters, print a message which states “string too long”.
#         If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

input_string = input("\nPlease enter a string 10 characters long: ")
if len(input_string) < 10:
    print("string not long enough")
elif len(input_string) > 10:
    print("string too long")
else:
    print("perfect string")

# Then, print the first and last characters of the given text.

    print(f"The first character is: {input_string[0]}")
    print(f"The last character is: {input_string[-1]}")

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld
    
    output_string = ""

    for character in input_string:
        output_string += character
        print(output_string)

# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
# Hlrolelwod
    
    shuffled_string = ""
    shuffled_index_list = list(range(10))
    random.shuffle(shuffled_index_list)
    
    for index in shuffled_index_list:
        shuffled_string += input_string[index]
    
    print(shuffled_string)

# another solve

    shuffle_list = list(input_string)
    random.shuffle(shuffle_list)
    print(''.join(shuffle_list))

