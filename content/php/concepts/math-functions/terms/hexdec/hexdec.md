---
Title: 'hexdec()'
Description: 'Returns the decimal equivalent of a given hexadecimal string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Encoding'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`hexdec()`** function returns the decimal equivalent of a given hexadecimal string. It ignores any non-hexadecimal characters, computing the result as if they did not exist.

The function returns a value of type `int` if the converted number fits into the platform's `int` type; otherwise, a `float` is returned.

## Syntax

```pseudo
$decimal = hexdec(hexString);
```

Where `hexString` is the hexadecimal string that is to be converted into a decimal.

## Example

This example converts the hexadecimal string `"CDECADE"` into its decimal equivalent.

```php
<?php
  $decimal = hexdec("CDECADE");
  echo $decimal;
?>
```

This example results in the following output:

```shell
215927518
```

## Codebyte Example

This example returns the value of both a well-formed hexadecimal string and its malformed equivalent (non-hexadecimal characters ignored):

```codebyte/php
<?php
  $wellFormed = "cdecade";
  $malformed = "codecademy";
  echo "The decimal equivalent of '$wellFormed' is " . hexdec($wellFormed) . ".";
  echo "\nThe decimal equivalent of '$malformed' is " . hexdec($malformed) . ".";
?>
```
