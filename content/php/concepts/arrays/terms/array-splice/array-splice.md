---
Title: 'array_splice()'
Description: 'Removes a set of elements from an array and replaces them with a new set of elements.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn/php'
  - 'paths/computer-science'
---

The **`array_splice()`** method takes an array as its input value and replaces elements within the array with new elements. The developer can specify within the method the starting index value for the replacement values, and the length of the values to be replaced.

## Syntax

```pseudo
array_splice($input_array, $starting_index, $replacement_length, $replacement_values)
```

The `array_splice()` method has two required parameters and two optional parameters.

Required Parameters:

- `$input_array`: The original array that will receive the new elements.
- `$starting_index`: The index value that specifies where the replacement elements will start within the `$input_array`.

> **Note:** Positive and negative index values are valid arguments for the `$starting_index`. A negative number counts from the last index value in the array (i.e. -3 equals third value from last).

Optional Parameters:

- `$replacement_length`: The length of values to be replaced within the `$input_array`.
- `$replacement_values`: An array that contains the new values that will be "spliced" into the `$input_array`.

> **Note:** If there is only one replacement value a `string` can be used in place of an `array`.

## Example

This example demonstrates a use of `array_splice()`.

```php
<?php
  $colors_array = array("red", "orange", "yellow", "green", "blue", "purple");
  $new_colors = array("dandelion yellow", "forest green");
  array_splice($colors_array, 2, 2, $new_colors);
  print_r($colors_array);
?>
```

This is the output of the previous example:

```shell
Array (
  [0] => "red"
  [1] => "orange"
  [2] => "dandelion yellow"
  [3] => "forest green"
  [4] => "blue"
  [5] => "purple"
)
```

## Codebyte Example

This runnable codebyte example demonstrates an alteration using `array_splice()`.

```codebyte/php
<?php
  $pets_array = array("dog", "cat", "horse", "hamster");
  $new_pets_array = array("wooly mammoth", "saber tooth tiger");

  echo "This is the original pets array: ";
  print_r($pets_array);

  array_splice($pets_array, 1, 2, $new_pets_array);

  echo "This is the altered pets array: ";
  print_r($pets_array);
?>
```
