---
Title: 'hypot()'
Description: 'Returns the length of the hypotenuse of a right-angle triangle.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Geometry'
  - 'Math'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`hypot()`** function returns the length of the hypotenuse of a right-angle triangle. Given a right-angle triangle with sides `$length1` and `$length2`, it returns the square root of (`$length1`^2^ + `$length2`^2^).

The function accepts two `float` inputs and returns a value of type `float`.

## Syntax

```pseudo
$hypotenuse = hypot(length1, length2);
```

Where `length1` and `length2` are the two lengths of a right-angle triangle.

## Example

This example calculates the hypotenuse of a right-angle triangle with sides of length `6` and `8`.

```php
<?php
  $hypotenuse = hypot(6, 8);
  echo $hypotenuse;
?>
```

This example results in the following output:

```shell
10
```

## Codebyte Example

This example returns the hypotenuse for two right-angle triangles - one with sides whose lengths are expressed in whole numbers, and one with sides whose lengths contain a fractional component:

```codebyte/php
<?php
  $hypotenuse1 = hypot(6, 8);
  $hypotenuse2 = hypot(6.5, 8.5);
  echo "The hypotenuse of a right-angle triangle with sides of length 6 and 8 is: $hypotenuse1";
  echo "\nThe hypotenuse of a right-angle triangle with sides of length 6.5 and 8.5 is: $hypotenuse2";
?>
```
