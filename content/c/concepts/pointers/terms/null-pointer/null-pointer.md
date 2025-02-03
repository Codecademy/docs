---
Title: 'Null Pointer'
Description: 'A NULL pointer in C is a pointer that does not point to any valid memory location.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Pointers'
  - 'Memory'
  - 'Variables'
  - 'Arrays'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **`NULL` pointer** in C is a pointer that doesn't point to any valid memory location. It acts as a special value to show that a pointer is either not initialized yet or is pointing to an invalid or unavailable memory address.

## Syntax

In C, the `NULL` pointer is defined in the `<stddef.h>` header file. It is typically assigned to a pointer to indicate that it is not pointing to any valid memory.

```pseudo
#include <stddef.h>

pointer_type *pointer_name = NULL;
```

- `pointer_type`: The data type of the pointer .
- `pointer_name`: The name of the pointer.

## Example

In the example, we declare an integer pointer `ptr` and initialize it to `NULL`, indicating that it doesn't point to any valid memory location:

```c
#include <stdio.h>
#include <stddef.h>

int main() {
  int *ptr = NULL;  // Initialize pointer to NULL

  if (ptr == NULL) {
    printf("Pointer is NULL\n");
  }

  return 0;
}
```

The `if` statement checks if `ptr` is `NULL`, if true, it prints "Pointer is NULL" to the screen. This ensures the pointer is not used before properly initialising to a valid memory address.

## Usage

### 1. Initializing Pointers

It is a common practice to initialize pointers to `NULL` to avoid them pointing to random or undefined memory locations. This helps prevent undefined behavior caused by dereferencing uninitialized or dangling pointers.

```c
int *ptr = NULL;
```

### 2. Pointer Checking

Before dereferencing a pointer, it is a good practice to check whether it is `NULL`. Dereferencing a `NULL` pointer will cause a **segmentation fault**, leading to runtime errors.

```c
if (ptr != NULL) {
  // Safe to dereference ptr
  printf("%d", *ptr);
} else {
  printf("Pointer is NULL\n");
}
```

### 3. Return Value for Failure

Functions that involve memory allocation or searching operations often return a `NULL` pointer to indicate failure. For example, when using [`.malloc()`](https://www.codecademy.com/resources/docs/c/memory-management/malloc) to allocate memory, if the allocation fails, it returns `NULL`.

```c
int *ptr = malloc(sizeof(int));
if (ptr == NULL) {
  printf("Memory allocation failed!\n");
}
```

### 4. NULL vs. 0

In C, `NULL` is often defined as `((void \*)0)`. While `NULL` and `0` can be used interchangeably in many contexts, using `NULL` improves code readability, making it clear that the value is a pointer rather than an integer.

## Best Practices

1. Always initialize pointers to `NULL` to avoid pointing to garbage memory.
2. Always check for `NULL` before dereferencing pointers.
3. Use `NULL` as a return value for functions that encounter errors or failure in memory allocation.
4. Avoid using pointer arithmetic on `NULL`.
