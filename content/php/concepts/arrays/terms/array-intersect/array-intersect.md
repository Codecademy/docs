---
Title: 'array_intersect()'
Description: 'Returns the matching items when comparing two or more arrays.'
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

The **`array_intersect()`** function returns the matching values of two or more arrays.

## Syntax

```pseudo
array_intersect(first_array, second_array)
```

The function compares the values of `first_array` and `second_array`. If any values appear in `first_array` that are also present in `second_array`, the function would return an array of those matching values.

Two arrays are required parameters for `array_intersect()`. Any additional array is an optional parameter.

## Example

```php
<?php
$first_array=array(5, 2, 7, 12, 45, 1);
$second_array=array(1, 2, 3, 4, 5, 6);
$third_array=array(7, 2, 4, 6, 4, 65, 100);

$result=array_intersect($first_array, $second_array);
print_r($result);
?>
```

The above example will produce the following output:

```shell
Array ([0] => 5 [1] => 2 [5] => 1)
```

Only values of `$first_array` that are present in all other arrays are returned. In the example above, values that match in `$first_array` and `$seond_array`, and `$first_array` and `$third_array` are returned. Any values that match in `$second_array` and `$third_array` are not returned.
