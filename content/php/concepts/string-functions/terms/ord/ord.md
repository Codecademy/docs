---
Title: 'ord()'
Description: 'Returns an integer between 0 and 255 corresponding to the binary value of the first character of a string.'
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

The **`ord()`** function takes a string as its only parameter and returns an integer between 0 and 255 based on the first character in that string.

The integer returned is the decimal equivalent of the binary representation of the character. This binary representation conforms to the [ASCII standard](https://www.ascii-code.com/). Therefore, the integer returned is the ASCII decimal value of the first character in the parameter string.

## Syntax

```pseudo
ord(string)
```

Required Parameters:

-`string` is the string that the function will take the first character of

## Example

```php
<?php
echo ord("equanimity");
?>
```

This results in the output:

```shell
101
```

In the above example, the first character of the string "equanimity" is "e". In accordance with the ASCII standard, this is represented in binary as 110 0101. This binary value is equivalent to the decimal value 101. Therefore the call to the `ord()` returns 101.

## Codebyte Example

```codebyte\php
<?php
	$your_string = 'Try changing this string!';
	echo "The ASCII value of the first character of your string is: ". ord($your_string);
?>
```

Change the value of `your_string` in the runnable code above to see the ASCII decimal value of various characters.

> **Note:** The original ASCII standard only went up to a decimal value of 128 (mostly including punctuation marks, letters, numbers, and mathematical symbols). Extended ASCII (also called "Windows 1252") extended this to 255 (including foreign letters, currency symbols, and various other characters). The characters included in this extended set are those that `ord()` is to built to deal with. There are printable characters that are not covered by this extension (such as '⅊').