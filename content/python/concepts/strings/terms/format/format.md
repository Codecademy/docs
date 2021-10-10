---
Title: '.format()'
Description: 'Formats the string by inserting the objects which are passed into the arguments to the placeholders in the string'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

Formats the string by inserting the objects which are passed into the arguments to the placeholders in the string.

`{}` is a placeholder. All the arguments specified in the format method will be replacing the placeholders in the string.

## Syntax

```py
string.format(obj1, obj2, ...)
```

## Example 1

Using plain placeholders `{}`.

```codebyte/python
string1 = "I like to eat {} and {}"
new_string = string1.format("apple", "orange")
print(new_string)
# output: I like to eat apple and orange
```

## Example 2

Using numbered placeholders `{0,1,2,...}`.

```codebyte/python
string1 = "I like to eat {0} and {1}"
new_string1 = string1.format("apple", "orange")

string2 = "I like to eat {1} and {0}"
new_string2 = string2.format("apple", "orange")

print(new_string1)
print(new_string2)
# output:
# I like to eat apple and orange
# I like to eat orange and apple
```

## Example 3

Using keyword placeholders `{food1, food2, ...}`.

```codebyte/python
string1 = "I like to eat {food1} and {food2}"
new_string1 = string1.format(food1="apple", food2="orange")

string2 = "I like to eat {food2} and {food1}"
new_string2 = string2.format(food1="apple", food2="orange")

print(new_string1)
print(new_string2)
# output:
# I like to eat apple and orange
# I like to eat orange and apple
```

## Example 4

Combining both numbered and keyword placeholders `{0, food1, ...}`

```codebyte/python
string1 = "I like to eat {food1} and {0}"
new_string1 = string1.format("orange", food1="apple")

string2 = "I like to eat {0} and {food1}"
new_string2 = string2.format("orange", food1="apple")

print(new_string1)
print(new_string2)
# output:
# I like to eat apple and orange
# I like to eat orange and apple
```
