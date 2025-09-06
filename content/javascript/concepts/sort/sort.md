---
Title: 'Sort'
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

The JavaScript **`.sort()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) is used to sort the elements of an [array](https://www.codecademy.com/resources/docs/javascript/arrays) in place. By default, it sorts elements as [strings](https://www.codecademy.com/resources/docs/javascript/strings) in ascending order. However, a custom comparison [function](https://www.codecademy.com/resources/docs/javascript/functions) can be provided to achieve more advanced sorting, such as sorting numbers correctly or arranging [objects](https://www.codecademy.com/resources/docs/javascript/objects) based on certain properties.

## JavaScript `.sort()` Syntax

```pseudo
array.sort(compareFn)
```

**Parameters:**

- `compareFn` (Optional): A function that defines the sort order. It takes two arguments, `a` and `b`, and should return:
  - A negative value if `a` should come before `b`
  - `0` if `a` and `b` are considered equal
  - A positive value if `a` should come after `b`

> **Note:** If omitted, elements are converted to strings and sorted lexicographically.

## Example 1: Sorting Strings Using JavaScript `.sort()`

This example uses JavaScript `.sort()` to sort a list of strings:

```js
const fruits = ['banana', 'apple', 'cherry', 'date'];

fruits.sort();

console.log(fruits);
```

Here is the output:

```shell
[ 'apple', 'banana', 'cherry', 'date' ]
```

## Example 2: Sorting Numbers Using JavaScript `.sort()`

This example uses JavaScript `.sort()` with a comparison function to sort a list of numbers:

```js
const numbers = [10, 5, 20, 1, 100];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Here is the output:

```shell
[ 1, 5, 10, 20, 100 ]
```

## Codebyte Example: Sorting Objects by Property Using JavaScript `.sort()`

This codebyte example uses JavaScript `.sort()` with a comparison function to sort the elements of an object by property:

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

### 1. How do I sort numbers in descending order using JavaScript `.sort()`?

You can reverse the comparison in your function in JavaScript `.sort()` to sort numbers in descending order:

```js
numbers.sort((a, b) => b - a);
```

### 2. Does JavaScript `.sort()` modify the original array?

Yes. JavaScript `.sort()` sorts the array in place, meaning the original array is modified instead of creating a new one.

### 3. Can I sort strings in reverse alphabetical order using JavaScript `.sort()`?

Yes, you can sort strings in reverse alphabetical order by using JavaScript `.sort()` with `.reverse()`:

```js
fruits.sort().reverse();
```
