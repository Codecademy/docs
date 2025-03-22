---
Title: 'Operators'
Description: 'Operators are used to perform various operations on variables and values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Operators'
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Operators are used to perform various operations on variables and values. The standard arithmetic and assignment operators are the most familiar.

## Syntax

The following code snippet uses the assignment operator, `=`, to set `my_variable` to the value of `num1` and `num2` with an arithmetic operator acting on them. For example, if `operator` represented `*`, `my_variable` would be assigned a value of `num1 * num2`.

```pseudo
my_variable = num1 operator num2
```

Python operators can be organized into the following groups:

- Arithmetic operators for performing traditional math evaluations.
- Assignment operators for assigning values to variables.
- Comparison operators for comparing two values.
- Logical operators for combining boolean values.
- Ternary operators for shorthand conditional experessions.
- Membership operators for testing membership in iterables.

## Arithmetic Operators

Python has the following arithmetic operators:

- Addition, `+`, which returns the sum of two numbers.
- Subtraction, `-`, which returns the difference of two numbers.
- Multiplication, `*`, which returns the product of two numbers.
- Division, `/`, which returns the quotient of two numbers.
- Exponentiation, `**`, which returns the value of one number raised to the power of another.
- Modulus, `%`, which returns the remainder of one number divided by another.
- Floor division, `//`, which returns the integer quotient of two numbers.

The following code demonstrates how to use arithmetic operators in Python:

```py
3 + 2 # Addition | Output: 5
3 - 2 # Subtraction | Output: 1
3 * 2 # Multiplication | Output: 6
3 / 2 # Division | Output: 1.5
3 ** 2 # Exponentation | Output: 9
3 % 2 # Modulus | Output: 1
3 // 2 # Floor Division | Output: 1
```

## Assignment Operators

Python includes the following assignment operators:

- The `=` operator assigns the value on the right to the variable on the left.
- The `+=` operator updates a variable by incrementing its value and reassigning it.
- The `-=` operator updates a variable by decrementing its value and reassigning it.
- The `*=` operator updates a variable by multiplying its value and reassigning it.
- The `/=` operator updates a variable by dividing its value and reassigning it.
- The `%=` operator updates a variable by calculating its modulus against another value and reassigning it.

The following code demonstrates how to use assignment operators in Python:

```py
x = 5 # Assign | Output: x = 5
x += 2 # Increment and Assign | Output: x = 7
x -= 2 # Decrement and Assign | Output: x = 5
x *= 2 # Multiply and Assign | Output: x = 10
x /= 2 # Divide and Assign | Output: x = 5
x %= 2 # Modulus and Assign | Output: x = 1
```

## Comparison Operators

Python has the following comparison operators:

- Equal, `==`, for returning `True` if two values are equal.
- Not equal, `!=`, for returning `True` if two values are not equal.
- Less than, `<`, for returning `True` if left value less than right value.
- Less than or equal to, `<=`, for returning `True` if left value is less than or equal to right value.
- Greater than, `>`, for returning `True` if left value greater than right value.
- Greater than or equal to, `>=`, for returning `True` if left value greater than or equal to right value.

The following code demonstrates how to use comparison operators in Python:

```py
3 == 3 # Output: True
3 != 2 # Output: True
3 < 5 # Output: True
3 <= 5 # Output: True
3 > 5 # Output: False
3 >= 5 # Output: False
```

## Logical Operators

Python has the following logical operators:

- The `and` operator returns `True` if both statements are `True`.
- The `or` operator returns `True` if either statement is `True`.
- The `not` operator returns `True` if its associated statement is `False`.

The following code demonstrates how to use logical operators in Python:

```py
x = 10
y = 5
z = 15

# Logical AND
and_result = (x > y) and (z > x) # True and True -> Output: True

# Logical OR
or_result = (x < y) or (z > y) # False or True -> Output: True

# Logical NOT
not_result = not (x < y) # not False -> Output: True
```

## Ternary Operators

Ternary operators in Python provide a shorthand way of writing simple `if-else` statements. They are often used for conditional expressions or evaluations.

### Syntax

```pseudo
value_if_true if condition else value_if_false
```

The expression evaluates the `condition`, and if it is `True`, it returns `value_if_true`. Otherwise, it returns `value_if_false`.

```py
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status) # Output: Adult
```

## Membership Operators

Membership operators test whether a value exists within an iterable object like a list, string, or dictionary.

- The `in` operator returns `True` if the element on the left is found in the iterable object on the right.
- The `not in` operator returns `True` if the element on the left is not found in the iterable object on the right.

Below is an example that shows how to use the membership operators in Python:

```py
x = "a" in "apple" # Output: True
y = "z" not in "apple" # Output: True
```

## Order of Operations

Python evaluates an expression in order of precedence as follows:

- Items in parentheses, (`(`...`)`), have the highest level of precedence, expressions within them are evaluated first.
- Exponentiation (`**`)
- Multiplication and division operators (`*`, `/`, `//` & `%`)
- Addition and subtraction (`+` & `-`)
- Comparison (`<`, `<=`, `>` & `>=`)
- Equality (`==` & `!=`)
- `not`
- `and`
- `or`

Below is an example that shows the order of operations in an expression in Python:

```py
result = 3 + 2 * (4 ** 2) / 2
print(result) # Output: 19.0
```

> **Note:** Items at the same precedence are evaluated left to right. The exception to this is exponentiation, which evaluates right to left.

## Codebyte Example

The following code demonstrates the use of various operators in Python, including arithmetic, comparison, logical, ternary, and membership operators:

```codebyte/python
a = 10
b = 5

# Arithmetic Operators
sum = a + b
difference = a - b
product = a * b
quotient = a / b
modulus = a % b

print(f"Sum: {sum}, Difference: {difference}, Product: {product}, Quotient: {quotient}, Modulus: {modulus}.")

# Comparison Operators
is_equal = (a == b)
is_greater = (a > b)

print(f"Is Equal: {is_equal}, Is Greater: {is_greater}")

# Logical Operators
logical_and = is_equal and is_greater
logical_or = is_equal or is_greater

print(f"Logical AND: {logical_and}, Logical OR: {logical_or}")

# Ternary Operators
status = "Greater" if a > b else "Smaller or Equal"

print(f"Status: {status}")

# Membership Operators
letter = 'a'
word = 'apple'
membership_check = letter in word

print(f"Is '{letter}' in '{word}': {membership_check}")
```
