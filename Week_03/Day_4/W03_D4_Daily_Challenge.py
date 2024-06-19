from collections import Counter
import re

# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code
#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
#     Implement a classmethod that returns a Text instance but with a text file:
#         >>> Text.from_file('the_stranger.txt')
#     Hint: You need to open and read the text from the text file.
#     Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
#     Create a class called TextModification that inherits from Text.
#     Implement the following methods:
#         a method that returns the text without any punctuation.
#         a method that returns the text without any english stop-words (check out what this is !!).
#         a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

class Text:

    text_string = "A good book would sometimes cost as much as a good house. A good book would sometimes cost as much as a good house."

    @classmethod
    def word_frequency(cls, text_string:str, word:str) -> int | None:
        word_freq_1 = text_string.lower().count(word)
        word_freq_2 = Counter(text_string.lower().split(" "))

        if word_freq_1 > 0:
            return word_freq_1


    @classmethod
    def most_common_word(cls, text_string:str) -> str:
        words = re.findall(r'\w+', text_string.lower())
        most_common_word = Counter(words).most_common(1)
        
        return most_common_word[0][0]


    @classmethod
    def unique_words(cls, text_string:str) -> list:
        
        words = re.findall(r'\w+', text_string.lower())
        words_count = Counter(words)

        unique_words = [key for key, value in words_count.items() if value == 1]

        return unique_words


    @classmethod
    def from_file(cls, file_name:str):
        with open(file_name) as f:
            Text.text_string = f.read()

        # print(Text.text_string)
        return Text



def main():
    
    word = "book"
    print(f"Frequency of a word '{word}' in the text:", Text.word_frequency(Text.text_string, word))
    print("The most common word in the text is:", Text.most_common_word(Text.text_string))
    print(f"Unique words in the text:", Text.unique_words(Text.text_string))

    file_name = "the_stranger.txt"
    Text.from_file(file_name)
    print(f"Frequency of a word '{word}' in the text:", Text.word_frequency(Text.text_string, word))
    print("The most common word in the text is:", Text.most_common_word(Text.text_string))
    print(f"Unique words in the text:", Text.unique_words(Text.text_string))



if __name__ == "__main__":
    main()