---
Title: 'array_chunk()'
Description: 'Splits an array into a number of specified chunks.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`array_chunk()`** method splits an array into chunks and returns a multidimensional array, each array containing `length` elements.

## Syntax

```pseudo
array_chunk($array, $length, $preserve_keys)
```

The `array_chunk()` function has two required parameters and one optional parameter.

- `$array`: Specifies the input array.
- `$length`: An integer that specifies the number of elements in a chunk.
- `$preserve_keys`: When set to `true` keys will be preserved. The default is `false` which will reindex each chunk.

The `array_chunk()` function returns a multidimensional array, with each dimension containing `$length` elements.

## Example

The following example uses the `array_chunk()` function to split an array of students into chunks of 5. Additionally, the `$preserve_keys` parameter is set as `true`, which maintains the existing indexes.

```php
<?php
$students = [
"Alice", "Bob", "Charlie", "David", "Emma", "Frank",
"Grace", "Henry", "Isabella", "Jack", "Kate", "Liam",
"Mia", "Noah", "Olivia", "Peter", "Quinn", "Ruby",
"Sophia"
];

$chunkedArray = array_chunk($students, 5, true);

print_r($chunkedArray)
```

The example will result in the following output:

```shell
Array
(
    [0] => Array
        (
            [0] => Alice
            [1] => Bob
            [2] => Charlie
            [3] => David
            [4] => Emma
        )

    [1] => Array
        (
            [5] => Frank
            [6] => Grace
            [7] => Henry
            [8] => Isabella
            [9] => Jack
        )

    [2] => Array
        (
            [10] => Kate
            [11] => Liam
            [12] => Mia
            [13] => Noah
            [14] => Olivia
        )

    [3] => Array
        (
            [15] => Peter
            [16] => Quinn
            [17] => Ruby
            [18] => Sophia
        )

)
```

> **Note:** The last chunk may contain less than `$length` elements.

## Codebyte Example

This example is runnable and uses the `array_chunk()` function:

> **Note:** The example uses a `foreach` loop to cycle through the elements with each chunk, and `implode()` is used to join the names of students in each chunk to create a readable format for output.

```codebyte/php
<?php
function chunkStudents($students, $chunkSize) {
    $chunkedArray = array_chunk($students, $chunkSize);

    foreach ($chunkedArray as $chunkNumber => $chunk) {
        echo "Chunk " . ($chunkNumber + 1) . ": " . implode(', ', $chunk) . "\n";
    }
}

$students = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank",
    "Grace", "Henry", "Isabella", "Jack", "Kate", "Liam",
    "Mia", "Noah", "Olivia", "Peter", "Quinn"
];

chunkStudents($students, 5);
?>
```
