---
Title: 'chr()'
Description: 'Returns a single-character string based on the ASCII value provided as an argument.'
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

The **`chr()`** function in PHP is used to convert an ASCII value into a single-character string.

## Syntax

```pseudo
chr($ascii_value)
```

It accepts an ASCII value as the argument and returns a string representing the associated character.

The ASCII value can be specified in decimal, octal, or hex values.

- Octal values are defined by a leading `0`.
- Hex values are defined by a leading `0x`.

## Example

The example below demonstrate the `chr()` function when different ASCII values are passed but their equivalent character is the same:

```php
<?php
$decimal_ascii = 98;      // Decimal format
$octal_ascii = 0142;     // Octal format (starts with 0)
$hexadecimal_ascii = 0x62; // Hexadecimal format (starts with 0x)

// Using chr() function to convert ASCII values to characters
$char_decimal = chr($decimal_ascii);
$char_octal = chr($octal_ascii);
$char_hexadecimal = chr($hexadecimal_ascii);

// Output the results
echo "The equivalent character for ASCII 98 in decimal is $char_decimal\n";
echo "The equivalent character for ASCII 0142 in octal is $char_octal\n";
echo "The equivalent character for ASCII 0x62 in hex is $char_hexadecimal\n";
?>
```

This results in the following output:

```shell
The equivalent character for ASCII 98 in decimal is b
The equivalent character for ASCII 0142 in octal is b
The equivalent character for ASCII 0x62 in hex is b
```

## Codebyte Example

The following code is runnable and demonstrates how to use the `chr()` function to convert multiple ASCII values into characters.

```codebyte/php
<?php
  $ascii_values = [65, 66, 67, 97, 98, 99];

  foreach ($ascii_values as $value) {
    echo "The character for ASCII value $value is: " . chr($value) . "\n";
  }
?>
```
