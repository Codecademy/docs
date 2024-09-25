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

The **`.isFrozen()`** static method returns `true` when the given object is frozen, and `false` if it is not. An object is considered frozen when you cannot add new properties to it, cannot change the existing properties, and cannot delete the existing properties. For example, you can freeze an with the `Object.freeze()` static method.

## Syntax

```pseudo
Object.isFrozen(newObject);
```

- `newObj`: It is the object to be checked for its frozen state.

## Example

The following example checks if an object is frozen.

```js
const avgAnnualTemps = {
  Sydney: '18.7 celsius',
  Reykjavik: '5.3 celsius',
  Tokyo: '16.66 celsius',
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
