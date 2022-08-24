---
Title: 'Memory Management'
Description: 'Memory management is the process by which computer programs are assigned to physical or virtual memory space.'
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

**Memory management**, or memory allocation, is the process by which computer programs are assigned to physical or virtual memory space. Computer memory is a finite resource that must be efficiently managed.

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

In this type of allocation, system memory is managed at runtime. Dynamic memory management in C programming language is performed using the `malloc()`, `calloc()`, `realloc()`, and `free()` functions. These four functions are defined in the `<stdlib.h>` C standard library header file. It uses the heap space of the system memory. More can be learned about these functions below:
