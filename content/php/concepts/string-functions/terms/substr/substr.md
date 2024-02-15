---
Title: 'substr()'
Description: 'Returns a portion of a specified string.'
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

The **`substr()`** function returns a portion of a string specified by parameters for offset and length.

## Syntax

```pseudo
substr($string, $offset, $length)
```

The `substr()` function takes three parameters:

- `$string`: a required `string` from which a portion will be returned.

- `$offset`: a required `int` that specifies the start of the substring in the following manner:

  - Positive or zero values specify the zero-based character position from the start of the `string`.
  - Negative values indicate the character position from the end of the `string`.
  - A value greater than the length of `$string` will return an empty `string`.

- `$length`: an optional `int` that specifies the number of characters to return in the following manner:

  - Positive values specify to return that number of characters, or characters up to the end of `$string` if fewer than `$length` characters are left after `$offset` is determined.
  - A `null` or omitted value will return characters from `$offset` until the end of `$string`.
  - Negative values will return characters from `$offset` until `$length` characters from the end of `$string`.
  - A value of zero, or a negative value that specifies a position before `$offset`, will return an empty `string`.

## Example

The following example uses the `substr()` function to return a substring from the given `string`. Then the `echo` command prints this new `string` to the console:

```php
<?php
  echo (substr("I am learning PHP.", 14, 3));
?>
```

The example will result in the following output:

```shell
PHP
```

## Codebyte Example

The following example gives three examples of the `substr()` function operating on the same `string`.

```codebyte/php
<?php
  $str = "Hello World!";

  echo(substr($str,6) . "<br/>");
  echo(substr($str,0,5) . "<br/>");
  echo(substr($str,-6,-1) . "<br/>");
?>
```
