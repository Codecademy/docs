---
Title: 'explode()'
Description: 'Splits a given string by a delimiter and returns an array of the substrings produced.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The `explode()` function takes a string and splits it on a given delimiter string, and returns an array of the substrings produced.

## Syntax

```php
explode($delimiter, $string, $limit)
```

The `$delimiter` parameter specifies the string on which `$string` will be split.
The `$string` parameter is the string that will be split by the `explode()` function.

The `$limit` parameter is an optional `int` that specifies how many strings will be returned in the resulting array as follows:

- A positive value will return up to `$limit` strings, if more than `$limit` strings can be produced splitting on `$delimiter`, the last element will contain the remainder of `$string`.
- A `$limit` of zero is treated as 1.
- A negative `$limit` will omit the last -`$limit` elements from the result.
- If `$limit` is omitted, `explode()` will return as many substrings as possible.

The `$delimiter` has the following behaviors:

- If `$delimiter` is an empty string, `explode()` will throw a `ValueError` exception.
- If `$delimiter` is not found in `$string` and a negative `$length` is used, and empty array is returned.
- If `$delimiter` is not found in `$string` and `$length` is positive or omitted, an array containing `$string` is returned.
- If `$delimiter` is found at the start or end of `$string` empty values for each `$delimiter` will be added to the start or end of the returned array respectively.

## Codebyte Example

```codebyte\php
<?php
  $str = "list,of,comma,delimited,strings,";
  $strarr1 = explode(",",$str);
  $strarr2 = explode(",",$str,5);
  $strarr3 = explode(",",$str,-2);

  var_dump($strarr1);
  echo("<br/>");
  var_dump($strarr2);
  echo("<br/>");
  var_dump($strarr3);
  echo("<br/>");
?>

```
