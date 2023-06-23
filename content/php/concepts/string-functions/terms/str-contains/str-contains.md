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
str_contains($haystack, $needle)
```

- `$haystack` the string to be searched.
- `$needle` the substring to be found.

## Codebyte Example

The following runnable example demonstrates the case sensitive nature of `str_contains()`.

```codebyte/php
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

Note that when `$word` is assigned the string `"New"` the code within the second if statement executes.
