---
Title: 'String'
Description: 'Stores a sequence of indexed characters that can be of any length and is contained within a pair of single or double quotes.'
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
---

In computer science, sequences of characters are referred to as **strings**. Strings can be any length and can include any character such as:

- Letters
- Numbers
- Symbols
- Whitespace (spaces, tabs, new lines)

They are usually contained within a pair of `'single quotes'` or `"double quotes"`.

Here are some examples of strings:

```py
message = "Hello, world!"
username = "@sonnynomnom"
old_password = "Tr0ub4dor&3"
new_password = "correcthorsebatterystaple"
```

## Index

Like any other list, each character in a string has an index that denotes a character's position.

```pseudo
message = 'Howdy!'
           012345
```

**Note:** In programming, the index starts from 0, so the index of the first character would be 0.

## Finding the Character in a String Given its Index (Python)

In Python, to provide the index of the string `message`, add square brackets `[` `]` to find out the character at that position.

```py
message = 'Hello, world'

print(message[0])
# Output: H

print(message[5])
# Output: ,
```

## Example of Concatenation (Python)

It is also possible to concatenate strings together using `+` in some languages, such as Python and C++. To add a space between strings, an empty space can be put between quotation marks.

```codebyte/py
block_number = "575"
street_name = "Broadway"

address = block_number + ' ' + street_name

print(address)
```

## Strings in Different Languages

- [Strings in C++](https://www.codecademy.com/resources/docs/cpp/strings)
- [Strings in Java](https://www.codecademy.com/resources/docs/java/strings)
- [Strings in JavaScript](https://www.codecademy.com/resources/docs/javascript/strings)
- [Strings in Python](https://www.codecademy.com/resources/docs/python/strings)
- [Strings in Ruby](https://www.codecademy.com/resources/docs/ruby/strings)
