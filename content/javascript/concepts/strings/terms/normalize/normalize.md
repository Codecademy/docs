---
Title: '.normalize()'
Description: 'Returns the Unicode Normalization Form of a string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'JavaScript'
  - 'Methods'
  - 'String'
  - 'Unicode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.normalize()`** method returns the Unicode Normalization Form of a string. This is especially useful when comparing strings that may look identical but are composed of different Unicode code points.

## Syntax

```pseudo
string.normalize([form])
```

**Parameters:**

- `form` (optional): A string specifying the Unicode normalization form. Valid values are:
  - `'NFC'` (default): Canonical Composition
  - `'NFD'`: Canonical Decomposition
  - `'NFKC'`: Compatibility Composition
  - `'NFKD'`: Compatibility Decomposition

**Return value:**

A new string in the specified normalization form.

## Example: Comparing Unicode Representations

In this example, two visually identical strings have different Unicode encodings, and `.normalize()` is used to make them comparable.

```js
const word1 = '\u00e9';         // é as single character
const word2 = '\u0065\u0301';   // e + ́ (combining acute)

console.log(word1 === word2);
console.log(word1.normalize() === word2.normalize());
```

The output of this code is:

```shell
false
true
```

## Codebyte Example: Stripping Accents Using Normalize + Regex

In this example, `.normalize()` is combined with a regular expression to strip accents by removing Unicode diacritical marks:

```codebyte/javascript
const word = 'café';
const stripped = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

console.log(stripped); 
```
