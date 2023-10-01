---
Title: 'OStrings'
Description: 'Strings are a sequence of characters of any length that can include letters, numbers, symbols, and spaces.'
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

**Strings** are a sequence of characters of any length that can include letters, numbers, symbols, and spaces.

## Syntax

In Lua, a string is a sequence of characters surrounded by a pair of single quotes `''` or double quotes `""`.

```pseudo
location = "Central Park" -- "Central Park" is a string
```

## Concatenation

Multiple strings can be combined together using the concatenation operator `..`.

```lua
time = 10
location = "Central Park"
print("We will arrive at " .. location .. " at ".. time)
```

## Escape Characters

Escape characters are used for clarity and conciseness. Sometimes, Lua may interpret a character in a string, which can cause errors. To avoid this, escape characters can be used to clarify that a character should be read as a string.

```lua
brokenString = "They said, "Hello!"" -- This will cause "Hello!" to be outside of the string

revisedString = "They said, \"Hello!\"" -- This will keep "Hello!" inside of the string using escape characters
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
