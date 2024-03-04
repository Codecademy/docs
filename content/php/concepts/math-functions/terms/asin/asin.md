---
Title: 'asin()'
Description: 'Returns the arc sine of a given number.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`asin()`** function returns the arc sine of a number between -1 and 1.

## Syntax

```pseudo
asin(number)
```

The `asin()` function takes only one parameter, `number`, a number between -1 and 1 of type `float`. The function returns the arc sine of the `number` in radians as a `float` value.

If the `number` is outside of the range of -1 to 1, the function returns `NAN` (not a number).

## Codebyte Examples

The codebyte example below uses the `asin()` function to return the arc sine of `2` and `-1`:

```codebyte/php
<?php
  echo asin(2), "\n";
  echo asin(-1);
?>
```
