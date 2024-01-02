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

The first codebyte example of using `.replaceAll()` method is runnable, and it doesn't use [regular expressions (RegExp)](https://www.codecademy.com/resources/docs/javascript/regexp):

```codebyte/javascript
"AbCD_AbCD".replaceAll("b","B");
// 'ABCD_ABCD'
```

The second codebyte example of using `.replaceAll()` method is runnable, and it uses [regular expressions (RegExp)](https://www.codecademy.com/resources/docs/javascript/regexp). Be careful that when using a regular expression search value, it must be global:

```codebyte/javascript
"AbCD_AbCD".replaceAll(/b/g,"B");
// 'ABCD_ABCD'
```

This won't work:

```codebyte/javascript
"AbCD_AbCD".replaceAll(/b/,"B");
// TypeError: replaceAll must be called with a global RegExp
```
