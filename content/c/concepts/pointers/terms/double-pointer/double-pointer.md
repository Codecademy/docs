---
Title: 'Double Pointer'
Description: 'Holds the memory address of a pointer.'
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

In C, a **double pointer** is a [pointer](https://www.codecademy.com/resources/docs/c/concepts/pointers/terms/pointer/pointer) that holds the memory address of another pointer. It allows indirect access to the value of a variable.

## Syntax

A double pointer is declared using two asterisks (`**`) before the pointer variable name:

```pseudo
type **name
```

- `type`: The type of data the double pointer will point to (e.g., `int`, `char`, etc.).
- `name`: The identifier for the double pointer.

## Example

The following example demonstrates how a double pointer is declared and used:

```c
# include <stdio.h>

int main() {
  int value = 35;
  int *pointer = &value; // Pointer to an integer (stores the address of 'value')
  int **doublePointer = &pointer; // Double pointer to an integer pointer (stores the address of 'pointer')

  // Printing the values
  printf("Value of value: %d\n", value); // Direct access to value
  printf("Value of *pointer: %d\n", *pointer); // Dereferencing pointer to access value
  printf("Value of **doublePointer: %d\n", **doublePointer); // Dereferencing double pointer twice to access value

  // Printing the addresses
  printf("Address of value: %p\n", (void*)&value); // Address of the variable 'value'
  printf("Address of pointer: %p\n", (void*)&pointer); // Address of the pointer 'pointer'
  printf("Address of doublePointer: %p\n", (void*)&doublePointer); // Address of the double pointer 'doublePointer'

  return 0;
}
```

The above code will give the following output:

```shell
Value of value: 35
Value of *pointer: 35
Value of **doublePointer: 35
Address of value: 0x7ffcbffdcc14
Address of pointer: 0x7ffcbffdcc18
Address of doublePointer: 0x7ffcbffdcc20
```

In the example:

- `value` is an integer variable.
- `pointer` is a pointer tha stores the address of `value`.
- `doublePointer` is a double pointer that stores the address of the pointer.
