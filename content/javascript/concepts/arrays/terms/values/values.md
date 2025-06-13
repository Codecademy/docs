---
Title: '.values()'
Description: 'Returns a new Array Iterator object that contains the values for each index in the array.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags: 
  - 'Arrays'
  - 'Methods'
  - 'JavaScript'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.values()`** method returns a new **Array Iterator object** that contains the values for each index in the array. It allows to explicitly iterate over the elements of the array using a loop or the iterator's `.next()` method.

> **Note:** The iterable returned by `.values()` is **not reusable**. Once it has been fully consumed (all elements have been iterated), it becomes exhausted. To iterate again, a new iterator must be created by calling the `.values()` method.

## Syntax

```pseudo
Array.values();
```

**Parameters:**

None.

**Return value:**

An **Array Iterator object** containing the values of the array.


## Example 1: Using a for...of loop
The following example uses a `for...of` loop to iterate over the iterable object returned by `.values()` and print the values ​​to the console.

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

## Example 2: Using the iterator's .next() method
The following example uses the `.next()` method to manually iterate through the values ​​and print them to the console.

Each time you call `.next()`, it gives an object with:
 - `value`: the current index value.
 - `done`: a boolean that tells if there are more items left.

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

The last `console.log` prints `undefined` because there are no more values ​​to iterate over.

## Codebyte Example

In the example below, the `.values()` method returns an iterator object of the `fruits` array. This object lets pass through each item in the array one by one using the `.next()` method.

The `while` loop keeps running as long as `done` is `false`. Inside the loop, it prints each fruit. When all items have been printed, the loop stops, and a final message is shown.

```codebyte/js
const fruits = ["apple", "banana", "orange"];
const iterator = fruits.values();

let result = iterator.next();

while (!result.done) {
  console.log(`Fruit: ${result.value}`)
  result = iterator.next();
}

console.log("Iteration completed.");

// Expected output: "Fruit: apple"
// Expected output: "Fruit: banana"
// Expected output: "Fruit: orange"
// Expected output: "Iteration completed"
```
