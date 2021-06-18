---
Title: ".pop()"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-javascript"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition

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
