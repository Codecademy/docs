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
$roundedNumber = round($number);
```

Returns `the nearest whole number`.

```pseudo
$roundedNumber = round($number, 2);
```
Returns `the number rounded to 2 decimal places`.

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

$originalNumber = 3.1415927;

$roundedNumber = round($originalNumber, 3);

echo "Original Number: $originalNumber<br>";
echo "Rounded Number: $roundedNumber";
?>
```
