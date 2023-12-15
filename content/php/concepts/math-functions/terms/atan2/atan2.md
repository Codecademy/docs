---
Title: 'atan2()'
Description: 'Returns the arc tangent of y/x, in radians.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Arithmetic'
  - 'Numbers'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`atan2()`** function returns the arc tangent of _y/x_, in radians.

## Syntax

```pseudo
atan2(y,x);
```

The `atan2()` function has two parameters. It returns the arc tangent of _y/x_, in radians. Where `x` and `y` are the coordinates of a point (x, y). Both specify a positive or negative number.

## Example

The following code uses `atan2()` to return the arc tangent of (-10,8):

```php
<?php
  echo atan2(-10,8);
?>
```

This results in the following output:

```shell
 -0.89605538457134
```
