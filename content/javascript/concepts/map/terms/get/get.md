---
Title: '.get()'
Description: 'Retrieves a value associated with a given key in a Map object.'
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

Retrieves a value associated with a given key in a `Map` object.

## Syntax

The `.get()` method accepts a `key` parameter and checks it against a `Map` object. If the `key` exists in the map, the accosiated value is returned. If not, `undefined` is returned.

```js
map.get(key);
```

## Example

Values are retrieved by their keys from `Map` objects using the `.get()` method.

```js
const fruits = new Map([
  ['Apples', 5],
  ['Oranges', 8],
]);

console.log(fruits.get('Apples')); // Output: 5
console.log(fruits.get('Oranges')); // Output: 8
console.log(fruits.get('Bananas')); // Output: undefined
```

## Codebyte Example

The code below uses a new `Map` that contains purchase orders.
In this example:

- Samantha will `get` the next purchase order that she needs to fill from the map using the `.get()` method.
- Once the purchase order has been worked, Samantha will remove it from the map using the [`.delete()` method](https://www.codecademy.com/resources/docs/javascript/map/delete).

```codebyte/js
const purchaseOrders = new Map([
  ['PO-1001', 'Company X\'s order'],
  ['PO-1002', 'Company Y\'s order'],
  ['PO-1003', 'Company Z\'s order']
]);

console.log('Size of purchaseOrders map: ', purchaseOrders.size);

console.log('Getting next purchase order...');
const purchaseOrder = purchaseOrders.get('PO-1001');
console.log('Next purchase order ', purchaseOrder);

console.log('Removing worked purchase order...');
purchaseOrders.delete('PO-1001');
console.log('Size of updated purchaseOrders map: ', purchaseOrders.size);
```
