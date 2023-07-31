---
Title: 'base_convert()'
Description: 'Converts a number from one number base to another.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Math'
  - 'Encoding'
  - 'Numbers'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`base_convert()`** function converts a number from one base system to another.

## Syntax

```pseudo
base_convert($number, $fromBase, $toBase)
```

The `base_convert()` function has three required parameters:

- `$number`: This parameter specifies the number that is to be converted as a string.
- `$fromBase`: Specifies the original base of `$number` as an integer.
- `$toBase`: Specifies the base to convert to as an integer.

The `base_convert()` function returns a string representing the number converted from the original base to the specified base.

## Example

The following code uses `base_convert()` to convert the hexadecimal (base 16) number to binary (base 2):

```php
<?php
    $hexadec = "4A4B";
    echo base_convert($hexadec, 16, 2);
?>
```

This results in the following output:

```shell
 0100101001001011
```

## Codebyte Example

This example is runnable and uses the `base_convert()` function:

```codebyte/php
<?php
    $deci = "255";
    echo base_convert($deci, 10, 16);
?>
```
