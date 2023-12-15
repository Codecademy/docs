---
Title: 'strtolower()'
Description: 'Converts a string to lowercase.'
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

The **`strtolower()`** function in PHP converts a string to lowercase.

## Syntax

```pseudo
strtolower($string);
```

The `strtolower()` function takes one parameter, `$string`, as input and returns a new `string` with all the characters converted to lowercase. The `$string` can be any `string` value.

## Example

The following example uses the `strtolower()` function to convert a capitalized `string` to a lowercase `string`. Then the `echo` command prints this `string` to the console:

```php
<?php
  echo (strtolower( "I Solemnly Swear That I Am Up To No Good"));
?>
```

The example will result in the following output:

```shell
i solemnly swear that i am up to no good
```

## Codebyte Example

The following example uses the `strtolower()` function on a `string`:

```codebyte/php
<?php
  $upper_string = 'Hello, World! 1234';

  echo strtolower($upper_string);
?>
```
