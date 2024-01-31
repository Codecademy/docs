---
Title: '.replaceAll()'
Description: 'Returns a new string by replacing all the matches of a given search value with a given replacement value.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.replaceAll()`** method returns a new string by replacing all the matches in a string of a given search value with a given replacement value.

## Syntax

```pseudo
string.replaceAll(searchValue, replacementValue);
```

The `searchValue` can be either a [string](https://www.codecademy.com/resources/docs/javascript/strings) or [RegExp](https://www.codecademy.com/resources/docs/javascript/regexp).

## Example

Replace all the occurrences of `"scream"` with `"laugh"`:

```js
const sentence = `I scream, you scream, we all scream for ice cream.`;

console.log(sentence.replaceAll('scream', 'laugh'));
```

This example results in the following output:

```shell
I laugh, you laugh, we all laugh for ice cream.
```

## Codebyte Example

The first codebyte example uses `.replaceAll()` method to replace all occurrences of the lowercase letter "b" with the uppercase letter "B" in the string. It doesn't use [regular expressions (RegExp)](https://www.codecademy.com/resources/docs/javascript/regexp):

```codebyte/javascript
string = "AbCD_AbCD";
modifiedString = string.replaceAll("b", "B");
console.log(modifiedString);
```

The second codebyte example replaces all occurrences of the letter "b" (case-sensitive) globally (all instances) with the uppercase letter "B" in the string, and it uses [regular expressions (RegExp)](https://www.codecademy.com/resources/docs/javascript/regexp). Be careful that when using a regular expression search value, it must be global:

```codebyte/javascript
string = "AbCD_AbCD";
modifiedString = string.replaceAll(/b/g,"B");
console.log(modifiedString);
```

This won't work because the regular expression search value is not global:

```codebyte/javascript
string = "AbCD_AbCD";
modifiedString = string.replaceAll(/b/,"B");
console.log(modifiedString);
```
