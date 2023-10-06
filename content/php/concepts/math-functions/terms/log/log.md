---
Title: 'log()'
Description: 'Returns the natural logarithm of a value.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
  - 'Math Functions'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`log()`** function returns the natural logarithm of a value.

## Syntax

```pseudo
$result = log(number,base);
```

Where `number` is the number whose logarithm is to be calculated and `base` is an optional parameter which signifies the logarithmic base to be used. By default `base` is _e_.

The value returned by the function is a `float` type.

## Example

A basic implementation of the `log()` function:

```php
<?php
  echo(log(1));
?>
```

This will result in the following output:

```shell
0
```

## Codebyte Example

Using `log()` to return the value of 5 base 10:

```codebyte/php
<?php
  echo(log(5,10));
?>
```
