---
Title: 'Strict Mode'
Description: 'The strict mode in JavaScript is a way to make the language follow stricter rules. It helps prevent errors and makes the code more predictable by restricting certain behaviors that can lead to problems.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strict Mode'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **strict mode** in JavaScript is a way to make the language follow stricter rules. It helps prevent errors and makes the code more predictable by restricting certain behaviors that can lead to problems.

## Syntax

`Strict mode` can be enabled for an entire code by adding "use strict"; at the very beginning of the script.

```pseudo
"use strict";
// All code here runs in strict mode
```

`Strict mode` can also be enabled within a specific function, which will only affect the code inside that function.

```pseudo
function example() {
    "use strict";
    // Only this function's code runs in strict mode
}
```

## Codebyte Example

The example below shows how `strict mode` prevents creating global variables accidentally.

Without `strict mode`, assigning a value to an undeclared variable would automatically create a global variable.

```codebyte/javascript
x = 10;
console.log(x);
// 10
```

In `strict mode`, this results in an error, helping prevent unintended global variables.

```codebyte/javascript
"use strict";
x = 10;
 // Throws an error: 'x is not defined'
```