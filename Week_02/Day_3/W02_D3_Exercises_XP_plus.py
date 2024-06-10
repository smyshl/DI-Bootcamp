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