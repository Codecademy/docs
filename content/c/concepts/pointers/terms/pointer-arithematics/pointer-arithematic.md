# Pointer Arithmetic in C

## Definition
Pointer arithmetic in C refers to performing mathematical operations on pointers. Since pointers store memory addresses, arithmetic operations allow navigation through memory efficiently.

## Supported Operations
C supports the following pointer arithmetic operations:
1. **Increment ( `p++` )**: Moves the pointer to the next memory location.
2. **Decrement ( `p--` )**: Moves the pointer to the previous memory location.
3. **Addition ( `p + n` )**: Moves the pointer forward by `n` elements.
4. **Subtraction ( `p - n` )**: Moves the pointer backward by `n` elements.
5. **Difference ( `p1 - p2` )**: Computes the number of elements between two pointers.

## Syntax
```c
pointer_variable++;  // Increment pointer
pointer_variable--;  // Decrement pointer
pointer_variable = pointer_variable + n;  // Add n to pointer
pointer_variable = pointer_variable - n;  // Subtract n from pointer
diff = ptr1 - ptr2; // Compute the difference between two pointers
```

## Examples

### 1. Increment and Decrement
```c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;

    printf("Current value: %d\n", *ptr);
    ptr++;  // Moves to the next element
    printf("Next value: %d\n", *ptr);
    ptr--;
    printf("Previous value: %d\n", *ptr);

    return 0;
}
```

### 2. Pointer Addition
```c
#include <stdio.h>

int main() {
    int arr[] = {5, 10, 15, 20, 25};
    int *ptr = arr;
    
    printf("Value at ptr: %d\n", *ptr);
    ptr = ptr + 2; // Move forward by 2 elements
    printf("Value after adding 2: %d\n", *ptr);
    
    return 0;
}
```

### 3. Pointer Subtraction
```c
#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr1 = &arr[4]; // Points to the last element
    int *ptr2 = &arr[0]; // Points to the first element
    
    int diff = ptr1 - ptr2; // Difference in terms of array elements
    printf("Difference: %d\n", diff);
    
    return 0;
}
```

## Key Points
- Pointer arithmetic depends on the data type size.
- Incrementing or decrementing a pointer moves it by `sizeof(type)` bytes.
- Subtracting two pointers gives the number of elements between them.
- Operations are valid only when performed within the same array.

Pointer arithmetic is crucial for efficient array and memory management in C programming.

