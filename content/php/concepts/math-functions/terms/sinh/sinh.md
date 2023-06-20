---
Title: 'sinh()'
Description: 'Returns the hyperbolic sine of a number.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`sinh()`** function is used to calculate the hyperbolic sine of a given number.

## Syntax

```pseudo
sinh(number)
```

The `sinh()` function takes one parameter, `number`, which can be either an integer or a float. It returns the hyperbolic sine of the `number` as a float value.

## Example

The example below illustrates a basic implementation of the function:

```php
<?php
  echo sinh(2.5);
?>
```

The example will result in the following output:

```shell
6.0502033806203
```

## Codebyte Example

The codebyte example below demonstrates the usage of the `sinh()` function with a negative number:

```codebyte/php
<?php
  echo sinh(-3);
?>
```

> **Note:** The `sinh()` function is the inverse of the `asinh()` function.
