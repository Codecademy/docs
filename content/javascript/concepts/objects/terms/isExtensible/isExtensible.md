---
Title: '.isExtensible()'
Description: 'Returns a boolean value depending on whether a given object can have properties added to it.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.isExtensible()`** is a static method that returns `true` if the given object can have properties added to it and `false` if the object cannot have properties added to it.

## Syntax

```pseudo
Object.isExtensible(newObject);
```

Objects are extensible by default. An object can be made non-extensible by using `Object.freeze()`, `Object.preventExtensions`, ot `Object.seal()`. A non-extensible object can still have its properties modified.

## Example

Checking if an object is extensible using the `.isExtensible()` method:

```js
const characters = {
  ArthurDent: 'Earth',
  FordPrefect: 'Betelgeuse Five',
  ZaphodBeeblebrox: 'Betelgeuse Seven',
};

console.log(Object.isExtensible(characters));

Object.preventExtensions(characters);

console.log(Object.isExtensible(characters));
```

The output would be:

```shell
true
false
```

## Codebyte Example

Following is a runnable example that demonstrates the `Object.isExtensible()` static method:

```codebyte/javascript
const lotrCharacters = {
  FrodoBaggins: 'The Shire',
  Gandalf: 'Valinor',
  Legolas: 'Mirkwood',
};

console.log(Object.isExtensible(lotrCharacters));

Object.preventExtensions(lotrCharacters);

console.log(Object.isExtensible(lotrCharacters));

lotrCharacters.Galadriel = 'Lothlórien';

console.log(lotrCharacters);

lotrCharacters.FrodoBaggins = 'Rivendell';

console.log(lotrCharacters);
```
