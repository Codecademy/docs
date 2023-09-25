---
Title: 'array_flip()'
Description: 'Interchanges the keys and values of an array.'
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

The **`array_flip()`** method is used to interchange the keys and values of an array. It creates a new array where the original array's values become the keys, and the keys become the values. This function can be useful in situations where it's needed to quickly lookup keys based on their previous values.

## Syntax

```pseudo
array_flip($original_array)
```

The `array_flip()` function has one required parameter:

- `$original_array`: The array to be flipped.

## Example

The following example uses the `array_flip()` function to flip `$original_array` :

```php
<?php
    $original_array = array(
      'apple' => 'fruit',
      'carrot' => 'vegetable'
    );

    $flipped_array = array_flip($original_array);

    print_r($flipped_array);
?>
```

The example will result in the following output:

```shell
Array (
  ['fruit'] => 'apple',
  ['vegetable'] => 'carrot'
)
```

## Codebyte Example

This example is runnable and uses the `array_flip()` function:

```codebyte/php
<?php
    $colors = array('red', 'blue', 'green');
    $color_to_search = 'blue';

    if (isset(array_flip($colors)[$color_to_search])) {
        echo "The color $color_to_search exists in the array.";
    } else {
        echo "The color $color_to_search does not exist in the array.";
    }
?>
```
