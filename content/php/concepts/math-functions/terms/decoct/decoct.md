---
Title: 'decoct()'
Description: 'Returns the corresponding octal value of the given decimal value.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`decoct()`** function takes a given decimal number and returns a `string` version of the corresponding octal value. An octal value is from the `base-8` numerical system, which only uses eight digits: zero through seven. For 32-bit platforms, `4294967295` is the largest number that can be computed. For 64-bit platforms, `9223372036854775807` is the largest number that can be computed.

## Syntax

```pseudo
decoct($number);
```

- `number`: The decimal to convert.

## Example

This example uses the `decoct()` function to convert a decimal to its octal value:

```php
<?php
  echo decoct("30");
?>
```

The above example will result in the following output:

```shell
36
```

## Codebyte Example

The following Codebyte example can be run and calls the `decoct()` method two times. The first call uses the maximum value that can be converted for a 32-bit platform.

```codebyte/php
<?php
  echo decoct("4294967295"), "\n";
  echo decoct("1587");
?>
```
