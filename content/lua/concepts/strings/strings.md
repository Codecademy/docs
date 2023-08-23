---
Title: 'Strings' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Strings are a sequence of characters of any length that can include letters, numbers, symbols, and spaces.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Strings'
  - 'Characters'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

**Strings** are a sequence of characters of any length that can include letters, numbers, symbols, and spaces.

## Syntax

In Lua, a string is a sequence of characters surrounded by a pair of single quotes `''` or double quotes `""`.

```lua
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
