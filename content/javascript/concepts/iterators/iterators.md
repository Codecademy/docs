---
Title: 'Iterators'
Description: 'Iterators are objects used to loop over a group of data members, or a collection.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Iterators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Iterators** are used to loop over a group of data members, or a collection.

An iterator is an object that implements the iteration protocols. Many built-in data types ([strings](https://www.codecademy.com/resources/docs/javascript/strings), [arrays](https://www.codecademy.com/resources/docs/javascript/arrays), [maps](https://www.codecademy.com/resources/docs/javascript/map), [sets](https://www.codecademy.com/resources/docs/javascript/sets), etc.) have an iterator property that make them iterable.

## Iterable and Iterator Protocols

The **iterable protocol** stipulates that all iterable objects implement the `@@iterator` method. In other words, an object must have or inherit, via its prototype chain, the `@@iterator` property key. When an object is to be iterated, the `@@iterator` method is called without any arguments, and the returned iterator obtains the values or elements to be looped over.

The **iterator protocol**, by definition, implements the `next()` method and returns an object with at least two properties:

- `done` is a boolean that determines whether the sequence has been completed or consumed. If incomplete, its value is `false`. Otherwise, it is `true`.
- `value` is any type of value the iterator returns.

## Example

This range-based iterator, loops through a collection of integers and satisfies the iteration protocols.

```js
function createRangeIterator(min = 0, max = Infinity, step = 1) {
  let nextNum = min;
  let numCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextNum < max) {
        result = { value: nextNum, done: false };
        nextNum += step;
        numCount++;
        return result;
      }
      return { value: numCount, done: true };
    },
  };

  return rangeIterator;
}
```

- The `rangeIterator` object is an iterator object that satisfies the iterator protocol.
- When all elements in the range collection are iterated over, `done` becomes `true` and is returned.

To use the `createRangeIterator()`:

```js
const useCase = createRangeIterator(2, 8, 2);

let result = useCase.next();

while (!result.done) {
  console.log(result.value);
  result = useCase.next();
}
```

This will output:

```shell
2
4
6
```
