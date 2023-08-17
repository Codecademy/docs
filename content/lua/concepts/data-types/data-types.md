---
Title: 'Data Types' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Data types govern the range of values and functionality of objects in a language.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Booleans'
  - 'Strings'
  - 'Numbers'
  - 'Data Types'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-lua'
  - 'paths/computer-science'
---

Lua, like Python and Ruby, is a dynamically typed language, which means the **data type** does not have to be explicitly declared with the variable.

## Data Classes

Lua has eight basic data types, which include: `boolean`, `function`, `nil`, `number`, `string`, `table`, `thread`, `userdata`. Some of the most commonly used are demonstrated below.

```lua
-- A boolean
flag = false
-- A string, strings can be declared with single or double quotes
name = "John Doe"
-- A number, in Lua there is not an integer type
num = 13
-- A function
function foo () return "bar" end
```

## type()

Lua has a built-in `type()` function to retrieve the data type.

```lua
location = 'Maple Road'
print(type(location)) -- This outputs "string"

print(type(12/3)) -- This outputs "number"
```

## Type Conversion

In Lua, **type coercion** automatically happens when strings and numbers are concatenated or when a string with a numeric value appears in an arithmetic expression.

```lua
--  The first type coercion is used in a concatenation to change a number to a string.

temperature = 56

print('Today’s temperature is ' .. temperature .. ' degrees.') -- This prints “Today’s temperature is 56 degrees.”

-- The second type of coercion is used during arithmetic expressions.
print('53' + 7)

-- This outputs 60 because it converted “53” to a number for the arithmetic.
```

Types can be manually converted by using the `tostring()` function to convert any data type to a string type:

```lua
player1Pts = 55

print('Player 1 has ' .. tostring(player1Pts) .. ' points')
-- This prints “Player 1 has 55 points”
```

The `tonumber()` function is used to convert any data type to a number type:

```lua
totalGuests = '30'

print(tonumber(totalGuests) / 5)
-- This prints 6
```
