---
Title: "Strings in Python" 
Subjects:
  - "Code Foundations"
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Strings"
  - "Lists"
  - "Data Types"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
---

A string is a sequence of characters contained within a pair of single quotes (`'`) or double quotes(`"`). They provide a way to store something like a word, sentence, or whole paragraph. They can be any length and can contain letters, numbers, symbols, and spaces.

```py
message1 = "I am a string"
message2 = 'I am also a string'
```

Other data types such as `integers`, `doubles` and `booleans`, can also be `strings` as long as they are wrapped in quotes:

All of the below are strings:
```py
"2"
'3.6'
"True"
```

All of the below are not strings:

```py
7
Hello
True
```

Strings are immutable, or cannot change. Each time we perform an operation on a string, it will create an entirely new string.

## Accessing Characters of a String

A string can be thought of as a list of characters. Each character has an index, starting from 0.

```py
name = "phillis"
name[0] # "p"
```

If you try to access an index out of bounds, it will return an `IndexError`. 
```py
name = "phillis"
name[8] # Throws an IndexError
```

## Formatting Strings

Strings can be long or short. If your text is long, you may want to use a multi-line string. Multi-line strings begin and end with three double or single quotes:

```py
myString = """If it were done when 'tis done, then 'twere well
It were done quickly: if the assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all here,
But here, upon this bank and shoal of time,
We'ld jump the life to come."""
```

Sometimes a string may have a character that python tries to interpret such as `"`. These characters can be "escaped" by adding a backslash beforehand. The backslash will not be visible if the string is printed:

```py
myString = 'It\'s a lovely day!'

print(myString)
# Output: It's a lovely day!
```  

Python also has a series of non-printable characters that can modify strings. For example, `\n` will add a new line, and `\t` will add a tab:

```codebyte/py
myString = "I am on top \nand I am on bottom. \t I am indented!"
print(myString)
```

## Modifying Strings

Python has special operators to modify strings. For example, we can use `+` to concatenate two strings or `*` to duplicate a string. We can also use the keyword `in` to see if a given character exists in a `string`.

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

Strings in Python are technically a type of a list, where each character is a separate element in that list. That means we can access different letters in our string the same way we can access items in a list:

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

Python has many built in string methods to manipulate strings. However, when these methods are called, the original string will not be changed, so any modifications will need to be saved to a new variable. A few useful built-in string methods are:

```python
upper() # Converts string to all capital letters
lower() # Converts string to all lowercase letters
title() # Capitalizes the first letter of every word
strip() # Removes leading or trailing whitespace
```

```codebyte/py
myString = " Hello, World! "
a = myString.upper()
print(a)
b = myString.lower()
print(b)
c = myString.title()
print(c)
d = myString.strip()
print(d)
```
