import random, json

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


def get_random_sentence(words_list:list, length:int) -> str:
    
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
    print("This program reads the words from the file to a list, asks a user a number,")
    print("and then create and print a sentence using words from the list.")
    print("It uses as many words as the number entered by the user.")

    source_file = "sowpods.txt"
    words_list = get_words_from_file(source_file)
    sentence_length = input_sentence_length()
    sentence = get_random_sentence(words_list, sentence_length)
    print(sentence)


# Exercise 2: Working with JSON

# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""
#     Access the nested “salary” key from the JSON-string above.
#     Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
#     Save the dictionary as JSON to a file.

def add_birthday(json_string:str, birth_date:str):

    name_index = json_string.index("name")
    start_index = json_string[name_index:].index(",") + name_index + 1
    new_json_string = json_string[:start_index] + f' "birth_date":"{birth_date}", ' + json_string[start_index + 1:]

    return new_json_string


def json_file_write(json_string:str, file_name:str):

    json_dict = json.loads(json_string)  
    with open(file_name, mode="w") as json_file:
        json.dump(json_dict, json_file)


def exercise_2():
    print("--------------------Exercise 2----------------------")

    sampleJson = """{"company":{"employee":{"name":"emma", "payable":{"salary":7000, "bonus":800}}}}"""
    sample_json_dict = json.loads(sampleJson)
    print("salary:", sample_json_dict['company']['employee']['payable']['salary'])
 
    new_sampleJson = add_birthday(sampleJson, "2001.07.15")

    json_file = "sample_json.json"
    json_file_write(new_sampleJson, json_file)


def main():
    
    exercise_1()
    exercise_2()


if __name__ == "__main__":
    main()