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

This example demonstrates the usage of the `ceil()` function with three different arguments, and outputs results of each on a new line:

```php
<?php
  echo ceil(9.4)."</br>";
  echo ceil(6.01)."</br>";
  echo ceil(-1.637);
?>
```

It results in the following output:

```shell
10
7
-1
```

## Codebyte Example

Using `ceil()` to return the next highest integer value of `2.718`:

```codebyte/php
<?php
  echo ceil(2.718);
?>
```
