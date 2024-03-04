---
Title: 'is_infinite()'
Description: 'Evaluates whether a value is an infinite number or not.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`is_infinite()`** function evaluates whether the value is infinite or not and returns a boolean value.

## Syntax

```pseudo
$result = is_infinite(value);
```

Returns `1` if `value` is infinite, else returns `false`.

## Example

The example below demonstrates the use of the `is_infinite()` function to check whether a number is infinite or not.

```php
<?php
  $value = log(0);
  $result = is_infinite($value);
  echo $result;
?>
```

This example results in the following output:

```shell
1
```
