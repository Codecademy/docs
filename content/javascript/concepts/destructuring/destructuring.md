---
Title: 'Destructuring'
Description: 'Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Destructuring'
  - 'Objects'
  - 'Arrays'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

A _destructuring assignment_ allows you to unpack values from arrays or properties from objects directly into _distinct_ variables. This feature makes it easier to work with data, especially when handling complex objects or arrays.

## Array Destructuring

Array destructuring extracts values from arrays in order, assigning them to variables in a single statement.

```js
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue
```

You can also skip items you don’t need:

```js
const [primaryColor, , tertiaryColor] = colors;
console.log(tertiaryColor); // Output: blue
```

## Object Destructuring

Object destructuring allows you to extract specific properties using their key names:

```js
const car = { make: 'Toyota', model: 'Camry', year: 2021 };
const { make, model } = car;

console.log(make); // Output: Toyota
console.log(model); // Output: Camry
```

You can also rename variables or assign default values:

```js
const { model: carModel, color = 'white' } = car;
console.log(carModel); // Output: Camry
console.log(color); // Output: white
```


## Nested Destructuring

Destructuring supports nested structures for deeply nested objects or arrays:

```js
const user = {
id: 1,
info: { name: 'Alice', address: { city: 'Seattle', zip: 98101 } }
};

const { info: { name, address: { city } } } = user;
console.log(name); // Output: Alice
console.log(city); // Output: Seattle
```

## Codebyte Example

The following codebyte example uses nested destructuring to extract values directly from an object.

```codebyte/js
const user = {
  name: 'John Doe',
  hobbies: ['reading', 'cycling', 'coding'],
  address: { city: 'New York', zip: 10001 }
};

const { name, hobbies: [firstHobby], address: { city } } = user;

console.log(`${name} enjoys ${firstHobby} in ${city}.`);
// Output: John Doe enjoys reading in New York.
```


