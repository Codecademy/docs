---
Title: 'implode()'
Description: 'Joins the elements of an array to form a new string'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`implode()`** function accepts an array of elements and an optional separator. It will return a string formed by combining the elements in their exact order along with the optional separator.

## Syntax

```pseudo
implode($separator, $array)
```

`implode()` accepts the following parameters:

- `separator` - Optional string value. If omitted, the default is an empty string.
- `array` - An array of string elements to implode.

## Example

The example below uses the `implode()` function to create the sentence 'I love learning with Codecademy'. The separator is a single space.

```php
<?php
    $to_be_imploded = array('I','love','learning','with','Codecademy');
    echo implode(' ',$to_be_imploded);
?>
```

## Codebyte Example

The following example shows the use of `implode()` function with and without the use of the `separator`.

```codebyte/php
<?php
    $hyphenated = array('Merry','go','round');
    $regular = array('Fe', 'at', 'ures');

    $hyphenated_word = implode('-', $hyphenated);
    $regular_word = implode( $regular );

    echo $hyphenated_word;
    echo("\r\n");
    echo $regular_word;
    echo("\r\n");
?>
```
