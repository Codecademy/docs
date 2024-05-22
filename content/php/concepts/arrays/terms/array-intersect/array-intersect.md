---
Title: 'array_intersect()'
Description: 'Returns the matching values of two or more arrays.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_intersect()`** function compares the values in all arrays provided against the first array and returns the matching values.

## Syntax

```pseudo
array_intersect(first_array, second_array, third_array...)
```

`array_intersect()` takes two or more arrays and returns any values from `first_array` that are also present in `second_array` and `third_array`, and any other array that is given.

## Example

```php
<?php
$first_array=array(5, 2, 1, 12, 65, 7);
$second_array=array(1, 5, 3, 7, 2, 6);
$third_array=array(7, 6, 4, 2, 7, 65, 100);

$result=array_intersect($first_array, $second_array, $third_array);
print_r($result);
?>
```

The above example will produce the following output:

```shell
Array ([1] => 2 [5] => 7)
```

> **Note:** Only the values from `$first_array` present in all other arrays are returned. In the example above, `2` and `7` appear in all three arrays so they are returned as matches. If no matches are found, the function returns an empty array.
