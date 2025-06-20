---
Title: '.values()'
Description: 'Returns a new Array iterator object that contains the values of each element in the array.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.values()`** method returns a new array [iterator](https://www.codecademy.com/resources/docs/javascript/iterators) object that contains the values of each element in the array. This method enables explicit iteration using a `for...of` loop or the iterator's `.next()` method.

> **Note:** The iterable returned by `.values()` is _not reusable_. Once it has been fully consumed (i.e., all elements have been iterated over), it becomes exhausted. To iterate again, a new iterator must be created by calling `.values()` again on the array.

## Syntax

```pseudo
array.values();
```

**Parameters:**

The `.values()` method does not take any parameters.

**Return value:**

Returns a new array iterator object that contains the values of each index in the array, in order.

## Example 1: Using a `for...of` loop

The following example uses a `for...of` loop to iterate over the iterable object returned by `.values()` and prints the values:

```js
const fruits = ['apple', 'banana', 'orange'];
const iterator = fruits.values();

for (const value of iterator) {
  console.log(value);
}
```

This will produce the following output:

```shell
apple
banana
orange
```

## Example 2: Using the iterator's `.next()` method

The following example uses the `.next()` method to manually iterate through the values ​​and print them to the console:

```js
const numbers = [2, 4, 6, 8];
const iterator = numbers.values();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
```

This will produce the following output:

```shell
2
4
6
8
undefined
```

Each time `.next()` is called, it gives an object with:

- `value`: The current index value.
- `done`: A boolean that tells if there are more items left.

The last `console.log()` prints `undefined` because there are no more values ​​to iterate over.

## Codebyte Example

In the example below, the `.values()` method returns an iterator for the `fruits` array. The iterator is used to access each element until the iteration is done:

```codebyte/js
const fruits = ['apple', 'banana', 'orange'];
const iterator = fruits.values();

let result = iterator.next();

while (!result.done) {
  console.log(`Fruit: ${result.value}`)
  result = iterator.next();
}

console.log('Iteration completed.');
```

The `while` loop keeps running as long as `done` is `false`. Inside the loop, it prints each fruit. When all items have been printed, the loop stops, and a final message is shown.
