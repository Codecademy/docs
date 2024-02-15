---
Title: 'rad2deg()'
Description: 'Converts radians to degrees.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`rad2deg()`** function in PHP converts radians to degrees. It accepts a number (radian value) as an input and returns the corresponding number in degrees.

## Syntax

```pseudo
rad2deg(number);
```

Where `number` is the radian value to convert to degrees. The value returned by the function is a `float` type and is the equivalent of `number` in degrees.

## Example

A basic example of the `rad2deg()` function:

```php
<?php
  echo rad2deg(1.71);
?>
```

This example results in the following output:

```shell
97.975782967371
```

## Codebyte Example

The following example returns the degree value for `0.48` radians.

```codebyte/php
<?php
  $radian = 0.48;
  $result = rad2deg($radian);

  echo $result;
?>
```
