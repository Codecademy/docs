---
Title: 'str_shuffle()'
Description: 'Randomly shuffles a string.'
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

The **`str_shuffle()`** function randomly shuffles a string. It generates a different order of characters each time it is called.

## Syntax

```pseudo
str_shuffle($string)
```

- `$string` is the string to be shuffled.

## Codebyte Example

This example demonstrates the use of `str_shuffle()` on a string.

```codebyte/php
<?php
  $string = "Hello, World!";
  echo(str_shuffle($string));
?>
```

> **Note:** The output will vary each time this program is executed, as the `str_shuffle()` function shuffles the string randomly.
> The function should not be used for cryptography, because it does not generate cryptographically secure random numbers.
