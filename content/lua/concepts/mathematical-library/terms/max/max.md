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

Lua's **`math.max()`** function is a standard function that is a part of the `math` library, and it is the best solution for determining the maximum value from a list of numerical inputs, regardless of the number of values in this list. Whether the task is just simple arithmetic or a complex mathematical algorithm, `math.max()` is a versatile and fundamental helper function for a variety of cases.

> **Note:** `math.min()` is the opposing function, which will return the minimum value among a set of numerical values.

## Syntax

Since `max()` is a method from Lua's library `math`, it is called as `math.max()`.

```pseudo
math.max(value1, value2, value3, .....)
```

`math.max()` returns the maximum value among the input numerical values.

## Example 1

To find the highest value among three variables:

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

In a comparison of two equal values the function will still return a single number:

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
