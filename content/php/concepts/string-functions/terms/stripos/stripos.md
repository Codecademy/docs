---
Title: 'stripos()'
Description: 'Returns the position of the first occurrence of a substring inside a given string.'
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

The **`stripos()`** function performs a case-insensitive search for the position of the first occurrence of a substring in a given string. If the substring is found, it will return the index of the beginning of the substring. If it isn't found, the function won't return any output.

`stripos()` is binary-safe, meaning it will interpret the string with the correct amount of characters it contains, even if the string contains non-ASCII bytes or null bytes.

## Syntax

```pseudo
stripos(given_string, sub_string_to_find, start_search)
```

Required Parameters:

- `given_string` is the string that the function searches.
- `sub_string_to_find` is the value to search for within `given_string`.

Optional Parameters:

- `start_search` tells the function to start the search at a specified index.

> **Note:** If the substring is not found the method will not return anything, but will evaluate to `false`.

## Example

### With Required Parameters

```php
<?php
echo stripos("I will return the position of a string", "will");
?>
```

> **Note:** String positions start at index 0.

The output of the above code will be `2`, as the string "will" starts at index 2.

`stripos()` is case-insensitive. In the example above, the result would be the same if the second parameter was written as "WILL" instead of "will".

## Codebyte

### With Required and Optional Parameters

```codebyte/php
<?php
echo stripos("Will and I will return tomorrow in the evening.", "will", 3);
?>
```

The above code is runnable, alter the `start_search` parameter to see how it changes the result.
