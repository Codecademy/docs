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

The **`hex2bin()`** function converts a string of hexadecimal values to its binary representation.

> **Note:** This function does **NOT** convert a hexadecimal number to a binary number. The `hex2bin()` function is available only in PHP 5.4.0 and later versions.

## Syntax

```pseudo
hex2bin(hex_string);
```

The `hex_string` parameter represents the string of hexadecimal values to be converted.

### Example

The following example uses the `hex2bin()` function to convert the `string` of `"PHP"` to hexadecimal values. Then the `echo` command prints this value to the console:

```php
<?php
  echo bin2hex("PHP");
?>
```

The example will result in the following output:

```shell
504850
```

## Codebyte Example

The following example shows how to use the `hex2bin()` function:

```codebyte/php
<?php
  $hex_string = '48656c6c6f20576f726c6421';
  $binary_string = hex2bin($hex_string);
  echo $binary_string . PHP_EOL;
?>
```
