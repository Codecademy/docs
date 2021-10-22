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

They are usually contained within a pair of `'single quotes'` or `"double quotes"`.

## Examples of Strings

Here are some examples of strings:

```py
message = "Hello, world!"
username = "@sonnynomnom"
old_password = "Tr0ub4dor&3"
new_password = "correcthorsebatterystaple"
```

## Finding the Character in a String Given its Index (Python)

Like any other list, each character in a string has an index that denotes a character's position. For the Python example above, to provide the index of the string `message`, add square brackets `[` `]` to find out the character at that position. 

**Note:** In programming, the index starts from 0, so the index of the first character would be 0.

```py
message = "Hello, world"

print(message[0])
# Output: H

print(message[5])
# Output: ,
```

## Example of Concatenation

It is also possible to concatenate strings together using `+` in some languages, such as Python and C++.

```codebyte/py
block_number = "60"
street_name = "Sixth Avenue"

address = block_number + street_name

print(address)
```
