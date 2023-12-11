---
Title: '.entries()'
Description: 'Returns an array containing arrays of key-value pairs that belong to the object.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
Tags:
  - 'Objects'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

The **`.entries()`** method returns an [array](https://www.codecademy.com/resources/docs/javascript/arrays) containing arrays of an [object](https://www.codecademy.com/resources/docs/javascript/objects)'s `key-value` pairs in the following format: `[ [key, value], [key, value], ... ]`.

## Syntax

```pseudo
Object.entries(someObject)
```

The above syntax will return the `key-value` pair entries for `someObject`.

## Example

In the example below, a `drink` object is declared. Then a `for-of` [loop](https://www.codecademy.com/resources/docs/javascript/loops) is used to format the `key-value` pairs and output them to the console:

```js
const drink = {
  name: 'Chai Latte',
  size: 'Regular',
  price: 2.99,
};

for (const [key, value] of Object.entries(drink)) {
  console.log(`${key.toUpperCase()} ${value}`);
}
```

This above example will return the following output:

```shell
NAME Chai Latte
SIZE Regular
PRICE 2.99
```
