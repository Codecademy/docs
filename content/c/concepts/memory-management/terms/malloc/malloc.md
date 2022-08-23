---
Title: 'malloc()'
Description: 'Allocates a block of memory in the heap, but does not initialize.'
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

The **`malloc()`** function is used to allocate a block of memory in the heap. It allocates the user a specified number of bytes but does not initialize. Once allocated, the program accesses this block of memory via a [pointer](https://www.codecademy.com/resources/docs/c/pointers) that `malloc()` returns.

## Syntax

```pseudo
malloc(size);
```

The `size` parameter is of type `size_t`.

The default pointer returned by `malloc()` is of the type `void` but can be cast into a pointer of any data type. However, if the space is insufficient for the amount of memory requested by `malloc()`, then the allocation fails and a `NULL` pointer is returned.

## Example

The following example showcases the `malloc()` function:

```c
int *ptr;

// The pointer ptr holds the address of the first byte in the allocated memory
ptr = (int*) malloc(5 * sizeof(int));
```

Since the size of `int` is 4 bytes, the above statement will allocate 20 bytes (4 \* 5) of memory.
