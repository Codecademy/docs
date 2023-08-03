---
Title: 'atanh()' 
Description: 'returns the calculated inverse hyperbolic tangent of a float or a numeric value' 
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

The **`atanh()`** calculates the inverse hyperbolic tangent of a given number between -1 and 1 (excluded) and returns a float.

## Syntax

```pseudo
atanh($inputValue)
```

- The function `atanh()` only takes one parameter, `$inputValue` and returns a floating point number.
- `$inputValue` needs to be a float or a numerical value between -1 and 1 (excluded).

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


## Codebyte Example (if applicable)
The example below demonstrates how to use the function with a variable `$inputValue`, store and display the result.

```codebyte/php
<?php
    $inputValue = 0.7;
    $result = atanh($inputValue);
    echo $result; // Output: 0.86730052769404
?>

```