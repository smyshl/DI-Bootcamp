from menu_item import Menu_item
from menu_manager import Menu_manager


def ask_user_name_price():
    name_price = input("Please enter name and price separated by comma: ").split(', ')
    return name_price[0], float(name_price[1])


def print_user_choice():
    print("\nRestaurant Menu Manager")
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    print("Quit (Q)")



def show_user_menu():
    user_choices_dict = {
        "V": view_an_item,    # I haven't realised what this function should do
        "A": add_item_to_menu,
        "D": remove_item_from_menu,
        "U": update_item_from_menu,
        "S": show_restaurant_menu,
        "Q": 'quit'
    }

    user_input = None

    while user_input != "Q":
        print_user_choice()
        user_input = input("Please enter your choice: ").capitalize()
        if user_input in user_choices_dict and user_input != "Q":
            user_choices_dict[user_input]()

        
def view_an_item():   # I haven't realised what this function should do, so I decided not to write it
    ...


def add_item_to_menu():
    print("ADD a new item")
    new_item = Menu_item(*ask_user_name_price())
    new_item.save()
    if new_item.item_id:
        print("new item was added successfully\n")


def remove_item_from_menu():
    print("REMOVE an item")
    del_item = Menu_item(*ask_user_name_price())
    del_item.delete()
    if del_item.item_id:
        print("the item was deleted successfully\n")
    else:
        print("the item wasn't delete, may be it doesn't exist\n")


def update_item_from_menu():
    print("UPDATE an item")
    print("What item would you like to update?")
    old_name, old_price = ask_user_name_price()
    if Menu_manager.get_by_name(old_name):
        print("What new values would you like to set?")
        new_name, new_price = ask_user_name_price()
        update_item = Menu_item(old_name, old_price)
        update_item.update(new_name, new_price)
        if update_item.item_id:
            print("the item was updated successfully\n")
        else:
            print("the item wasn't update, something went wrong\n")


def show_restaurant_menu():
    print("\nRESTAURANT MENU")
    for index, item in enumerate(Menu_manager.all_items()):
        print(f"{index + 1}. {item[1]} - {item[2]} $")
    print()
    

def main():
    show_user_menu()


if __name__ == "__main__":
    main()