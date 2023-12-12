---
Title: 'octdec()'
Description: 'Converts octal numbers to decimal numbers.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`octdec`()** function is a built-in function that calculates the decimal equivalent of an octal number. It accepts the octal number as the only argument.

## Syntax

```pseudo
octdec(value);
```

- `value`: An octal number given as a parameter to the function in string format. If an invalid character is passed, it is ignored.

## Example

The example below uses the `octdec()` function to convert an octal number to its decimal value.

```php
<?php
echo octdec("65") . "<br>";
echo octdec("3098") . "<br>";
?>
```

This example will give the following output:

```shell
53
24
```

## Codebyte Example

Run the code below to get a better idea of how the `octdec()` function works:

```codebyte/php
<?php
 echo octdec("20001");
?>
```
