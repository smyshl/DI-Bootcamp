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


def exercise_2():

# my_list = [2, 24, 12, 354, 233]
# for i in range(len(my_list) - 1): -- this loop sets the first element to compare. The last element would be one element before the end of list
#     minimum = i  -- i-element assumed as minimum
#     for j in range( i + 1, len(my_list)): -- this loop iterates in range between i-element end the end of the list
#         if(my_list[j] < my_list[minimum]): -- i-element compares with all remaining in the list (between i and the end)
#             minimum = j -- if there is another element less than i-element (assumed before as minimum)
#             if(minimum != i): -- and indexes of both elements not equal
#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i] -- they changes places
# print(my_list)  -- so on every i-step the smallest element from the part of list beetwen i and end-1 mooves to the left on i-place
#                 -- and in the end we'll get the list, sorted from smallest number to largest (ascending)

    my_list = [2, 24, 12, 354, 233]
    for i in range(len(my_list) - 1):
        minimum = i
        for j in range( i + 1, len(my_list)):
            if(my_list[j] < my_list[minimum]):
                minimum = j
                if(minimum != i):
                    my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
    print(my_list)


def main():

    exercise_1()
    exercise_2()


if __name__ == "__main__":
    main()