---
Title: 'str_starts_with()'
Description: 'Performs a case-sensitive search to check if a string starts with a certain substring:'
Subjects:
  - 'Web Development'
  - 'Web Design'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`str_starts_with()`** function is used to perform a case-sensitive search to check whether a string starts with a given substring.

## Syntax

```pseudo
$stringstartswith = str_starts_with($str, $substring);
```

The `$str` represents the input string to check.

The `$substr` represents the substring to search for in the input string.

The `$stringstartswith` function returns true if the `$str` starts with the `$substr` or false otherwise.

## Codebyte Example

The example below checks if the string `Peanut Butter Jelly` starts with the letter `P`.
The example below gives three demonstration of the `str_starts_with()` function operating on the same string(single character, multiple characters and a case-sensitive example)

```codebyte/php
<?php
$str = 'Peanut Butter Jelly';
$substr = 'P';
$stringstartswith = str_starts_with($str, $substr) ? 'begins' : 'does not begin'; 

echo ("the string $str $stringstartswith with $substr.\n");

$str = 'Peanut Butter Jelly';
$substr = 'Peanut';
$stringstartswith = str_starts_with($str, $substr) ? 'begins' : 'does not begin'; 

echo "the string $str $stringstartswith with $substr.\n";

$str = 'Peanut Butter Jelly';
$substr = 'p';
$stringstartswith = str_starts_with($str, $substr) ? 'begins' : 'does not begin'; 

echo "the string $str $stringstartswith with $substr.\n";
?>
```
