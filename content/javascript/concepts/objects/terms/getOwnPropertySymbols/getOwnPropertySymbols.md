---
Title: 'Object.getOwnPropertySymbols()'
Description: 'Returns an array of all symbol property found directly upon a given object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Properties'
  - 'Objects'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The **`.getOwnPropertySymbols()`** method is a static method that returns an array of all symbol properties found directly upon a given object. If the object initially has no symbol properties, `.getOwnPropertySymbols()` returns an empty array.

> **Note:** `Object.getOwnPropertySymbols()` method itself does not contain the symbol properties of an object and only the string properties.

## Syntax

```pseudo
Object.getOwnPropertySymbols(object_name)
```

- `object_name`: The name of an object whose symbol properties are to be returned.

## Examples

## Example 1

In the following code, `Object.getOwnPropertySymbols(object_name)` will return an array of all symbol properties that have been found:

```js
var Electrical_Devices = {
  group1: ['Fridge', 'Microwave', 'Rice Cooker', 'Washing Machine'],
  //add symbol
  [Symbol('😊')]: 'localSymbol',
  [Symbol('4554tu')]: 'globalSymbol',
};
console.log(Object.getOwnPropertySymbols(Electrical_Devices));
```

The above example will return the following output:

```shell
[ Symbol(😊), Symbol(4554tu) ]
```

## Example 2

```js
var Electrical_Devices = {
  group1: ['Fridge', 'Microwave', 'Rice Cooker', 'Washing Machine'],
};
var symbol_1 = Symbol('😊');
var symbol_2 = Symbol.for('b');

Electrical_Devices[symbol_1] = 'localSymbol';
Electrical_Devices[symbol_2] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(Electrical_Devices);

console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
console.log(Electrical_Devices);
```

The above example will return the following output:

```shell
2
[Symbol(😊), Symbol(b)]
Symbol(😊)
{
  group1: ['Fridge', 'Microwave', 'Rice Cooker', 'Washing Machine'],
  [Symbol(😊)]: 'localSymbol',
  [Symbol(b)]: 'globalSymbol'
}
```
