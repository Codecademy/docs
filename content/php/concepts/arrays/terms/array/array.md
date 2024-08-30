---
Title: 'array()'
Description: 'Returns an array that can be either indexed, associative or multidimensional.'
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

The **`array()`** function creates an array. There are three types of array that can be created: indexed, associative, and multidimensional.

| Array Type       | Definition                                        |
| ---------------- | ------------------------------------------------- |
| Indexed          | An array of individual items with a numeric index |
| Associative      | An array of key-value pairs                       |
| Multidimensional | An array containing one or more arrays            |

## Syntax

The `array()` function requires zero or more parameters to create an array. When no parameters are provided, an empty array is created.

Indexed Array:

```pseudo
array(item1, item2, item3);
```

Associative Array:

```pseudo
array(key1=>value1, key2=>value2, key3=>value3);
```

> **Note:** Keys must be either a string or an integer, whereas the values can be of any data type.

Multidimensional Array:

```pseudo
array(
  array(item1, item2, item3),
  array(item4, item5, item6),
  array(item7, item8, item9)
);
```

## Examples

Indexed Array:

The following example shows an array of animals, all accessible by indices.

```php
<?php
$animals = array("cat", "dog", "rabbit");
echo $animals[0];
?>
```

The above code will produce the following output:

```shell
cat
```

Associative Array:

The following example shows the average temperature in July for London, New York, and Tokyo.

```php
<?php
$averageJulyTemp = array("London"=>19, "New York"=>24.5, "Tokyo"=>25);
echo $averageJulyTemp["Tokyo"];
?>
```

The above code will produce the following output:

```shell
25
```

Multidimensional Array:

The example below shows an array containing three separate arrays. Each array within `$fruitEaten` has three parameters. The first parameter refers to the name of a fruit. The second parameter refers to the total number of portions for that fruit. The third parameter is how many portions of that fruit have been eaten.

The dimensions of a multidimensional array refer to the number of indices needed to select an item. In the example below, two indices are needed: the first to select an array within `$fruitEaten` and the second to select the item within the array.

```php
<?php
$fruitEaten = array(
  array("Apple", 20, 5),
  array("Mango", 14, 10),
  array("Kiwi", 10, 6)
);
echo $fruitEaten[1][2]
?>
```

The above code will produce the following output:

```shell
10
```
