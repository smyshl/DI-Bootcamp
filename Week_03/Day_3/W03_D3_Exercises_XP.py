import string
import random
from datetime import date, datetime
from faker import Faker

# Exercise 1: Currencies

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#     #Your code starts HERE
#     Using the code above, implement the relevant methods and dunder methods which will output the results below.
#     Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)
# >>> str(c1)
# '5 dollars'
# >>> int(c1)
# 5
# >>> repr(c1)
# '5 dollars'
# >>> c1 + 5
# 10
# >>> c1 + c2
# 15
# >>> c1 
# 5 dollars
# >>> c1 += 5
# >>> c1
# 10 dollars
# >>> c1 += c2
# >>> c1
# 20 dollars
# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return int(self.amount)
    
    def __repr__(self):
        return f"{self.amount} {self.currency}"
    
    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                # raise TypeError (f"Cannot add between Currency type '{self.currency}' and '{other.currency}'")
                #  -- comment because after raising this error program stops
                print(f"TypeError: Cannot add between Currency type '{self.currency}' and '{other.currency}'")
        
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount = self.amount + other
            return self
        if isinstance(other, Currency):
            self.amount = self.amount + other.amount
            return self


def exercise_1():
    print("--------------------Exercise 1----------------------")

    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)

    print(str(c1))
    print(int(c1))
    print(repr(c1))
    print(c1 + 5)
    print(c1 + c2)
    print(c1)
    c1 += 5
    print(c1)
    c1 += c2
    print(c1)
    c1 + c3


# Exercise 2: Import

#     In a file named func.py create a function that adds 2 number, and prints the result
#     In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

# import module_name 
# OR 
# from module_name import function_name 
# OR 
# from module_name import function_name as fn 
# OR
# import module_name as mn


def exercise_2():
    print("--------------------Exercise 2----------------------")
    print("See exercise_one.py")


# Exercise 3: String module

#     Generate random String of length 5
#     Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
#     Hint: use the string module


def exercise_3():
    print("--------------------Exercise 3----------------------")
    
    source_string = list(string.ascii_letters)
    random.shuffle(source_string)    # for better randomizing
    random_string = ''.join(random.choices(source_string, k=5))
    print(random_string)
    

# Exercise 4 : Current Date

#     Create a function that displays the current date.
#     Hint : Use the datetime module.


def exercise_4():
    print("--------------------Exercise 4----------------------")

    print("Current date is:", date.today())


# Exercise 5 : Amount of time left until January 1st

#     Create a function that displays the amount of time left from now until January 1st.
#     (Example: the 1st of January is in 10 days and 10:34:01hours).


def exercise_5():
    print("--------------------Exercise 5----------------------")
    
    today = datetime.today()
    current_year = today.year
    next_1th_january = datetime(current_year + 1, 1, 1)
    delta = next_1th_january - today
    print("The 1st of January is in", delta, "hours")


# Exercise 6 : Birthday and minutes

#     Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def exercise_6(birthday):
    print("--------------------Exercise 6----------------------")

    birthday_date = datetime(*list(map(int, birthday.split('.'))))
    now = datetime.today()
    delta = int((now - birthday_date).total_seconds() / 60)

    print(f"Since birthday {birthday_date.date()} till now has passed {delta} minutes")


# Exercise 7 : Faker Module

#     Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
#     Create an empty list called users. Tip: It should be a list of dictionaries.
#     Create a function that adds new dictionaries to the users list.
#     Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

def exercise_7(users:list):
    print("--------------------Exercise 7----------------------")

    fake = Faker()
  
    for index in range(10):

        user_dict = {}

        user_dict['first_name'] = fake.name().split(' ')[0]
        user_dict['second_name'] = fake.name().split(' ')[1]
        user_dict['address'] = fake.address()
        user_dict['language_code'] = fake.language_code()

        users.append(user_dict)

    return(user_dict)



def main():
    
    exercise_1()
    exercise_2()
    exercise_3()
    exercise_4()
    exercise_5()

    birthday = "1978.03.08"
    exercise_6(birthday)
    
    users = []
    exercise_7(users)
    print("Fake users:")
    for index, user in enumerate(users):
        print(index + 1, user)

if __name__ == "__main__":
    main()