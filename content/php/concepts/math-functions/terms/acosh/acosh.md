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

The built-in math function **`acosh()`** determines the inverse hyperbolic cosine of a number, in other words the value whose hyperbolic cosine is the input number. The input number must be in radians, and the output is a floating point number.

## Syntax

```pseudo
$result = acosh(number);
```

Where `number` is the number that the function returns the inverse hyperbolic cosine for.

## Example

```php
<?php
  echo(acosh(10));
?>
```

The result will be a float value of `2.9932228461264`.



## Codebyte Example

The `acosh()` function returns the inverse hyperbolic cosine of the given number as a float value in radians.

```codebyte/php
<?php
  echo(acosh(10) . "<br>");
  echo(acosh(5));
?>
```
