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
                raise TypeError (f"Cannot add between Currency type '{self.currency}' and '{other.currency}'")
        
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



def main():
    
    exercise_1()


if __name__ == "__main__":
    main()