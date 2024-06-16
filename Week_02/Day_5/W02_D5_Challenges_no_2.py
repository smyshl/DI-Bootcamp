# Exercise 1

#     Draw the following pattern using for loops:

#   *
#  ***
# *****


#     Draw the following pattern using for loops:

#     *
#    **
#   ***
#  ****
# *****


#     Draw the following pattern using for loops:

# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *


# Exercise 2

#     Analyse this code before executing it. Write some commnts next to each line. Write the value of each variable and their changes, and add the final output. Try to understand the purpose of this program.

# my_list = [2, 24, 12, 354, 233]
# for i in range(len(my_list) - 1):
#     minimum = i
#     for j in range( i + 1, len(my_list)):
#         if(my_list[j] < my_list[minimum]):
#             minimum = j
#             if(minimum != i):
#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
# print(my_list)

def first_pattern(string_len):
  
    for step in range(string_len):

        right_side_string = "*" * step
        left_side_string = " " * (string_len - step - 1) + "*" * (step + 1)
        print(left_side_string + right_side_string)
    
    print()


def second_pattern(string_len):
     
    for step in range(string_len):
        string = " " * (string_len - step - 1) + "*" * (step + 1)
        print(string)
    
    print()


def third_pattern(string_len):
     
    for step in range(string_len):
        string = "*" * (step + 1)
        print(string)


    for step in range(string_len):
        string = " " * (step) + "*" * (string_len - step)
        print(string)

    print()

def exercise_1():

    first_pattern(3)
    second_pattern(5)
    third_pattern(5)




    





def main():

    exercise_1()


if __name__ == "__main__":
    main()