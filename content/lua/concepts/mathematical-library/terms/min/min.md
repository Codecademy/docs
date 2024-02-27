---
Title: 'min()'
Description: 'Returns the smallest value from a series of given numbers.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

In Lua, the **`math.min()`** function is used to return the smallest value from a series of one or more numbers.

## Syntax

```pseudo
math.min(values)
```

- `values` (required): The series of numbers to return the smallest value from. These numbers can be positive or negative. The function also takes variable names assigned to values rather than the values themselves.

## Example

In the following example, the `math.min()` method is called twice. The first call gives the numbers directly to the function. The second call uses the variable names assigned to the values instead of the values themselves.

```lua
v = 1
a = 4
l = 7

print(math.min(2, 6, 10))
print(math.min(v, a, l))
```

This will result in the following output:

```shell
2
1
```
