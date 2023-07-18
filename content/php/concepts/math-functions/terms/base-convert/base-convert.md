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

The **`base_convert()`** converts a number from one number base to another.

## Syntax

```pseudo
base_convert($number, $frombase, $tobase);
```

The `base_convert()` function has three required parameters:

- `$number`: This parameter specifies the number that is to be converted.
- `$frombase`: Specifies the original base of number.
- `$tobase`: Specifies the base to convert to.

The `base_convert()` function returns a number converted to the specified base.

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
