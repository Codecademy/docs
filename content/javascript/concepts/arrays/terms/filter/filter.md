---
Title: '.filter()'
Description: 'Creates a new array with all elements that pass the test from the provided function.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.filter()` array method creates a new array with all elements that pass the test from the provided function.

## Syntax

```pseudo
// Arrow function
array.filter(element => { ... })
array.filter((element, index) => { ... })
array.filter((element, index, array) => { ... })
```

`.filter()` takes the following parameters:

- `element`: The current element being processed in the array.
- `index` (optional): The index of the current element being processed in the array.
- `array` (optional): The array _filter_ was called upon.

The method will return a new array with the elements that pass the test.

> **Note:** If no elements pass the test, an empty array will be returned.

## Examples

Filtering out all small values:

```js
const numbers = [6, 44, 87, 1, 197, 22];

const filteredNumbers = numbers.filter((num) => num >= 10);

console.log(filteredNumbers);
// Output: [44, 87, 197, 22]
```

Filtering by index:

```js
const numbers = [6, 44, 87, 1, 197, 22];

const filterByIndex = numbers.filter((element, index) => {
  return index % 2 === 0;
});

console.log(filterByIndex);
// Output: [6, 87, 197]
```

Filtering out names that don't begin with the given character:

```js
const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter'];

const filteredNames = (char, array) => {
  return array.filter((name) => name[0].toLowerCase() === char);
};

console.log(filteredNames('j', names));
// Output: ["Jim", "James"]
```

## Codebyte Example

The example below shows `.filter()` being used to filter an array of objects, called `techCompany`, using two criteria.

```codebyte/javascript
let techCompany = [
  {name: 'John Doe', tenure: 8, position: 'Developer'},
  {name: 'Elisabeth Hills', tenure: 2, position: 'Developer'},
  {name: 'Izabella Zboncak', tenure: 4, position: 'Finance'},
  {name: 'Jane Smith', tenure: 11, position: 'Developer'},
  {name: 'Mo DuBuque', tenure: 3, position: 'HR'},
  {name: 'Markus Pagac', tenure: 9, position: 'CEO'},
  {name: 'Jack Jakubowski', tenure: 7, position: 'Developer'}
];

let employees = techCompany.filter(company => company.tenure >= 5 && company.position == 'Developer');

console.log(employees)
```
