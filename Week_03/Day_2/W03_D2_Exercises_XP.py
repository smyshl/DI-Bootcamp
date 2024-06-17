# Exercise 1 : Pets

# Using this code:

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
        

#     Create another cat breed named Siamese which inherits from the Cat class.
#     Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
#     Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
#     Take all the cats for a walk, use the walk method.

def exercise_1():

    print("--------------------Exercise 1----------------------")

    cat_bengal = Bengal("Cat_Bengal", 3)
    cat_chartreux = Chartreux("Cat_Chartreux", 6)
    cat_siamese = Siamese("Cat_Siamese", 1)

    all_cats = [cat_bengal, cat_chartreux, cat_siamese]

    sara_pets = Pets(all_cats)

    sara_pets.walk()


# Exercise 2 : Dogs

#     Create a class called Dog with the following attributes name, age, weight.
#     Implement the following methods in the Dog class:
#         bark: returns a string which states: “<dog_name> is barking”.
#         run_speed: returns the dogs running speed (weight/age*10).
#         fight : takes a parameter which value is another Dog instance, called other_dog. 
#                 This method returns a string stating which dog won the fight.
#                 The winner should be the dog with the higher run_speed x weight.

#     Create 3 dogs and run them through your class.

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barkling"
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, another_dog):
        if self.run_speed() * self.weight > another_dog.run_speed() * another_dog.weight:
            return f"{self.name} wins the fight with {another_dog.name}"
        elif self.run_speed() * self.weight < another_dog.run_speed() * another_dog.weight:
            return f"{another_dog.name} wins the fight with {self.name}"
        else:
            return "Tie"



def exercise_2():
    print("--------------------Exercise 2----------------------")

    dog_1 = Dog("Rex", 5, 25)
    dog_2 = Dog("Snoopy", 10, 30)
    dog_3 = Dog("Dog", 7, 40)
    dogs = [dog_1, dog_2, dog_3]
    
    for dog in dogs:
        print(dog.bark())
        print(f"{dog.name}'s speed is {dog.run_speed()}")

    for index_1 in range(len(dogs) - 1):
        for index_2 in range(index_1 + 1, len(dogs)):
            print(dogs[index_1].fight(dogs[index_2]))


# Exercise 3 : Dogs Domesticated

#     Create a new python file and import your Dog class from the previous exercise.
#     In the new python file, create a class named PetDog that inherits from Dog.
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True

#         play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#             “dog_name does a barrel roll”.
#             “dog_name stands on his back legs”.
#             “dog_name shakes your hand”.
#             “dog_name plays dead”.

def exercise_3():
    print("--------------------Exercise 3----------------------")
    print("Exercise 3 see in the file W03_D2_Exercises_XP_Exercise_3.py")

# Exercise 4 : Family

#     Create a class called Family and implement the following attributes:
#         members: list of dictionaries
#         last_name : (string)
#     Implement the following methods:
#         born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
#         is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
#         family_presentation: a method that prints the family’s last name and all the members’ details.
#     Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#         [
#             {'name':'Michael','age':35,'gender':'Male','is_child':False},
#             {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#         ]

class Family:
    def __init__(self, members, last_name) -> None:
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        newborn = {}
        for key, value in kwargs.items():
            newborn[key] = value
        try:
            newborn['age'] = 0
            newborn['is_child'] = True
        except:
            pass
        self.members.append(newborn)
        print(f"*** Congratulations to the {self.last_name}'s on their newborn {newborn['name']}! ***")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    return True
                else:
                    return False

        
    def family_presentation(self):
        print(f"{self.last_name}'s family:")
        for member in self.members:
            print(f"{member['name']}, {member['age']} years, {member['gender']}, is child - {member['is_child']}")


def exercise_4():
    print("--------------------Exercise 4----------------------")

    family_members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

    family = Family(family_members, "Johnson")
    family.family_presentation()


    family.born(name="Eugene", gender="Male", age=0)
    family.family_presentation()

    print(f"Is Eugene over 18 years old? {family.is_18('Eugene')}")



# Exercise 5 : TheIncredibles Family

#     Create a class called TheIncredibles. This class should inherit from the Family class:
#     This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
#     Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
#     Add a method called incredible_presentation which :
#         Print a sentence like “*Here is our powerful family **”
#         Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
#     Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
#         [
#             {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#             {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#         ]
#     Call the incredible_presentation method.
#     Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
#     Call the incredible_presentation method again.

class TheIncredibles(Family):
    def __init__(self, members, last_name) -> None:
        super().__init__(members, last_name)

    def use_power(self, name):
        if self.is_18(name):
            print(f"{name} uses power!")
        else:
            raise Exception(f"{name} can't use power until 18 years old!")
        
    def incredible_presentation(self):
        print("Here is our powerful")
        super().family_presentation()



def exercise_5():
    print("--------------------Exercise 5----------------------")    

    incredible_family_members = [
        {'name':'Michael', 'age':35, 'gender':'Male', 'is_child':False, 'power':'fly', 'incredible_name':'MikeFly'},
        {'name':'Sarah', 'age':32, 'gender':'Female', 'is_child':False, 'power':'read minds','incredible_name':'SuperWoman'}
    ]

    family = TheIncredibles(incredible_family_members, "Strauss")
    family.incredible_presentation()

    family.born(name="Jack", gender="Male", incredible_name="BabyJack", power="Unknown")
    family.incredible_presentation()

    family.use_power("Michael")
    family.use_power("Jack")


def main():
    
    exercise_1()
    exercise_2()
    exercise_3()
    exercise_4()
    exercise_5()


if __name__ == "__main__":
    main()