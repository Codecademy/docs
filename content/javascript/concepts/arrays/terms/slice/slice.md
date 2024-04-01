---
Title: '.slice()'
Description: 'Returns a shallow copy of a part of an array without altering the original array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Elements'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.slice()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) in JavaScript is utilized to select a segment of an [array](https://www.codecademy.com/resources/docs/javascript/arrays) and generate a new array from that selection. Importantly, this method creates this partial copy of an array, otherwise known as a _shallow copy_, without altering the original array.

## Understanding Shallow Copy

When the `.slice()` method is used, a new array known as a shallow copy is generated. A shallow copy can be imagined as a photo of the original array. This photo (the new array) looks exactly like the original, but it's a separate entity.

The key part is that, if the original array has primitive type elements like numbers or [strings](https://www.codecademy.com/resources/docs/javascript/strings), then changing these items in the new array or the shallow copy won't affect the original array at all, just as modifying a photo doesn't change the original scene.

However, if the original array contains [objects](https://www.codecademy.com/resources/docs/javascript/objects) or arrays, then the shallow copy will reference them rather than duplicating them. Consequently, modifications to the elements in the shallow copy will impact the original array's elements. This happens because both the original and the new array are linked to the same elements, not separate copies of them.

## Syntax

```pseudo
array.slice(start, end);
```

- `array`: The name of the array to be sliced.
- `start` (optional): The index at which the method will begin copying. If omitted, the process of copying elements starts with the array's first element.
- `end` (optional): The index before which the method will stop copying. The element located at this index is not copied to the new array.

## Examples

### With Two Arguments

In the following example, the `.slice()` method creates a new array containing elements from index `1` to index `3` in the original array:

```js
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const outOutOffice = weekDays.slice(1, 4);

console.log(outOutOffice);
```

The above example produces the following output:

```shell
[ 'Tuesday', 'Wednesday', 'Thursday' ]
```

### With One Argument

In the next example, the method creates a new array containing all the elements from index `4` to the end of the original array:

```js
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekend = weekDays.slice(4);

console.log(weekend);
```

Here is the output for the above example:

```shell
[ 'Friday', 'Saturday', 'Sunday' ]
```

### Without Arguments

Using `.slice()` without any arguments creates a complete copy of the original array. This is particularly useful when there is a need to work with a full array but also ensure that the original array remains unchanged. Since this operation creates a shallow copy, any changes to non-primitive elements (like objects or arrays) will reflect in both the original and the copied array:

```js
const originalArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const copyOfArray = originalArray.slice();

console.log(copyOfArray);
```

The above example gives the following output:

```shell
[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
```

### Using Negative Arguments

The `.slice()` method also accepts negative indices as arguments. A negative index is treated as an offset from the end of the array.

For example, `-1` refers to the last element of the array, `-2` to the second last, and so on. This feature is particularly useful for selecting elements from the end of an array without needing to calculate their absolute positions:

```js
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Using negative indices to select the weekend days
const weekend = weekDays.slice(-2);

console.log(weekend);

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
];

const selectedFruits = fruits.slice(-3, -1);

console.log(selectedFruits);
```

Following is the output for the above example:

```shell
[ 'Saturday', 'Sunday' ]
[ 'Elderberry', 'Fig' ]
```

## Codebyte Example

Here is a codebyte example for the `.slice()` method:

```codebyte/js
let fruits=['Banana','Orange','Grapefruit','Apple','Mango'];

// Two arguments
let citrusFruits = fruits.slice(1,3);
console.log(citrusFruits);

// Negative argument
let lastTwo = fruits.slice(-2);
console.log(lastTwo);

// One argument
let fromOrange = fruits.slice(1);
console.log(fromOrange);

// Zero arguments
let allFruits = fruits.slice();
console.log(allFruits);
```
