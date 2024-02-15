---
Title: 'hex2bin()'
Description: 'Converts a string of hexadecimal values to its binary representation.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`hex2bin()`** function converts a `string` of hexadecimal values to its binary representation.

> **Note:** This function does **NOT** convert a hexadecimal number to a binary number. The `hex2bin()` function is available only in PHP 5.4.0 and later versions.

## Syntax

```pseudo
hex2bin(hex_string);
```

The `hex_string` parameter represents the `string` of hexadecimal values to be converted.

## Example

The following example uses the `hex2bin()` function to convert `"504850"`, a `string` of hexadecimal values, to a `string`. Then the `echo` command prints this `string` to the console:

```php
<?php
  echo hex2bin("504850");
?>
```

The example will result in the following output:

```shell
PHP
```

## Codebyte Example

The following example is runnable and uses the `hex2bin()` function:

```codebyte/php
<?php
  $hex_string = '48656c6c6f20576f726c6421';
  $binary_string = hex2bin($hex_string);
  echo $binary_string . PHP_EOL;
?>
```
