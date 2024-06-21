from anagram_checker import AnagramChecker


def print_result(word: str, anagrams: list) -> None:
    print(f'\n{" " * 21} YOUR WORD: "{word.upper()}"')
    print(" " * 19 + "It's a valid English word")
    if anagrams:
        print(f'And there are these anagrams for your word: {", ".join(anagrams).upper()}.')
    else:
        print("And there is no anagrams for this word in English language")


def check_input(input_string: str) -> str:

    if input_string.isalpha() and len(input_string.split()) == 1:
        input_word = input_string.split()[0].lower()
        return input_word
    else:
        raise ValueError ("Only single word and only alphabetic symbols are allowed (no numbers, no special symbols please)")


def main():

    print("\n--------------------- Anagram Checker ---------------------")

    user_word = "start"

    while user_word != "q":
        input_string = input("\nPlease enter one English word or q to quit: ").strip()
        user_word = check_input(input_string)
        if user_word != "q":
            anagram_check = AnagramChecker(user_word)
            found_anagrams = anagram_check.get_anagrams()
            print_result(user_word, found_anagrams)
        else:
            print("BUY!")



if __name__ == "__main__":
    main()