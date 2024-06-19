import random

# Exercise 1 – Random Sentence Generator

# Description: In this exercise we will create a random sentence generator.
# We will do this by asking the user how long the sentence should be and then printing the generated sentence.
# Hint : The generated sentences do not have to make sense.
#     Download this word list
#     Save it in your development directory.
#     Create a function called get_words_from_file. This function should read the file’s content
#           and return the words as a collection. What is the correct data type to store the words?
#     Create another function called get_random_sentence which takes a single parameter called length.
#           The length parameter will be used to determine how many words the sentence should have. The function should:
#         use the words list to get your random words.
#         the amount of words should be the value of the length parameter.
#     Take the random words and create a sentence (using a python method), the sentence should be lower case.
#     Create a function called main which will:
#         Print a message explaining what the program does.
#         Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20.
#             Validate your data and test your validation!
#             If the user inputs incorrect data, print an error message and end the program.
#             If the user inputs correct data, run your code.

def get_words_from_file(filename:str) -> list:

    with open(filename) as file:
        file_content = file.read()

    words_list = file_content.split("\n")
    
    return words_list

def get_random_sentence(words_list:list, length:int=10) -> str:
    
    sentence_list = random.choices(words_list, k=length)
    sentence = (" ".join(sentence_list) + ".").lower()
    sentence = sentence[0].upper() + sentence[1:]

    return sentence

def input_sentence_length() -> int:

    user_input = input("Please enter the length of a sentence (an integer number between 2 and 20): ")
    try:
        sentence_length = int(user_input)
    except:
        raise TypeError("Incorrect input. Program terminated")
    else:
        if not(2 <= sentence_length <= 20):
            raise ValueError("Incorrect input. Program terminated")

    return sentence_length



def exercise_1():
    print("--------------------Exercise 1----------------------")

    source_file = "sowpods.txt"
    words_list = get_words_from_file(source_file)
    sentence_length = input_sentence_length()
    sentence = get_random_sentence(words_list, sentence_length)
    print(sentence)


def main():
    
    exercise_1()
    # exercise_2()


if __name__ == "__main__":
    main()