---
Title: 'Pointer Arithmetics'
Description: 'Pointer arithmetic in C enables operations on pointers, such as incrementing, decrementing, or finding the difference between two pointers.'
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

**Pointer arithmetic** in C allows for performing operations on pointers, such as incrementing, decrementing, or calculating the difference between two pointers. Since pointers store memory addresses, pointer arithmetic enables efficient traversal through arrays and manipulation of memory locations.

## Syntax

In C, a pointer can be modified using arithmetic operations. The type of data the pointer points to determines how much the pointer moves in memory with each operation. For example, adding 1 to a pointer doesn't simply add 1 to its value but rather advances it by the size of the data type it points to.

### 1. Incrementing a Pointer

```pseudo
pointer_name++;
```

This moves the pointer to the next element in the array it points to.

### 2. Decrementing a Pointer

```pseudo
pointer_name--;
```

This moves the pointer to the previous element.

### 3. Adding an Integer to a Pointer

```pseudo
pointer_name += n;
```

This moves the pointer `n` elements ahead, where `n` is an integer.

### 4. Subtracting an Integer from a Pointer

```pseudo
pointer_name -= n;
```

This moves the pointer `n` elements back.

### 5. Subtracting Two Pointers

```pseudo
ptr1 - ptr2;
```

This gives the number of elements between the two pointers, assuming both point to elements of the same array.

## Example

```c
#include <stdio.h>

int main() {
  int arr[] = {10, 20, 30, 40, 50};
  int *ptr = arr;

  // Accessing elements using pointer arithmetic
  printf("First element: %d\n", *ptr);          // Access arr[0]
  ptr++;                                       // Increment pointer
  printf("Second element: %d\n", *ptr);         // Access arr[1]

  ptr += 2;                                    // Move pointer 2 elements ahead
  printf("Fourth element: %d\n", *ptr);         // Access arr[3]

  ptr--;                                       // Move pointer 1 element back
  printf("Third element: %d\n", *ptr);          // Access arr[2]

  // Subtracting pointers
  int *ptr2 = &arr[4];
  printf("Difference between pointers: %ld\n", ptr2 - ptr); // Output: 4

  return 0;
}
```

The output of above code will the following output:

```shell
First element: 10
Second element: 20
Fourth element: 40
Third element: 30
Difference between pointers: 4
```

## Important Considerations

- **Pointer Out-of-Bounds**: Pointer arithmetic should never be used to go out of bounds of an array or memory block. This results in undefined behavior.
- **Pointer Type Matters**: When performing pointer arithmetic, the data type of the pointer determines the increment/decrement amount. For instance, if the pointer is of type `double*`, each pointer increment will add the size of `double` (typically 8 bytes) to the pointer.
- **Array and Pointer Relationship**: In C, an array name is essentially a pointer to the first element of the array. Pointer arithmetic works seamlessly with arrays, allowing traversal and access to elements.

## Best Practices

- Use pointer arithmetic for efficient memory traversal, especially in large arrays or buffers.
- Avoid out-of-bounds access by carefully ensuring that pointer arithmetic does not go past the limits of arrays.
- Use pointer arithmetic when working with low-level memory manipulation, but ensure the code is clear and maintainable by adding comments or using named constants when possible.
