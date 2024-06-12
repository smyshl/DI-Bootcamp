# Exercise 1 : Convert lists into dictionaries

#     Convert the two following lists, into dictionaries.
#     Hint: Use the zip method

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

print("--------------------Exercise 1----------------------")

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# print(dict(zip(keys, values)))


# Exercise 2 : Cinemax #2

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Given the following object:
#     family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#     How much does each family member have to pay ?
#     Print out the family’s total cost for the movies.
#     Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
print("--------------------Exercise 2----------------------")

# def total_tickets_cost(dict):
#     family_total_cost = 0
#     for name, age in dict.items():
#         if age > 12:
#             family_total_cost += 15
#             print(name, "have to pay 15$")
#         elif 3 <= age <= 12:
#             family_total_cost += 10
#             print(name, "have to pay 10$")
#     return family_total_cost

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# print("Total family cost:", total_tickets_cost(family), "$\n")

# new_family_list = list(input("Please enter names and ages one by one separated with space\n(for example: rick 43 beth 13 morty 5 summer 8): ").split(' '))
# new_family = {new_family_list[i]: int(new_family_list[i + 1]) for i in range(0, len(new_family_list) - 1, 2)}

# print("New family total cost:", total_tickets_cost(new_family), "$\n")


# Exercise 3: Zara

#     1. Here is some information about a brand.

#     name: Zara 
#     creation_date: 1975 
#     creator_name: Amancio Ortega Gaona 
#     type_of_clothes: men, women, children, home 
#     international_competitors: Gap, H&M, Benetton 
#     number_stores: 7000 
#     major_color: 
#         France: blue, 
#         Spain: red, 
#         US: pink, green

#     2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#     The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
#     3. Change the number of stores to 2.
#     4. Print a sentence that explains who Zaras clients are.
#     5. Add a key called country_creation with a value of Spain.
#     6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
#     7. Delete the information about the date of creation.
#     8. Print the last international competitor.
#     9. Print the major clothes colors in the US.
#     10. Print the amount of key value pairs (ie. length of the dictionary).
#     11. Print the keys of the dictionary.
#     12. Create another dictionary called more_on_zara with the following details:

#     creation_date: 1975 
#     number_stores: 10 000

#     13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
#     14. Print the value of the key number_stores. What just happened ?
# 
print("--------------------Exercise 3----------------------")

brand = {
    "name": "Zara", 
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {"France": ["blue"], "Spain": ["red"], "US": ["pink", "green"]}
}

brand["number_stores"] = 2
print("Zara's clients are people around the world")
brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("The last international competitor:", brand["international_competitors"][-1])
print("The major clothes colors in the US:", (', ').join(brand["major_color"]["US"]))
print("Amount of key value pairs in the dictionary brand:", len(brand))
print("Keys of the dictionary brand:", (', ').join(brand.keys()))

more_on_zara = {"creation_date": 1975, "number_stores": 10000}

print(brand)