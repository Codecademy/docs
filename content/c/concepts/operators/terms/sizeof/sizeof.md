---
Title: 'sizeof'
Description: 'Returns the size in bytes of a data type or variable at compile time.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Compilation'
  - 'Data Types'
  - 'Memory'
  - 'Operators'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`sizeof`** operator is a compile-time unary operator in C that returns the size in bytes of its operand. It calculates the amount of memory space required to store a data type or variable, returning an unsigned integer value of type `size_t`. The `sizeof` operator is essential for memory management and ensures portability across different platforms where data type sizes may vary.

`sizeof` is widely used in dynamic memory allocation with functions like `malloc()` and `calloc()`, array size calculations, and when working with structures and unions. It provides a reliable way to determine memory requirements at compile time, making programs more portable and reducing platform-specific coding issues.

## Syntax

```pseudo
sizeof(expression)
sizeof expression
sizeof(type)
```

> **Note:** When using `sizeof` with a type (not a variable), parentheses are mandatory: `sizeof(int)` is valid, but `sizeof int` is not.

**Parameters:**

- `expression`: Any valid C expression, variable, or array name whose size needs to be determined
- `type`: Any C data type including primitive types, structures, unions, or arrays

**Return value:**

The `sizeof` operator returns the size in bytes as an unsigned integer value of type `size_t`.

## Example 1: Basic Data Type Sizes

This example demonstrates how to use `sizeof` with basic C data types to determine their memory requirements:

```c
#include <stdio.h>

int main() {
  // Display sizes of different data types
  printf("Size of char: %zu bytes\n", sizeof(char));
  printf("Size of int: %zu bytes\n", sizeof(int));
  printf("Size of float: %zu bytes\n", sizeof(float));
  printf("Size of double: %zu bytes\n", sizeof(double));
  printf("Size of long: %zu bytes\n", sizeof(long));
  printf("Size of pointer: %zu bytes\n", sizeof(void*));

  return 0;
}
```

The output of this code will be:

```shell
Size of char: 1 bytes
Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes
Size of long: 8 bytes
Size of pointer: 8 bytes
```

This example prints the size of various fundamental data types. The output shows how much memory each type consumes, which helps in understanding memory usage and choosing appropriate data types for specific requirements.

## Example 2: Dynamic Memory Allocation

This example shows how `sizeof` is used in real-world scenarios for dynamic memory allocation, ensuring correct memory allocation regardless of platform:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 5;
  int *numbers;

  // Allocate memory for n integers using sizeof
  numbers = (int*)malloc(n * sizeof(int));

  // Check if allocation was successful
  if (numbers == NULL) {
    printf("Memory allocation failed!\n");
    return 1;
  }

  // Initialize the array
  for (int i = 0; i < n; i++) {
    numbers[i] = (i + 1) * 10;
  }

  // Display the values and their memory usage
  printf("Array values: ");
  for (int i = 0; i < n; i++) {
    printf("%d ", numbers[i]);
  }
  printf("\nTotal memory allocated: %zu bytes\n", n * sizeof(int));

  // Free the allocated memory
  free(numbers);

  return 0;
}
```

The output of this code will be:

```shell
Array values: 10 20 30 40 50
Total memory allocated: 20 bytes
```

This example demonstrates the practical use of `sizeof` in dynamic memory allocation. Using `sizeof(int)` ensures the correct amount of memory is allocated regardless of the platform's integer size.

## Example 3: Array Size Calculation

This example illustrates how `sizeof` can be used to calculate the number of elements in an array automatically, which is useful for loop bounds and array processing:

```c
#include <stdio.h>

int main() {
  int scores[] = {85, 92, 78, 96, 88, 73, 91};
  float temperatures[] = {23.5, 28.1, 19.8, 31.2};

  // Calculate number of elements using sizeof
  int num_scores = sizeof(scores) / sizeof(scores[0]);
  int num_temps = sizeof(temperatures) / sizeof(temperatures[0]);

  printf("Scores array:\n");
  printf("Total size: %zu bytes\n", sizeof(scores));
  printf("Size per element: %zu bytes\n", sizeof(scores[0]));
  printf("Number of elements: %d\n", num_scores);

  // Process all elements without hardcoding array size
  printf("All scores: ");
  for (int i = 0; i < num_scores; i++) {
    printf("%d ", scores[i]);
  }

  printf("\n\nTemperatures array:\n");
  printf("Number of elements: %d\n", num_temps);
  printf("All temperatures: ");
  for (int i = 0; i < num_temps; i++) {
    printf("%.1f ", temperatures[i]);
  }
  printf("\n");

  return 0;
}
```

The output of this code is:

```shell
Scores array:
Total size: 28 bytes
Size per element: 4 bytes
Number of elements: 7
All scores: 85 92 78 96 88 73 91

Temperatures array:
Number of elements: 4
All temperatures: 23.5 28.1 19.8 31.2
```

This example shows how `sizeof` enables automatic calculation of array lengths, making code more maintainable when array sizes change. The formula `sizeof(array) / sizeof(array[0])` gives the number of elements.

## Frequently Asked Questions

### 1. What is the difference between `strlen()` and `sizeof()`?

`strlen()` counts string characters at runtime, while `sizeof()` returns allocated memory at compile time.

### 2. What is the difference between `sizeof()` and `size()` in C++?

`sizeof()` is a compile-time operator returning bytes, while `size()` is a runtime container method returning element count.

### 3. Can `sizeof()` be used with dynamically allocated memory?

When applied to a pointer, `sizeof()` returns the pointer size, not the allocated memory size.
