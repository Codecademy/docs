---
Title: 'random()'
Description: 'Generates pseudo-random numbers based on a specified range.'
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

In Lua, the `math.random()` function is used to generate pseudo-random numbers. It can be used with or without an argument and in conjunction with the `math.randomseed()` function to control the sequence of random numbers.

The ability to generate random numbers, especially when combined with seeds for reproducibility, has a wide range of applications in computer science, simulations, gaming, statistics, cryptography and more.

> **Note**: `math.random()` does not truly generate random numbers since a seed algorithm is used for an initial value.

## Syntax

The `random()` method can be called with or a without a number using the following syntax:

```pseudo
math.random(x) -- Returns a random number between 1 and x.
math.random(x, y) -- Returns a random number between x and y.
```

- Parameters are optional for this method. If a number is not specified, a random number between `0` and `1` will be generated.

## Example 1

The following example shows the usage of `math.random()` _without_ a parameter:

```lua
print(math.random())
```

The output will be similar to the following:

```shell
0.78322180675329
```

## Example 2

The following example shows the usage of `math.random()` _with_ parameters:

```lua
print(math.random(7))
print(math.random(10, 15))
```

This will result in an output similar to the following:

```shell
5
12
```

## Example 3

The following example shows the usage of `math.random()` in conjunction with `math.randomseed()` function:

```lua
math.randomseed(7)

print(math.random())
print(math.random())
print(math.random())
```

This will result in the following output:

```shell
0.77898184896709
0.38808095006413
0.74830981146053
```

> **Note**: Keep in mind that `math.randomseed()` will always generate a reproducible random sequence.
