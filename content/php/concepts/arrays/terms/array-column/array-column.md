---
Title: 'array_column()'
Description: 'Returns the values from a single column in the input array.'
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

The **`array_column()`** function returns the values from a single column in the input array.

## Syntax

```pseudo
array_column(array, column_key, index_key)
```

- `array`: A multi-dimensional array to use.
- `column_key`: An integer or string key of the column of values to return. It may also be `null` to return complete arrays or objects.
- `index_key`: The column to use as the index for the returned array.

## Example

In this example, the `first_name` keys are returned using the `array_column()` method.

```php
<?php
  $a = array(
  array(
    'id' => 362,
    'first_name' => 'Jane',
    'last_name' => 'Doe',
  ),
  array(
    'id' => 921,
    'first_name' => 'Lois',
    'last_name' => 'Griffin',
  ),
  array(
    'id' => 475,
    'first_name' => 'Lola',
    'last_name' => 'Bunny',
  )
);

$first_names = array_column($a, 'first_name');
print_r($first_names);
?>
```

The output looks like this:

```shell
Array
(
  [0] => Jane
  [1] => Lois
  [2] => Lola
)
```

Additionally, the returned values can be indexed by the `id` column:

```php
<?php
$first_names = array_column($a, 'first_name', 'id');
print_r($first_names);
?>
```

The output looks like this:

```shell
Array
(
  [362] => Jane
  [475] => Lola
  [921] => Lois
)
```

## Codebyte Example

The following codebyte example is runnable and utilizes the `array_column()` method.

```codebyte/php
<?php
  $colorFabrics = array(
  array('color' => 'white', 'fabric' => 'cotton'),
  array('color' => 'blue', 'fabric' => 'denim'),
  array('color' => 'beige', 'fabric' => 'linen')
);
  $fabrics = array_column($colorFabrics, 'fabric');
  print_r($fabrics);
?>
```
