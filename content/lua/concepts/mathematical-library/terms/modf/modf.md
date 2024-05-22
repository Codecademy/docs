---
Title: 'modf()'
Description: 'Used to extract the integral and fractional parts of a given number.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`math.modf()`** function is a part of the Lua `math` library and is used to split a given number into _its integral and fractional parts_. It rounds the number down to the nearest integer and returns both the integer part and the fractional part as separate values.

> **Note:** `math.modf()` rounds the number down and always returns a value equal to or less than the given number.

## Syntax

As `modf()` is a method that is a part of the standard Lua `math` library, it must be called as `math.modf()`.

```pseudo
integerPart, fractionalPart = math.modf(number)
```

`math.modf()` returns the integral part of `number` in `integerPart` and the fractional part in `fractionalPart`.

## Example 1

To find the integral and fractional parts of a number:

```lua
local num = 5.3
local integerPart, fractionalPart = math.modf(num)
print("Integer part: " .. integerPart)
print("Fractional part: " .. fractionalPart)
```

This results in the following output:

```shell
Integer part: 5
Fractional part: 0.3
```

## Example 2

When `math.modf()` is used with a number that is already an integer:

```bash
local num = 8
local integerPart, fractionalPart = math.modf(num)
print("Integer part: " .. integerPart)
print("Fractional part: " .. fractionalPart)
```

This results in the following output:

```shell
Output: Integer part: 8
Output: Fractional part: 0.0
```

## Example 3

For negative numbers, `math.modf()` returns the closest integer greater than or equal to the given value:

```lua
local num = -3.3
local integerPart, fractionalPart = math.modf(num)
print("Integer part: " .. integerPart)
print("Fractional part: " .. fractionalPart)
```

This results in the following output:

```shell
Integer part: -3
Fractional part: -0.3
```
