# Exercise 1 : Hello World-I love Python
# 
#     Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print("\033[32mHello \033[35mworld\n" * 5, "\033[32m\bI \033[35mlove Python\n" * 5)
print("\033[37m")


# Exercise 2 : What is the Season ?

#     Ask the user to input a month (1 to 12).
#     Display the season of the month received :
#         Spring runs from March (3) to May (5)
#         Summer runs from June (6) to August (8)
#         Autumn runs from September (9) to November (11)
#         Winter runs from December (12) to February (2)

month_number = int(input("Please enter integer number of the month from 1 to 12: "))

if month_number > 2 and month_number != 12:
    if month_number > 5:
        if month_number > 8:
            print(f"The season of month with number {month_number} is Autumn")
        else:
            print(f"The season of month with number {month_number} is Summer")
    else:
        print(f"The season of month with number {month_number} is Spring")
else:
    print(f"The season of month with number {month_number} is Winter")
