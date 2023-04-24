---
Title: 'rtrim()'
Description: 'removes whitespace or other predefined characters from the right side of a string.'
Subjects: 
    - 'Computer Science'
    - 'Web Design'
    - 'Web Development'
Tags: 
    - 'Strings'
    - 'Functions'
CatelogContent:
    - 'learn-php'
    - 'paths/computer-science'
---

The **`rtrim()`** method removes whitespace or other predefined characters from the right side of a string.

## Syntax

```psuedo
rtrim(string,charlist)
```

- The `string` parameter is the string from which we need to remove the characters.
- The `charlist` parameter specifies which characters to remove from the string. If omitted then following characters are removed.

 - `\0` - NULL
 - `\t` - tab
 - `\n` - new line
 - `x0B` - vertical tab
 - `\r` - carriage return
 - `" "` - space

## Example

Remove newlines (\n) from the right side of a string:

```php
<?php
$str = "Hello World!\n\n\n";
echo "Without rtrim: " . $str;
echo "With rtrim: " . rtrim($str);
?>
```

This results in the following output: 

```shell
Without rtrim: Hello World!


With rtrim: Hello World!
```

## Codebyte Example 

The following example removes whitespaces from the right side of the string

```codebyte/php
<?php
$str = "Hello World!    ";
echo "Without rtrim: " . $str;
echo "<br>";
echo "With rtrim: " . rtrim($str);
?>
```
