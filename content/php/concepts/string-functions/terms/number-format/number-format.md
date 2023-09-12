---
Title: 'number_format()'
Description: 'Formats a number with grouped thousands'
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

The **`number_format()`** function takes a given number and formats it with grouped thousands. If a decimal is given, the number will be rounded up.

## Syntax

```pseudo
number_format($number, $decimals, $decimal_point, $separator);
```

- `number`: The number to format.
- `decimals`: Optional argument that sets the number of digits after the decimal point. If not given, the number returned will be a whole number.
- `decimal_point`: Optional argument that specifies the decimal separator and should be given in string format.
- `separator`: Optional argument that specifies the thousands separator and should be given in string format.

## Example

The first example uses the `number_format()` function to format a whole number using `","` as a decimal separator and `"x"` as a thousands separator.

```php
<?php
  echo number_format("1000000",2,",","x");
?>
```

This is the output for the above example:

```shell
1x000x000,00
```

## Codebyte Example

The following codebyte example can be run and calls the `number_format()` method two times. The second call uses the optional `decimals`, `decimal_point`, and `separator` arguments.

```codebyte/php
<?php
  echo number_format("500000");
  echo number_format("5000000",2,".",",");
?>
```
