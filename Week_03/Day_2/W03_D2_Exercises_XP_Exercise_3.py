from random import choice

# Exercise 3 : Dogs Domesticated

#     Create a new python file and import your Dog class from the previous exercise.
#     In the new python file, create a class named PetDog that inherits from Dog.
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True

#         play: takes a parameter which value is a few names of other Dog instances (use *args).
#               The method should print the following string: “dog_names all play together”.

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#             “dog_name does a barrel roll”.
#             “dog_name stands on his back legs”.
#             “dog_name shakes your hand”.
#             “dog_name plays dead”.

from W03_D2_Exercises_XP import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        print(self.name, ', '.join([arg.name for arg in args]), "all play together")

    def do_a_trick(self):
        trick_list = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        if self.trained == True:
            print(self.name, choice(trick_list))
        else:
            print(self.name, "hasn't trained yet. It should be trained before doing tricks")





def exercise_3():
    print("--------------------Exercise 3----------------------")

    pet_dog_1 = PetDog("Rex", 5, 10)
    pet_dog_1.train()

    pet_dog_2 = PetDog("dog_2", 2, 12)
    pet_dog_3 = PetDog("dog_3", 3, 13)
    pet_dog_4 = PetDog("dog_4", 4, 14)

    pet_dog_1.play(pet_dog_2, pet_dog_3, pet_dog_4)

    pet_dog_1.do_a_trick()
    pet_dog_2.do_a_trick()


def main():

    exercise_3()


if __name__ == "__main__":
    main()