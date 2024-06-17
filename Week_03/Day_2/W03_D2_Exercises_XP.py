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

def excersise_1():

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






def main():
    
    # excersise_1()
    exercise_2()


if __name__ == "__main__":
    main()