---
Title: '.raw()'
Description: 'Used to get the raw string form of template literals.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
---

## Syntax

```
String.raw(strings, sub1, sub2 /*... */ subN)

String.raw`templateString`
```

- `strings` is a well-formed template literal array object.
- `Sub1,...,subN` Contains substitution values.
- `templateString` is a template literal.

## Example

```js
String.raw`Hi\n${name}!`;
//Returns 'Hi //${name}!`, the dollar sign is escaped; ther's no interpolation.
```

## Codebyte Example

```codebyte/javascript
String.raw`Hi\n${2 + 3}!`;
//Returns 'Hi\n5!'
```