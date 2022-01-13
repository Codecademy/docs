---
Title: 'Strings'
Description: 'A string is a sequence of characters contained within a pair of single quotes or double quotes. Strings can be of any length and can contain letters, words, spaces, and symbols. Other data types such as integers, doubles, and booleans can also be strings so long as they are wrapped in quotes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Strings'
  - 'Lists'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A string is a sequence of characters contained within a pair of single quotes (`'`) or double quotes(`"`). Strings can store words, sentences, or whole paragraphs. They can be any length and can contain letters, numbers, symbols, and spaces.

```py
message1 = "I am a string"
message2 = 'I am also a string'
```

Other data types such as `integers`, `doubles`, and `booleans` can also be `strings` provided that they are wrapped in quotes.

All of the following are strings:

```py
"2"
'3.6'
"True"
```

However, none of the following are strings:

```shell
7
Hello
True
```

Strings are immutable; they cannot change. Every time an operation is performed on a string, a new string is created in memory.

## Accessing the Characters of a String

A string can be thought of as a list of characters. Each character has an index, starting at 0:

```py
name = "phillis"
name[0] # "p"
```

If you try to access an index out of bounds, it will return an `IndexError`.

```py
name = "phillis"
name[8] # Throws an IndexError
```

## Multi-line Strings

Strings can be long or short. If your text is long, you may want to use a multi-line string. Multi-line strings begin and end with three single or double quotes:

```py
my_string = """If it were done when 'tis done, then 'twere well
It were done quickly: if the assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all here,
But here, upon this bank and shoal of time,
We'ld jump the life to come."""
```

## Escape Characters

Sometimes a string may have a character that Python tries to interpret, such as `'`.

```py
my_string = 'It's a lovely day!'

print(my_string)
```

This will raise an error, because the interpreter thinks the second `'` marks the end of the string.

```error
  File "main.py", line 1
    my_string = 'It's a lovely day!'
                    ^
SyntaxError: invalid syntax
```

These characters can be "escaped" by adding a backslash beforehand. The `\` is called an escape character.

The backslash will not be visible if the string is printed:

```py
my_string = 'It\'s a lovely day!'

print(my_string)
# Output: It's a lovely day!
```

This problem can be avoided by wrapping strings containing `'` characters in double quotes:

```py
my_string = "It's a lovely day!"

print(my_string)
# Output: It's a lovely day!
```

Python also has a series of non-printing characters that can modify strings. For example, `\n` adds a new line and `\t` adds a tab:

```codebyte/py
note = "I am on top!\nI am on bottom. \tI am indented!"

print(note)
```

## Modifying Strings

Python has special operators to modify strings. For example, `+` can be used to concatenate strings, and `*` can be used to duplicate a string. The keyword `in` can be used to see if a given character or substring exists in a `string`.

```py
string_one = "Hello, "
string_two = "World! "
combo = string_one + string_two

print(combo)
# Output: Hello, World!

new_combo = combo * 2

print(new_combo)
# Output: Hello, World! Hello, World!

if "World" in new_combo:
  print("It's here!")
  # Output: It's here!
```

Strings in Python are technically a type of list—one in which each character is a separate element in that list. This means each letter in a string can be accessed by indexing, as with the elements in a list:

```codebyte/py
myString = "Hello, World!"

var_1 = myString[0]
var_2 = myString[7:]
var_3 = myString[1:4]

print("var_1: " + var_1)
print("var_2: " + var_2)
print("var_3: " + var_3)
```

## Built-in String Methods

Python has a number of built-in string methods that manipulate strings. However, when these methods are called, the original string will not be changed, so any modifications will need to be saved to a new variable. A few useful built-in string methods are listed below.
