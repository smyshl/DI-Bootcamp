# Exercise 1 : Student Grade Summary
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.
# Initial Data:
# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }
# Requirements:
#     Calculate the average grade for each student and store the results in a new dictionary called student_averages.
#     Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
#         A: 90 and above
#         B: 80 to 89
#         C: 70 to 79
#         D: 60 to 69
#         F: Below 60
#     Calculate the class average (the average of all students’ averages) and print it.
#     Print the name of each student, their average grade, and their letter grade.

# Hints:
#     Use loops to iterate through the student_grades dictionary.
#     You may use sum() and len() functions to help calculate averages.
#     Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
student_letter_grades = {}
class_average_grade = 0

for student in student_grades:
    student_averages[student] = sum(student_grades[student]) / len(student_grades[student])

print("Student--Average grade--Letter grade")

for student in student_averages:
    if student_averages[student] > 90:
        student_letter_grades[student] = "A"
    elif student_averages[student] >= 80:
        student_letter_grades[student] = "B"
    elif student_averages[student] >= 70:
        student_letter_grades[student] = "C"
    elif student_averages[student] >= 60:
        student_letter_grades[student] = "D"
    else:
        student_letter_grades[student] = "F"
    class_average_grade += student_averages[student]
    print(student, " --- ", round(student_averages[student], 2), " --- ", student_letter_grades[student])

class_average_grade = round(class_average_grade / len(student_averages), 2)


print("Class average grade:", class_average_grade)



# Exercise 2 : Advanced Data Manipulation and Analysis
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.

# sales_data = [
#     {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
#     {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
#     {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
#     {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
#     {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
#     {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
#     {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
# ]

# Tasks:
#     Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.
#     Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.
#     Sales Data Enhancement:
#         Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
#         Use a loop to modify the sales_data list with this new information.
#     High-Value Transactions:
#         Using list comprehension, create a list of all transactions where the total price is greater than $500.
#         Sort this list by the total price in descending order.
#     Customer Loyalty Identification:
#         Identify any customer who has made more than one purchase, suggesting potential loyalty.
#         Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

#     Bonus: Insights and Analysis:
#         Calculate the average transaction value for each product category.
#         Identify the most popular product based on the quantity sold.
#         Provide insights into how these analyses could inform the company’s marketing strategies.

print("--------------------Exercise 2----------------------")

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_sales_by_product = {}
total_quantity_by_product = {}
total_sum_by_client = {}
clients_purchase = {}

for data in sales_data:

    data["total_price"] = data["price"] * data["quantity"]

    if data["product"] not in total_quantity_by_product:
        total_quantity_by_product[data["product"]] = data["quantity"]
    else:
        total_quantity_by_product[data["product"]] += data["quantity"]

    if data["product"] not in total_sales_by_product:
        total_sales_by_product[data["product"]] = data["total_price"]
    else:
        total_sales_by_product[data["product"]] += data["total_price"]

    if data["customer_id"] not in total_sum_by_client:
        total_sum_by_client[data["customer_id"]] = data["price"]
    else:
        total_sum_by_client[data["customer_id"]] += data["price"]

    if data["customer_id"] not in clients_purchase:
        clients_purchase[data["customer_id"]] = data["quantity"]
    else:
        clients_purchase[data["customer_id"]] += data["quantity"]

big_transactions = sorted([data["price"] for data in sales_data if data["price"] > 500], reverse=True)
loyal_cusomers = [key for key, value in clients_purchase.items() if value > 2]
average_transaction_by_product = {product: total_sales / total_quantity_by_product[product] for product, total_sales in total_sales_by_product.items()}

print("Total sales for each category:", total_sales_by_product)
print("Total amount spent by each customer:", total_sum_by_client)
print("Transactions where the total price is greater than $500:", big_transactions)
print("Customer who has made more than one purchase:", loyal_cusomers)
print("Average transaction value for each product category", average_transaction_by_product)
print("The most popular product:", max(total_quantity_by_product, key=total_quantity_by_product.get))