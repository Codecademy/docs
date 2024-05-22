---
Title: 'str_repeat()'
Description: 'Returns a string that repeats a substring a specified number of times.'
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

The **`str_repeat()`** function returns a `string` that repeats a substring a specified number of times.

## Syntax

```pseudo
str_repeat($string, $repeat)
```

The `str_repeat()` function has two required parameters:

- `$string`: Specifies the `string` to repeat.
- `$repeat`: Specifies the number of times `$string` will be repeated. It must be greater or equal to `0`.

The `str_repeat()` function returns a `string` containing the given `$string` repeated `$repeat` times. If `$repeat` is `0`, it returns an empty `string`.

## Example

The following example uses the `str_repeat()` function to repeat the `"bon"` `2` times. Then the `echo` command prints this `string` to the console:

```php
<?php
  echo str_repeat("bon", 2);
?>
```

The example will result in the following output:

```shell
bonbon
```

## Codebyte Example

This example is runnable and uses the `str_repeat()` function:

> **Note:** The third echo statement will not output to the console due to the second argument of `str_repeat` being set to `0`.

```codebyte/php
<?php
  echo (str_repeat("I-am-repeated ",3)."\n");
  echo (str_repeat("Cool ",10). "\n");
  echo (str_repeat("I-don't-appear ",0). "\n");
?>
```
