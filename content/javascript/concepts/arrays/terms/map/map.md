---
Title: '.map()'
Description: 'Creates a new array with the results of calling a function for every element in array.'
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

Creates a new array with the results of calling a function for every element in array.

## Syntax

```pseudo
array.map((element, index, array) => {...});
```

The callback function accepts the following parameters:

- `element` (required): The current element we are iterating through.
- `index` (optional): The index of the current element we are iterating through.
- `array` (optional): The array that `.map()` was called on.

## Examples

Create a new array which doubles the values in `numbers`:

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((value) => value * 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]
```

Create an array of full names from the `students` array full of objects:

```js
const students = [
  { first_name: 'Samantha', last_name: 'Jones' },
  { first_name: 'Hector', last_name: 'Gonzales' },
  { first_name: 'Jeremiah', last_name: 'Duncan' },
];

const fullNames = students.map((student) => {
  return `${student.first_name} ${student.last_name}`;
});

console.log(fullNames);
// Output: ['Samantha Jones', 'Hector Gonzales', 'Jeremiah Duncan']
```

## Codebyte Example

The example below defines a new array `teachers`. Next, the results of the `.map()` method are stored in a new variable, array `courses`. Finally, the items of the `courses` array are logged to the console.

```codebyte/javascript
const teachers = [
    { firstName: 'Candid', lastName: 'Cameron', course: 'Computer Science'},
    { firstName: 'Emphatic', lastName: 'Emmanuel', course: 'Economics'},
    { firstName: 'Humble', lastName: 'Henry', course: 'Humanity'},
    { firstName: 'Mystic', lastName: 'Mia', course: 'Mathematics'},
    { firstName: 'Sensible', lastName: 'Sasha', course: 'Science'}
];

const courses = teachers.map((teacher) => {
    return teacher.course;
});

console.log(`\nCourse list:\n`);
courses.forEach((course, i) => {
    console.log(`${i + 1}) ${course}`);
});
```
