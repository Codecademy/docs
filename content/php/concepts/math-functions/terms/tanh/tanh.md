---
Title: 'tanh()'
Description: 'Returns the hyperbolic tangent of a number.'
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

The **`tanh()`** function in PHP is a mathematical function that returns the hyperbolic tangent of a number. It calculates the ratio of the hyperbolic sine to the hyperbolic cosine of the input value.

## Syntax

```pseudo
$result = tanh($number);
```

`$number`: The input value for which the hyperbolic tangent will be returned.

## Example

In the following example the `tanh()` function is used to print the tanh of `10`:

```php
<?php

  echo(tanh(10));

?>
```

The output will be:

```shell
0.99999999587769
```

## Codebyte Example

In this excecutable example, a value is assigned to the variable `$x`. Then the `tanh()` function is called, passing `$x` as the input. The returned result is stored in the variable `$result`. Finally, echo is used to display the calculated hyperbolic tangent value.

```codebyte/php
<?php
  $x = 1.5;

  $result = tanh($x);
  echo "The hyperbolic tangent of $x is: $result";
?>
```
