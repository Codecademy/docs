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

 - **"\O"** - NULL
 - **"\t"** - tab
 - **"\n"** - new line
 - **"xOB"** - vertical tab
 - **"\r"** - carriage return
 - **" "** - whitespace

## Codebyte Example 
**Example 1**: removes whitespaces from the right side of the string

```codebyte/php
<?php
$str = "Hello World!    ";
echo "Without rtrim: " . $str;
echo "<br>";
echo "With rtrim: " . rtrim($str);
?>
```

**Example 2**: Remove newlines (\n) from the right side of a string:
```codebyte/php
<?php
$str = "Hello World!\n\n\n";
echo "Without rtrim: " . $str;
echo "<br>";
echo "With rtrim: " . rtrim($str);
?>
```
