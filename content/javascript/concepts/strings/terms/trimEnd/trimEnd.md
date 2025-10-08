---
Title: '.trimEnd()'
Description: 'Removes whitespace from the end of a string.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.trimEnd()`** method removes whitespace characters from the **end** (right side) of a string. It does not modify the original string but instead returns a new string with the trailing whitespace removed.

## Syntax

```pseudo
string.trimEnd();
```

## Example

Removing whitespace from the end of a string using `.trimEnd()`:

```js
const message = 'Hello World   ';
console.log(`Before trim: "${message}"`);
console.log(`After trimEnd: "${message.trimEnd()}"`);
```

Output:

```
Before trim: "Hello World   "
After trimEnd: "Hello World"
```

## Codebyte Example
The following runnable example demonstrates the `.trimEnd()` method in action:

```js
// Create a string with trailing whitespace
const greeting = 'Hi there!    ';

// Display the original string (with visible quotes to show spaces)
console.log('Before:', `"${greeting}"`);

// Remove trailing whitespace using .trimEnd()
const trimmed = greeting.trimEnd();

// Display the trimmed string
console.log('After:', `"${trimmed}"`);
```