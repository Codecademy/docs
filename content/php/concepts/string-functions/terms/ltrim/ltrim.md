---
Title: 'ltrim()'
Description: 'Trims whitespace or specific characters from the left side of a given string.'
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

The **`ltrim()`** function accepts a `string` as its parameter, removes whitespace from the left side of that `string`, and then returns it.

Optionally, `ltrim()` can accept a second parameter containing specific characters to remove from the left side of the target `string`.

## Syntax

```pseudo
ltrim($string, $characters);
```

The `$string` parameter gives the function a target string to remove whitespace or specific characters.

The `$characters` parameter is an optional `string` that specifies characters to remove. `ltrim()` will start at the left side of the given `string` and remove any characters that match the ones provided in the `$characters` argument until it finds one that does not match.

## Example

The following example uses the `ltrim()` function, first without and then with a second parameter. In the first case, without the second parameter, the `ltrim()` function removes the whitespace from the left side of `" Peanut Butter"`. In the second case, the `ltrim()` function has `"Apricot"` as a second parameter, which will remove the specified characters from `"Apricot Jelly"`. Finally, the `echo` command prints the concatenated `strings` to the console:

```php
<?php
  $str1 = "   Peanut Butter";
  $str2 = "Apricot Jelly";
  echo ltrim($str1) . " and" . ltrim($str2, "Apricot");
?>
```

The example will result in the following output:

```shell
Peanut Butter and Jelly
```

## Codebyte Example

The following example is runnable and uses the `ltrim()` function with both one and two arguments.

```codebyte/php
<?php
  $tooMuchWhiteSpace = "                           Heyo Mom!";
  echo $tooMuchWhiteSpace . "\n";

  $trimmedDown = ltrim($tooMuchWhiteSpace);
  echo $trimmedDown . "\n";

  $trimCharacters = ltrim($trimmedDown, "Heyo ");
  echo $trimCharacters;
?>
```

In the second call of the function, the second argument removed the characters `H`, `e`, `y`, `o`, and the single space. It left the rest of the `string` starting from the character `M` because it wasn't instructed by the second argument to remove that character.
