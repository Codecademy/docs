---
Title: 'PHP html_entity_decode() Function'
Description: 'The html_entity_decode() function converts HTML entities to characters.'
Subjects: 
- 'PHP'
Tags:
- 'Functions'
- 'Characters'
CatalogContent:
- 'php/concepts/string-functions/terms/html-entity-decode'
SyntaxSection:
```pseudo
- 'html_entity_decode(str, flags, character-set)'
Example:
```php
- '<?php
$str = '&lt;a href=&quot;https://www.w3schools.com&quot;&gt;w3schools.com&lt;/a&gt;';
echo html_entity_decode($str);
?>'
CodebyteExample:
```codebyte/php
- '<a href="https://www.w3schools.com">w3schools.com</a>'
---