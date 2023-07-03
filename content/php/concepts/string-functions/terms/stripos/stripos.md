---
Title: 'stripos()'
Description: 'Searches for the position of the first occurrence of a string inside another string without regard for case.'
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

The **`stripos()`** function performs a case-insensitive search for the position of the first occurrence of a string inside another string. If the string is found, it will return the index of the beginning of the string. If the string isn't found, the function won't return any output.

`stripos()` is binary-safe, meaning it will interpret the string with the correct amount of characters it contains, even if the string contains non-ASCII bytes or null bytes.

## Syntax

```pseudo
stripos(given_string, string_to_find, start_search)
```

Required Parameters:

- `given_string` is the string that the function searches.
- `string_to_find` is the string to search within `given_string`.

Optional Parameters:

- `start_search` tells the function to start the search at a specified index.

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

### With Required and Optional Parameters

```php
<?php
echo stripos("I will return the position of a string", "will", 3);
?>
```

The above code won't return anything, as the search begins at index 3. The string "will" doesn't appear again after index 2.

> **Note:** The output will not return anything, but will evaluate to `false`.

## Codebyte

The following example is a runnable code snippet using `stripos()`. It only uses the required parameters: the given string ("I like pizza") and the string to find ("pizza").

```codebyte/php
<?php
$given_string = "I like pizza";
$string_to_find = "pizza";

$position_of_pizza = stripos($given_string, $string_to_find);

echo $position_of_pizza;
?>
```
