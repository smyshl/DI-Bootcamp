# Exercise 1: Cats

# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

#     Instantiate three Cat objects using the code provided above.
#     Outside of the class, create a function that finds the oldest cat and returns the cat.
#     Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.



class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


def oldest_cat(cats_list):
    cats_age = {cat: cat.age for cat in cats_list}
    max_age_cat = max(cats_age, key=cats_age.get)
    return max_age_cat


def exercise_1():
    print("--------------------Exercise 1----------------------")

    cat_1 = Cat("cat1", 1)
    cat_2 = Cat("cat2", 2)
    cat_3 = Cat("cat3", 3)

    cats_list = [cat_1, cat_2, cat_3]
    max_age_cat = oldest_cat(cats_list)
    print(f"The oldest cat is {max_age_cat.name}, and is {max_age_cat.age} years old.")
    

# Exercise 2 : Dogs

#     Create a class called Dog.
#     In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
#     Create a method called bark that prints the following string “<dog_name> goes woof!”.
#     Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
#     Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
#     Print the details of his dog (ie. name and height) and call the methods bark and jump.
#     Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
#     Print the details of her dog (ie. name and height) and call the methods bark and jump.
#     Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


class dog:
    def __init__(self, dog_name, dog_height) -> None:
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


def exercise_2():
    print("--------------------Exercise 2----------------------")

    davids_dog = dog("Rex", 50)
    print(f"David's dog's name is {davids_dog.name}, it is {davids_dog.height} cm height")
    davids_dog.bark()
    davids_dog.jump()

    sarahs_dog = dog("Teacup", 20)
    print(f"Sarah's dog's name is {sarahs_dog.name}, it is {sarahs_dog.height} cm height")
    sarahs_dog.bark()
    sarahs_dog.jump()

    if sarahs_dog.height > davids_dog.height:
        print("The bigger dog is", sarahs_dog.name)
    else:
        print("The bigger dog is", davids_dog.name)


# Exercise 3 : Who’s the song producer?

#     Define a class called Song, it will show the lyrics of a song.
#     Its __init__() method should have two arguments: self and lyrics (a list).
#     Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

#     Create an object, for example:

#     stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


#     Then, call the sing_me_a_song method. The output should be:

#     There’s a lady who's sure
#     all that glitters is gold
#     and she’s buying a stairway to heaven

class song:
    def __init__(self, lyrics_list):
        self.lyrics = lyrics_list

    def sing_me_a_song(self):
        print('\n'.join(self.lyrics))


def exercise_3():
    print("--------------------Exercise 3----------------------")

    stairway= song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])
    stairway.sing_me_a_song()


# Exercise 4 : Afternoon at the Zoo

#     Create a class called Zoo.
#     In this class create a method __init__ that takes one parameter: zoo_name.
#     It instantiates two attributes: animals (an empty list) and name (name of the zoo).
#     Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
#     Create a method called get_animals that prints all the animals of the zoo.
#     Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
#     Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
#     Example
#     { 
#         1: "Ape",
#         2: ["Baboon", "Bear"],
#         3: ['Cat', 'Cougar'],
#         4: ['Eel', 'Emu']
#     }
#     Create a method called get_groups that prints the animal/animals inside each group.
#     Create an object called ramat_gan_safari and call all the methods.
#     Tip: The zookeeper is the one who will use this class.
#     Example
#     Which animal should we add to the zoo --> Giraffe
#     x.add_animal(Giraffe)

class Zoo:
    def __init__(self, zoo_name) -> None:
        self.animals = ["Eel", "Baboon", "Ape", "Cat", "Bear", "Cougar", "Emu"]
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        print(self.animals)
        first_letters_list = sorted(list({animal[0] for animal in self.animals}))
        first_letters_dict = {letter: None for letter in first_letters_list}
        # sorted_animals = dict(zip(range(1, len(first_letters_list) + 1), first_letters_list))
        print(first_letters_dict)
        for animal in self.animals:
            if first_letters_dict[animal[0]] == None:
                first_letters_dict[animal[0]] = animal
            else:
                first_letters_dict[animal[0]] = first_letters_dict[animal[0]] + "," + animal

        print(first_letters_dict)

        first_letters_dict = {letter: animals.split(',') for letter, animals in first_letters_dict.items()}
        print(first_letters_dict)

        # sorted_dict = {i: animals.split(',') for i in range(1, len(first_letters_dict) + 1) for key, animals in first_letters_dict.items()}

        # print(sorted_dict)






def exercise_4():
    print("--------------------Exercise 4----------------------")

    zoo_1 = Zoo("zoo_1")

    zoo_1.sort_animals()



def main():

    # exercise_1()
    # exercise_2()
    # exercise_3()
    exercise_4()
    

if __name__ == "__main__":
    main()