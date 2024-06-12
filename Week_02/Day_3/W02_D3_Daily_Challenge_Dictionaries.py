# Challenge 1
#     Ask a user for a word
#     Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
#         Make sure the letters are the keys.
#         Make sure the letters are strings.
#         Make sure the indexes are stored in a list and those lists are values.

# Examples
# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }
# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}
print("--------------------Exercise 1----------------------")

input_string = input("Please enter a word or frase: ")
word_dict = {}

for index, letter in enumerate(input_string):

    if letter in word_dict:
        word_dict[letter].append(index)
    else:
        word_dict[letter] = [index] 

print(word_dict)

input("Please press enter to go to the next exercise")


# Challenge 2
#     Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
#     Sort the list in alphabetical order.
#     Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)
# Examples
# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# wallet = "$300"
# ➞ ["Bread", "Fertilizer", "Water"]
# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
# wallet = "$100" 
# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }
# wallet = "$1" 
# ➞ "Nothing"


print("--------------------Exercise 2----------------------")

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"}


items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2",
  "Speakers": "$300",
}

basket = {}
basket_price = 0

wallet = 425

print(f"\nYou have ${wallet} in your wallet")

# Start buying with the cheapest products

for key, value in items_purchase.items():
    items_purchase[key] = int(("").join(value.lstrip("$").split(",")))

items_purchase = dict(sorted(items_purchase.items(), key=lambda item: item[1]))

for product, price in items_purchase.items():
    if product not in basket and price <= wallet - basket_price:
        basket[product] = price
        basket_price += price
    else:
    # product already in the basket or basket is full, loop terminating
        break

print("\n------If you start buying with the cheapest products------")
# print(f"You have ${wallet} in your wallet")
print("You can buy:", ', '.join((sorted(basket))))
print("The cost of your purchase:", basket_price, "$")

# Start buying with the most expensive products

items_purchase = dict(sorted(items_purchase.items(), key=lambda item: item[1], reverse=True))
basket = {}
basket_price = 0

for product, price in items_purchase.items():
    if price <= wallet:
        if product not in basket and price <= wallet - basket_price:
            basket[product] = price
            basket_price += price
        else:
        # product already in the basket or basket is full, loop terminating
            break

print("\n------If you start buying with the most expensive products------")
# print(f"You have ${wallet} in your wallet")
print("You can buy:", ', '.join((sorted(basket))))
print("The cost of your purchase:", basket_price, "$")