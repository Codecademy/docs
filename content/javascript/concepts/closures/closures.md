---
Title: 'Closures'
Description: 'Closures are functions that can refer to variables and other bindings beyond its scope, even after being called.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Conceptual'
  - 'Dynamic Programming'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

Closures are [functions](https://www.codecademy.com/resources/docs/javascript/functions) that can refer to [variables](https://www.codecademy.com/resources/docs/javascript/variables) and other bindings beyond their scope, even after being called.

## Example

Each time a new function is defined, a closure is created.

```js
let myGlobalString = 'World';

function outer() {
  let myLexicalString = 'Hello';

  function inner() {
    myLocalString = `${myGlobalString}, ${myLexicalString}!`;
    return myLocalString;
  }

  return inner;
}
```

This example describes the three primary scopes visible to closures:

- `myGlobalString` exists in the global scope since it is not defined inside something else, like a function.
- From the point-of-view of the `inner()` function, everything outside its scope (outer functions, the global environment, etc.) is in the lexical environment, including `myLexicalString` and `myGlobalString`.
- Inside the `inner()` function is a locally-bound variable, `myLocalString`, that uses all the variables from its lexical environment.

## Codebyte Example

Another common instance of JavaScript closures is with [callbacks](https://www.codecademy.com/resources/docs/javascript/callbacks).

In the example below, the `setInterval()` function creates a closure in the `count()` callback that captures the references to the global variables `myInterval` and `counter`. Each second, `counter` is incremented by one, with its value preserved from the previous call. After it gets to seven, `myInterval` is cleared and reset to `null`:

```codebyte/javascript
let myInterval = null;
let counter = 0;

function startCounter() {
  function count() {
    counter++;
    console.log(counter);

    if(counter === 7) {
      clearInterval(myInterval);
      myInterval = null;
    }
  }

  if(!myInterval) {
    myInterval = setInterval(count, 1000);
  }
}

startCounter();
```
