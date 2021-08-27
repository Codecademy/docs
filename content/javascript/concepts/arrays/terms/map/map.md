---
Title: ".map()"
Description: "Creates a new array with the results of calling a function for every element in array."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---



Creates a new array with the results of calling a function for every element in array.

## Syntax

```js
array.map((element, index, array) => {...});
```

The callback function accepts the following parameters:

- `element`, required, is the current element we are iterating through.
- `index`, optional, is the index of the current element we are iterating through.
- `array`, optional, is the array that `map()` was called on.

## Examples

Create a new array which doubles the values in `numbers`:

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(value => value * 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]
```

Create an array of full names from the `students` array full of objects:

```js
const students = [{first_name: 'Samantha', last_name: 'Jones'}, 
                  {first_name: 'Hector', last_name: 'Gonzales'}, 
                  {first_name: 'Jeremiah', last_name: 'Duncan'}]

const fullNames = students.map(student => {
  return `${student.first_name} ${student.last_name}`;
})

console.log(fullNames);
// Output: ['Samantha Jones', 'Hector Gonzales', 'Jeremiah Duncan']
```
