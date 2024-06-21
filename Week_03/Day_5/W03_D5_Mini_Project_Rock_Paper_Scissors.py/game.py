from random import choice

# Part I - game.py
#     game.py – this file/module should contain a class called Game. It should have 4 methods:
#         get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.
#         get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function (read about it online).
#         get_game_result(self, user_item, computer_item) – Determine the result of the game.
#             Parameters:
#                 user_item – the user’s chosen item (rock/paper/scissors)
#                 computer_item – the computer’s chosen (random) item (rock/paper/scissors)
#                 Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.
#         play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
#             Get the user’s item (rock/paper/scissors) and remember it
#             Get a random item for the computer (rock/paper/scissors) and remember it
#             Determine the results of the game by comparing the user’s item and the computer’s item
#                 Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”
#                 Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

class Game:
    
    def __init__(self) -> None:
        self.choice_dict = {"r": "rock", "p": "paper", "s": "scissors"}


    def get_user_item(self) -> str:
        input_string = input("Enter your choice (r/p/s): ")
        user_item = self.choice_dict[input_string]
        return user_item

    
    def get_computer_item(self) -> str:
        computer_item = choice(list(self.choice_dict.values()))
        return computer_item


    def get_game_result(self, user_item: str, computer_item: str) -> str:
        win_combinations_list = [("rock", "scissors"), ("paper", "rock"), ("scissors", "paper")]
        if user_item == computer_item:
            return "draw"
        elif (user_item, computer_item) in win_combinations_list:
            return "win"
        else:
            return "loss"




def play():
    
    game = Game()
    user_item = game.get_user_item()
    computer_item = game.get_computer_item()
    print(user_item)
    print(computer_item)
    print("User:", game.get_game_result(user_item, computer_item))





def main():
    
    play()



if __name__ == "__main__":
    main()