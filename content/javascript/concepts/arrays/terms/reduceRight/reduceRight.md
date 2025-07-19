---
Title: 'reduceRight()'
Description: 'Applies a reducer function to array elements from right to left, accumulating a single output value.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`reduceRight()`** method in JavaScript executes a reducer function on each element of an array, from right to left, to produce a single accumulated result. It is commonly used when the order of operations matters—such as evaluating expressions, parsing nested structures, or performing right-associative computations like exponentiation.

## Syntax

```pseudo
reduceRight(callbackFn, initialValue)
```

**Parameters:**

- `callbackFn`: A function to execute on each element in the array. It takes four arguments:
  - `accumulator`: The accumulated result from the previous callback.
  - `currentValue`: The current element being processed.
  - `currentIndex`: The index of the current element.
  - `array`: The array `reduceRight()` was called upon.
- `initialValue` (Optional): A value to use as the first argument to the first call of `callbackFn`. If not provided, the last element in the array is used as the initial value, and iteration starts from the second-to-last element.

**Return value:**

Returns a single value resulting from the reduction of the array, working from right to left.

## `reduceRight()` vs `reduce()`

- [`reduce()`](https://www.codecademy.com/resources/docs/javascript/arrays/reduce) processes array elements from left to right, useful for left-associative operations like summing or accumulating values.
- `reduceRight()` processes elements from right to left, ideal for right-associative logic like parsing or reversing operations.

In the following example, `reduce()` combines array elements from left to right, while `reduceRight()` combines them from right to left, resulting in reversed concatenation:

```js
const stringArray = ['0', '2', '4', '6', '🐈', '→'];

const reduceMethod = stringArray.reduce((prev, cur) => prev + cur);
const reduceRightMethod = stringArray.reduceRight((prev, cur) => prev + cur);

console.log(`reduceMethod : ${reduceMethod}`);
console.log(`reduceRightMethod : ${reduceRightMethod}`);
```

It generates the following output:

```shell
reduceMethod : 0246🐈→
reduceRightMethod : →🐈6420
```

## Example 1: Reverse Sum with `reduceRight()`

The following code shows the `reduceRight()` without an initial value, and the order of execution of the callback:

```js
const michiArray = [0, 1, 2, 3, 4];
const reducedMichi = michiArray.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(reducedMichi);
```

| call #      | accumulator | currentValue | index | Return value |
| ----------- | ----------- | ------------ | ----- | ------------ |
| First call  | 4           | 3            | 3     | 7            |
| Second call | 7           | 2            | 2     | 9            |
| Third call  | 9           | 1            | 1     | 10           |
| Fourth call | 10          | 0            | 0     | 10           |

The output of this code is:

```shell
10
```

## Example 2: Reverse Name Construction with `reduceRight()`

The following code shows the `reduceRight()` with an initial value, and the order of execution of the callback:

```js
const favoriteName = ['👑', 'y', 'n', 'a', 'i'];
const princess = favoriteName.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  'L'
);

console.log(princess);
```

| call #      | accumulator | currentValue | index | Return value |
| ----------- | ----------- | ------------ | ----- | ------------ |
| First call  | L           | i            | 4     | Li           |
| Second call | Li          | a            | 3     | Lia          |
| Third call  | Lia         | n            | 2     | Lian         |
| Fourth call | Lian        | y            | 1     | Liany        |
| Fifth call  | Liany       | 👑           | 0     | Liany👑      |

The output of this code is:

```shell
Liany👑
```

## Codebyte Example

Run the following code to understand the working of the `reduceRight()` method:

```codebyte/javascript
const codingMessage = ["practice", " ", "of", " ", "lot", " ", "a", " ", "require", ", ", "code", " ", "to", " "];

const fullMessage = codingMessage.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue, "learning"
);

console.log(fullMessage);
```
