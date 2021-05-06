---
Title: "Arrays in C++"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Arrays"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

Like a vector, an array is a data structure used in C++ to store a sequential collection of elements. Unlike vectors, its size cannot be changed.

Being able to store multiple pieces of related information in the same structure is very useful when writing C++ programs.

## Creating an Array

When creating an array, you have to keep two pieces of information in mind:

- The type of data you want to store inside of it.
- How many items you want it to be able to hold (its size).

We can create an array a lot like we create normal variables, by specifying the data type, giving it a descriptive name, and also specifying its size:

```cpp
int favoriteNums[4];
```

In the above code example, we’ve created an array with a size of 4, meaning it can hold four integers (all four elements will initially have the default int value of 0).

In many cases, you won’t know what data needs to go in the array until after you’ve created it, but if you do happen to know the contents of the array ahead of time, you can initialize it with custom values upfront:

```cpp
int favoriteNums[] = {7, 9, 15, 16};
```

This array would also have a size of 4, but we don’t need to explicitly specify that when we initialize it in this way.

## Array Indices

Like vectors, each element in an array is assigned a specific index starting at zero. To access or modify an element in the array you may simply refer to it by its index and operate on it accordingly.

```cpp
char vowels[] = {'a', 'e', 'i', 'o', 'u'};
//      indexes:  0    1    2    3    4

std::cout << vowels[0]; // Output: a

vowels[0] = 'r';

std::cout << vowels[0]; // Output: r
```

In the case above we initialized an array of chars with all of the vowels, and then printed out the first element in the array at index 0. We then modified the element at index 0 by assigning it a new value of `'r'`, which got printed out below.

Arrays in C++ have a set size, meaning you can’t add or remove elements once the array has been created. You may only modify existing elements without changing the total size or shape of the structure.
