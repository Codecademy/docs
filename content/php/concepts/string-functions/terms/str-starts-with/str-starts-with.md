---
Title: 'str_starts_with()'
Description: 'Performs a case-sensitive search to check if a string starts with a given substring.'
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

The `str_starts_with()` function returns true if the `$str` starts with the `$substr` or false otherwise.

## Example

The example below demonstrates `str_starts_with()` operating on the same string in three ways (single character, multiple characters, and a case-sensitive example).

```php
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

This will result in the following output:

```shell
the string Peanut Butter Jelly begins with P.
the string Peanut Butter Jelly begins with Peanut.
the string Peanut Butter Jelly does not begin with p.
```
