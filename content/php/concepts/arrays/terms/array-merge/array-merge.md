---
Title: 'array_merge()'
Description: 'Merges one or more arrays to form a single array.'
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

The **`array_merge()`** function combines one or more arrays together to form a single array. If any of the arrays have the same string key, the value of that key is overwritten with the value of the last element indexed by that key. For arrays with numeric keys the resultant array is reindexed beginning at zero. Calling `array_merge()` without any arguments returns an empty array.

## Syntax

```pseudo
array_merge(array ...$arrays)
```

- `$arrays` is a list of arrays of variable length

## Example

The following example merges two arrays into one. The arrays `$existing_usernames` and `$new_usernames` both have the key `"user2"`. The array produced takes the value of `"user2"` from `$new_usernames` since it references the key last.

```php
<?php
    $existing_usernames = array("user1" => "Joe", "user2" => "Bill");
    $new_usernames = array("user2" => "Billy", "user3" => "Bob");
    $all_usernames = array_merge($existing_usernames, $new_usernames);
    print_r($all_usernames);
?>
```

The above code results in the following output:

```shell
Array
(
    [user1] => Joe
    [user2] => Billy
    [user3] => Bob
)
```

## Codebyte Example

In the code snippet below `array_merge()` takes three arrays as arguments and combines them to create a single array. Run the example and note the change in indexes of the resultant array.

```codebyte/php
<?php
    $arr1 = array(2 => "red", 6 => "green");
    $arr2 = array(1 => "blue", 7 => "orange");
    $arr3 = array(10 => "purple", 5 => "pink");
    $arr4 = array_merge($arr1, $arr2, $arr3);
    print_r($arr4);
?>
```
