---
Title: 'realloc()'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Description: 'Reallocates a block of memory that was previously allocated.'
Tags:
  - 'Memory'
  - 'Memory Management'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`realloc()`** function is used to reallocate a block of memory. If the memory that was previously allocated using the `malloc()` or `calloc()` function is not sufficient, it can be reallocated using the `realloc()` function.

## Syntax

```pseudo
realloc(memoryblock, size);
```

The `memoryblock` must exist beforehand. The `size` is of type `size_t`.

## Example

The following example showcases the `realloc()` function:

```c
int *ptr;

// Memory allocated using malloc() function
ptr = (int*) malloc(5 * sizeof(int));

// ptr is reallocated with 40 bytes (4 * 10) of memory
ptr = realloc(ptr, 10 * sizeof(int));
```
