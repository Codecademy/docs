---
Title: 'pow()'
Description: 'Returns the number raised to the power of the exponent.'
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

The **`pow()`** function returns the number raised to the power of the exponent.

## Syntax

```pseudo
pow($base, $exp)
```

The `pow()` function takes two parameters:

`$base` is the number to be raised and `$exp` is the power for a base to be raised.

The exponent operator `**` can be used instead of this function. `pow($base, $exp)` returns the base raised to the exponent, which is the same as `$base ** $exp`.

## Example

The following example calculates `5^2`:

```php
<?php
  echo "pow(5,2) = " . pow(5,2);
  echo ", using ** operator =". 5**2;
?>
```

This will output:

```shell
pow(5,2) = 25, using ** operator = 25
```

## Codebyte Example

The following example calculates `5^0`:

```codebyte/php
<?php
  $x=5;
  $y=0;
  echo "pow(" . $x, "," . $y . ")=". pow($x,$y);
?>
```
