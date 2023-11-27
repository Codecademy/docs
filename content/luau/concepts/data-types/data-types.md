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

Luau supports eight built-in data types from Lua, which are:

- **nil:** Represent the absence of value or different type value from others.
- **boolean:** Hold the values true and false.
- **number:** Contains numerical values.
- **string:** Hold strings inside single or double quotes as value.
- **function:** Hold functions as its value.
- **userdata:** Used when Luau needs to have a value in array format.
- **thread:** Contain threads as its value.
- **table:** Represent a table.

In addition to these, Luau has `enum` to represent a fixed list of items.

## Type Annotation

In `Luau`, the data type does not need to be explicitly defined every time a value is assigned to a variable or a function. However, in some cases, the value must be strictly defined for the program to run as expected.

The colon symbol `:` is used after the name of the variable that is about to be created.

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

`Luau` provides type checking to offer users direct feedback in case of any error related to the data types. There are three available modes:

- **--!nocheck:** When no check is needed.
- **--!nonstrict:** This is used by default, it will check the data type but will not directly point it out.
- **--!strict:** This should be used when direct feedback on type checking is needed. It shows the error and the line that needs to be changed.

`Mode` should be placed on top of a couple of lines before the program script.

```luau
--!strict

local num: number
num = 8
```

It needs to use the `luau-analyze` command.

```script
luau-analyze starts.luau
```

The command above will return nothing because the `num` variable has `number` as its value.

Otherwise, it will show as below when the `num` variable is changed to `"8"`:

```script
TypeError: Type 'string' could not be converted into 'number'
```
