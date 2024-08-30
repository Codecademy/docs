---
Title: 'strpos()'
Description: 'Performs a case-sensitive search for the first occurrence of a substring in a given string.'
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

The **`strpos()`** function performs a case-sensitive search for the position of the first occurrence of a substring in a given string. If the substring is found, it will return the index of the beginning of the substring. If it isn't found, the function won't return any output.

## Syntax

```pseudo
strpos(string, find, start)
```

Parameters:

- `string` is the string that the function searches.
- `find` is the value to search for within `string`.
- `start` tells the function to start the search at a specified index which is optional.

> **Note:** If the substring is found, the function returns the position where the substring starts. If the substring is not found, it returns `false`.

## Example

The following code demonstrates a basic implementation of `strpos()`:

```php
<?php
echo  strpos("I love PHP, I love php too!","php");
?>
```

The output of the above code will be:

```shell
19
```
