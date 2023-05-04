---
Title: 'floor()'
Description: 'Returns a rounded number down to the nearest integer and if necessary, returns a result.'
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

The **`floor()`** function returns a rounded number down to the nearest integer and if necessary, returns a result.

The result returns a value type of float.

## Syntax

```pseudo
$result = floor(n);
```

Where `n` is the number to be rounded down to the nearest integer.

## Example
```php
floor(3.4)
```
In this example, the result will be a float value of 3 as the function rounds down 3.4 to 3

## Codebyte Example

Using `floor()` to return the value of 5 after rounding down`:

```codebyte/php
<?php
  echo(floor(5.6));
?>
```
