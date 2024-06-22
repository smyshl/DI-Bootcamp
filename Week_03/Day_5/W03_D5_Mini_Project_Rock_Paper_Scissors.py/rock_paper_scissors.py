import game
from game import Game

# Part II - rock-paper-scissors.py
#     rock-paper-scissors.py : create 3 functions
#         get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
#         The possibles choices are : Play a new game or Show scores or Quit
#         print_results(results) – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.
#         Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.
#         main() - the main function. It should take care of 3 things:
#             Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)
#             When the user chooses to play a game:
#                 Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
#                 Remember the results of every game that is played.
#             When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.

def get_user_menu_choice(choices_list: list) -> str | None:
    print(f"\n{10 * ' '} PRC Game Menu:")
    for choice in choices_list:
        choice_letter = list(choice)[0]
        print(f"{10 * ' '} ({choice_letter}) {choice[choice_letter]}")
    user_input = input(f"{12 * ' '}:  ")
    
    if user_input in [list(choice)[0] for choice in choices_list]:
        return user_input
    else:
        return None


def get_choices() -> list:
    choices_list = [
        {"g": "Play the game"},
        {"x": "Show scores and exit"}
    ]
    return choices_list


def print_results(results: dict) -> None:
    print(f"{10 * ' '} Game results:")
    for result, amount in results.items():
        print(f"{11 * ' '} You {result} {amount} time(s)")



def main():
    game_results = {"won": 0, "lost": 0, "drew": 0}
    user_choice = get_user_menu_choice(get_choices()) 

    while user_choice == "g":
        result = game.play()
        game_results[result] += 1
        user_choice = get_user_menu_choice(get_choices())            

    if user_choice == "x":
        print_results(game_results)
    elif user_choice == None:
        print("If you want to play, next time enter 'g'")
    


if __name__ == "__main__":
    main()