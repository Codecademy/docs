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

The **`explode()`** function takes a string and splits it on a given delimiter string. It returns an array of the substrings produced.

## Syntax

```pseudo
explode($delimiter, $string, $limit)
```

The `explode()` function takes three parameters:

- `$delimiter`: a required `string` that specifies the characters on which `$string` will be split. The `$delimiter` has the following behaviors:

  - If `$delimiter` is an empty `string`, `explode()` will throw a `ValueError` exception.
  - If `$delimiter` is not found in `$string` and a negative `$length` is used, an empty `array` is returned.
  - If `$delimiter` is not found in `$string` and `$length` is positive or omitted, an `array` containing `$string` is returned.
  - If `$delimiter` is found at the start or end of `$string`, empty values for each `$delimiter` will be added to the beginning or end of the returned `array` respectively.

- `$string`: a required `string` that will be split by the `explode()` function.
- `$limit`: an optional `int` that specifies how many `strings` will be returned in the resulting `array` as follows:

  - A positive value will return up to `$limit` `strings` if more than `$limit` `strings` can be produced, splitting on `$delimiter`; the last element will contain the remainder of `$string`.
  - A `$limit` of `0` is treated as `1`.
  - A negative `$limit` will omit the last `n` elements from the result.
  - If `$limit` is omitted, `explode()` will return as many substrings as possible.

## Example

The following example uses the `explode()` function to convert a `string` of fruits separated by `", "` to an `array` of fruits. Then the `print_r()` function prints the information about the returned `array` to the console:

```php
<?php
  print_r (explode(", ", "apple, strawberry, orange"));
?>
```

The example will result in the following output:

```shell
Array
(
  [0] => apple
  [1] => strawberry
  [2] => orange
)
```

## Codebyte Example

The following shows three examples of the `explode()` function operating on one comma-delimited `string`.

```codebyte/php
<?php
  $str = "list,of,comma,delimited,strings,";
  $strarr1 = explode(",", $str);
  $strarr2 = explode(",", $str, 5);
  $strarr3 = explode(",", $str, -2);

  var_dump($strarr1);
  echo("<br/>");
  var_dump($strarr2);
  echo("<br/>");
  var_dump($strarr3);
  echo("<br/>");
?>
```
