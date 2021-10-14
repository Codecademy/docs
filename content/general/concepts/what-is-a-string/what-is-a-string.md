---
Title: 'String'
Description: 'In computer science, sequences of characters are referred to as strings. Strings can be any length and can include any character such as letters, numbers, symbols, whitespace (spaces, tabs, new lines). It is usually contained within a pair of single quotes or "double quotes". A string can be thought of as a list of characters. Like any other list, each character in a string has an index.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-python-3'
  - 'paths/code-foundations'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

In computer science, sequences of characters are referred to as strings. Strings can be any length and can include any character such as:

- Letters
- Numbers
- Symbols
- Whitespace (spaces, tabs, new lines)

It is usually contained within a pair of `'single quotes'` or `"double quotes"`.


## Example of strings

Here are some examples of strings:

```py
message = "Hello, world!"
username = "@sonnynomnom"
old_password = "Tr0ub4dor&3"
new_password = "correcthorsebatterystaple"
```
Like any other list, each character in a string has an index, which denotes the position of the character in the string. For the example above, if we provide the index of the string `message`, we can add `[]` after the string to find out the character at that position. Do note that in programming, the index starts from 0, so the index of the first character would be 0.

## To find out the character in a string given its index (Python)

```codebyte/py
message = "Hello, world"
print (message[0])
print (message [5])
```

It is also possible to concatenate strings together using `+` in some languages, such as Python and C++.

## Example of concatenation

```codebyte/py
Block number = "60"
Street name = "Sixth Avenue"
Address = Block number + Street name
print (Address)
