---
Title: 'html_entity_decode()'
Description: 'Converts HTML entities to characters.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Characters'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

**'html_entity_decode()'** is the opposite of [**'htmlentities()'**](https://www.codecademy.com/resources/docs/php/string-functions/htmlentities) in that it converts HTML entities in the string to their corresponding characters.

## Syntax

```pseudo
html_entity_decode(str, flags, character-set)
```

- **string:** - Specifies the string to decode
- **flags:** - Specifies how to handle quotes and which document type to use.
- **character-set:** These are optional strings that specify which character-set to use.

## Example

The below example takes value for `$orig` and assigns it to `$a` using `htmlentities()`. Then it decodes it using `html_entity_decode()` and assigns it to `$b`. It then shows values for both `$a` and `$b`:

```php
<?php
$orig = "dog";
$a = htmlentities($orig);
$b = html_entity_decode($a);
echo $a;
echo "\n";
echo $b;
?>
```

## Output

The above example generates the following output:

```shell
dog
dog
```

## Codebyte Example

This example converts double and single quotes:

```codebyte/php
<?php
$str = "Albert Einstein said: &#039;E=MC&sup2;&#039;";
echo html_entity_decode($str, ENT_QUOTES);
?>
```
