---
Title: 'sqrt()'
Description: 'Calculates the square root of a number.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`sqrt()`** is a function that calculates the square root of a number. It takes a single paramter in the form of a number and returns the square root of that number.

## Syntax

```pseudo
$result = sqrt($value)
```

- `$value` is the number whose square root is being calculated.
- `$result` is the resultant square root value.

## Codebyte Example

The following example demonstrates the usage of `sqrt()` function to find out the square root of `$value`.

```codebyte/php
<?php
$value = 25;
$squareRoot = sqrt($value);

echo "The square root of $value is: $squareRoot";
?>
```

The example will result in the following output:

```shell
The square root of 25 is: 5
```
