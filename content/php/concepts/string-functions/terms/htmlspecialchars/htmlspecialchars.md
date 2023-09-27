---
Title: 'htmlspecialchars()'
Description: 'Ruturns a converted string of HTML entities.'
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

The **`htmlspecialchars()`** function takes a string of special characters and converts the string to HTML entities. The special characters have special significance in HTML and need to be represented by HTML entities to preserve their meaning. The special characters and their converted HTML entities are listed in the table below:

| Character | Converted HTML entity |
|-----------|-----------------------|
|&          | `&amp;`               |                       
|"          | `&quot;`              |         
|'          | `&#039;`              |
|<          | `&lt;`                |
|>          | `&gt;`                |

## Syntax

```pseudo
htmlspecialchars(string $string, int $flag, $string $encoding =null, bool $double_encode = true)
```

The `htmlspecialchars()` takes four parameters.

- `$string` : A required parameter that specifies the string to be converted.
- `$flag` : An optional string value that specifies how to handle quotes.

The available frags are listed in the table below:

| Constant       | Description                                                                                                          |
|----------------|----------------------------------------------------------------------------------------------------------------------|
|`ENT_COMPAT`    | The default frag. it encodes only doublet quotes                                                                     |
|`ENT_QUOTES`    | Encodes both double and single quotes                                                                                |
|`ENT_NOQUOTES`  | Does not encode double nor single quotes                                                                             |
|`ENT_IGNORE`    | Discards invalid encoding instead of the function returning an empty string                                          |
|`ENT_SUBSTITUTE`| Replaces invalid encoding with a unicode character  U+FFFD (UTF-8) or &#xFFFD; instead of returning an empty string  |
|`ENT_DISALLOWED`| Replaces invalid code for the specified doctype with a Unicode Replacement Character U+FFFD (UTF-8) or &#FFFD;       |
|`ENT_HTML401`   | Handles code as HTML 4.01                                                                                            |
|`ENT_HTML5`     | Handles code as HTML 5                                                                                               |
|`ENT_XML1`      | Handles code as XML 1                                                                                                |
|`ENT_XHTML1`    | Handles code as XHTML                                                                                                |

- `$encoding`: An optional string value that specifies the character-set to use when converting characters. 

The supported character sets are listed in the table below:

| Charset     | Description                                                                             |
|-------------|-----------------------------------------------------------------------------------------|
|`UTF-8`      | The default. ASCII compatible multi-byte 8-bit Unicode                                  |
|`ISO-8859-1` | Western European                                                                        |
|`ISO-8859-15`| Western European (adds the Euro sign + French and Finnish letters missing in ISO-8859-1)|
|`cp866`      | DOS-specific Cyrillic charset                                                           |
|`cp1251`     | Windows-specific Cyrillic charset                                                      |
|`cp1252`     | Windows specific charset for Western European                                          |
|`KOI8-R`     | Russian                                                                                |
|`BIG5`       | Traditional Chinese, mainly used in Taiwan                                              |
|`GB2312`     | Simplified Chinese, national standard character set                                     |
|`BIG5-HKSCS` | Big5 with Hong Kong extensions                                                          |
|`Shift_JIS`  | Japanese                                                                                |
|`EUC-JP`     | Japanese                                                                                |
|`MacRoman`   | Character-set that was used by Mac OS                                                   |

- `$double_encode`:  An optional boolean value that specifies whether to encode existing html or not. 

**Note**: If `$string` contains an invalid code, the function will return an empty string unless `$flag` is set to `ENT_IGNORE` or `ENT_SUBSTITUTE`.

## Example
The following example uses `htmlspecialchars()` to convert the special character `&` in a string  to an HTML entity `&amp;`.
```php
<?php
    $statement ="Codecademy  offers courses in various programing languages like Java, PHP, C++ & many others.";
    echo htmlspecialchars($statement, ENT_COMPAT);
?>
```
This results in the following output:
```shell
Codecademy  offers courses in various programing languages like Java, PHP, C++ &amp; many others.
```
## Codebyte Example

```codebyte/php
<?php
    $statement ="Codecademy  offers courses in various programing languages like Java, PHP, C++ amp; many others.";
    echo htmlspecialchars($statement, ENT_COMPAT);
?>
```