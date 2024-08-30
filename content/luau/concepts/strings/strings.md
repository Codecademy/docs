---
Title: 'Strings'
Description: 'Strings are a primitive data type that consist of one or more characters surrounded by quotes.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'learn-lua'
  - 'introduction-to-game-development'
---

**Strings** are a primitive data type that consist of one or more characters surrounded by single or double quotes. Strings are used to represent and manipulate text or character sets.

## Syntax

```pseudo
local string = 'Any text can be here' -- Using single quotes
local anotherString = "123" -- Using double quotes
local emptyString = '' -- Empty string
```

To declare a string in Luau, enclose any sequence of characters, including letters, numbers, symbols, and spaces, within either single quotes (`'`) or double quotes (`"`). An empty string can be declared using two consecutive quotes (`''` or `""`).

## Concatenation

Multiple strings can be concatenated or joined using the `..` operator. The following example shows how the `firstName` and `lastName` variables are concatenated into one sentence:

```lua
local firstName = 'Aragorn'
local lastName = 'son of Arathorn'

print('I am ' .. firstName .. ', ' .. lastName .. '.')
-- Output: I am Aragorn, son of Arathorn.
```

## Escape Sequences

Luau supports escape sequences essential in strings to represent special characters or formatting that cannot be directly typed. For example, escape sequences permit the use of characters like double quotes or single quotes within a string without causing syntax errors. These sequences begin with a backslash (`\`) followed by another character. The table below shows some common escape sequences:

| Escape Sequence | Description     |
| --------------- | --------------- |
| `\"`            | Double quote    |
| `\'`            | Single quote    |
| `\n`            | Newline         |
| `\\`            | Backslash       |
| `\b`            | Backspace       |
| `\t`            | Tab             |
| `\v`            | Vertical tab    |
| `\a`            | Bell (alert)    |
| `\f`            | Form feed       |
| `\r`            | Carriage return |

The following example shows the usage of the newline escape characters (`\n`) to represent newlines in a string:

```lua
local secretMessage = 'One ring to rule them all,\none ring to find them,\nOne ring to bring them all\nand in the darkness bind them.'

print(secretMessage)
-- Output:
-- One ring to rule them all,
-- one ring to find them,
-- One ring to bring them all
-- and in the darkness bind them.
```

## String Length

The `#` operator is a shortcut to determine the length of a string - the number of characters, including spaces. The example below uses the `#` operator to determine the number of characters in a text:

```lua
local text = 'One Does Not Simply Walk into Mordor.'
local length = #text

print(length)
-- Output: 37
```

In addition to the shorthand notation with the `#` operator, the length of a string can also be calculated using the `string.len()` function.

## String Functions

Luau provides various built-in string functions to manipulate and work with strings. The example below demonstrates the use of the `.upper()` string function to convert all characters in a string to uppercase:

```lua
local name = 'bilbo baggins'
print(string.upper(name))
-- Output: BILBO BAGGINS
```

Below is a list of the most common built-in string functions.
