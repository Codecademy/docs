---
Title: 'is_nan()'
Description: 'Checks whether a value is not a number.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`is_nan()`** function checks whether the argument is not a number.

## Syntax

```pseudo
$result = is_nan(n);
```

Returns `1` if `n` is not a number, else returns nothing.

## Codebyte Example

The following codebyte example uses `is_nan()` on the values of `10` and `sqrt(-1)` to check if each one is 'not a number':

```codebyte/php
<?php
  echo "10:", is_nan(10), "\n";
  echo "sqrt of -1: ", is_nan(sqrt(-1));
?>
```
