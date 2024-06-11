# Instructions
# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

# import random

# list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
# target_number   = 3728


import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728
index = 1
list_of_pairs = []

list_of_numbers.sort()

if target_number in list_of_numbers:
    target_index = list_of_numbers.index(target_number)
    print(target_index, list_of_numbers[target_index])
else:
    while target_number - index not in list_of_numbers:
        index += 1
        if index > 100:
            print("Too many iterations")
            break
    closest_number = target_number - index
    target_index = list_of_numbers.index(closest_number)
    print(closest_number, target_index, [list_of_numbers[target_index + i] for i in range(1, 11)])

new_list_of_numbers = list_of_numbers[:target_index + 1]
print(new_list_of_numbers[:5], new_list_of_numbers[-5:])

while len(new_list_of_numbers) >=2:

    while new_list_of_numbers[-1] + new_list_of_numbers[0] < target_number:
    # print(new_list_of_numbers[0])
        del new_list_of_numbers[0]
    # break
    print(new_list_of_numbers[0], "+", new_list_of_numbers[-1], "=", new_list_of_numbers[-1] + new_list_of_numbers[0])

    list_of_pairs.append([new_list_of_numbers[-1], new_list_of_numbers[0]])
    del new_list_of_numbers[-1]
    del new_list_of_numbers[0]
    print(new_list_of_numbers[:5], new_list_of_numbers[-5:])


# print(list_of_numbers)
