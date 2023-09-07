---
Title: 'array_shift()'
Description: 'Shifts/pops an element off the beginning of an array.'
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

The **`array_shift()`** shifts/pops the first value of the array off and returns it, shortening the array by one element and shifting each element down. Numerical keys will be reset to start counting from 0, whereas the remaining literal keys will not be affected.

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

In the code snippet below `array_shift()` is used twice. First time it takes the one element with a numerical key, second time with a literal key. After that the `$num_array` is printed out. Notice that a string of a numerical key ("600") is still a numerical key, so it is reset to 0.

```codebyte/php
<?php
    $num_array = [1000 => "one thousand", "one_hun" => "one hundred", "600" => "six hundred", "two_hun" => "two hundred"];
    $one = array_shift($num_array);
    $two = array_shift($num_array);
    print_r($num_array);
?>
```
