---
Title: '.valueOf()'
Description: 'Returns the value of all the elements of the original array.'
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

The **`.valueOf()`** method returns the value of all the elements of the original array.

## Syntax

```js
array.valueOf();
```

## Examples

Create a new array with the same elements as `programmingLanguages`:

```js
const programmingLanguages = ['JS', 'Python', 'Java', 'C++'];
const newArray = programmingLanguages.valueOf();

console.log(newArray);
// Output: ['JS', 'Python', 'Java', 'C++']
```

> **Note:** This method will not change the original array. However, if the original array or the variable which holds it (using the `.valueOf()` method) is manipulated, the value of the array will change accordingly.

## Codebyte Example

The example below uses the `.valueOf()` method to return the `fruits` array and assign it to a variable `myBag`. The code then makes changes to the original `fruits` array by pushing a new element `Pineapple`. And the value of `myBag` will also change because it holds a reference to the same `fruits` array.

```codebyte/js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myBag = fruits.valueOf();
console.log(myBag);
fruits.push("Pineapple");
console.log(myBag);
```
