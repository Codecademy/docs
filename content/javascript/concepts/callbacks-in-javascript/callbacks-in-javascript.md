---
Title: "Callbacks in JavaScript"
Subjects:
  - "Web Development"
Tags: 
  - "Functions"
Catalog Content:
  - "https://www.codecademy.com/catalog/subject/web-development"
---

# Callbacks in JavaScript

Callback functions are functions that are passed as arguments in other functions. Say we have two functions, `functionA` and `functionB`. `functionA`. 

```js
function functionA(num1, num2) {
    return num1 + num2
}

function functionB(callback) {
    return callback(2, 4) * 2
}

console.log(functionB(functionA)) // 12
```

In the code above, `functionA` accepts two arguments `num1` and `num2`. The other function, `functionB`, accepts a single argument `callback`. When `functionB` is executed, the value of the executed `callback` argument is returned. In the the log statment, we pass `functionA` as the callback to `functionB` and 12 is logged to the console.

