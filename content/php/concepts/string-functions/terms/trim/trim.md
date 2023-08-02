---
Title: 'trim()'
Description: 'Strips whitespace and/or other characters from the beginning and end of a string.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'String'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'path/computer-science'
---

The **`trim()`** function returns a string with whitespace stripped from the beginning and end of the string.

## Syntax

```pseudo
trim($string, $characters)
```

Parameters:

- `$string`: The string that will be trimmed.
- `$characters`: Optionally, the stripped characters can be specified using the characters parameter. A range of characters can be specified with `..`. By default, it will strip:
  - Spaces `" "`
  - New lines `\n`
  - Carriage returns `\r`
  - Tabs `\t`
  - Vertical tabs `\v`
  - `NULL` characters `\0`

## Codebyte Example

The following runnable example displays an [array](https://www.codecademy.com/resources/docs/php/arrays) of strings before and after applying a [function](https://www.codecademy.com/resources/docs/php/functions) on each element. The function trims each element using the `trim()` function:

```codebyte/php
<?php
  function trim_value(&$value) {
    $value = trim($value);
  }

  $fruit = array('mango','guava ', ' strawberry ');
  var_dump($fruit);

  array_walk($fruit, 'trim_value');
  var_dump($fruit);
?>
```
