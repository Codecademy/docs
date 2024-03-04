---
Title: 'ord()'
Description: 'Returns an integer between 0 and 255 corresponding to the binary value of the first character of a string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`ord()`** function takes a string as its only parameter and returns an integer between 0 and 255 based on the first character in that string. This is the inverse of the `chr()` function, which returns a single-byte string when passed an integer between 0 and 255.

The integer returned is the decimal equivalent of the binary representation of the character. For most common printable characters (such as letters and numbers), this binary representation conforms to standard single-byte encodings (ASCII, ISO-8859, Windows 1252). `ord()` can therefore be used to return a character's ASCII (or other single-byte encoding) value.

## Syntax

```pseudo
ord($my_string)
```

`(ord)` has only one parameter, `$my_string`. The first character of the value passed by `string` will be used to return the relevant integer.

## Example

The example below passes the character `"e"` into the `ord()` function:

```php
<?php
  echo ord("e");
?>
```

This results in the output:

```shell
101
```

## Codebyte Example

The code below is runnable, change the value of `$your_string` to see the associated value of various characters.

```codebyte/php
<?php
  $your_string = 'Try changing this string!';

  // Loop through $your_string
  for ($i = 0; $i < strlen($your_string); $i++) {
    echo "The ASCII value of ". $your_string[$i]. " is: ".ord($your_string[$i]) . "\n";
  }
?>
```
