---
Title: 'acos()'
Description: 'Returns a rounded number down to the nearest integer.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
  - 'Math Functions'
Tags:
  - 'Trigonometric'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---


The built-in math function **`acos()`** determines the `arc cosine` of a given value. The inverse cosine function, which is used to identify the angle whose cosine value is equal to the specified value, is referred to as the `arc cosine` function.

## Syntax

```pseudo
$result = acos(number);
```

Where `number` is the number that should be Specifies in range -1 to 1.

## Example

```php
acos(0.64)
// Output: 0.87629806116834
```

The result will be a float value of `0.87629806116834` as the function angle in `rad`.
acos(-1) returns the value of Pi.
## Codebyte Example

The `acos()` function returns the arc cosine of the given number as a float value in radians.

```codebyte/php
<?php
  echo(acos(-0.4) . "<br>");
?>
```