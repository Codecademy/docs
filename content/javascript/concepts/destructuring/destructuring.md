---
Title: 'Destructuring'
Description: 'Destructuring in JavaScript extracts values from arrays or properties from objects and assigns them to variables in a single, concise statement.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Destructuring'
  - 'JavaScript'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Destructuring** in JavaScript extracts values from [arrays](https://www.codecademy.com/resources/docs/javascript/arrays) or properties from [objects](https://www.codecademy.com/resources/docs/javascript/objects) and assigns them to [variables](https://www.codecademy.com/resources/docs/javascript/variables) in a single, concise statement. It simplifies working with complex arrays and objects by reducing repetitive code.

## Array Destructuring

Array destructuring extracts values from arrays in order, assigning them to variables in a single statement:

```js
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
```

The output for this is:

```shell
red
green
blue
```

Items that aren’t needed can also be skipped:

```js
const [primaryColor, , tertiaryColor] = colors;
console.log(tertiaryColor); // Output: blue
```

## Object Destructuring

Object destructuring extracts specific properties from an object using their key names:

```js
const car = { make: 'Toyota', model: 'Camry', year: 2021 };
const { make, model } = car;

console.log(make); // Output: Toyota
console.log(model); // Output: Camry
```

The output for this code is:

```shell
Toyota
Camry
```

Variables can also be renamed or assigned default values:

```js
const { model: carModel, color = 'white' } = car;
console.log(carModel); // Output: Camry
console.log(color); // Output: white
```

## Nested Destructuring

Destructuring also supports nested structures for deeply nested objects or arrays:

```js
const user = {
id: 1,
info: { name: 'Alice', address: { city: 'Seattle', zip: 98101 } }
};

const { info: { name, address: { city } } } = user;
console.log(name);
console.log(city);
```

The output of this code is:

```shell
Alice
Seattle
```

## Codebyte Example

The following codebyte example uses nested destructuring to extract values directly from an object:

```codebyte/js
const user = {
  name: 'John Doe',
  hobbies: ['reading', 'cycling', 'coding'],
  address: { city: 'New York', zip: 10001 }
};

const { name, hobbies: [firstHobby], address: { city } } = user;

console.log(`${name} enjoys ${firstHobby} in ${city}.`);
```
