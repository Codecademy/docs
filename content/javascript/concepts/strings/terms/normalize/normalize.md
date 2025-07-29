---
Title: '.normalize()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'It is used in the context of text strings and is used to convert a string into a standard Unicode normalization.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Analysis'
  - 'Machine Learning'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'String'
  - 'Methods'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Normalize** It is used in the context of text strings and is used to convert a string into a standard Unicode normalization.

## Syntax

```js
string.normalize('NFC', word1);
```

## Example

Normalized 'café' to 'cafe'

```js
const word1 = "café";

const word1Normalized = word1.normalize('NFC');

console.log(word1Normalized);
// Output: cafe
```

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Java
- C#
- Ruby
- PHP

The following is runnable and demonstrates the .normalize() method

```codebyte/javascript
const name1 = "Mañana";
const name2 = "Man\u0303ana";

const name1Normalized = name1.normalize('NFC');
const name2Normalized = name2.normalize('NFC');

console.log(name1Normalized); // Manana
console.log(name2Normalized); // Manana
```