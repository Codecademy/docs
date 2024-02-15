---
Title: 'array_search()'
Description: 'Searches an array for a given value and returns the first matching key for that value.'
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

The **`array_search()`** function searches an array for a given value and returns the first matching key for that value.

## Syntax

```pseudo
array_search(value, array, strict)
```

- `value`: The value to search for.
- `array`: The `array` to search in.
- `strict`: Optional argument that defaults to `false` if not given. When set to `true`, the function will search for identical elements to the value. For example, a strict search for an integer will not match a string version of that integer.

> **Note:** String values are case-sensitive for this function.

## Example

In this example, the `h` key is returned using the `array_search()` method.

```php
<?php
  $a = array("a"=>"andrew","b"=>"byrne","h"=>"hozier");
  echo array_search("hozier",$a);
?>
```

The output looks like this:

```shell
h
```

## Codebyte Example

The following codebyte example can be run and uses the `array_search()` method.

```codebyte/php
<?php
  $a = array("f"=>"florence","p"=>"plus","m"=>"machine");
  echo array_search("machine",$a);
?>
```
