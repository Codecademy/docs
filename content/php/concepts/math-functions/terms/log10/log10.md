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

The function accepts a single parameter, `$arg`, which represents the number to calculate the base-10 logarithm for.

## Codebyte Example

The following codebyte example uses the `log10()` function to return the base-10 logarithm of `100`, then it outputs the result using [echo](https://www.codecademy.com/resources/docs/php/string-functions/echo):

```codebyte/php
<?php
   $arg=100;
   echo "log10(" . $arg . ") = " . log10($arg) . "
";
?>
```
