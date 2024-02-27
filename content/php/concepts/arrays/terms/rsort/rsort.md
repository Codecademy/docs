---
Title: 'rsort()'
Description: 'Sorts a given array in descending order.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`rsort()`** function sorts an indexed array in descending order. The sorting is done in place in lieu of returning a sorted copy.

## Syntax

```pseudo
rsort(arrayToSort, sortType)
```

- `arrayToSort`: An array - required parameter, specifies the array to sort.
- `sortType`: A sort type - optional flag parameter, specifies how to compare the array elements.

> **Note:** If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Sorting Flags

- `SORT_REGULAR`: Compare items normally.
- `SORT_NUMERIC`: Compare items numerically.
- `SORT_STRING`: Compare items as strings.
- `SORT_LOCALE_STRING`: Compare items as strings, based on the current locale option (`setlocale()`).
- `SORT_NATURAL`: Compare items as strings using "natural ordering" like `natsort()`.
- `SORT_FLAG_CASE`: Sort strings case-insensitively with other flag options (`SORT_STRING`, `SORT_NATURAL`).

## Example

In this example `fruits` is sorted in descending order.

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

```shell
0 = Mangos
1 = Kiwis
2 = Grapes
3 = Cherries
```

## Codebyte Example

The following example sorts `numbers` with the `SORT_STRING` flag.

```codebyte/php
<?php
$numbers=array(5,8,2,45,12);
rsort($numbers, SORT_STRING);

foreach ($numbers as $key => $val) {
    echo "$key = $val\n";
}
?>
```
