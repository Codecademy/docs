---
Title: 'str_repeat()'
Description: 'Returns a string with occurrences of a specified substring repeated a specified number of times.'
Description: 'Returns a string that repeats a substring a specified number of times.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
@@ -18,11 +18,11 @@ The `str_repeat()` function returns a string that repeats a substring a specifie
## Syntax

```pseudo
str_replace($string, $repeat)
str_repeat($string, $repeat)
```

- `$string`: Specifies the string to repeat and it is required.
- `$repeat`: Specifies the number of times the string will be repeated. Must be greater or equal to 0 and it is also required.
- `$string`: Specifies the string argument to repeat. It is required.
- `$repeat`: Specifies the number of times the string will be repeated. Must be greater or equal to 0. It is also required.

## Codebyte Example

@@ -32,10 +32,8 @@ This example provides a few demonstrations of `str_repeat()` operating on a stri
```codebyte/php
<?php
echo (str_repeat("I-am-repeated ",3)."\n");
echo (str_repeat("Cool ",10). "\n");
echo (str_repeat("I-don't-appear ",0). "\n");
  echo (str_repeat("I-am-repeated ", 3)."\n");
  echo (str_repeat("Cool ", 10). "\n");
  echo (str_repeat("I-don't-appear ", 0). "\n");
?>
```
