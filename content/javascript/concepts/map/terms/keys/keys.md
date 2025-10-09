---
Title: '.keys()'
Description: 'Returns a new map iterator object that contains the keys of each element in the map.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.keys()`** method returns a new map [iterator](https://www.codecademy.com/resources/docs/javascript/iterators) object containing the keys of each element in the map, respecting the insertion order. This method enables explicit iteration using a `for...of` loop or the iterator's `.next()` method.

> **Note:** The iterable returned by `.keys()` is _not reusable_. Once it has been fully consumed (i.e., all elements have been iterated over), it becomes exhausted. To iterate again, a new iterator must be created by calling `.keys()` again on the map.

## Syntax

```javascript
map.keys();
```

**Parameters:**

The `.keys()` method does not take any parameters.

**Return value:**

Returns a new map iterator object containing the keys of each element in the map, in order.

## Example 1: Printing Each Key

This example uses a `for...of` loop to iterate over the iterable object returned by `.keys()` and prints the keys of the `ratings` map:

```javascript
const ratings = new Map();

ratings.set(1, 'Bad');
ratings.set(5, 'Medium');
ratings.set(10, 'Excellent');

const iterator = ratings.keys();

for (const key of iterator) {
  console.log(key);
}
```

The code will produce this output:

```shell
1
5
10
```

## Example 2: Getting the Values

In this example, the keys are saved in the `numsKeys` array, and the map's [`.get()`](https://www.codecademy.com/resources/docs/javascript/map/get) method is used to retrieve and print each value.

```javascript
const nums = new Map([
  [2, 'Two'],
  [4, 'Four'],
  [6, 'Six'],
  [8, 'Eight'],
]);

const numsKeys = Array.from(nums.keys());

numsKeys.forEach((key) => console.log(nums.get(key)));
```

The code will produce this output:

```shell
Two
Four
Six
Eight
```

## Codebyte Example

This example uses the `.next()` method to manually iterate through the keys ​​and print them to the console:

```codebyte/js
const map = new Map();

map.set(1, 'One');
map.set(true, 'True');
map.set({ id: 1 }, 'Object');

const iterator = map.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
```
