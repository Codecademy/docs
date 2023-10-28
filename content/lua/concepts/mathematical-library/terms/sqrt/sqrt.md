---
Title: 'sqrt()'
Description: 'Returns the result of the square root operation on a numeric variable.'
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

The **math.sqrt()** function returns the result of the square root operation on a numeric variable. It takes a positive number as an argument value to be passed into the function.

> **Note:** Results are dependent on the compiler. There may be a small variation or results may not be as precise as expected.

## Syntax

`sqrt()` function is implemented with the following syntax:

```pseudo
math.sqrt(num_var)
```

Where the `num_var` is a positive number.

## Example 1

The function returns the square root of `25`.

```lua
num_var = 25
print(math.sqrt(num_var))
```

The code returns the following output:

```shell
5.0
```

## Example 2

The code below demonstrates the method with a negative value.

```lua
num_var = -25
print(math.sqrt(num_var))
```

The results will look like this:

```shell
nan
```

Where `nan` stands for "not a number", which represent undefined or unpresentable numerical results.
