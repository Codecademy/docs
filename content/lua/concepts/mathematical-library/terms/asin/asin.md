---
Title: 'asin()'
Description: 'Returns the inverse sine in radians of a given value.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Trigonometry'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

Lua's **`math.asin()`** function calculates the inverse sine, also known as arcsine, of a given value. In other words, it finds the angle in radians whose sine equals the given value. The function takes a number within the range of `-1` to `1` as input, representing a sine value, and returns the corresponding angle in radians. This is particularly useful in various applications, such as physics simulations and game development, where understanding angles and trajectories is essential for tasks like character movement and object positioning.

## Syntax

The `math.asin()` function must be called with an argument using the following syntax:

```pseudo
math.asin(x)
```

- Where `x` is a number between `-1` and `1`, representing a sine value for finding the corresponding angle in radians. If no argument is passed, the program will raise an error.

## Example 1

The following example shows the usage of `math.asin()`:

```lua
print(math.asin(1))
```

Output:

```shell
1.5707963267949
```
