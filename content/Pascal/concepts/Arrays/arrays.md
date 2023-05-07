---
Title: 'Arrays in Pascal'
Description: 'Arrays are a fundamental data structure used in Pascal programming to store a collection of elements of the same data type.'
Subjects:
 
  - 'Computer Science'
  - 'Software Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-pascal'
  - 'paths/computer-science'
 
--- 
Arrays are a fundamental data structure used in Pascal programming to store a collection of elements of the same data type. In contrast to other dynamic data structures, such as linked lists or vectors, arrays have a fixed size, meaning the number of elements they can hold must be specified when they are created.

## Creating an Array
To create an array in Pascal, the data type of the elements to be stored and the size of the array must be defined. For example, to create an array of integers that can hold 10 elements, the following code could be used:

pascal
Copy code
var
  numbers: array[0..9] of Integer;
In this example, the array is named numbers and its type is Integer. The size of the array is specified using the range notation, which defines the lower and upper bounds of the array. In this case, the array has 10 elements with indices ranging from 0 to 9.

An array can also be initialized with values when it is created. For example:

pascal
Copy code
var
  numbers: array[0..9] of Integer = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
This code creates an array of integers with the same size as the previous example but initializes it with the values 1 through 10.

## Array Indices
Like in C++, each element in an array is assigned a specific index starting at zero. To access or modify an element in the array, it can be referred to by its index and operated on accordingly:

pascal
Copy code
var
  vowels: array[0..4] of Char = ('a', 'e', 'i', 'o', 'u');

writeln(vowels[0]);  // Output: a

vowels[0] := 'r';

writeln(vowels[0]);  // Output: r
In this example, an array of chars is created with all the vowels, and then the first element in the array at index 0 is printed out. Then the element at index 0 is modified by being assigned a new value of 'r', which is then printed out.

It's important to note that indices must be within the bounds of the array; otherwise, a runtime error may occur. Pascal does not perform boundary checks by default, so it's the programmer's responsibility to ensure that the indices are valid.

Arrays are a powerful tool for organizing and manipulating data in Pascal programs. By using arrays, it's possible to store and access large amounts of related data efficiently and effectively.