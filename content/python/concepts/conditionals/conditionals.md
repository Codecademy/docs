---
Title: 'Conditionals'
Description: 'Conditionals take an expression, which is code that evaluates to determine a value, and checks if it is True or False. If it’s True, we can tell our program to do one thing — we can even account for False to do another. As we write more complex programs, conditionals allow us to address multiple scenarios and make our programs more robust. The Python if statement is used to determine the execution of code based on the evaluation of a Boolean expression. - If the if statement expression evaluates to True, then the indented code following the statement is executed. - If the expression evaluates to False then the indented code following the if statement is skipped and the program executes the next line of code which is indented at the same level as the if statement. py test_value = 100'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Conditionals'
  - 'If'
  - 'Else'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Conditionals take an expression, which is code that evaluates to determine a value, and checks if it is `True` or `False`. If it’s `True`, we can tell our program to do one thing — we can even account for `False` to do another.

As we write more complex programs, conditionals allow us to address multiple scenarios and make our programs more robust.

## If Statement

The Python `if` statement is used to determine the execution of code based on the evaluation of a Boolean expression.

- If the `if` statement expression evaluates to `True`, then the indented code following the statement is executed.
- If the expression evaluates to `False` then the indented code following the if statement is skipped and the program executes the next line of code which is indented at the same level as the if statement.

```py
test_value = 100

if test_value > 1:
  print("This code is executed!")

if test_value > 1000:
  print("This code is NOT executed!")

print("Program continues at this point.")
```

## Else Statement

The Python `else` statement provides alternate code to execute if the expression in an if statement evaluates to `False`.

The indented code for the `if` statement is executed if the expression evaluates to `True`. The indented code immediately following the `else` is executed if and only if the expression evaluates to `False`.

To mark the end of the else block, the code must be unindented to the same level as the starting if line.

```py
test_grade = 61

if test_grade > 60:
  print("You passed.")
else:
  print("You failed.")

# Output: You passed.
```

## Elif Statement

The Python `elif` statement allows for continued checks to be performed after an initial `if` statement. An `elif` statement differs from the else statement because another expression is provided to be checked, just as with the initial `if` statement.

If the expression is `True`, the indented code following the `elif` is executed. If the expression evaluates to False, the code can continue to an optional `else` statement.

Multiple elif statements can be used following an initial `if` to perform a series of checks. Once an `elif` expression evaluates to `True`, no further `elif` statements are executed.

```py
pet_type = "fish"

if pet_type == "dog":
  print("You have a dog.")
elif pet_type == "cat":
  print("You have a cat.")
elif pet_type == "fish":
  # This is performed
  print("You have a fish")
else:
  print("Not sure!")
```

## Codebyte Example

```codebyte/py
pH = 2

if pH < 7:
  print("Acidic")
elif pH > 7:
  print("Basic")
else:
  print("Neutral")
```

What do you think will happen if `pH` is changed to 7?
