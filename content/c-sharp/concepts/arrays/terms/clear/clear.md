---
Title: '.Clear()'
Description: 'Clears the contents of an array, returning each element to its default value.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The `.Clear()` method is used to clear the contents of an array, returning each element to its default value.

## Syntax

```pseudo
// Clears the array myArray
Array.Clear(myArray);

// Clears N elements from myArray starting at index
Array.Clear(myArray, index, N);
```

`.Clear()` is a static method of the `Array` object. Used with just an array as an argument, it clears the whole array. It can also be called with an array, a start index, and a number, to clear that number of elements starting at index.

## Example

The following example initalizes `myArray` with values, then clears it:

```cs
int[] myArray = {0, 1, 2, 3, 4};

Array.Clear(myArray);

System.Console.WriteLine(myArray[2]); // Output: 0
```
