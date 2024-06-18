import math

# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:
#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them
#     Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

class Circle:
    def __init__(self, radius:int, radius_input=True) -> None:
        self.radius_input = radius_input
        if radius_input:
            self.radius = radius
            self.diametr = 2 * radius
        else:
            self.diametr = radius
            self.radius = self.diametr / 2
        self.area = math.pi * self.diametr ** 2 / 4
        self.length = 2 * math.pi * self.radius

    def __str__(self):
        return f"Circle: radius = {self.radius}, area = {round(self.area, 2)}, length = {round(self.length, 2)}"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        else:
            return f"TypeError: Cannot add Circle and {type(other)}"
        
    def __lt__(self, other):
        if self.radius < other.radius:
            return True
        else:
            return False
        
    def __eq__(self, value: object) -> bool:
        if self.radius == value.radius:
            return True
        else:
            return False

    @classmethod
    def sort_circles(cls, items:list):
        return sorted(items)



def main():
    
    circle_1 = Circle(3, True)
    circle_2 = Circle(5, False)
    circle_3 = Circle(6, False)
    circle_4 = Circle(2, True)
    circles_list = []

    print(globals()['Circle'])

    print(circle_1)
    print(circle_2)
    print(circle_3)

    print("+", circle_1 + circle_3)
    print("<", circle_1 < circle_2)
    print(">", circle_1 > circle_2)
    print("==", circle_1 == circle_2)
    print("==", circle_1 == circle_3)

    print(list(map(str, Circle.sort_circles([circle_1, circle_2, circle_3, circle_4]))))


if __name__ == "__main__":
    main()