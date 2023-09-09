---
Title: 'round()'
Description: 'Returns the nearest whole number to the passed value, or the value rounded to the specified decimal precision.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`round()`** returns an integer or a float to the nearest whole number or to the specified decimal precision.

## Syntax

```pseudo
$roundedNumber = round($number, $decimals, $roundMode);
```

- `$number`: the value to be rounded.
- `$decimals`: the number of decimals or precision required.
- `$roundMode`: an argument that accepts four constants to determine the rounding mode that include `PHP_ROUND_HALF_UP`, `PHP_ROUND_HALF_DOWN`, `PHP_ROUND_HALF_EVEN`, `PHP_ROUND_HALF_ODD`.

## Examples

The example below demonstrates the use of the `round()` function to convert a float into the nearest whole number.

```php
<?php
  $roundedNumber = round(99.75);
  echo $roundedNumber;
?>
```

This will result in the following output:

```shell
100
```

The example below demonstrates the use of the `round()` function to convert a float to `2` decimal numbers.

```php
<?php
  $roundedNumber = round(99.754321, 2);
  echo $roundedNumber;
?>
```

This will result in the following output:

```shell
99.75
```

## Codebyte Example

The codebyte below uses the `round()` function to round off `pi` to `3` decimal places:

```codebyte/php
<?php

$piConstant = pi();

$roundedNumber = round($piConstant, 3);

echo "Original Number: $piConstant\n";
echo "Rounded Number: $roundedNumber";
?>
```
