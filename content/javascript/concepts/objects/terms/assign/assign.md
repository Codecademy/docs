---
Title: '.assign()'
Description: 'Returns an object that contains the contents of the objects passed.'
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

The **`Object.assign()`** method is used to modify a "destination" object with the contents of one or more objects passed to the method. If there are duplicate keys between the objects the values in the destination object will be overridden in the assignment.

## Syntax

```pseudo
Object.assign(destinationObj, sourceObj)
// Or
Object.assign(destinationObj, sourceObj, ... nObj)
```

- `destinationObj`: The object to be modified. The entries of the other objects passed will be added to this object.
- `sourceObj`: The object(s) that will be used to supplement the "destination" object.

## Example

The following code demonstrates a basic implementation of the `Object.assign()` method:

```js
const eastLibrary = {
  1: 'Green Eggs and Ham',
  2: 'Cat in the Hat',
  3: 'Hop on Pop',
};

const westLibrary = {
  3: 'Lorax',
  4: 'How the Grinch Stole Christmas',
  5: 'The Zax',
};

const seussBooks = Object.assign(eastLibrary, westLibrary);
console.log(seussBooks);
```

This will return the following output:

```shell
{
  '1': 'Green Eggs and Ham',
  '2': 'Cat in the Hat',
  '3': 'Lorax',
  '4': 'How the Grinch Stole Christmas',
  '5': 'The Zax'
}
```

> **Note:** The reassignment in the code above is optional. The following is true: `eastLibrary === suessBooks`.
