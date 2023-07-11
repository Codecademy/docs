---
title: Javascript Array.prototype.some()
description: .some() method explanation and example
subject:
  - javascript
  - .some() method
tags: 
  - javascript
  - array 
  - .some()
  - callback function
  - parameter
catalogContent: 
  - introduction-to-javascript
  - path/front-end-engineer-career-path 
---

The *.some()* method checks whether an element in an array passes a specified test being implemented by a callback function. The iterative method calls the callback function for each element in an array once until a truthy value is returned if it exists and stops, otherwise it returns false. For an empty array, the method always returns false. Check out [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#specifications)
>*Note* The .some() method does not mutate the original array.
### Syntax

  ```
  some(callbackFunction, thisArgument)
  some(callbackFunction)
```

### Parameters
- Element: This is the component under processing in the array.
- callbackFunction: The function to iterate through each element in the array. It will return true if the element passes the test and false otherwise.
- thisArgument (optional): The value utilized when executing the callbackFunction.
- Array: The array the .some() method is called upon.
- Index (optional): The index of the element in the array.

### Example
Check whether any value in an array is over 5

 ```codebyte/javascript
  const numbers = [3, 5, 1, 2, 4,, 6] //original array

  numbers.some(checkNumber);
  function checkNumber(number) {
    return number > 5;
  }
```
### Output
The callback function above returns true because the array contains a value, which is more than 5. The callback function returns truthy if one of the elements meets the specified condition and false otherwise.


