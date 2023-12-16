---
Title: '.isFrozen()'
Description: 'Returns a boolean value depending on whether a given object is frozen.'
Subjects:
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.isFrozen()`** static method returns `true` if the given object is frozen, and `false` if it is not.

## Syntax

```pseudo
Object.isFrozen(newObject);
```

`newObj` is the object to be checked for its frozen state.

## Example

Checking if an object is frozen.

```js
const avgAnnualTemps = {
  Sydney: '18.7 celcius',
  Reykjavik: '5.3 celcius',
  Tokyo: '16.66 celcius',
};

console.log(Object.isFrozen(avgAnnualTemps));

Object.freeze(avgAnnualTemps);

console.log(Object.isFrozen(avgAnnualTemps));
```

The above example will give the following output:

```shell
false
true
```
