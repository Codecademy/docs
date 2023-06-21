---
Title: 'cosh()'
Description: 'Returns the hyperbolic cosine of a number.'
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

The **`cosh()`** function in PHP returns the hyperbolic cosine of a number. It calculates the value using the exponential function and is useful in various mathematical calculations.

## Syntax

```pseudo
$result = cosh(number);
```

`number`: Represents the input value for which the hyperbolic cosine will be returned.

## Example

In the following example the `cosh()` is used to return the hyperbolic cosine of `2.5`:

```php
<?php

  echo(cosh(2.5));

?>
```

The output will be:

```shell
6.1322894796637
```

## Codebyte Example

In this executable example of the function, the `$x` variable can be changed to print the `cosh()` of it:

```codebyte/php
<?php
$x = 2.5;

$result = cosh($x);
echo "The hyperbolic cosine of $x is: $result";
?>
```
