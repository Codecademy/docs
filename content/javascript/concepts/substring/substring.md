---
Title: 'Substring'
Description: 'Extracts a portion of a string between two given indices and returns a new string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Types'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

The **`.substring()`** [method](https://www.codecademy.com/resources/docs/javascript/methods) in JavaScript extracts a portion of a [string](https://www.codecademy.com/resources/docs/javascript/strings) from one position to another (exclusive) and returns a new string. If the second position is omitted, it returns characters from the first position to the end of the string.

## Syntax

```pseudo
string.substring(startIndex, endIndex);
```

**Parameters:**

- `startIndex`: The position where extraction begins.
- `endIndex` (Optional): The position before which to end extraction. If omitted, `.substring()` returns characters from `startIndex` to the end of the string.

**Return value:**

The `.substring()` method returns a newly created string containing the substring extracted from the input string.

> **Notes:**
>
> - If `startIndex` and `endIndex` are equal, `.substring()` returns an empty string.
> - Indices that are greater than [`string.length`](https://www.codecademy.com/resources/docs/javascript/strings/length) are treated as `string.length`.
> - If `startIndex` is greater than `endIndex`, then `startIndex` is treated as the end index and `endIndex` is treated as the start index.

## Example 1: Basic Usage of `.substring()`

This example uses the `.substring()` method to extract characters from index `0` to index `4` (exclusive) in the `str` string:

```js
let str = 'JavaScript';

let result = str.substring(0, 4);

console.log(result);
```

Here is the output:

```shell
Java
```

## Example 2: Using `.substring()` Without `endIndex`

This example uses the `.substring()` method without the `endIndex` parameter to extract characters from index `9` to the end of the `str` string:

```js
let str = 'Frontend Developer';

let result = str.substring(9);

console.log(result);
```

Here is the output:

```shell
Developer
```

## Codebyte Example: Using `.substring()` with Reversed Indices

This codebyte example uses the `.substring()` method with the `startIndex` parameter being greater than `endIndex` to extract characters from index `0` to index `6` in the `str` string:

```codebyte/javascript
let str = "Hello World";

let result = str.substring(6, 0);

console.log(result);
```

## Frequently Asked Questions

### 1. What happens if `startIndex` or `endIndex` in `.substring()` is negative?

If `startIndex` or `endIndex` in `.substring()` is negative, it is treated as `0`.

### 2. How is `.substring()` different from `.slice()`?

- `.substring()` swaps the indices if the first is greater than the second, unlike `.slice()`.
- `.slice()` supports negative indices, unlike `.substring()`.

### 3. Can I use `.substring()` on string literals?

Yes, you can use `.substring()` on string literals because JavaScript treats them as temporary `String` objects, making them eligible for calling methods on.
