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

print("Length of the given list:", len(list_of_numbers))

# Forming a new list of numbers which contains only numbers <= target_number
# Sorting in ascending order
# Deleting duplicate numbers

list_of_numbers = list(set(list_of_numbers))
list_of_numbers.sort()

print("Length of the list after deleting duplicate numbers:", len(list_of_numbers))

if target_number in list_of_numbers:
    target_index = list_of_numbers.index(target_number)
else:
    while target_number - index not in list_of_numbers:
        index += 1
        if index > 100:
            print("Too many iterations")
            break
    closest_number = target_number - index
    target_index = list_of_numbers.index(closest_number)

new_list_of_numbers = list_of_numbers[:target_index + 1]
print(f"Length of the list after deleting numbers > {target_number} (target_number):", len(new_list_of_numbers))

while len(new_list_of_numbers) >= 2:
    if new_list_of_numbers[-1] + new_list_of_numbers[0] == target_number:
        # if sum of first and last element equal target_number
        # add this pair to the list_of_pairs
        # delete first and last element from new_list_of_numbers
        list_of_pairs.append([new_list_of_numbers[0], new_list_of_numbers[-1]])
        del new_list_of_numbers[0]
        del new_list_of_numbers[-1]
    elif new_list_of_numbers[-1] + new_list_of_numbers[0] > target_number:
        # if this condition is True, it means that the bigger number should be deleted
        del new_list_of_numbers[-1]
    else:
        # if this condition is True (new_list_of_numbers[-1] + number < target_number),
        # it means that the smaller number should be deleted
        # stop looping
        del new_list_of_numbers[0]

print("Pairs of numbers found:", len(list_of_pairs))
