---
Title: 'Map'
Description: 'A Map is an object in JavaScript that stores entries of key-value pairs in their original insertion order.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A `Map` is an object in JavaScript that stores entries of key-value pairs in their original insertion order.

- Values mapped to existing keys can be overwritten later.
- Keys/values can either be an [object](https://www.codecademy.com/resources/docs/javascript/objects) or a variable of [any data type](https://www.codecademy.com/resources/docs/javascript/data-types).
- Maps are directly iterable whereas objects are not.

## Syntax

A map can be defined with the `new` keyword. The example below creates an empty `Map` object, `map`:

```js
const map = new Map();
```

## Example

To create a non-empty `Map` object, an array of arrays is passed into `Map()`. Each inner array represents a key-value pair:

```js
const hogwartsStudents = new Map([
  ['Gryffindor', 'Harry Potter'],
  ['Slytherin', 'Draco Malfoy'],
  ['Hufflepuff', 'Cedric Diggory'],
]);

console.log(hogwartsStudents);
```

The output will be:

```pseudo
Map(3) {
  'Gryffindor' => 'Harry Potter',
  'Slytherin' => 'Draco Malfoy',
  'Hufflepuff' => 'Cedric Diggory'
}
```

## Codebyte Example

In the example below, an `addressBook` maps a person's name to a phone number. By the end of the program:

- Tom has moved and deleted their phone number with the [`.delete()` method](https://www.codecademy.com/resources/docs/javascript/map/delete).
- Paul has changed their phone number using the [`.set()` method](https://www.codecademy.com/resources/docs/javascript/map/set).

```codebyte/js
const addressBook = new Map([
  ['Paul', '11254932'],
  ['Jane', '12939582'],
  ['Tom', '12231543']
]);

console.log('Size of address book: ', addressBook.size);

console.log('Paul\'s number was', addressBook.get('Paul'));
addressBook.set('Paul', '12355932');
console.log('Paul\'s number is now ', addressBook.get('Paul'));

console.log(addressBook.delete('Tom'));
console.log('Size of updated address book: ', addressBook.size);
```
