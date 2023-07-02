---
Title: 'str_contains()'
Description: 'Returns a boolean indicating if the specified string contains the substring provided.'
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

The **`str_contains()`** function performs a case sensitive search for a given substring within a string. Checking for the presence of an empty string will always return a positive result.

## Syntax

```pseudo
str_contains($aString, $aSubstring)
```

- `$aString`: The string to be searched.
- `$aSubstring`: The substring to be found.

## Example

The following example demonstrates the case sensitive nature of `str_contains()`.

```php
<?php
    $sentence = "I love New York";
    $word = "new";

    if(str_contains($sentence, $word)) {
        echo $word." found.";
    }

    $word = "New";
    if(str_contains($sentence, $word)) {
        echo $word." found.";
    }
?>
```

The above code results in the following output:

```shell
New found.
```
