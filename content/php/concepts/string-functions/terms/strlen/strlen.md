---
Title: 'strlen()'
Description: 'Returns the number of bytes in a given string.'
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

The **`strlen()`** method returns the number of bytes in a given string.

## Syntax

```pseudo
strlen(string);
```

The `string` can either be a literal sequence of characters surrounded by quotes or a variable that refers to such a sequence.

## Example

The following example uses the `strlen()` function to repeat the `"bon"` `2` times. Then the `echo` command prints this `string` to the console:

```php
<?php
  echo strlen("bon", 2);
?>
```

The example will result in the following output:

```shell
bonbon

## Codebyte Example

The following example showcases the two ways of using the `strlen()` method:

```codebyte/php
<?php
  $greeting = 'Hello, World!';
  echo strlen($greeting) . PHP_EOL;

  echo strlen(' Hello, Code Ninja! ') . PHP_EOL;
?>
```
