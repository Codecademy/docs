---
Title: 'sort()'
Description: 'Sorts an array in ascending order.'
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

The **`sort()`** method sorts the given array in ascending order.

## Syntax

```pseudo
sort($array, $sort_flags = SORT_REGULAR)
```

The `sort()` function has one required parameter, `$array`, which specifies the input array. The `sort()` function also has one optional parameter, `$sort_flags`, which specifies the sorting type. The default sorting type is `SORT_REGULAR`. The following sorting types are available:

| Sorting Type         | Description                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| `SORT_REGULAR`       | Default. Compares items normally.                                                                     |
| `SORT_NUMERIC`       | Compares items numerically.                                                                           |
| `SORT_STRING`        | Compares items as strings.                                                                            |
| `SORT_LOCALE_STRING` | Compares items as strings, based on the current locale.                                               |
| `SORT_NATURAL`       | Compares items as strings using "natural ordering" like `natsort()`.                                  |
| `SORT_FLAG_CASE`     | Can be combined (bitwise OR) with `SORT_STRING` or `SORT_NATURAL` to sort strings case-insensitively. |

This function assigns new keys to the elements in `$array`. It will remove any existing keys that may have been assigned, rather than just reordering the keys.

It always returns `true`.

## Example

The following example uses the `sort()` function to sort the array `$cars`. Since `$cars` contain strings, the items are sorted alphabetically in ascending order.

```php
<?php
$cars = array("Toyota Camry","Honda Civic","Ford Mustang","Chevrolet Corvette");
sort($cars);
foreach ($cars as $key => $val) {
    echo "cars[" . $key . "] = " . $val . "\n";
}
?>
```

The example will result in the following output:

```shell
cars[0] = Chevrolet Corvette
cars[1] = Ford Mustang
cars[2] = Honda Civic
cars[3] = Toyota Camry
```

## Codebyte Example

In the following codebyte example `$cars` is sorted using the `SORT_NATURAL` and `SORT_FLAG_CASE` flags. This performs a case-insensitive natural ordering sort, whereas the previous example performed a case-sensitive alphabetical sort.

So, the string `"Toyota Camry 1982"` is sorted before `"toyota Camry 1991"`. This is because the `SORT_NATURAL` flag sorts the strings based on their numeric values, and the `SORT_FLAG_CASE` flag sorts the strings case-insensitively. The `SORT_NATURAL` flag is only available as of PHP 5.4.0.

```codebyte/php
<?php
$cars = array("Toyota Camry 1982","Honda Civic 1972","Ford Mustang 1964","Chevrolet Corvette 1953","toyota Camry 1991");
sort($cars, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($cars as $key => $val) {
    echo "cars[" . $key . "] = " . $val . "\n";
}
?>
```
