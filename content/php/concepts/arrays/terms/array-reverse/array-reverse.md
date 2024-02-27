---
Title: 'array_reverse()'
Description: 'Reverses the items in an array and returns the reversed array.'
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

The **`array_reverse()`** function reverses the items in an array and returns that reversed array.

## Syntax

```pseudo
array_reverse(array, preserve_keys)
```

- `array`: The array to reverse.
- `preserve_keys`: Optional argument that defaults to `false` if omitted. If set to `true`, the keys of the original, non-reversed array will be preserved.

> **Note:** If the keys used are non-numeric, they will always be preserved, regardless of whether the `preserve_keys` argument is used.

## Example

This example returns the reversed array `$a` using the `array_reverse()` method.

```php
<?php
  $a = array(0=>"andrew",1=>"byrne",2=>"hozier",3=>"unreal");
  print_r(array_reverse($a));
?>
```

This is the output:

```shell
Array
(
  [0] => unreal
  [1] => hozier
  [2] => byrne
  [3] => andrew
)
```

This example uses the `preserve_keys` argument while calling the `array_reverse()` method to return `$a`.

```php
<?php
    $a = array(0=>"andrew",1=>"byrne",2=>"hozier",3=>"unreal");
    print_r(array_reverse($a, true));
?>
```

This is the output:

```shell
Array
(
  [3] => unreal
  [2] => hozier
  [1] => byrne
  [0] => andrew
)
```

## Codebyte Example

The following codebyte example can be run and calls the `array_reverse()` method three times. The second call uses the `preserve_keys` argument. And the third call shows that non-numeric keys are preserved automatically, even if the `preserve_keys` argument is not given.

```codebyte/php
<?php
  $a = array(0=>"coffee",1=>"toast",2=>"jam");
  print_r(array_reverse($a));
  print_r(array_reverse($a, true));
  $alph = array("c"=>"coffee","t"=>"toast","j"=>"jam");
  print_r(array_reverse($alph));
?>
```
