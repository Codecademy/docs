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
  - 'paths/front-end-engineer-career-path'
---

The **`sin()`** function returns the sine of a given angle in radians.

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

which is close but not equal to zero due to machine precision.

## Codebyte Example

Use `sin()` to return the sine of the `180` angle given in degrees, using the function `deg2rad` to parse from degres to radians:

```codebyte/php
<?php

  echo(sin(deg2rad(180)));

?>
```

The result is close but not equal to zero due to machine precision.
