---
Title: 'trim()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Strip whitespace (or other characters) from the beginning and end of a string' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'String'
  - 'Functions'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-php'
  - 'path/computer-science'
---

`trim()` returns a string with whitespace stripped from the beginning and end of string.

## Pseudo Code:

`trim(string $string, string $characters = " \n\r\t\v\x00"): string`

Parameters:
------------------------------------------------------
string
The string that will be trimmed.

characters
Optionally, the stripped characters can also be specified using the characters parameter. Simply list all characters that you want to be stripped. With .. you can specify a range of characters.

## Syntax

`$trimmed = trim($text, " \t.");`

## Codebyte Example (if applicable)

```
<?php
function trim_value(&$value) 
{ 
    $value = trim($value); 
}

$fruit = array('mango','guava ', ' strawberry ');
var_dump($fruit);

array_walk($fruit, 'trim_value');
var_dump($fruit);

?>
```
