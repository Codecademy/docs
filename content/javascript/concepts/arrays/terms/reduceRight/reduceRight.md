---
Title: 'reduceRight()'
Description: 'Array method that apply a callback function against an accumulator and each value of the array, from right-to-left to reduce it to a single value.'
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

The **`reduceRight()`** method of Array is an iterative method that execute a function against an accumulator and each value of the array, **from right-to-left**, to reduce it to a single value.

## Syntax

```pseudo
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

**Parameters:**

- `callbackFn`: A function to apply to each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. In last invocation, the return value becomes the return value of **reduceRight()**.
- `initialValue` (Optional): A Value to use as accumulator in the first call of the `callbackFn`. If no initial value is supplied, the last element in the array will be used.

**Return value:**

The resulting value of the reduction.

## **reduceRight()** vs _reduce()_

The difference between **`reduceRight()`** method and _reduce()_ method is the order in which the function is executed. The **reduceRight()** method is executed from **right to left**, and the _reduce()_ method is executed from _left to right_.

```js
// difference between `reduceRight()` and `reduce()`
const stringArray = ['0', '2', '4', '6', '🐈', '→'];

const reduceMethod = stringArray.reduce((prev, cur) => prev + cur);
const reduceRightMethod = stringArray.reduceRight((prev, cur) => prev + cur);

console.log(`reduceMethod : ${reduceMethod}`); // "0246🐈→"
console.log(`reduceRightMethod : ${reduceRightMethod}`); // "→🐈6420"
```

## Examples

The following code shows the **reduceRight()** <u>without</u> a initial value, and the order of execution of the callback.

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

The following code shows the **reduceRight()** with an <u>initial value</u>, and the order of execution of the callback.

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

Run the following code to understand the working of the `fromCharCode()` method:

```codebyte/javascript
const codingMessage = ["practice", " ", "of", " ", "lot", " ", "a", " ", "require", ", ", "code", " ", "to", " "];

const fullMessage = codingMessage.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue, "learning"
);

console.log(fullMessage);
```
