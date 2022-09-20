---
Title: 'Arrays'
Description: 'An array is a data structure used in C# to store a sequential collection of elements.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Arrays'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

An **array** is a data structure used in C# to store a sequential collection of elements. Its size cannot be changed after creation. The elements of an array are all of the same type, but it is possible to define a C# array that can hold elements of any type by specifying the type of the array as `object`. In C#, all types directly or indirectly inherit from the Object type.

## Syntax

There are a number of different ways to create an array in C#:

```pseudo

// Create a variable of type "type[]" without initalizing it:
type[] arrayName; 

// Create the array varaible and initalize it with an array of N items:
type[] arrayName = new type[N];

// Create the array variable and intalize it by specifying the contents:
type[] arrayName = new type[] { value1, value2, value3, ... valueN };

// Alternative way of creating the array and specifying the contents:
type[] arrayName = { value1, value2, value3, ... valueN };

```
