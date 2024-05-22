---
Title: 'array_fill()'
Description: 'Fills an array with values and returns the filled array.'
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

The **`array_fill()`** method is used to fill an array with values. This function creates a custom array with a given pre-filled value.

## Syntax

```pseudo
array_fill($start_index, $number_elements, $values)
```

The `array_fill()` function has three required parameters:

- `$start_index`: This parameter specifies the first index of the returned array.
- `$number_elements`: This parameter refers to the number of elements to insert into the array.
- `$values`: Specifies the values to be used to fill the array.

The `array_fill()` function returns a filled array.

## Example

The following example uses the `array_fill()` function to add `3` elements of `'coffee'` starting from index `5`, to the indexed array `$drink`:

```php
<?php
    $drink = array_fill(5, 3, 'coffee');
    print_r($drink);
?>
```

The example will result in the following output:

```shell
Array (
[5] => coffee
[6] => coffee
[7] => coffee
)
```

## Codebyte Example

This example is runnable and uses the `array_fill()` function:

```codebyte/php
<?php
    $array = array_fill(0, 5, "Hello");
    print_r($array);
?>
```
