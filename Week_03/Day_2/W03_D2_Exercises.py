# Try to recreate the class explained below:
# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.
# We can create a class called BlockedDoor that inherits from the base class Door.
# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions, which simply raises an Error that a blocked door cannot be opened or closed.

class Door:
    def __init__(self, is_opened):
        self.is_opened = is_opened

    def open_door(self):
        self.is_opened = True
        print("The door is opened")

    def close_door(self):
        print("The door is closed")
        



def main():

    door_1 = Door(1)
    door_1.open_door()
    door_1.close_door()

    sum_of_list = 0

    my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
    for num in my_list:
        try:
            sum_of_list += num
        except:
            print(num, "is not a number")
        else:
            print(num, "хуярим")

    print(sum_of_list)
            


if __name__ == "__main__":
    main()