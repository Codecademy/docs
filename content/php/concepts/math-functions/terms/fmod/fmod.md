---
Title: 'fmod()'
Description: 'Returns the remainder (modulo) of x/y.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Encoding'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`fmod()`** function returns the remainder (modulo) of _x/y_. The name stands for "floating modulo" and the function calculates the modulo of any division which may contain a `float` as both dividend and divisor.

## Syntax

```pseudo
fmod(x,y);
```

The function takes two required parameters - the `x` specifies the dividend and the `y` specifies the divisor.

## Example

This example returns the remainder of `x` and `y`.

```php
<?php
   $x = 27;
   $y = 5;
   $remainder = fmod($x,$y);
   echo $remainder;
?>
```

The output will be:

```shell
2
```
