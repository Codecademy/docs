---
Title: 'rsort()'
Description: 'sort an array in descending order'
Subjects: 
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags: 
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`rsort()`** sorts an indexed array in descending order.

## Syntax

```pseudo
rsort(arrayToSort, sortType)
```

- `arrayToSort`: An array - required parameter, specifies the array to sort in rsort.
- `sortType`: A sort type - optional flag parameter, specifies how to compare the array elements.

> **Note:** If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

###### Sorting type flags

- **SORT_REGULAR** - compare items normally
- **SORT_NUMERIC** - compare items numerically
- **SORT_STRING**  - compare items as strings
- **SORT_LOCALE_STRING** - compare items as strings, based on the current locale. It uses the locale, which can be changed using setlocale()
- **SORT_NATURAL** - compare items as strings using "natural ordering" like natsort()
- **SORT_FLAG_CASE** - can be combined (bitwise OR) with SORT_STRING or SORT_NATURAL to sort strings case-insensitively



## Example

In this example array of fruits is sorted in descending order.

```php
<?php
$fruits = array("lemon", "orange", "banana", "apple");
rsort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```



## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
