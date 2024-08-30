---
Title: 'cos()'
Description: 'Returns the cosine of the angle passed as the argument.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`cos()`** function returns the cosine of the angle passed as the argument. The return value is a floating-point number.

## Syntax

```pseudo
$result = cos($angle);
```

Where `$angle` is the angle in radians.

## Codebyte Example

Using `cos()` to return the cosine of the angle in radians:

```codebyte/php
<?php
  $angle = 0.8; // Angle in radians
  $cosine = cos($angle);

  echo "Cosine of $angle radians: $cosine\n";
?>
```
