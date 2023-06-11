---
Title: '.length'
Description: 'Returns the specific number of elements in the array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Properties'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.length`** array property returns the specific number of elements in the array.

## Syntax

```pseudo
array.length;
```

Setting the length with a positive value that is lower than the actual array length will delete items at end.

## Examples

```js
const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const lengthOfWeek = daysOfWeek.length;

console.log(lengthOfWeek);
// Output: 7
```

Iterating over an array using length:

```js
const numbers = [10, 20, 30, 40, 50];

const length = numbers.length;

for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}

console.log(numbers);
// Output: [20, 40, 60, 80, 100]
```

Shortening an array:

```js
const colors = ['purple', 'orange', 'yellow', 'green', 'blue'];

console.log(colors.length);
// Output: 5

colors.length = 3;

console.log(colors);
// Output: ['purple', 'orange', 'yellow']
```

## Codebyte Example

The example below defines a new array `groceries` and then logs the four array items to the console. Next, to delete the last item in the array, its `length` property is set to 3. Finally, to confirm the last item has been removed, the updated array and the value of item 4 (`undefined`) are logged to the console.

```codebyte/javascript
const groceries = ['Eggs', 'Cheese', 'Bread', 'Broccoli'];

console.log(`\nCurrent grocery list:\n`);
groceries.forEach((item, i) => {
    console.log(`${i + 1}) ${item}`);
});
console.log(`\nTotal grocery items: ${groceries.length}`);

groceries.length = 3; // Removing the last grocery item

console.log(`\nUpdated grocery list:\n`);
groceries.forEach((item, i) => {
    console.log(`${i + 1}) ${item}`);
});
console.log(`\nTotal grocery items: ${groceries.length}`);
console.log(`\nItem 4: ${groceries[3]}`);
```
