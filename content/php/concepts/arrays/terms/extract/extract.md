---
Title: 'extract()'
Description: 'Uses an array of keys and values to create variables in the current symbol table.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`extract()`** method imports variables into the current symbol table from an array.

## Syntax

```pseudo
extract($array, flags, prefix)
```

The `extract()` function has one required parameter and some optional parameters:

- `$array`: Specifies the input array.
- `flags`: Optional. The `extract()` function checks for invalid variable names and collisions with existing variable names. This parameter specifies how invalid and colliding names are treated. Below are possible values:
  - `EXTR_OVERWRITE`: Default. On collision, the existing variable is overwritten.
  - `EXTR_SKIP`: On collision, the existing variable is not overwritten.
  - `EXTR_PREFIX_SAME`: On collision, the variable name will be given a prefix.
  - `EXTR_PREFIX_ALL`: All variable names will be given a prefix.
  - `EXTR_PREFIX_INVALID`: Only invalid or numeric variable names will be given a prefix.
  - `EXTR_IF_EXISTS`: Only overwrites existing variables in the current symbol table, otherwise does nothing.
  - `EXTR_PREFIX_IF_EXISTS`: Only adds prefix to variables if the same variable exists in the current symbol table.
  - `EXTR_REFS`: Extracts variables as references.
- `prefix`: Optional. If `EXTR_PREFIX_SAME`, `EXTR_PREFIX_ALL`, `EXTR_PREFIX_INVALID` or `EXTR_PREFIX_IF_EXISTS` are used in the `flags` parameter, a specified prefix is required.

The `extract()` function returns the number of variables extracted on success.

## Example

The following example demonstrates an implementation of the `extract()` function:

```php
<?php
  $a = "Original";
  $my_array = array("a" => "Rat","b" => "Mule", "c" => "Ass");
  extract($my_array);
  echo "\$a = $a; \$b = $b; \$c = $c";
?>
```

The example will result in the following output:

```shell
$a = Rat; $b = Mule; $c = Ass
```

## Codebyte Example

This example is runnable and uses the `extract()` function:

```codebyte/php
<?php
  $size = "small";
  $var_array = array("color" => "navy",
                   "size"  => "large",
                   "shape" => "oval");
  extract($var_array, EXTR_PREFIX_SAME, "wddx");

  echo "$color, $size, $shape, $wddx_size\n";
?>
```
