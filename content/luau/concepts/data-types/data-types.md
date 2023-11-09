---
Title: 'Data Types'
Description: 'Luau Data Types represents the type of assigned value to the variable.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Booleans'
  - 'Data Types'
  - 'Numbers'
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-luau'
  - 'paths/computer-science'
---

**Luau** use Lua 5.1 as its base which mean Luau is also dynamically typed language. Type of data is automatically assign based on the value. Data types in Luau represents the type of assigned value to the variable.

## Basic Data Types

Luau supports eight builtin data types from Lua, which are:

- `nil` represent the absence of value or different type value from others.
- `boolean` hold the values of true and false.
- `number` has numbers as value.
- `string` which has string inside single or double quotes as value.
- `function` hold function as its value.
- `userdata` is used when Luau need to have value in array format.
- `thread` has thread as its value.
- `table` represent table.

Including with those, Luau has `enum` to represent fixed list of items.

## Type Annotation

In `Luau`, the data type does not need to be explicitly defined every time the value is assigned to a variable or a function. In some cases, the value must be strictly defined so the program can run as expected.

The colon symbol `:` is use after the name of variable that about to create.

**Variable:**

```luau
local numerator: number = 18
```

**Function:**

```luau
function divide(numerator: number, denominator: number): number
    return numerator/denominator
end
```

## Type Checking

`Luau` provides type checking for users to have direct feedback when there is any error related to the data types. There are three modes, which can be used:

- `--!nocheck` when no check needed.
- `--!nonstrict` is used by default, it will check the data type but will not directly point it out.
- `--!strict` should be used when we need the direct feedback of type checking. It shows the error and which line that need to be changed.

`Mode` should be placed on top of a couple of lines before the program script.

```luau
--!strict

local num: number
num = 8
```

It need to use `luau-analyze` command.

```script
luau-analyze starts.luau
```

The command will return nothing cause the num variable has `number` as its value.

Otherwise, it will show like below when the num variable is changed to `"8"`:

```script
TypeError: Type 'string' could not be converted into 'number'
```
