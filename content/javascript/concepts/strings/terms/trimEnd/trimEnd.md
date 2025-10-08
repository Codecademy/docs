---
Title: '.trimEnd()'
Description: 'Removes whitespace characters from the end of a string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.trimEnd()`** method removes whitespace characters from the end (right side) of a string. It does not modify the original string but instead returns a new string with the trailing whitespace removed.

## Syntax

```pseudo
string.trimEnd();
```

**Parameters:**

The `.trimEnd()` method takes no parameters.

**Return value:**

Returns a new string with whitespace removed from the end (right side) of the original string.

## Example

The following example removes whitespace from the end of a string using `.trimEnd()`:

```js
const message = 'Hello World   ';
console.log(`Before trim: "${message}"`);
console.log(`After trimEnd: "${message.trimEnd()}"`);
```

Here's the output of this code:

```shell
Before trim: "Hello World   "
After trimEnd: "Hello World"
```

## Codebyte Example

The following runnable example demonstrates the `.trimEnd()` method in action:

```codebyte/javascript
// Create a string with trailing whitespace
const greeting = 'Hi there!    ';

// Display the original string (with visible quotes to show spaces)
console.log('Before:', `"${greeting}"`);

// Remove trailing whitespace using .trimEnd()
const trimmed = greeting.trimEnd();

// Display the trimmed string
console.log('After:', `"${trimmed}"`);
```
