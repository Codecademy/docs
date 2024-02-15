---
Title: 'sin()'
Description: 'Returns the sine of a given angle.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`sin()`** function returns the sine of an angle given in radians.

## Syntax

```pseudo
sin(angle)
```

The `sin()` function takes only one parameter, `angle`, an angle in radians of type `float`. The function returns the sine of the `angle` as a `float` value.

## Example

Use `sin()` to return the sine of the `pi` angle given in radians, using the function `pi()`:

```php
<?php

  echo(sin(pi()));

?>
```

The example will result in the following output:

```shell
1.2246467991474E-16
```

The result is close to but not equal to zero due to machine precision.

## Codebyte Example

The codebyte example below uses the `sin()` function to return the sine of the `540` angle given in degrees. Then, it uses the `deg2rad()` function to parse from degrees to radians:

```codebyte/php
<?php

  echo(sin(deg2rad(540)));

?>
```
