---
Title: 'is_finite()'
Description: 'Evaluates whether a value is a legal finite number or not.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`is_finite()`** function evaluates whether the value is finite or not and returns a boolean value.


## Syntax

```pseudo
$result = is_finite(value);
```

Returns `1` if `value` is finite, else returns `false/nothing`

## Example

```php
<?php
  $result = is_finite(100);
?>
```

## Codebyte Example

The codebyte below deploys the `is_finite()` method on the values of `100` and `log(0)` to evaluate whether they are `finite`:

```codebyte/php
<?php
  echo is_finite(100) . "<br>";
  echo is_finite(log(0));
?>
```
