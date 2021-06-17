---
Title: "round()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags: 
  - "Integers"
  - "Floats"
  - "Functions"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---

## Definition 

Takes a number and an integer as parameters, and returns the number with decimal places equal to the integer.

## Syntax

```python
round(number, integer)
```

## Example 1

The default number of decimal places used is 0.

```python
my_number = 3.14159265359

my_rounded_number = round(my_number)

print(my_rounded_number)
# Output: 3
```

## Example 2

`round()` can be used with any number of decimal places. Numbers `>=` 5 will round up.

```python
my_number = 3.14159265359

my_rounded_number = round(my_number, 4)

print(my_rounded_number)
# Output: 3.1416
```

## Example 3

`round()` can be useful when comparing numbers, for example, when comparing fractions and decimals.

```codebyte/py
my_num = 0.333
my_frac = 1/3

print("Before Rounding:")
print(f"my_num: {my_num}")
print(f"my_frac: {my_frac}")

print("\n After Rounding:")
print(f"my_num: {round(my_num, 2)}")
print(f"my_frac: {round(my_frac, 2)}")
```
