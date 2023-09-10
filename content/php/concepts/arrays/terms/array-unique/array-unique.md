---
Title: 'array_unique()'
Description: 'Returns an array without duplicate values.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_unique()`** function returns a new array with any duplicate values removed.

## Syntax

```pseudo
array_unique($array, $sort_flags = SORT_STRING)
```

- `$array`: The array from which the duplicate values will be removed.
- `$sort_flags` (optional): Specifies how the array will be sorted. By default, it is set to `SORT_STRING`.

Types of sort flags:

- `SORT_REGULAR`: Does not change the types of the items when comparing.
- `SORT_NUMERIC`: Treats all items as numbers.
- `SORT_STRING`: Treats all items as strings (e.g. "1" and 1 are considered equal).
- `SORT_LOCALE_STRING`: Compare items as strings, based on the current locale.

> **Note:** When multiple values are considered equal, only the first key will be retained.

## Example

Consider the following `$vegetables` array:

```php
<?php
  $vegetables = array("carrot", "tomato", "potato", "tomato", "cucumber", "potato");
?>
```

To remove the duplicate values from the array, the `array_unique()` function can be implemented as below:

```php
<?php
  $uniqueVegetables = array_unique($vegetables);
  print_r($uniqueVegetables);
?>
```

The code results in the following output. Note only the first occurrence of `tomato` and `potato` are retained.

```shell
Array
(
  [0] => carrot
  [1] => tomato
  [2] => potato
  [4] => cucumber
)
```

## Codebyte Example

In the code below, the `array_unique()` function is used to remove duplicate values from the `$shoppingList` array.

```codebyte/php
<?php
  $shoppingList = array("milk", "bread", "eggs", "milk", "canned beans", "bread");
  $uniqueShoppingList = array_unique($shoppingList);
  print_r($uniqueShoppingList);
?>
```
