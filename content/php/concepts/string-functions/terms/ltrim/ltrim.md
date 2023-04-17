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

The `ltrim()` function accepts a string as its parameter, removes whitespace from the left side of that string, and then returns it.

Optionally, `ltrim()` can accept a second parameter containing specific characters to remove from the left side of a target string.

## Syntax

```pseudo
ltrim($string, $characters);
```

The `$string` parameter gives the function a target string to remove whitespace or specific characters from.

The `$characters` parameter is an optional string that specifies specific characters the function should remove. `ltrim()` will start at the left side of the string and remove any characters that match the ones provided in the `$characters` argument until it finds a character that does not match.

## Codebyte Example

The following example demonstrates the `ltrim()` function with both one and two arguments.

```codebyte/php
<pre>
<?php
  $tooMuchWhiteSpace = "                           Heyo Mom!";
  echo $tooMuchWhiteSpace . "\n";

  $trimmedDown = ltrim($tooMuchWhiteSpace);
  echo $trimmedDown . "\n";

  $trimCharacters = ltrim($trimmedDown, "Heyo ");
  echo $trimCharacters;
?>
</pre>
```

> **Note**: Notice how the second argument, `Heyo `, removed the characters `H`, `e`, `y`, and `o`, but left the `M`. It didn't remove the second `o`, either, because it found a character that it wasn't instructed to remove, i.e. the leading `M`.
