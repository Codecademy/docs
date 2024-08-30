---
Title: 'str_pad()'
Description: 'Returns a string with a new length by making it longer.'
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

The **`str_pad()`** method returns a string with a new length by making it longer.

## Syntax

```pseudo
str_pad($string, $length, $pad_string, $pad_type)
```

The `str_pad()` function has two required parameters and two optional parameters:

- `$string`: Specifies the `string` to make longer.
- `$length`: Specifies the length of the return string. If the value of `$length` is negative, less than, or equal to the length of the input string, no padding takes place, and `$string` will be returned.
- `$pad_string`: Specifies the string to use for padding. If it's not declared, it defaults to whitespace.
- `$pad_type`: Specifies what side to pad the string. The value can be `STR_PAD_BOTH`, `STR_PAD_LEFT`, or `STR_PAD_RIGHT`. If it's not declared, it defaults to `STR_PAD_RIGHT`.

The `str_pad()` function returns a `string` containing the given `$string` with a new length based on `$length`, combining of the given `$string` with the `$pad_string` that can be added to the right, left, or both sides of `$string`.

## Example

The following example uses the `str_pad()` function to add period symbols `"."` to the right side of the string `"hello"` until the string has the length of `30`:

```php
<?php
  echo str_pad("hello", 30, ".", STR_PAD_RIGHT);
?>
```

The example will result in the following output:

```shell
hello.........................
```

## Codebyte Example

This example is runnable and uses the `str_pad()` function:

> **Note:** The final echo statement will return the original string to the console due to the second argument of `str_pad()` being set to `4` which means that the length of the output string is less than the original string.

```codebyte/php
<?php
  echo str_pad('hello',30,'.');
  echo str_pad("hello", 30, ".", STR_PAD_RIGHT);
  echo str_pad("hello", 30, "+", STR_PAD_LEFT);
  echo str_pad("hello", 30, "-", STR_PAD_BOTH);
  echo str_pad("hello", 8, "-~@#$", STR_PAD_BOTH);
  echo str_pad("hello", 4, "-~@#$", STR_PAD_BOTH);
?>
```
