---
Title: 'rtrim()'
Description: 'Removes whitespace or other predefined characters from the right side of a string.'
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

The **`rtrim()`** function removes whitespace or other predefined characters from the right side of a string.

## Syntax

```psuedo
rtrim($string, $charlist)
```

- The `$string` parameter is the string from which characters are removed.
- The `$charlist` parameter specifies which characters to remove from the string. If omitted, then the following characters are removed from the right side (if applicable):

- `\0` - NULL
- `\t` - tab
- `\n` - new line
- `x0B` - vertical tab
- `\r` - carriage return
- `" "` - space

## Example

The following example removes specified characters from the right side of a string:

```php
<?php
  $str = "Hello World!\n";
  echo "Without rtrim: " . $str;
  echo "With rtrim: " . rtrim($str, "World!\n");
?>
```

This results in the following output:

```shell
Without rtrim: Hello World!
With rtrim: Hello
```

## Codebyte Example

The following runnable example removes whitespaces from the right side of the string:

```codebyte/php
<?php
  $str = "Hello World!    ";
  echo "Without rtrim: " . $str;
  echo "<br/>";
  echo "With rtrim: " . rtrim($str);
?>
```
