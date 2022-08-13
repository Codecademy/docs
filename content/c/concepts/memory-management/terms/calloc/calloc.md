---
Title: 'calloc()'
Description: 'Dynamically allocates an array of memory blocks of a specified type.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Memory'
  - 'Memory Management'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`calloc()`** function is used to dynamically allocate an [array](https://www.codecademy.com/resources/docs/c/arrays) of memory blocks of a specified type. Each block has a default value of `0`.

## Syntax

```pseudo
calloc(numberofblocks, size);
```

Both `numberofblocks` and `size` are of type `size_t`.

## Example

The following example showcases the `calloc()` function:

```c
int *ptr;

// The pointer ptr holds the address of the first byte in the allocated memory
ptr = (int*) calloc(5, sizeof(int));
```

The above statement allocates contiguous space in memory for 5 elements each with the size of the `int`.
