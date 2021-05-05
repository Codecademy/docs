<!--
---
Title: "Strings in Python" 
Subjects:
  - "code foundations"
  - "welcome series"
  - 
Tags: # Please first look to use tags that are already listed at author.codecademy.com/browse/tags
  - "strings"
  - "multi-line strings"
  - "arrays"
  - "class"
  - "code foundations"
  - "type"
Catalog Content: 
  - https://www.codecademy.com/learn/learn-python-3"
---
-->

## What is a String?

In Python, as in other programming languages, a `string` is a data type that refers to simple text. 
A `string` is designated with either double quotes or single quotes:

```python
"I am a string"
'I am also a string'
```

Other data types such as `integers`, `doubles` and `booleans`, can also be `strings` as long as they are wrapped in quotes:

All of the below are strings:
```python
"2"
'3.6'
"True"
```

All of the below are **NOT** strings:
```python
7
Hello
True
```

Just like other data types, strings can be assigned to variables:

```python
my_string = "Hello, World!"
print(type(my_string))
# Output: <class 'str'>
```

## Formatting Strings

`Strings` can be long or short. However, if your text is long, you may
want to use a `multi-line string`. `Multi-line strings` begin and end with three double or single quotes:

```python
myString = """If it were done when 'tis done, then 'twere well
It were done quickly: if the assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all here,
But here, upon this bank and shoal of time,
We'ld jump the life to come."""
```

Sometimes a string may have a character that python tries to interpret such as `"`. These characters can be "escaped" by adding a backslash beforehand. The backslash will not be visible if the string is printed:

```python
myString = 'It\'s a lovely day!'
print(myString)
# Output: It's a lovely day!
```  

Python also has a series of non-printable characters that can modify strings. For example, `\n` will add a new line, and `\t` will add a tab:

`<Codebyte>`
```python
myString = "I am on top \nand I am on bottom. \t I am indented!"
print(myString)
```
`</Codebyte>`


## Modifying Strings

Python has **special operators** to modify `strings`. For example, we can use `+` to concatenate two `strings` or `*` to duplicate a `string`. We can also use the keyword `in` to see if a given character exists in a `string`.

```python
string_one = "Hello, "
string_two = "World! "
combo = string_one + string_two
print(combo) # Output: Hello, World!

new_combo = combo * 2
print(new_combo) # Output: Hello, World! Hello, World!

if "World" in new_combo:
	print("It's here!") # Output: "It's here!" 
```

`Strings` in python are technically a type of array, where each character is a separate element in that array. That means we can access different letters in our `string` the same way we can access items in a list:


`<Codebyte>`
```python
myString = "Hello, World!"
var_1 = myString[0]
var_2 = myString[7:]
var_3 = myString[1:4]
print("var_1: " + var_1)
print("var_2: " + var_2)
print("var_3: " + var_3) 
```
`</Codebyte>`


## Built-in String Methods

Python has many built in string methods to manipulate strings. However, when these methods are called, the original string will not be changed, so any modifications will need to be saved to a new variable. A few useful built-in string methods are:

```python
upper() # Converts string to all capital letters
lower() # Converts string to all lowercase letters
title() # Capitalizes the first letter of every word
strip() # Removes leading or trailing whitespace
```

`<Codebyte>`
```python
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
`</Codebyte>`


