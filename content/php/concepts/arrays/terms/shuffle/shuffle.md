---
Title: 'shuffle()'
Description: 'Randomizes the indexes of the elements in a given array.'
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

The **`shuffle()`** function randomizes the indexes of the elements in a given array.

## Syntax

```pseudo
shuffle($array)
```

The `shuffle()` function has only one parameter:

- `$array`: Specifies the array to randomize.

The `shuffle()` function returns an array with randomized elements.

## Example

The following example uses the `shuffle()` function to randomize an array of numbers:

```php

<?php
$numArray = array(1,2,3,4,5,6,7);

shuffle($numArray);
print_r($numArray);
?>
```

The example will result in an output similar to the following:

```shell
Array ( [0] => 2 [1] => 6 [2] => 3 [3] => 4 [4] => 1 [5] => 5 [6] => 7 )
```

## Codebyte Example

This example is runnable and demonstrates a simple lottery randomizer which uses the `shuffle()` function:

```codebyte/php
<?php
$lotteryUsers = array('Hendrik','Rhoxane','Yevstakhiy','Ramdas','Mohamed','Gorbachov');

shuffle($lotteryUsers);
print('The Lottery\'s $1,000,000 jackpot was won by ... '. $lotteryUsers[3].' !');

?>
```
