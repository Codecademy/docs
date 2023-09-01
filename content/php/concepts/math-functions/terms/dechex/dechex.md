---
Title: 'dechex()'
Description: 'Returns a hexadecimal string representation of a decimal number.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`dechex()`** method returns a hexadecimal (base-) string representation of an unsigned integer. Hexadecimals are compact and can be converted easily to binary.

## Syntax

```pseudo
dechex(number)
```

- `number`: An integer to be converted to hexadecimal.

> **Note:** The largest unsigned integer that can be represented in PHP is `PHP_INT_MAX * 2 + 1` which is `4294967295`. This is because PHP uses 32 bits to represent integers, and the first bit is used to represent the sign of the integer.

## Example

In this example, the number `10` is converted to hexadecimal.

```php
<?php
  $hex = dechex(10);
  echo $hex;
?>
```

The output looks like this:

```shell
a
```

Because `dechex()` works with unsigned integers, negative numbers will be converted to their unsigned counterparts.

```php
<?php
  $hex = dechex(-10);
  echo $hex;
?>
```

The output looks like this:

```shell
fffffff6
```

In the example above, the hexadecimal representation of `-10` is `fffffff6`. This is because the largest unsigned integer that can be represented in PHP is `4294967295`. When `-10` is converted to an unsigned integer, it becomes `4294967286`. The hexadecimal representation of `4294967286` is `ffffffff6`.

> **Note:** The result in the code above, of `ffffffff6`, is conditional on using a 32-bit platform.

## Codebyte Example

The following codebyte example gets the hexadecimal representation of the decimal number `16`.

```codebyte/php
<?php
  $hex = dechex(16);
  echo $hex;
?>
```
