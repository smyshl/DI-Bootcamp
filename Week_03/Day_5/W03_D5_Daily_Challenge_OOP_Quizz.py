from random import shuffle

# Instructions
# Part 1 : Quizz :
# Answer the following questions
                                        #  Answers:
#     What is a class? ---It's like template of some object, which which defines all its characteristics and behavior 
                          # but it' only template without particular values
#     What is an instance? --- it's an object, created from a template filled with specific values 
#     What is encapsulation? --- princip of combining data (attributes) and functions (methods) which manipulate that data
                                # in one place - inside class (as a template) and object (as a specific values ​​and data)
#     What is abstraction? ---- It's a the concept of hiding the details of the functioning of an object (class) and
#                               #providing access only to the necessary attributes and methods
#     What is inheritance? ----It's an ability of a class (child) to take an attributes and methods of another class (parent).
#     What is multiple inheritance? ----It's the same concept as inheritance but with more than one parent class
#     What is polymorphism? --- It's an ability of different classes to have methods with the same name but with different behaviour.
#     What is method resolution order or MRO? --- It's the method which defines the rules for the order of searching methods
#                                                    in case of multiple inheritance



# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
#     The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
#     The Deck class :
#         should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#         should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.


class Card:

    suit_list = ["Hearts", "Diamonds", "Clubs", "Spades"]
    value_list = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    def __init__(self, suit: str, value: str) -> None:
        self.suit = suit
        self.value = value
        self.check_suit_value()

    def check_suit_value(self) -> None:
        check_value_in_list(Card.suit_list, self.suit)
        check_value_in_list(Card.value_list, self.value)

    def __str__(self) -> tuple:
        return self.suit, self.value


class Deck:
    
    def __init__(self) -> None:
        self.cards = [(suit, value) for suit in Card.suit_list for value in Card.value_list]

    
    def shuffle(self) -> object:
        if len(self.cards) == 52:
            shuffle(self.cards)
        else:
            print("Can't shuffle the deck because it's incomplete")

    
    def deal(self) -> object | None:
        if len(self.cards) == 52:  # check if the deck is new. if it is shuffle it
            self.shuffle()
            return self.cards.pop()
        elif len(self.cards) > 0:
            return self.cards.pop()
        else:
            return "The deck is empty, complete the new one"
           

    
def check_value_in_list(list: list, value: str) -> None | ValueError:
    if value not in list:
        raise ValueError (f"{value} is not valid. Should be one of: {', '.join(list)}")



def main():
    
    deck_1 = Deck()

    for i in range(53):
        print(deck_1.deal())



if __name__ == "__main__":
    main()