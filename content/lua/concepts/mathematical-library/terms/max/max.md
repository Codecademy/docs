---
Title: 'max()'
Description: 'Used to return the maximum value among a set of numerical input values.'
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

Lua's **`math.max()`** function is a standrard function which is a part of the `math` library, and it is also the number-one solution for determining the maximum value from a list of numerical inputs, regardless of the number of values in this list. Whether you're working on a simple arithmetic operation or even a complex mathematical algorithm or data analysis, of course **`math.max()`** will be a versatile and a fundamental helper function for you.

**`math.max()`** is a valuable asset in any program that requires identifying a peak value.

> **Note:** `math.max()` is the opposite functionality of the `math.min()` which is responisble for returning the minimum value among a set of numerical values.

## Syntax

Since `max()` is a method from Lua's library `math`, therefore it is called as `math.max()`

```pseudo
math.max(value1, value2, value3, .....) -- Returns the maximum value among the input numerical values.
```

## Example 1

To find the highest value among three variables.

```lua
a = 22
b = 23
c = 24
print(math.max(a,b,c))
```

This results in the following output:

```shell
24
```

## Example 2

Even by comparing two equal values it still returns one of them:

```lua
a = 10
b = 10
print(math.max(a,b))
```

This results in the following output:

```shell
10
```

## Example 3

It also works with negative values:

```lua
a = -6
b = -10
print(math.max(a,b))
```

This results in the following output:

```shell
-6
```
