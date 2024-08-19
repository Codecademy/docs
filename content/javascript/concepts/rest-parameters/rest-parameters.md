---
Title: 'Rest Parameters'
Description: 'A specialized type of parameter that can be used to pass a variable number of terms.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Objects'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Rest parameters** are a form of parameter tied to an array, which allows for the concise introduction of a variable number of terms in a function call. This is also called a _variadic function_. In JavaScript a variadic function can be created and called to accept an indefinite number of arguments by utilizing the rest parameter syntax `...`.

## Syntax

```pseudo
function functionName(...parameterName) {
  statements;
}
```

The function should follow the same declaration syntax with the addition of the `...` operator prefixing the parameter name. Each value will be applied separately to the function body.

## Example

The following code demonstrates a basic implementation of a rest parameter:

```js
function sumVals(...vals) {
  let total = 0;
  for (let val of vals) {
    total += val;
  }
  return total;
}

let nums = [2, 4, 6, 8, 10];
console.log(sumVals(...nums));
```

The above example will return the following result:

```shell
30
```

Alternatively, other values can be included to supplement the values in the array, as in the following code:

```js
console.log(sumVals(...nums, 10));
```

Which yields:

```shell
40
```

The following example creates the function getUsers to simulate a response.status. Each status returns a different message, and for this, we use the `...` rest operator to pass all the possible messages that can be presented. All the messages are grouped into the params array and later selected to appear in the console.log output:

```codebyte/js
class TestRest {
  constructor() {
    this.successUpdate = 'Success update!'
    this.successInsert = 'Success insert!'
    this.error = 'Error!'
    this.errorNotFound = 'Data not found!'
    this.errorNotAvaliable = 'Process not avaliable!'
    this.errorAction = 'You will be redirect!'
  }
}

let tr = new TestRest()

function getUsers(...param) {
  let response = { status: [200, 201, 404, 500] }
  let randomI = Math.floor(Math.random() * response.status.length)

  if (response.status[randomI] === 200) {
    return param[0]
  } else if (response.status[randomI] === 201) {
    return param[1]
  } else if (response.status[randomI] === 404) {
    return `${param[2]}, ${param[3]}`
  } else if (response.status[randomI] === 500) {
    return `${param[4]}, ${param[5]}`
  }
}

console.log(getUsers(
  tr.successUpdate,
  tr.successInsert,
  tr.error,
  tr.errorNotFound,
  tr.errorNotAvaliable,
  tr.errorAction
  ))
```
