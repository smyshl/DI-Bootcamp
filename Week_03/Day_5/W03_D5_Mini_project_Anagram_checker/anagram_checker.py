

def find_same_length_words(list_of_words: list, target_word: str) -> list:
    '''Takes list of words and the target word. Creates new list with words'''
    '''which length is equal to length of the target word'''
    new_list = [word for word in list_of_words if len(word) == len(target_word)]
    return new_list


def get_list_of_english_words() -> list:
    '''Reads all english words from file sowpods.txt, makes them lowercase'''
    '''makes a list of this words'''
    with open("sowpods.txt", mode="r") as file:
        list_of_english_words = file.read().lower().split("\n")
    return list_of_english_words


def is_anagram(word_1: str, word_2: str) -> bool:
    '''compare 2 words and return True if they contain the same letters'''
    '''(but not in the same order), and False if not'''
    if word_1 != word_2:
        if sorted(word_1) == sorted(word_2):
            return True
        else:
            return False
    else:
        return False


class AnagramChecker:
    def __init__(self, given_word: str) -> None:
        self.given_word = given_word.lower()
        self.list_of_english_words = get_list_of_english_words()

        
    def is_valid_word(self) -> bool:
        if self.given_word in self.list_of_english_words:
            return True
        else:
            return False

    def get_anagrams(self) -> list:
        if self.is_valid_word():
            same_length_words_list = find_same_length_words(self.list_of_english_words, self.given_word)
            list_of_anagrams = [word for word in same_length_words_list if is_anagram(word, self.given_word)]
            return(list_of_anagrams)
        else:
            raise ValueError (f'This word is not a valid English word - {self.given_word}')

    
def main():
    
    a1 = AnagramChecker("anagram")

    print(a1.is_valid_word())
    print("total words:", len(a1.list_of_english_words))
    print("same length words:", len(find_same_length_words(a1.list_of_english_words, a1.given_word)))

    print(a1.get_anagrams())



if __name__ == "__main__":
    main()