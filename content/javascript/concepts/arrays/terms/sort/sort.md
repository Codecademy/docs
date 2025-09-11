---
Title: '.sort()'
Description: 'Sorts the elements of an array in place.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The JS **`.sort()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) is used to sort the elements of an array in place. By default, it sorts elements as [strings](https://www.codecademy.com/resources/docs/javascript/strings) in ascending order. However, a custom comparison [function](https://www.codecademy.com/resources/docs/javascript/functions) can be provided to achieve more advanced sorting.

## JS `.sort()` Syntax

```pseudo
arr.sort(compareFn)
```

**Parameters:**

- `compareFn` (Optional): A function that defines the sort order. It takes two arguments, `a` and `b`, and should return:
  - A negative value if `a` should come before `b`
  - `0` if `a` and `b` are considered equal
  - A positive value if `a` should come after `b`

**Return value:**

JS `.sort()` returns the original array with its elements sorted in the given order.

## Example 1: Sorting Array of Strings Using JS `.sort()`

This example uses JS `.sort()` to sort an array of strings:

```js
const fruits = ['banana', 'apple', 'cherry', 'date'];

fruits.sort();

console.log(fruits);
```

Here is the output:

```shell
[ 'apple', 'banana', 'cherry', 'date' ]
```

## Example 2: Sorting Array of Numbers Using JS `.sort()`

This example uses JS `.sort()` with a comparison function to sort an array of numbers:

```js
const numbers = [10, 5, 20, 1, 100];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Here is the output:

```shell
[ 1, 5, 10, 20, 100 ]
```

## Codebyte Example: Sorting Array of Objects Using JS `.sort()`

This codebyte example uses JS `.sort()` to sort an array of objects:

```codebyte/javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
```

## Frequently Asked Questions

### 1. How do I sort numbers in descending order using JS `.sort()`?

You can reverse the comparison in your function in JS `.sort()` to sort numbers in descending order:

```js
numbers.sort((a, b) => b - a);
```

### 2. Does JS `.sort()` modify the original array?

Yes. JS `.sort()` performs in-place sorting, meaning the original array is modified instead of creating a new one.

### 3. Can I sort strings in reverse alphabetical order using JS `.sort()`?

Yes, you can sort strings in reverse alphabetical order using JS `.sort()` with `.reverse()`:

```js
fruits.sort().reverse();
```
