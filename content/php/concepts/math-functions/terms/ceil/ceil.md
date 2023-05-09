---
Title: 'ceil()'
Description: 'Returns the next highest integer value of the fractional argument.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`ceil()`** function returns the next highest integer value of the fractional argument.

## Syntax

```pseudo
$result = ceil(n);
```

Where `n` is the fractional number to find the next highest integer value of.

## Example

```php
<?php
  $x = ceil(9.4);     // x = 10
  $y = ceil(6.01);    // y = 7
  $z = ceil(-1.637);  // z = -1
?>
```

## Codebyte Example

Using `ceil()` to return the next highest integer value of `2.718`:

```codebyte/php
<?php
  echo ceil(2.718);
?>
```
