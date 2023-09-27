---
Title: 'atanh()'
Description: 'Returns the inverse hyperbolic tangent of a given value.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Trigonometry'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`atanh()`** calculates the inverse hyperbolic tangent of a given number and returns a float.

## Syntax

```pseudo
atanh($inputValue)
```

- The function `atanh()` only takes one parameter, `$inputValue`, and returns a floating point number. The passed value must be a numerical value between -1 and 1 (not inclusive).

## Example

The example below demonstrates a basic implementation of `atanh()`.

```php
<?php
  echo (atanh(0.5));
?>
```

The result will be:

```shell
0.54930614433405
```

## Codebyte Example

The example below is runnable and demonstrates how to use the function `atanh()` with a variable, to store and display the result.

```codebyte/php
<?php
  $inputValue = 0.7;
  $result = atanh($inputValue);
  echo $result;
?>
```
