# Instructions

# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!

# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:
# 7 	i 	i
# T 	s 	x
# h 	% 	?
# i 		#
# s 	M 	
# $ 	a 	
# # 	t 	%
# ^ 	r 	!

# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.


neo_string = "    7ii    Tsx    h%?    i #    sM     $a     #t%    ^r!"

# cleaning string
neo_string = ''.join([neo_string[4+i:i+7] for i in range(0, len(neo_string), 7)])

# converting string to matrix
matrix = [[], [], []]

for column in range(3):
    for raw in range(column, len(neo_string), 3):
        matrix[column].append(neo_string[raw])

# reading and decrypting matrix
neo_word = []

for column in range(3):
    for raw in range(len(matrix[column])):
        if matrix[column][raw].isalpha():
            neo_word.append(matrix[column][raw])
        else:
            neo_word.append(' ')

print("Decrypted message is:", ''.join(neo_word))