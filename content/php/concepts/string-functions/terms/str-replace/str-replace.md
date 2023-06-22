---
Title: 'str_replace()'
Description: 'Returns a string with occurrences of a specified substring replaced by another string.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`str_replace()`** function returns a string with occurrences of a specified substring replaced by another string. The function can operate on scalar `strings` or `arrays`.

## Syntax

```pseudo
str_replace($search, $replace, $base, $count)
```

- `$search` is the string being searched for in `$base`. It can be a `string` or an `array`. If it's an `array`, each element will be searched for in turn.
- `$replace` is the `string` used for replacing the `$search` term. If `$search` and `$replace` are `arrays`, each `$search` item will be replaced by the corresponding item in `$replace`. If `$replace` items run out, then an empty `string` will be used for remaining values. If `$search` is an `array` and `$replace` is a `string`, then the `$replace` value will be used for all `$search` items.
- `$base` is the `string(s)` being searched. If it is an `array`, the replacements will be made to every `string` in the `array`, and the function will return an `array` of the modified `strings`.
- `$count` is an optional `int`. If included, it will be set to the number of replacements performed.

## Example

The following example uses the `str_replace()` function to repeat the `"bon"` `2` times. Then the `echo` command prints this `string` to the console:

```php
<?php
  echo str_replace("bon", 2);
?>
```

The example will result in the following output:

```shell
bonbon
```

## Codebyte Example

This example provides three demonstrations of `str_replace()` operating on a `string`.

```codebyte/php
<?php
  $search = array("a", "e", "i", "o", "u");
  $replace = array("1", "2", "3", "4", "5");

  echo(str_replace($search,$replace,"Hello World!") . "\n");
  echo(str_replace($search,"x","Hello World!") . "\n");

  $result = str_replace("o","0","Hello World!",$count);
  echo($count . " replacements in " . $result);
?>
```
