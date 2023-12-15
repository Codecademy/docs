---
Title: 'hypot()'
Description: 'Returns the length of the hypotenuse of a 90-degree triangle.'
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

The **`hypot()`** function returns the length of the hypotenuse of a 90-degree or "right-angle" triangle.

## Syntax

```pseudo
$hypotenuse = hypot($length1, $length2);
```

Given a right-angle triangle with sides `$length1` and `$length2`, the function returns the result of the following formula:

```tex
hypotenuse = \sqrt{length1^2 + length2^2}
```

The function accepts two `float` inputs and returns a value of type `float`.

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

This example returns the hypotenuse for a 90-degree triangle with sides of length `12` and `16`:

```codebyte/php
<?php
  $hypotenuse = hypot(12, 16);
  echo "The hypotenuse of a 90-degree triangle with sides of length 12 and 16 is: $hypotenuse";
?>
```
