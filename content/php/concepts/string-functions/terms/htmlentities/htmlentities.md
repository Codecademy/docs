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

The **`htmlentities()`** function converts characters to HTML entities. To convert HTML entities back to characters, use the **[html_entity_decode()](../html-entity-decode/html-entity-decode.md)** function.

## Syntax

```pseudo
htmlentities(string,flags,encoding,double_encode)
```

The `htmlentities()` function has one required parameter and three optional parameters:

- `$string`: Required. Specifies the `string` to convert.
- `$flags`: Optional. Specifies how to handle quotes, invalid encoding and the used document type. Ex: ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5.

  - The available quote styles are:

    | Constant Name | Description                         |
    | ------------- | ----------------------------------- |
    | ENT_COMPAT    | Default. Encodes only double quotes |
    | ENT_QUOTES    | Encodes double and single quotes    |
    | ENT_NOQUOTES  | Does not encode any quotes          |

  - Invalid encoding:

    | Constant Name  | Description                                                                                                                                                   |
    | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | ENT_IGNORE     | Ignores invalid encoding instead of having the function return an empty string. Should be avoided, as it may have security                                    |
    | ENT_SUBSTITUTE | Replaces invalid encoding for a specified character set with a Unicode Replacement Character U+FFFD (UTF-8) or &#FFFD; instead of returning an empty string.s |
    | ENT_DISALLOWED | Replaces code points that are invalid in the specified doctype with a Unicode Replacement Character U+FFFD (UTF-8) or &#FFFD;                                 |

  - Additional flags for specifying the used doctype:

    | Constant Name | Description                       |
    | ------------- | --------------------------------- |
    | ENT_HTML401   | Default. Handle code as HTML 4.01 |
    | ENT_HTML5     | Handle code as HTML 5             |
    | ENT_XML1      | Handle code as XML 1              |
    | ENT_XHTML     | Handle code as XHTML              |

- `$encoding`: An optional argument defining the encoding used when converting characters. If omitted, `$encoding` defaults to the value of the default_charset configuration option. Although this argument is technically optional, you are highly encouraged to specify the correct value for your code if the default_charset configuration option may be set incorrectly for the given input.

  - The following character sets are supported:
    |Charset|Aliases|Description|
    |---|---|---|
    |ISO-8859-1|ISO8859-1|Western European, Latin-1.|
    |ISO-8859-5|ISO8859-5|Little used cyrillic charset (Latin/Cyrillic).|
    |ISO-8859-15|ISO8859-15|Western European, Latin-9. Adds the Euro sign, French and Finnish letters missing in Latin-1 (ISO-8859-1).|
    |UTF-8||ASCII compatible multi-byte 8-bit Unicode.|
    |cp866|ibm866, 866|DOS-specific Cyrillic charset.|
    |cp1251|Windows-1251, win-1251, 1251|Windows-specific Cyrillic charset.|
    |cp1252|Windows-1252, 1252|Windows specific charset for Western European.|
    |KOI8-R|koi8-ru, koi8r|Russian.|
    |BIG5|950|Traditional Chinese, mainly used in Taiwan.|
    |GB2312|936|Simplified Chinese, national standard character set.|
    |BIG5-HKSCS||Big5 with Hong Kong extensions, Traditional Chinese.|
    |Shift_JIS|SJIS, SJIS-win, cp932, 932|Japanese|
    |EUC-JP|EUCJP, eucJP-win|Japanese|
    |MacRoman||Charset that was used by Mac OS.|
    |''||An empty string activates detection from script encoding (Zend multibyte), default_charset and current locale (see nl_langinfo() and setlocale()), in this order. Not recommended.|

    > **Note:** Any other character sets are not recognized. The default encoding will be used instead and a warning will be emitted.

- `$double_encode`: Optional. Specifies whether to encode existing HTML entities. TRUE - Default. Will convert everything. FALSE - Will not encode existing html entities.

<br>

The `htmlentities()` function returns the converted `$string`. However, if the `$string` parameter contains invalid encoding, it will return an empty `$string`, unless either the `ENT_IGNORE` or `ENT_SUBSTITUTE` flags are set

<br>

## Changelog

| Version | Description                                 |
| ------- | ------------------------------------------- | -------------- | ------------ |
| 8.1.0   | flags changed from ENT_COMPAT to ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401. |
| 8.0.0   | encoding is nullable now.                   |

<br>

## Example

The following example uses the `htmlentities()` function to convert the string `"Welcome!!!"` to HTML entities:

```php
<?php
  $str = "<b>Welcome!!!</b>"
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

<br>

## Codebyte Example

This example is runnable and uses the `htmlentities()` function:

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
