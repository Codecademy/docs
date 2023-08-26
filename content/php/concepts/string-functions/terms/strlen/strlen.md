---
Title: 'strlen()'
Description: 'Returns the length of a string.'
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

The **`strlen()`** method returns the length of a `string`.

> **Note:** This method returns the number of bytes rather than the number of characters.

## Syntax

```pseudo
strlen($string);
```

The `strlen()` method takes one required parameter: `$string`, which can be a literal sequence of characters surrounded by quotes or a variable that refers to such a sequence. The method returns the length of `$string` in `bytes`, including all characters, special characters, and whitespaces. It returns `0` if `$string` is an empty `string`.

## Example

The following example uses the `strlen()` method to determine the length of a sentence. Then the [`echo`](https://www.codecademy.com/resources/docs/php/string-functions/echo) command prints it to the console:

```php
<?php
  echo strlen("How many characters are in this sentence?");
?>
```

The example will result in the following output:

```shell
41
```

## Codebyte Example

The following example uses the `strlen()` method in two different ways:

```codebyte/php
<?php
  $greeting = 'Hello, World!';
  echo strlen($greeting) . PHP_EOL;

  echo strlen(' Hello, Code Ninja! ') . PHP_EOL;
?>
```
