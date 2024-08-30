---
Title: 'exp()'
Description: 'Used to calculate the exponential value of a number.'
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

In Lua, the **`math.exp()`** function is a standard function that is used to calculate the exponential value of a number, i.e, the exponential constant _'e'_ (which is roughly equal to 2.718281828459045) raised to a given value.

Exponents are a very common part of mathematical operations across a wide variety of fields and disciplines such as physics, engineering, probability and statistics, and even machine learning! This means that the `math.exp()` function is a very useful and widely applicable tool for Lua developers.

As a side-note, the **`math.log()`** function in the math library returns the inverse of the `math.exp()` function.

## Syntax

As `exp()` is a method that is a part of the standard Lua `math` library, to use this function it must be called as `math.exp()`.

```pseudo
math.exp(mycoolvalue) -- Returns the result of e raised to the power of mycoolvalue
```

## Example 1

To find the exponential value of `0`,

```lua
print(math.exp(0))
```

This results in the following output:

```shell
1.0
```

## Example 2

Similarly, to find the exponential value of `8`,

```lua
print(math.exp(8))
```

This results in the following output:

```shell
2980.9579870417
```

As `math.log()` is the inverse of `math.exp()`,

```lua
print(math.log(2980.9579870417))
```

This results in the following output:

```shell
8.0
```
