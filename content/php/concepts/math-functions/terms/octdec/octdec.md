---
Title: 'octdec()'
Description: 'Returns given octal numbers to decimal numbers.'
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

Shortly, it means converting an octal number to a decimal number. In PHP, **octdec()** function is a built-in function that calculates the decimal equivalent of an octal number. 

## Syntax

```pseudo
octdec($value);
```

It accepts a single parameter as an argument, which has to be a string representing the octal number to convert to a decimal number. It will be ignored if you try to pass an invalid character as an argument.

## Example

The example below uses the `octdec()` function to convert an octal to its decimal value.

```php
<?php
 echo octdec("65");
 echo octdec("3098");
?>
```

This example will gives the following output:

```shell
53
1043
```


## Codebyte Example

Run your code and try converting decimal numbers from octal numbers.

```codebyte/php
<?php
 echo octdec("20001");
?>
```
