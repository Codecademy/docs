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
- **SORT_LOCALE_STRING** - compare items as strings, based on the current locale option (setlocale())
- **SORT_NATURAL** - compare items as strings using "natural ordering" like natsort()
- **SORT_FLAG_CASE** - sort strings case-insensitively with other flag options (SORT_STRING, SORT_NATURAL). 


## Example

In this example array of fruits is sorted in descending order.

```php
<?php
$fruits = array("Grapes", "Mangos", "Cherries", "Kiwis");
rsort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```

The output looks like this:

0 = Mangos 
1 = Kiwis 
2 = Grapes 
3 = Cherries


## Codebyte Example

The following codebyte example sorts in descending order array of `numbers`.

```codebyte/php
<?php
$numbers=array(5,8,2,45,12);
rsort($numbers);

foreach ($numbers as $key => $val) {
    echo "$key = $val\n";
}
?>
```
