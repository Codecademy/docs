---
Title: 'log10()'
Description: 'Returns the base-10 logarithm of a number.'
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

The **`log10()`** function returns the base-10 logarithm of a number.

## Syntax

```pseudo
log10($arg);
```

## Parameters

The function accepts a single parameter `$arg` which refers to the number of whose the logarithm is to be calculated.

## Codebyte Example

Using `log10()` to return the base-10 logarithm of `100`:

```codebyte/php
<?php
   $arg=100;
   echo "log10(" . $arg . ")=" . log10($arg) . "
";
?>
```
