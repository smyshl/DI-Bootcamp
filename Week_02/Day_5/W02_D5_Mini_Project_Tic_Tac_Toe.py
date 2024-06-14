# What you will create

# Create a TicTacToe game in python, where two users can play together.


#     The game is played on a grid that’s 3 squares by 3 squares.
#     Players take turns putting their marks (O or X) in empty squares.
#     The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
#     When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

# Hint

# To do this project, you basically need to create four functions:

#     display_board() – To display the Tic Tac Toe board (GUI).
#     player_input(player) – To get the position from the player.
#     check_win() – To check whether there is a winner or not.
#     play() – The main function, which calls all the functions created above.

# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.

# Tips : Consider the following:

#     What functionality will need to accur every turn to make this program work?
#     After contemplating the question above, think about splitting your code into smaller pieces (functions).
#     Remember to follow the single responsibility principle! each function should do one thing and do it well!

def print_board(list_of_turns=["0", "X", "0", "X", "0", "X", "0", "X", "0"]):
    '''Print a TIC TAC TOE board with turns given in the list_of_turns'''

    print()
    print("     -TIC-TAC-TOE-")
    print("     -------------")
    print(f"   3 | {' | '.join(list_of_turns[-3:])} |")
    print("     -------------")
    print(f"   2 | {' | '.join(list_of_turns[-6:-3])} |")
    print("     -------------")
    print(f"   1 | {' | '.join(list_of_turns[:-6])} |")
    print("     -------------")
    print("       a   b   c  \n")


def check_whos_turn(list_of_turns):
    '''Checks which player's turn'''
    '''Returns "X", "0" or "GAME OVER"'''

    if not ("X" or "0") in list_of_turns:
        return "X"
    elif list_of_turns.count(" ") == 0:
        return "GAME OVER"
    elif list_of_turns.count("X") > list_of_turns.count("0"):
        return "0"
    elif list_of_turns.count("X") <= list_of_turns.count("0"):
        return "X"


def input_turn(list_of_turns, whos_turn):
    '''Making input of turn, check if it is correct'''
    '''Returns updated list_of_turns'''

    col_index_dict = {"a": 0, "b": 1, "c": 2}
    row_index_dict = {"1": 0, "2": 1, "3": 2}

    column = input("Enter column (a, b, c): ")
    row = input("Enter row (1, 2, 3): ")

    new_turn_index = col_index_dict[column] + row_index_dict[row] * 3

    if list_of_turns[new_turn_index] == "X" or list_of_turns[new_turn_index] == "0":
        print("This move has already done, try another")
    else:
        list_of_turns[new_turn_index] = whos_turn


def check_win(list_of_turns):
    '''Checks the win'''
    '''Returns "X", "0" or "tie"'''

    for i in range(3):
        if list_of_turns[i * 3] == list_of_turns[i * 3 + 1] == list_of_turns[i * 3 + 2]:
            return list_of_turns[i * 3]
        if list_of_turns[i] == list_of_turns[i + 3] == list_of_turns[i + 6]:
            return list_of_turns[i]
        




def make_turns(list_of_turns=[" "]*9):

    # whos_turn = check_whos_turn(list_of_turns)

    while check_whos_turn(list_of_turns) != "GAME OVER":
        print(f"Player's {check_whos_turn(list_of_turns)} turn...")
        left_turns = list_of_turns.count(" ")  # for checking if the input was successfull
        # print("left_turns", left_turns)
        input_turn(list_of_turns, check_whos_turn(list_of_turns))
        # print("turns left after input", list_of_turns.count(" "))

        while left_turns == list_of_turns.count(" "): # checking if the input was successfull
            input_turn(list_of_turns, check_whos_turn(list_of_turns))

        print_board(list_of_turns)

    
    print(check_whos_turn(list_of_turns))



# list_of_turns = ["1", "2", "X", "4", "5", "X", "7", "8", "X"]
list_of_turns = [" "]*9


# print_board()
# input("Press Enter to start game")
print_board(list_of_turns)
make_turns(list_of_turns)
print(check_win(list_of_turns))






