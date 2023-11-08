---
Title: 'PHP html_entity_decode() Function'
Description: 'Converts HTML entities to characters.'
Subjects: 
- 'Web Design'
- 'Web Development'
Tags:
- 'Functions'
- 'Characters'
CatalogContent:
- 'php/concepts/string-functions/terms/html-entity-decode'

## About this function

html_entity_decode() is the opposite of htmlentities() in that it converts HTML entities in the string to their corresponding characters.

## SyntaxSection
```pseudo
html_entity_decode(str, flags, character-set)

##Example:
```php
<?php
$orig = "dog";
$a = htmlentities($orig);
$b = html_entity_decode($a);
echo $a;
echo "\n";
echo $b;
?>

## Codebyte Example (if applicable)

We can currently support:
- PHP

```codebyte/php
# Example runnable code block.
<?php
$str = "Albert Einstein said: &#039;E=MC&sup2;&#039;";
echo html_entity_decode($str, ENT_QUOTES); // Converts double and single quotes
?>
---