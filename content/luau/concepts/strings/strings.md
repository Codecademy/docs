---
Title: 'Strings'
Description: 'Strings are a primitive data type, that can be sequence of characters surrounded by single quotes or double quotes.'
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

The 'string' variable contains a string that was defined with double quotes. The 'anotherString' variable contains a string that was defined with single quotes. The 'emptyString' variable contains no characters, and it is called as an empty string.

## Concatenation

Multiple strings can be concatenated or joined together using  `..` operator. The following example shows how 'firstName' and 'lastName' variables are concatenated into one sentence:

```pseudo
local firstName = 'Aragorn'
local lastName = 'son of Arathorn'
print('I am ' .. firstName .. lastName .. '.') -- Output: "I am Aragorn son of Arathorn."
```

## Escape Sequences

Luau supports escape sequences within strings to represent special characters. Some common escape sequences are:

- `\"` to represent a double quote
- `\'` to represent a single quote
- `\n` to represent a newline
- `\\` to represent a backslash
- `\b` to represent a backspace
- `\t` to represent a tab.

The following example shows the usage of the '\n' characters to represent newlines in a string:

```pseudo
local secretMessage = "One ring to rule them all,\none ring to find them,\nOne ring to bring them all\nand in the darkness bind them."

print(secretMessage)
-- Output:
-- One ring to rule them all,
-- one ring to find them,
-- One ring to bring them all
-- and in the darkness bind them.
```

The following is a list of some useful escape characters supported by Lua strings:

| Description                   | Escape Characters |
| ----------------------------- | ----------------- |
| bell                          | `\a`              |
| backspace                     | `\b`              |
| form feed                     | `\f`              |
| new line                      | `\n`              |
| carriage return               | `\r`              |
| horizontal tab                | `\t`              |
| vertical tab                  | `\v`              |
| backslash                     | `\\`              |
| quotation mark [double quote] | `\"`              |
| apostrophe [single quote]     | `\'`              |

## String Functions

Lua's string library contains many different string functions that can be used to manipulate strings. These functions include the following:
