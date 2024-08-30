---
Title: 'acosh()'
Description: 'Returns the inverse hyperbolic cosine value of the given argument.'
Subjects:
  - 'Computer Science'
  - 'Math Functions'
Tags:
  - 'Trigonometric'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The built-in math function **`acosh()`** determines the inverse hyperbolic cosine of a number, in other words the value whose hyperbolic cosine is the input number. The output is a floating point number in radians.

## Syntax

```pseudo
$result = acosh($number);
```

Where `$number` is the value that the inverse hyperbolic cosine will be based on.

## Example

```php
<?php
  echo(acosh(10));
?>
```

This will result in the following output:

```shell
2.9932228461264
```

## Codebyte Example

The following code is runnable and demonstrates the use of `acosh()`.

```codebyte/php
<?php
  echo(acosh(-10) . " Radians\n");
  echo(acosh(5) . " Radians");
?>
```
