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

The **`str_replace()`** function returns a `string` with occurrences of a specified substring replaced by another `string`. The function can operate on scalar `strings` or `arrays`.

## Syntax

```pseudo
str_replace($search, $replace, $base, $count)
```

- `$search` is the `string` being searched for in `$base`. It can be a `string` or an `array`. Each element will be searched for if it's an `array`.
- `$replace` is the `string` used for replacing the `$search` term. If `$search` and `$replace` are `arrays`, each `$search` item will be replaced by the corresponding item in `$replace`. If `$replace` items run out, an empty `string` will be used for the remaining values. If `$search` is an `array` and `$replace` is a `string`, then the `$replace` value will be used for all `$search` items.
- `$base` is the `string`(s) being searched. If it is an `array`, the replacements will be made to every `string` in the `array`, and the function will return an `array` of the modified `strings`.
- `$count` is an optional `int`. If included, it will be set to the number of replacements performed.

## Example

The following example uses the `str_replace()` function to replace the word `"book"` with `"lot"` in the given sentence. Then the [`echo`](https://www.codecademy.com/resources/docs/php/string-functions/echo) command prints this sentence to the console:

```php
<?php
  echo str_replace("book", "lot", "I read a book.");
?>
```

The example will result in the following output:

```shell
I read a lot.
```

## Codebyte Example

This example uses the `str_replace()` function with `strings`.

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
