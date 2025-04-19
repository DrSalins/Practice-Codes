# **Basic Level**

# 1. Print Numbers 1 to 10
# Write a program that prints all numbers from 1 to 10.
def print_numbers():
    # Your code here
    numbers = [1,2,3,4,5,6,7,8,9,10]
    for x in numbers:
        print(x)
print_numbers()

# 2. Even or Odd
# Write a program that takes an integer and prints whether it is even or odd.
def even_or_odd(number):
    # Your code here
    if(type(number) != int):
        print("Please enter a number")
    elif (number % 2 == 0):
        print("The number is even!")
    else:
        print("The number is odd!")
even_or_odd(4)
# 3. Sum of List
# Write a function that takes a list of numbers and returns the sum of all elements in the list.
def sum_of_list(numbers):
    # Your code here
    print(sum(numbers))
sum_of_list((1,2,3,4))

# 4. Find Maximum Number
# Write a program that finds the maximum number in a list without using built-in functions like max().
def find_maximum_number(numbers):
    # Your code here
    maxNum = numbers[0]
    for num in numbers: 
        if num > maxNum:
            maxNum = num 
    print("The largest number is:",maxNum)
find_maximum_number((1,2,3,4))

# 5. Palindrome Check
# Write a function that checks if a given string is a palindrome.
def is_palindrome(string):
    # Your code here
    return string == string[::-1]
print(is_palindrome("Hello"))

# **Intermediate Level**

# 6. Reverse String
# Write a function that takes a string and returns it reversed without using slicing or built-in functions.
def reverse_string(string):
    # Your code here
    text = ""
    for x in string[::-1]: 
        text+=x
    print(text)
reverse_string("Hello")


        

# 7. Count Vowels
# Write a function that takes a string and returns the count of vowels (a, e, i, o, u).
def count_vowels(string):
    # Your code here
    count = 0
    vowels = ["a","e","i","o","u"]
    for x in string:
        if x in vowels:
            count+=1
    print("The amount of vowels are:",count)
count_vowels("Hello")

# 8. Prime Number Check
# Write a function that checks if a given number is prime.
import math
def is_prime(number):
    # Your code here
    pass

# **Advanced Level**

# 9. Find the Second Largest Number
# Write a program to find the second largest number in a list without sorting.
def find_second_largest_number(numbers):
    # Your code here
    pass

# 10. Matrix Multiplication
# Write a function that multiplies two matrices. Assume the matrices are square and compatible for multiplication.
def matrix_multiplication(matrix1, matrix2):
    # Your code here
    pass
