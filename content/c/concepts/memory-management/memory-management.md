---
Title: 'Memory Management'
Subjects:
  - 'Computer Science'
Description: 'Memory management is the process by which computer programs are assigned with physical or virtual memory space.'
Tags:
  - 'Memory'
  - 'Memory Management'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Computer memory is a limited resource and we have to manage it efficiently. The process by which computer programs are assigned with physical or virtual memory space is called memory allocation.

The memory allocation can be done either before or at the time of program implementation. There are two techniques for memory allocation: static memory allocation and dynamic memory allocation.

## Static Memory Allocation

In this type of allocation, the compiler allocates a fixed amount of memory during compile time and the operating system internally uses a data structure known as stack to manage the memory.

Exact memory requirements must be known in advance as once memory is allocated it can not be changed.

```c
int days; // Needs to be initialized or assigned some value at run time
int snowfall = 0; // Normal variable
const int maxScore = 10; // Constant, can not be changed
```

## Dynamic Memory Allocation

In this type of allocation system memory is managed at runtime. Dynamic memory management in C programming language is performed using four functions named `malloc()`, `calloc()`, `realloc()`, and `free()`. These four functions are defined in the C standard library header file `<stdlib.h>`. It uses the heap space of the system memory.

### `malloc()`

The `malloc()` function is used to allocate a block of memory in the heap. It allocates the user a specified number of bytes but does not initialize. Once allocated, the program accesses this block of memory via a pointer that `malloc()` returns.

The default pointer returned by `malloc()` is of the type `void` but can be cast into a pointer of any data type. However, if the space is insufficient for the amount of memory requested by `malloc()`, then the allocation fails and a `NULL` pointer is returned.

```c
int *ptr;

// The pointer ptr holds the address of the first byte in the allocated memory
ptr = (int*) malloc(5 * sizeof(int));
```

Since the size of `int` is 4 bytes, the above statement will allocate 20 bytes (4 \* 5) of memory.

### `calloc()`

The `calloc()` function is used to dynamically allocate the specified number of blocks of memory of the specified type. It is very much similar to `malloc()` but the difference is that it initializes each block with a default value `0` and it has two parameters as compared to `malloc()` which only has one parameter.

```c
int *ptr;

// The pointer ptr holds the address of the first byte in the allocated memory
ptr = (int*) calloc(5, sizeof(int));
```

The above statement allocates contiguous space in memory for 5 elements each with the size of the `int`.

### `realloc()`

The `realloc()` function is used to dynamically change the memory which was previously allocated. It means that if the memory that was previously allocated using the `malloc()` or `calloc()` function is not sufficient, so it can be reallocated using the `realloc()` function.

```c
int *ptr;

// Memory allocated using malloc() function
ptr = (int*) malloc(5 * sizeof(int));

// ptr is reallocated with 40 bytes (4 * 10) of memory
ptr = realloc(ptr, 10 * sizeof(int));
```

### `free()`

The `free()` function is used to dynamically de-allocate the memory. The memory allocated using functions `malloc()` and `calloc()` must be de-allocated manually by the user using the `free()` function when not in use. It helps to reduce the wastage of memory by freeing it.

```c
int *ptr;

// Memory allocated using malloc() function
ptr = (int*) malloc(5 * sizeof(int));

// Memory de-allocated using free() function
free(ptr);
```
