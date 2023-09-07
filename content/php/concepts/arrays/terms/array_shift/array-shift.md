---
Title: 'array_shift()'
Description: 'Shifts/pops an element off the beginning of array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_shift()`** shifts/pops the first value of the array off and returns it, shortening the array by one element and moving everything down. All numerical array keys will be modified to start counting from zero while literal keys won't be affected.

## Syntax

```pseudo
array_shift(array &$array)
```

- `$array` is the input array.

## Example

The following example shifts the first element in `$counting_rhyme` and assigns the returned value to the `$removed` variable, then it prints out `$removed` and the modified `$counting_rhyme` array.

```php
<?php
    $counting_rhyme = ["Eeny", "Meeny", "Miny", "Moe"];
    $removed = array_shift($counting_rhyme); 
    echo $removed . "\n"; //Prints: Eeny
    print_r($counting_rhyme) //Prints: the modified array
?>
```

The above code results in the following output:

```shell
Eeny
Array
(
    [0] => Meeny
    [1] => Miny
    [2] => Moe
)
```

## Codebyte Example

In the code snippet below `array_shift()` takes the only existing item in the array at first and then tries to take the first item again from an empty array. Then we print out a string with the values returned.

```codebyte/php
<?php
    $empty_array = array(1);
    $one = array_shift($empty_array);
    $nothing = array_shift($empty_array);
    print("This is the \"nothing\" value - " . $nothing . ". And the \"one\" value - " . $one . ".");
?>
```
