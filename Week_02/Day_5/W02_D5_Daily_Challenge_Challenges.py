# Challenge 1 : Sorting

#     Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
#     Use List Comprehension

# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

print("--------------------Exercise 1----------------------")

input_sequence = "without,hello,bag,world"

print(','.join(sorted(list(input_sequence.split(',')))))


# Challenge 2 : Longest Word

#     Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
#     Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

print("--------------------Exercise 2----------------------")

def longest_word(sentence):
    list_of_words = sentence.split(' ')
    print(sorted(list_of_words, key=len)[-1])


longest_word("Margaret's toy is a pretty doll.")
longest_word("A thing of beauty is a joy forever.")
longest_word("Forgetfulness is by all means powerless!")