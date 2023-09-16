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

The `htmlspecialchars()` function takes a string of predefined characters and converts the string to HTML entities.

| Character | Converted HTML entity |
|-----------|-----------------------|
|&| `&amp;` | 
|"| `&quot;`|
|'| `&#039;`|
|<| `&lt;`  |
|>| `&gt;`  |

## Syntax
`htmlspecialchars(string $string, int $flag, $string $encoding =null, bool $double_encode = true)`

`htmlspecialchars()` takes four parameters.

| Parameter | Description |
|-----------|-----------------------|
|`$string`| A required parameter that specifies the string that has to be converted.|
|`$flag`|  An optional string value that specifies how to handle quotes.|
|`$encoding`| An optional string value that specifies the character-set to use.|
|`$double_encode`| An optional boolean value that specifies whether to encode existing html or not. |

If `$string` contains an invalid code, the function will return an empty string unless `$flag` is set to `ENT_IGNORE` or `ENT_SUBSTITUTE`.

## Example
```php
<?php
    $statement ="Codecademy  offers courses in programing languages like Java, PHP, C++ & many others.";
    echo htmlspecialchars($statement, ENT_COMPAT);
>
```
This results to the below output.
```shell
Codecademy  offers courses in programing languages like Java, PHP, C++ &amp; many others.
```
## Codebyte Example (if applicable)

```codebyte/php
<?php
    $statement ="Codecademy  offers courses in programing languages like Java, PHP, C++ amp; many others.";
    
>
```