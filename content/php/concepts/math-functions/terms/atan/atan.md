---
Title: 'atan()'
Description: 'Returns the angle whose tangent is equal to the specified value.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Trigonometry'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The built-in math function **`atan()`** determines the arc tangent of a given value. It is also known as the inverse tangent function, it identifies the angle whose tangent is equal to the specified value. The inverse function of `atan()` is the [`tan()`](https://www.codecademy.com/resources/docs/php/math-functions/tan) function.

## Syntax

```pseudo
$result = atan($number);
```

The `atan()` function takes one parameter:

- `$number` (required): The number for which the arc tangent is to be calculated.

The `atan()` method returns a floating point number which is the arc tangent value of the number passed. The resulting numeric value will be between **-pi/2** and **pi/2** radians.

To convert radians to degrees, use the following:

```pseudo
$degrees = $radians * ( 180.0 / M_PI );
```

## Example

The example below illustrates the use of the `atan()` function to calculate the arc tangent of a number and print the result.

```php
<?php
echo("atan(0.5): " . atan(0.5) . " Radians");
?>
```

This will result in the following output:

```shell
atan(0.5): 0.46364760900081 Radians
```

## Codebyte Example

The example below uses the `atan()` function to obtain the arc tangent value of a number in radians, and then converts it into degrees.

```codebyte/php
<?php
  $result = atan(1);
  echo("atan(1): $result Radians\n");

  $degrees = $result * ( 180.0 / M_PI );
  echo("atan(1): $degrees Degrees");
?>
```
