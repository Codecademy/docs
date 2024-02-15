---
Title: '.format()'
Description: 'Creates formatted strings.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`.format()`** method is used to create formatted strings by replacing placeholders with specified values.

## Syntax

```pseudo
string.format(format, value1, value2, ...)
```

- `format`: A format string that defines the structure of the output string. It contains placeholders and formatting options.
- `value1`, `value2`, etc. (optional): Values to be inserted into the placeholders within the format string.

Here are some common placeholders and formatting options:

`%s`: Placeholder for a string.
`%d` or `%i`: Placeholder for an integer.
`%f`: Placeholder for a floating-point number (decimal).
`%x` or `%X`: Placeholder for a hexadecimal number.
`%.nf`: Designates the number of decimal places (e.g. `%.2f` for two decimal places).
`%c`: Placeholder for a character.
`%%`: Literal % character.

The following example demonstrates an implementation of `string.format()` :

## Example 1

```lua
local name = "Angel"
local height = 5.587
local age = 20

local formatted = string.format("Hello, my name is %s, I am %.1f ft tall and I am %d years old.", name, height, age)
print(formatted)
```

This will return the following output:

```shell
Hello, my name is Angel, I am 5.6 ft tall and I am 20 years old.
```

## Example 2

The following example demonstrates the use of `string.format()` with a hexadecimal value.

```lua
local number = 255

local formatted = string.format("Hexadecimal: %X", number)
print(formatted)
```

This will return the following output:

```shell
Hexadecimal: FF
```
