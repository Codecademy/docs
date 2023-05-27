---
Title: 'str_repeat()'
Description: 'Returns a string with occurrences of a specified substring repeated a specified number of times.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The `str_repeat()` function returns a string that repeats a substring a specified number of times.

## Syntax

```pseudo
str_replace($string, $repeat)
```

- `$string`: Specifies the string to repeat and it is required.
- `$repeat`: Specifies the number of times the string will be repeated. Must be greater or equal to 0 and it is also required.

## Codebyte Example

This example provides a few demonstrations of `str_repeat()` operating on a string.

> **Note:** The third echo statement will not output to the console due to the second argument of `str_repeat` being set to `0`.

```codebyte/php
<?php

echo (str_repeat("I-am-repeated ",3)."\n");
echo (str_repeat("Cool ",10). "\n");
echo (str_repeat("I-don't-appear ",0). "\n");

?>
```
