---
Title: '.deg()'
Description: 'Converts an angle in radians to degrees.' 
Subjects:
-  'Computer Science'
-  'Game Development'
Tags:
-  'Arithmetic'
-  'Functions'
-  'Math'
-  'Numbers'

CatalogContent:
-  'learn-lua'
-  'paths/computer-science'

---

The Lua  built-in function **`math.deg()`** converts an angle in radians to degrees. It takes in one argument, the angle in radians to be converted.

## Syntax

```pseudo
math.deg(x)
```

Here x is the angle in randians, that has to be converted to degrees.

## Example

Consider the following code:

```lua

local radians =  math.pi  /  3  -- i.e (π/3)

--math.pi is used to get the value of PI.

local degrees =  math.deg(radians)

print("The angle in degrees :",degrees)

```

The code will return the following output:

```shell

The  angle  in  degrees  :  60.0

```
