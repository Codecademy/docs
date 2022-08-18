---
Title: 'free()'
Description: 'Dynamically de-allocates memory at runtime.'
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

The **`free()`** function is used to dynamically de-allocate the memory at runtime. Memory allocated by the `malloc()` and `calloc()` functions must be manually de-allocated when not in use. Freeing it helps to reduce memory wastage.

## Syntax

```pseudo
free(memoryblock);
```

The `memoryblock` must exist beforehand in order to be de-allocated by the `free()` function.

## Example

The following example showcases the `free()` function:

```c
int *ptr;

// Memory allocated using malloc() function
ptr = (int*) malloc(5 * sizeof(int));

// Memory de-allocated using free() function
free(ptr);
```
