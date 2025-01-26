---
Title: 'Double Pointer'
Description: 'A double pointer is a pointer that stores the address of another pointer.'
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

A **double pointer** is a [pointer](https://www.codecademy.com/resources/docs/c/concepts/pointers/terms/pointer/pointer) that stores the memory address of another pointer. It allows indirect access to the value of a variable.

## Syntax

A double pointer is declared using two asterisks (`**`):

```psedudo
type **name
```

- `type`: data type of variable being pointed to.
- `name`: the identifier for the double pointer.

## Example

The following examples demonstrates how a double pointer is declared and used.

```c
int value = 35;
int *pointer = &value; // Pointer to an integer
int **doublePointer = &pointer; // Double pointer to an integer pointer

// Printing the value and addresses
printf("Value of value: %d\n", value); // Direct value
printf("Value of *pointer: %d\n", *pointer); // Value via pointer
printf("Value of **doublePointer: %d\n", **doublePointer); // Value via double pointer

printf("Address of value: %p\n", (void*)&value); // Address of value
printf("Address of pointer: %p\n", (void*)&pointer); // Address of pointer
printf("Address of doublePointer: %p\n", (void*)&doublePointer); // Address of double pointer
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
