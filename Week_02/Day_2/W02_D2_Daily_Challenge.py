# Challenge 1

#     Ask the user for a number and a length.
#     Create a program that prints a list of multiples of the number until the list length reaches length.

# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

number, length = map(int, input("Please enter number and length of list separated with space: ").split(' '))

print(f"Number - {number}, list of multiples with length of {length}: {[number * i for i in range (1, length + 1)]}")


# Challenge 2
#     Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"
# user's word : "wiiiinnnnd" ➞ "wind"
# user's word : "ttiiitllleeee" ➞ "title"
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

input_string = input("\nPlease enter a word: ")
char_list_without_duplicates = list(input_string)
index = 0

while index != len(char_list_without_duplicates) - 1:
    if char_list_without_duplicates[index] == char_list_without_duplicates[index + 1]:
        del char_list_without_duplicates[index + 1]
    else:
        index += 1

print("Word without duplicates:", ''.join(char_list_without_duplicates))
