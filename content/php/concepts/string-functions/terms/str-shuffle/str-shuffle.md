---
Title: 'str_shuffle()'
Description: 'Randomly shuffles the characters of a string.'
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

The **`str_shuffle()`** function randomly shuffles the characters of a `string`. It generates a different order of characters each time it is called.

## Syntax

```pseudo
str_shuffle($string)
```

The `str_shuffle()` function takes one required parameter: a `$string` that is a `string` to be shuffled. It returns a `string` with the shuffled characters.

## Example

The following example uses the `str_shuffle()` function to shuffle the letters of the word `"secret"`. Then the [`echo`](https://www.codecademy.com/resources/docs/php/string-functions/echo) command prints the shuffled letters as a `string` to the console:

```php
<?php
  echo str_shuffle("secret");
?>
```

The example can result in the following output (it can be any combination of the given letters):

```shell
tesecr
```

## Codebyte Example

This example uses the `str_shuffle()` function with a `string`.

```codebyte/php
<?php
  $string = "Hello, World!";
  echo(str_shuffle($string));
?>
```

> **Note:** The output will vary each time this program is executed, as the `str_shuffle()` function shuffles the string randomly.
> The function should not be used for cryptography because it does not generate cryptographically secure random numbers.
