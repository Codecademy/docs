---
Title: 'Strings'
Description: 'Strings are a primitive data type that can be a sequence of characters surrounded by single or double quotes.'
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

**Strings** are a primitive data type that can be any sequence of characters, including letters, numbers, symbols, and spaces, surrounded by single `'` or double quotes `"`. Strings are used to represent and manipulate text or sequences of characters.

## Syntax

```pseudo
local string = "Any text can be here" -- Using double quotes
local anotherString = '123' -- Using single quotes
local emptyString = '' -- '' or "" can be used
```

The 'string' variable contains a string defined with double quotes. The 'anotherString' variable contains a string defined with single quotes. The 'emptyString' variable contains no characters and is called an empty string.

## Concatenation

Multiple strings can be concatenated or joined using the `..` operator. The following example shows how the 'firstName' and 'lastName' variables are concatenated into one sentence:

```pseudo
local firstName = 'Aragorn'
local lastName = 'son of Arathorn'
print('I am ' .. firstName .. ' ' .. lastName .. '.') -- Output: "I am Aragorn son of Arathorn."
```

## Escape Sequences

Luau supports escape sequences that are essential in strings to represent special characters or formatting that cannot be directly typed. For example, escape sequences allow you to include characters like double quotes or single quotes within a string without causing syntax errors. These sequences begin with a backslash `\` followed by a character. The table below shows some common escape sequences:

| Escape Sequence | Description     |
| --------------- | ----------------|
|`\"`             | Double quote    |
|`\'`             | Single quote    |
|`\n`             | New line        |
|`\\`             | Backslash       |
|`\b`             | Backspace       |
|`\t`             | Tab             |
|`\v`             | Vertical tab    |
|`\a`             | Bell (alert)    |
|`\f`             | Form feed       |
|`\r`             | Carriage return |

The following example shows the usage of the '\n' characters to represent newlines in a string:

```pseudo
local secretMessage = 'One ring to rule them all,\none ring to find them,\nOne ring to bring them all\nand in the darkness bind them.'

print(secretMessage)
-- Output:
-- One ring to rule them all,
-- one ring to find them,
-- One ring to bring them all
-- and in the darkness bind them.
```

## String Length

A shorthand for defining the length of a string, the number of characters, inclusive spaces, the `#` operator can be used:

```pseudo
local text = 'One Does Not Simply Walk into Mordor.'
local length = #text
print(length) -- Output: 37
```

In addition to the shorthand notation using the `#` operator, you can also calculate the length of a string using the `string.len()` function.

## String Functions

Luau provides various built-in string functions to manipulate and work with strings. The example below shows how the `.upper()` string function is used on a string to change the characters of a string into uppercase:

```pseudo
local name = 'bilbo baggins'
print(name.upper()) -- Output: BILBO BAGGINS
```

Below is a list of the most common built-in string functions.
