---
Title: '.getOwnPropertySymbols()'
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

> **Note:** `.getOwnPropertySymbols()` method itself does not contain the symbol properties of an object and only the string properties.

## Syntax

```pseudo
Object.getOwnPropertySymbols(object_name)
```

- `object_name`: The name of an object whose symbol properties are to be returned.

## Examples

## Example 1

In the following code, `[Symbol('😊')]` and `[Symbol('^O^')]` will create symbol properties for the `Electronic_Devices` object. The `localSymbol` and `globalSymbol` values specify that these symbols are created with the Symbol functions as `Symbol()` and `Symbol.for()` directly within the scope of the `Electronic_Devices` object without any global registration. They are not implying that those symbols are truly global in the sense of being accessible everywhere. `Object.getOwnPropertySymbols(object_name)` will return an array of all symbol properties that have been found:

```js
var Electronic_Devices = {
  group1: ['Fridge', 'Microwave', 'Rice Cooker', 'Washing Machine'],
  //add symbol
  [Symbol('😊')]: 'localSymbol',
  [Symbol('^O^')]: 'globalSymbol',
};
console.log(Object.getOwnPropertySymbols(Electronic_Devices));
```

The above example will return the following output:

```shell
[ Symbol(😊), Symbol(^O^) ]
```

## Example 2

In the following code, `Symbol()` and `Symbol.for()` will add symbol properties to the `Electronic_Devices` object. Next, the program will output the `Electronic_Devices` object into the console. Then, the `objectSymbols` variable that is assigned to `Object.getOwnPropertySymbols(object_name)` will be used to return the length of an array of all symbol properties that have been found, the array itself, and the first element in the array:

```js
var Electronic_Devices = {
  group1: ['Fridge', 'Microwave', 'Rice Cooker', 'Washing Machine'],
};
var symbol_1 = Symbol('😊');
var symbol_2 = Symbol.for('^O^');

Electronic_Devices[symbol_1] = 'localSymbol';
Electronic_Devices[symbol_2] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(Electronic_Devices);

console.log(Electronic_Devices+'\n');
console.log(objectSymbols.length+'\n');
console.log(objectSymbols);
console.log(objectSymbols[0]);
```

The above example will return the following output:

```shell
{
  group1: ['Fridge', 'Microwave', 'Rice Cooker', 'Washing Machine'],
  [Symbol(😊)]: 'localSymbol',
  [Symbol(^O^)]: 'globalSymbol'
}

2

[Symbol(😊), Symbol(^O^)]
Symbol(😊)
```
