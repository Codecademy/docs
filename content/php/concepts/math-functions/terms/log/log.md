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

The value returned by the function is a `float` type.

## Syntax

```pseudo
$result = log(number,base);
```

Where `number` is the number whose logarithm is to be calculated and `base` is optional parameter which signifies the logarithmic base to be used. By default `base` is *e*.

## Example

```php
<?php
  echo(log(1));
?>
// Output: 0
```

The result will be a float value of `0` as the logarithmic value of `1` is `0`.

## Codebyte Example

Using `log()` to return the value of 1.9459101490553:

```codebyte/php
<?php
  echo(log(7));
?>
```
