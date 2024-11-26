---
Title: 'List Comprehensions'
Description: 'Create lists concisely by applying an expression to each item in an iterable, with optional filtering based on a condition.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Lists'
  - 'Arrays'
  - 'Objects'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**List comprehensions** create lists concisely by applying an expression to each item in an iterable, with optional filtering based on a condition.
They are often more readable and concise than traditional loops, making them a preferred method for list creation in Python.

A list comprehension includes an expression, a **for** clause, and optionally an **if** clause for filtering elements.

## Syntax

```pseudo
[expression for item in iterable if condition]
```

- `expression`: The expression or transformation to apply to each item in the iterable.
- `item`: The current element from the iterable.
- `iterable`: The collection (such as a list, range, or string) to iterate over.
- `condition` (Optional): A filter that only includes elements satisfying the condition.

## Example

### Example 1: Basic List Comprehension

The following list comprehension generates a list of squares for the numbers 0 through 4:

```py
squares = [x ** 2 for x in range(5)]
print(squares)
```

The output will be as follows :

```shell
[0, 1, 4, 9, 16]
```

In the above example, the expression `x ** 2` is applied to each number in the range `0` to `4`, generating the list of squared values.

### Example 2: List Comprehension with a Condition

This example generates a list of even squares for the numbers 0 through 9:

```py
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(even_squares)
```

The output will be as follows :

```shell
[0, 4, 16, 36, 64]
```

Here, the if `x % 2 == 0` condition filters out odd numbers, and only the squares of even numbers are included in the result.

### Example 3: List Comprehension with Multiple Loops

Multiple `for` loops can also be used in a list comprehension. The below example creates a list of pairs (tuples) from two lists :

```py
pairs = [(x, y) for x in range(3) for y in range(3)]
print(pairs)
```

The output will be as follows :

```shell
[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

In this example, the comprehension generates all possible pairs (tuples) from the numbers `0`, `1`, and `2` by combining them.

## Codebyte Example

Imagine we're grading a class of students and want to create a list of students who passed. A list comprehension makes it easy to filter and label grades.

```codebyte/python
# List of student grades
grades = [85, 62, 78, 90, 45, 55, 72]

# Get grades for students who passed (>= 60) and label them as "Pass"
passed_students = [f"Pass: {grade}" for grade in grades if grade >= 60]

# Print the results
print("Passed Students:", passed_students)
```
