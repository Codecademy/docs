---
Title: 'Strings'
Description: 'A string is a sequence of characters contained within a pair of single quotes or double quotes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Data Types'
  - 'Formatting'
  - 'Lists'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **string** in Python is a sequence of characters contained within a pair of single quotes (`'`) or double quotes(`"`). Strings can store words, sentences, or whole paragraphs. They can be of any length and can contain letters, numbers, symbols, and spaces.

## Creating a String in Python

Here's how a string in Python can be created:

```py
message1 = "I am a string"
message2 = 'I am also a string'
```

Other [data types](https://www.codecademy.com/resources/docs/python/data-types) such as integers, float, and booleans can also be strings if they are wrapped in quotes:

| Example                    | String? |
| -------------------------- | ------- |
| "2" (with double-quotes)   | Yes     |
| '3.6' (with single-quotes) | Yes     |
| "True" (also in quotes)    | Yes     |
| 7 (integer)                | No      |
| Hello (no quotes)          | No      |
| True (boolean)             | No      |

Strings are immutable, meaning they cannot change. Every time an operation is performed on a string, a new string is created in memory.

## Accessing the Characters of a String in Python

A string in Python is a sequence of characters. Like [lists](<(https://www.codecademy.com/resources/docs/python/lists)>), strings support indexing and slicing. This means each character in a string can be individually accessed by index, like with the elements in a list:

```py
myString = "Hello, World!"

var_1 = myString[0]
var_2 = myString[7:]
var_3 = myString[1:4]

print("var_1: " + var_1) # Output: var_1: H
print("var_2: " + var_2) # Output: var_2: World!
print("var_3: " + var_3) # Output: var_3: ell
```

If an attempt is made to access an index out of bounds, it will return an `IndexError`:

```py
name = "phillis"
name[8] # Throws an IndexError
```

## Multi-line Strings in Python

A string in Python can be long or short. For longer text, a multi-line string can be used. Multi-line strings begin and end with three single or double quotes:

```py
my_string = """This is a
multi-line
string."""
```

## Escape Characters in a String in Python

Sometimes, a string in Python may have a character that Python tries to interpret, such as `'`:

```py
my_string = 'It's a lovely day!'

print(my_string)
```

This will raise an error, because the interpreter thinks the second `'` marks the end of the string:

```shell
  File "main.py", line 1
    my_string = 'It's a lovely day!'
                    ^
SyntaxError: invalid syntax
```

These characters can be "escaped" by adding a backslash beforehand. The `\` is called an escape character.

The backslash will not be visible if the string is printed:

```py
my_string = 'It\'s a lovely day!'

print(my_string) # Output: It's a lovely day!
```

This problem can be avoided by wrapping strings containing `'` characters in double quotes:

```py
my_string = "It's a lovely day!"

print(my_string) # Output: It's a lovely day!
```

Python also has a series of non-printing characters that can modify strings. For example, `\n` adds a new line and `\t` adds a tab:

```py
note = "I am on top!\nI am on bottom. \n\tI am indented!"

print(note)
```

This will output:

```shell
I am on top!
I am on bottom.
  I am indented!
```

## Modifying a String in Python

Python has special [operators](https://www.codecademy.com/resources/docs/python/operators) to modify strings. For example, `+` can be used to concatenate strings and `*` can be used to multiply a string. The keyword `in` can be used to see if a given character or substring exists in a `string`:

```py
string_one = "Hello, "
string_two = "World! "
combo = string_one + string_two

print(combo) # Output: Hello, World!

new_combo = combo * 2

print(new_combo) # Output: Hello, World! Hello, World!

if "World" in new_combo:
  print("It's here!") # Output: It's here!
```

Strings can also be formatted with either of the following:

- The `f/F` flag (placed before the opening quotation mark).
- The [`.format()`](https://www.codecademy.com/resources/docs/python/strings/format) method (requires manually adding placeholders).

## Comparing Strings in Python

Python can use comparison operators to compare the contents of two strings. The operators behave as they do with numeric arguments:

| Operator |           Term           | Description                                                                              |
| :------: | :----------------------: | ---------------------------------------------------------------------------------------- |
|   `==`   |          Equal           | Returns `True` if two strings are equal.                                                 |
|   `!=`   |        Not equal         | Returns `True` if two strings are not equal.                                             |
|   `<`    |        Less than         | Returns `True` if the left string is lexically prior to the right string.                |
|   `>`    |       Greater than       | Returns `True` if the left string comes lexically after the right string.                |
|   `<=`   |  Less than or equal to   | Returns `True` if the left string is equal to or lexically prior to the right string.    |
|   `>=`   | Greater than or equal to | Returns `True` if the left string is equal to or comes lexically after the right string. |

This codebyte example demonstrates string comparison in Python:

```codebyte/python
string_one = "Hello"
string_two = "World"

print(string_one > string_two)
print(string_one < string_two)
```

## Frequently Asked Questions

### 1. How to concatenate two strings in Python?

You can use the `+` operator or `.join()` method to concatenate strings in Python:

```py
"Hello" + " " + "World"  # Using +
" ".join(["Hello", "World"])  # Using join()
```

### 2. How can I slice a string in Python?

String slicing in Python uses the format `string[start:stop:step]`:

```py
text = "HelloWorld"
print(text[1:5])  # Output: ello
```

### 3. What are the 4 string functions in Python?

Here are some common Python string methods:

- `.lower()`: Converts to lowercase
- `.upper()`: Converts to uppercase
- `.strip()`: Removes whitespace
- `.replace()`: Replaces substrings
- `.split()`: Splits the string into a list
- `.find()`: Finds the index of a substring
