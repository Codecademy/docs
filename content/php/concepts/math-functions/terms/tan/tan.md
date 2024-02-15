---
Title: 'tan()'
Description: 'Returns the tangent of the angle passed as the argument.'
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

The **`tan()`** function returns the tangent of the angle passed as the argument. The return value is a floating-point number.

## Syntax

```pseudo
$result = tan($angle);
```

Where `$angle` is the angle in radians.

## Codebyte Example

Using `tan()` to return the tangent of the angle in radians:

```codebyte/php
<?php
  $angle = 0.8; // Angle in radians
  $tangent = tan($angle);

  echo "Tangent of $angle radians: $tangent\n";
?>
```
