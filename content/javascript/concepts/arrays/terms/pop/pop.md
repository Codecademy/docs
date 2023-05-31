---
Title: '.pop()'
Description: 'Removes the last element of an array, decrements the array length, and returns the value that it removed.'
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

Removes the last element of an array, decrements the array length, and returns the value that it removed.

## Syntax

```js
array.pop();
```

## Examples

To pop the element `'sleep'` from the `schedule` array:

```js
const schedule = ['wake up', 'eat', 'work', 'play', 'sleep'];
const lastThingToDo = schedule.pop();

console.log(lastThingToDo);
// Output: sleep

console.log(schedule);
// Output: ['wake up', 'eat', 'work', 'play']
```

## Codebyte Example

The following example below uses '.pop()' on an array, 'flavor', to remove the last element.

```codebyte/js
const flavor = ['Vanilla', 'Chocolate', 'Strawberry', 'Oreo'];
const poppedFlavor = flavor.pop()

console.log(poppedFlavor)
console.log(flavor)
```
