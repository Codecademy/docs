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

The `substr()` function returns a portion of a specified string specified by parameters for offset and length.

## Syntax

```php
substr($string, $offset, $length)
```

The `$string` parameter is the string we're returning a portion of.

The `$offset` parameter is an `int` value ad specifies the start of the substring in the following manner:

- Positive or zero values specifies the zero-based character position from the start of the string.
- Negative values indicate the character position from the end of the string.
- An `$offset` greater than the length of `$string` will return an empty string.

The `$length` parameter is an optional `int` that specifies the number of characters to return in the following manner:

- Positive values specify to return that number of characters, or characters up to the end of `$string` if fewer than `$length` characters are left after `$offset` is determined.
- A `null` or omitted value will return characters from `$offset` until the end of `$string`.
- Negative values will return characters from `$offset` until `$length` characters from the end of `$string`.
- A value of zero, or a negative value that specifies a position before `$offset`, will return an empty string.

## Codebyte Example

```codebyte/php
<?php
  $str = "Hello World!";
  
  echo(substr($str,6) . "<br/>");
  echo(substr($str,0,5) . "<br/>");
  echo(substr($str,-6,-1) . "<br/>");
?>
```
