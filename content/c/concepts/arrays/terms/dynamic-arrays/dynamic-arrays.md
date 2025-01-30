---
Title: 'Dynamic Arrays'
Description: 'A dynamic array in C refers to an array whose size can be adjusted during runtime.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Lists'
  - 'Variable Types'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **dynamic array** in C refers to an array whose size can be adjusted during runtime. Unlike static arrays, whose size must be fixed at compile time, dynamic arrays offer flexibility by utilizing memory allocation functions from the `stdlib.h` library, such as [`malloc()`](https://www.codecademy.com/resources/docs/c/memory-management/malloc), [`calloc()`](https://www.codecademy.com/resources/docs/c/memory-management/calloc), [`realloc()`](https://www.codecademy.com/resources/docs/c/memory-management/realloc), and [`free()`](https://www.codecademy.com/resources/docs/c/memory-management/free).

Dynamic arrays are useful when the required size of an array cannot be determined in advance. They allow efficient memory management by allocating or freeing memory as needed, avoiding wastage or insufficient allocation.

## How to Implement a Dynamic Array

To implement a dynamic array, the following steps are involved:

### 1. **Allocate Memory**

Use `malloc()` or `calloc()` to allocate memory for the array dynamically.

#### `malloc()`

This function allocates a block of memory on the heap at runtime. It takes a single argument specifying the size of the memory block in bytes. However, the memory allocated by `malloc()` is not initialized, meaning it contains garbage values.

The syntax for using `malloc()` is as follows:

```pseudo
int *arr = (int *)malloc(size * sizeof(int));
```

#### `calloc()`

This function also allocates memory dynamically, but unlike `malloc()`, it initializes the allocated memory to zero. It takes two arguments: the number of elements and the size of each element.

The syntax for using `calloc()` is as follows:

```pseudo
int *arr = (int *)calloc(size, sizeof(int));
```

> **Note**: Both functions `malloc()` and `calloc()` return a pointer to the allocated memory. If memory allocation fails, they return `NULL`, so it's important to check if the allocation was successful.

### 2. **Access and Modify**

Once memory is allocated, use the pointer like a normal array to store and modify values.

### 3. **Resize the Array**

Use `realloc()` to adjust the array size if necessary.

The syntax for using `realloc()` is as follows:

```pseudo
arr = (int *)realloc(arr, new_size * sizeof(int));
```

### 4. **Free Memory**

When the dynamically allocated memory is no longer needed, use [`free()`](https://www.codecademy.com/resources/docs/c/memory-management/free) to release it and prevent memory leaks.

The syntax for using `free()` is as follows:

```psuedo
free(arr);
```

## Example

Here is an example that shows how to initialize and use a dynamic array:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;
    int *arr_malloc, *arr_calloc;

    // Dynamically allocate memory using malloc
    arr_malloc = (int *)malloc(n * sizeof(int));

    if (arr_malloc == NULL) {
        printf("Memory allocation failed using malloc\n");
        return 1;
    }

    // Initialize the array using a loop
    for (int i = 0; i < n; i++) {
        arr_malloc[i] = i + 1;  // Assigning values 1 to 5
    }

    printf("Array allocated using malloc:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr_malloc[i]);
    }
    printf("\n");

    // Dynamically allocate memory using calloc
    arr_calloc = (int *)calloc(n, sizeof(int));

    if (arr_calloc == NULL) {
        printf("Memory allocation failed using calloc\n");
        free(arr_malloc);  // Free previously allocated memory
        return 1;
    }

    // Since calloc initializes all elements to 0, we don't need to initialize the array
    printf("Array allocated using calloc (initialized to 0):\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr_calloc[i]);
    }
    printf("\n");

    // Free the dynamically allocated memory
    free(arr_malloc);
    free(arr_calloc);

    return 0;
}
```

The output of the above code will be as follows:

```shell
Array allocated using malloc:
1 2 3 4 5
Array allocated using calloc (initialized to 0):
0 0 0 0 0
```
