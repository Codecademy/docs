---
Title: 'htmlspecialchars_decode()'
Description: 'Converts special HTML entities to characters.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Encoding'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`htmlspecialchars_decode()`** function converts special HTML entities back to characters. The converted entities include `&amp;`, `&quot;`, `&#039;`, `&lt;` and `&gt;`.

## Syntax

```pseudo
htmlspecialchars_decode($string, $flags)
```

The `htmlspecialchars_decode()` function has two parameters:

- `$string` (required): Specifies the string with the HTML entities to convert (decode).
- `$flags` (optional): A bitmask of one or more of the following flags, which specify how to handle quotes and which document type to use.

| Constant         | Description                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENT_COMPAT`     | Converts double-quotes and leaves single-quotes alone                                                                                                 |
| `ENT_QUOTES`     | Converts both double and single quotes                                                                                                                |
| `ENT_NOQUOTES`   | Leaves both double and single quotes unconverted                                                                                                      |
| `ENT_SUBSTITUTE` | Replaces invalid code unit sequences with a Unicode Replacement Character U+FFFD (UTF-8) or &#xFFFD; (otherwise) instead of returning an empty string |
| `ENT_HTML401`    | Handles code as HTML 4.01                                                                                                                             |
| `ENT_XML1`       | Handles code as XML 1                                                                                                                                 |
| `ENT_XHTML`      | Handles code as XHTML                                                                                                                                 |
| `ENT_HTML5`      | Handles code as HTML 5                                                                                                                                |

The `htmlspecialchars_decode()` function returns the converted string with characters like `&`, `"`, `'`, `<` and `>`.

## Example

The following example uses the `htmlspecialchars_decode()` function to convert a string that contains multiple HTML entities.

```php
<?php
$original = "Codecademy &lt;3 PHP and special characters like &amp;, &quot;, &#039;, &lt; and &gt;.";
echo "original: " . $original . "\n";
echo "converted: " . htmlspecialchars_decode($original, ENT_QUOTES) . "\n";
?>
```

The example will result in the following output:

```shell
original: Codecademy &lt;3 PHP and special characters like &amp;, &quot;, &#039;, &lt; and &gt;.
converted: Codecademy <3 PHP and special characters like &, ", ', < and >.
```

## Codebyte Example

This example is runnable and uses the `htmlspecialchars_decode()` function:

```codebyte/php
<?php
echo "HTML entity &amp; is decoded into: " . htmlspecialchars_decode("&amp;") . "\n";
echo "While character & is kept as it is: " . htmlspecialchars_decode("&");
?>
```
