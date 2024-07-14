---
Title: 'htmlentities()'
Description: 'Converts all applicable characters to HTML entities.'
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

The **`htmlentities()`** function converts characters to HTML entities. To convert HTML entities back to characters, use the `html_entity_decode()` function.

## Syntax

```pseudo
htmlentities($string, $flags, encoding, double_encode)
```

The `htmlentities()` function has one required parameter and three optional parameters:

- `$string`: Required parameter that specifies the `string` to convert.
- `$flags`: Optional parameter that specifies how to handle quotes, invalid encoding, and the used document type. Ex: `ENT_QUOTES` | `ENT_SUBSTITUTE` | `ENT_HTML5`.

  - The available quote styles are:

  | Constant Name  | Description                                                                |
  | -------------- | -------------------------------------------------------------------------- |
  | `ENT_COMPAT`   | Default. htmlentities() function encodes only double quotes from `$string` |
  | `ENT_QUOTES`   | htmlentities() function encodes double and single quotes from `$string`    |
  | `ENT_NOQUOTES` | htmlentities() function does not encode any quotes from `$string`          |

  - Invalid encoding:

    | Constant Name    | Description                                                                                                                                                                           |
    | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `ENT_IGNORE`     | htmlentities() function ignores invalid encoding instead of having the function return an empty string. Should be avoided, as it may have security                                    |
    | `ENT_SUBSTITUTE` | htmlentities() function replaces invalid encoding for a specified character set with a Unicode Replacement Character U+FFFD (UTF-8) or &#FFFD; instead of returning an empty string.s |
    | `ENT_DISALLOWED` | htmlentities() function replaces code points that are invalid in the specified doctype with a Unicode Replacement Character U+FFFD (UTF-8) or &#FFFD;                                 |

  - Additional flags for specifying the used doctype:

    | Constant Name | Description                                    |
    | ------------- | ---------------------------------------------- |
    | `ENT_HTML5`   | htmlentities() function handles code as HTML 5 |
    | `ENT_XHTML`   | htmlentities() function handles code as XHTML  |

- `$encoding`: Optional argument defining the encoding used when converting characters. If omitted, `$encoding` defaults to the value of the `default_charset` configuration option. It is highly encouraged to specify the correct value for the code if the `default_charset` configuration option is set incorrectly for the given input.

  - Character sets that are supported:
    |Charset|Aliases|Description|
    |---|---|---|
    |ISO-8859-1|ISO8859-1|htmlentities() function works with Western European, Latin-1 charset.|
    |ISO-8859-15|ISO8859-15|htmlentities() function works with Western European, Latin-9. Adds the Euro sign, French and Finnish letters missing in Latin-1 (ISO-8859-1) charset.|
    |UTF-8||htmlentities() function works with ASCII compatible multi-byte 8-bit Unicode charset.|
    |cp866|ibm866, 866|htmlentities() function works with DOS-specific Cyrillic charset.|
    |cp1251|Windows-1251, win-1251, 1251|htmlentities() function works with Windows-specific Cyrillic charset.|
    |cp1252|Windows-1252, 1252|htmlentities() function works with Windows specific charset for Western European charset.|
    |MacRoman||htmlentities() function works with charset that was used by Mac OS.|

    > **Note:** Any other character sets are not recognized. The default encoding will be used instead and a warning will be emitted.

- `$double_encode`: Optional parameter that specifies whether to encode existing HTML entities. Defaults to `TRUE` and will convert all entities in the string. If set to `FALSE`, the function will not encode existing html entities.

> **Note:** The `htmlentities()` function returns the converted `$string`. However, if the `$string` parameter contains invalid encoding, it will return an empty `$string`, unless either the `ENT_IGNORE` or `ENT_SUBSTITUTE` flags are set

**Entities that will be encoded**:

| Characters       | Convert to | Result  |
| ---------------- | ---------- | ------- |
| & (ampersand)    | becomes    | \&amp;  |
| " (double quote) | becomes    | \&quot; |
| ' (single quote) | becomes    | \&#039; |
| < (less than)    | becomes    | \&lt;   |
| > (greater than) | becomes    | \&gt;   |

## Example

The following example uses the `htmlentities()` function to convert special characters in the string `"<b>Welcome!!!</b>;"` to HTML entities:

```php
<?php
  $str = "<b>Welcome!!!</b>";
  echo htmlentities($str);
?>
```

The example will result in the following HTML output (View Source):

```shell
&lt;b&gt;Welcome!!!&lt;/b&gt;
```

The browser output of the code above will be:

```shell
<b>Welcome!!!</b>
```

## Codebyte Example

This example is runnable and uses the `htmlentities()` function with various flags:

```codebyte/php
<?php
  $str = "Apple stock is: 'AAPL'";
  echo htmlentities($str, ENT_COMPAT); /* Will only convert double quotes*/
  echo "\n";
  echo htmlentities($str, ENT_QUOTES); /* Converts double and single quotes*/
  echo "\n";
  echo htmlentities($str, ENT_NOQUOTES); /* Does not convert any quotes*/
  echo "\n";
  echo htmlentities($str, ENT_QUOTES, "UTF-8"); /* Will only convert double quotes (not single quotes), and uses the character-set Western European*/
?>
```
