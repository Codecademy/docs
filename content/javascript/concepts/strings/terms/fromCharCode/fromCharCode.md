---
<<<<<<< HEAD
Title: 'fromCharCode'
Description: 'Its a static method that returns a string created from the specified sequence of UTF-16 code units.'
Subjects:
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Characters'
  - 'JavaScript'
  - 'Methods'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
---

JavaScript has three static methods for working with String Objects, one of these is **fromCharCode**, which allows you to obtain a string from a sequence of UTF-16 code units.

## Syntax

```javascript
String.fromCharCode();
String.fromCharCode(num1);
String.fromCharCode(num1, num2);
String.fromCharCode(num1, num2, /* …, */ numN);
```

### Parameters

At least one number between 0 and 65535 (0xFFFF) **representing a UTF-16 code unit**. Numbers greater than 0xFFFF are truncated to the last 16 bits.

## Example

```javascript
const nombre = String.fromCharCode(76, 105, 97, 110, 121, 10084, 65039);
console.log(nombre); // "Liany❤️"
=======
Title: 'fromCharCode()'
Description: 'Returns a string created from the specified sequence of UTF-16 code units.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Characters'
  - 'JavaScript'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **`fromCharCode()`** method creates a string by converting one or more UTF-16 code units (numeric values) into their corresponding characters. This method is often applied in scenarios involving character encoding, dynamic character generation, or simple encryption tasks. It is particularly useful for converting ASCII or Unicode values into readable text.

## Syntax

```pseudo
String.fromCharCode(num1, num2, ..., numN)
```

**Parameters:**

- `num1, num2, ..., numN` (Number): One or more integer values representing UTF-16 code units. Each number should be between 0 and 65535.

**Return value:**

Returns a string composed of characters corresponding to the provided UTF-16 code units.

## Example

The following code converts a sequence of UTF-16 code units into the string "Liany❤️" and logs it to the console:

```js
const number = String.fromCharCode(76, 105, 97, 110, 121, 10084, 65039);
console.log(number);
```

The output of this code is:

```shell
Liany❤️
>>>>>>> db5dfa532754ec3cd5e41c22c711f1d5769e4bd4
```

## Codebyte Example

<<<<<<< HEAD
```codebyte/js
# Example runnable code block.
const secret = String.fromCharCode(
  76, 111, 110, 103, 32, 108, 105, 118, 101, 32, 116, 104, 101, 32, 107, 105, 116, 116, 105, 101, 115
);
console.log(secret); // "Long live the kitties"

=======
Run the following code to understand the working of the `fromCharCode()` method:

```codebyte/javascript
const secret = String.fromCharCode(
  76, 111, 110, 103, 32, 108, 105, 118, 101, 32, 116, 104, 101, 32, 107, 105, 116, 116, 105, 101, 115
);
console.log(secret);
>>>>>>> db5dfa532754ec3cd5e41c22c711f1d5769e4bd4
```
