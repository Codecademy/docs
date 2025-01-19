---
Title: 'Strict Mode'
Description: 'Strict mode enforces stricter rules to catch common coding errors, improve security, and prevent using certain problematic features.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strict Mode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Strict mode** in JavaScript is a way to opt into a stricter language version, enforcing rules that can help prevent common coding mistakes. It makes the code more predictable and easier to debug by restricting certain behaviours that could lead to errors or unexpected behaviour in non-strict mode.

## Syntax

Strict mode can be enabled for an entire file by adding `"use strict"` at the very beginning of the script as follows:

```pseudo
"use strict";
// All code here runs in strict mode
```

Strict mode can also be enabled within a specific function, which will only affect the code inside that function:

```pseudo
function example() {
  "use strict";
  // Only this function's code runs in strict mode
}
```

## Example

The example below shows how strict mode prevents creating global variables accidentally. Without strict mode, assigning a value to an undeclared variable would automatically create a global variable:

```js
x = 10;
console.log(x);
// 10
```

This gives an output as follows:

```shell
10
```

In strict mode, this results in an error, helping prevent unintended global variables:

```js
'use strict';
x = 10;
// Throws an error: 'x is not defined'
```

The output for this code will be:

```shell
ReferenceError: x is not defined
```

## Codebyte Example

The following example showcases that in strict mode, duplicate parameter names are not allowed:

```codebyte/javascript
"use strict";

// Strict mode prevents duplicate parameter names
function example(a, a) {
  console.log(a);
}
```

This will throw a SyntaxError before the function is executed, with the message `SyntaxError: Duplicate parameter name not allowed in this context`.
