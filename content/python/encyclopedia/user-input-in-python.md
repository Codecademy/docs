---
Title: "User Input in Python" 
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Comparison"
  - "Input"
  - "Interface"
  - "Print"
  - "Variables"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

`input()` is a built-In function in python that allows a user to assign custom input to a variable.

```codebyte/py
my_cats_name = input("What is your cat's name? \n") 
print("The best cat in the world is " + my_cats_name)
```

When this code is run, it will print out "What is your cat's name?". Then, whatever the user types in will be saved to the variable `my_cats_name` and printed out in the final print statement.

Once a user inputs a value it can be used like a normal variable. For example, it can be compared against other variables:

```codebyte/py
answer = input("What is the meaning of life? \n")
if answer == "42":
  print("Good job!")
else:
  print("Sorry! That's not it")
```

Whatever the user types will be saved as a string. However, the string can be converted to other types.

```python
my_num = input("What number comes after 1? \n")
if my_num == 2:
  print("correct!")
else:
  print("No...")
# Always prints "No..." because "2" != 2
``` 

```python
my_num = input("What number comes after 1? \n")
if int(my_num) == 2:
  print("correct!")
else:
  print("No...")
# Prints "correct!" if and only if the user inputs "2".
```
