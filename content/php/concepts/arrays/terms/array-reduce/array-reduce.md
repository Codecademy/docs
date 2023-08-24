---
Title: 'array_reduce()'
Description: 'Iterates through an array to produce a single value.'
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

The **`array_reduce()`** method iterates through an array to produce a single value.

## Syntax

```pseudo
array_reduce(array $array, callable $callback, mixed $initial = null): mixed
```

The first two parameters `$array` and `$callable` are both required, if no argument is given for the `$initial` parameter it will default to the first element of the `$array` argument.

The callback pseudo-code:

```pseudo
callback(mixed $carry, mixed $item): mixed
```

This is the function that will be applied to every element of the array, and it must return a value. Initially `$carry` is the `$initial` argument seen previously, or the first element of the `$array` argument if nothing was given for the `$initial` parameter, where `$item` is simply the first element of the `$array` argument or its second element respectively. After the first iteration `$carry` will be whatever is returned from the function and `$item` will be the next element of the array.

After this loop has completed the `array_reduce()` function will return a single value of any type.

## Example

```php
<?php

    $arrOfNumbers = [1, 6, 10, 14, 23];

    function highestNumber($carry, $item) {
        if ($item > $carry) return $item;
        return $carry;
    }

    var_dump(array_reduce($arrOfNumbers, "highestNumber")); // int(23)

?>
```

## Codebyte Example

Here is an example for you to try:

```codebyte/php
<?php

    $arrOfNumbers = [1, 4, 2, 10, 3];
    
    function evenNumberArr($carry, $item) {
        if ($item % 2 === 0) $carry[] = $item;
        return $carry;
    }

    var_dump(array_reduce($arrOfNumbers, "evenNumberArr", []));

?>
```