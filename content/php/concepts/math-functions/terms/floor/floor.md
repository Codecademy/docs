---
Title: 'floor()'
Description: 'Returns a rounded number down to the nearest integer.'
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

The **`floor()`** function returns a rounded number down to the nearest integer.

The result returns a value type of `float`.

## Syntax

```pseudo
$result = floor(n);
```

Where `n` is the number to be rounded down to the nearest integer.

## Example

```php
floor(3.4)
// Output: 3
```

The result will be a float value of `3` as the function rounds `3.4` down to `3`.

## Codebyte Example

Using `floor()` to return the value of 5 after rounding down`:

```codebyte/php
<?php
  echo(floor(5.6));
?>
```
