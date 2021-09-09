---
Title: 'User Input'
Description: 'input() is a built-in function in Python that allows a user to assign custom input to a variable. python mycatsname = input("What is your cats name? \n") print("The best cat in the world is " + mycatsname)  When this code is run, it will print out "What is your cats name?". Then, the user can type in something and press enter. Whatever the user types will be saved to the variable mycatsname and printed out in the final print() function. Once a user inputs a value it can be used like a normal variable. For example, it can be compared against other variables:'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Input'
  - 'Print'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

`input()` is a built-in function in Python that allows a user to assign custom input to a variable.

```python
my_cats_name = input("What is your cat's name? \n")

print("The best cat in the world is " + my_cats_name)
```

When this code is run, it will print out "What is your cat's name?". Then, the user can type in something and press <kbd>enter</kbd>. Whatever the user types will be saved to the variable `my_cats_name` and printed out in the final `print()` function.

Once a user inputs a value it can be used like a normal variable. For example, it can be compared against other variables:

```python
answer = input("What is the meaning of life? \n")

if answer == "42":
  print("Good job!")
else:
  print("Sorry! That's not it.")
```

In this case, when the code is run, it will print out "What is the meaning of life?". If the user types `"42"` and presses `enter`, it will print "Good job!". If the user types anything other than `"42"`, it will print out "Sorry! That's not it".

Whatever the user types will be saved as a string. However, the string can be converted to other types.

```python
my_num = input("What number comes after 1? \n")

if my_num == 2:
  print("Correct!")
else:
  print("No...")

# Output: No...
```

This always prints "No..." because the string `'2'` does not equal the number `2`.

```python
my_num = input("What number comes after 1? \n")

if int(my_num) == 2:
  print("Correct!")
else:
  print("No...")
```

With the addition of the `int()` type conversion function, this now prints "Correct!" if and only if the user inputs `2`.
