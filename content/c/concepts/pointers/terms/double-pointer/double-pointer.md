---
Title: 'Double Pointers'
Description: 'A double pointer is a pointer that stores the address of another pointer .'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Pointers'
  - 'Double Pointers'
  - 'Memory'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **double pointer** is a [pointer](https://www.codecademy.com/resources/docs/c/pointers) that stores the address of another pointer. Double pointers are commonly used in scenarios where dynamic memory allocation for a two-dimensional array is required, or when a pointer to a pointer needs to be passed to a function to allow modification of the original pointer's value.

## Understanding Double Pointers

Just as a pointer holds the memory address of a variable, a double pointer holds the memory address of another pointer. To understand this concept, consider:

1. A variable has a value and an address.
2. A pointer stores the address of the variable.
3. A double pointer stores the address of the pointer.

To visualize, consider a hierarchy:
- Variable: `value`
- Pointer: `address_of_variable`
- Double Pointer: `address_of_pointer`

For an analogy , if you consider House as a variable , then the mailbox outside the house would be the pointer as it stores the house's address and the map would act as the double pointer containing the mailbox address . 

## Declaring and Assigning a Double Pointer

A double pointer is declared with two asterisk characters `**`, signifying its nature.

```pseudo
type **name = value;
```

In order to obtain the address of a variable, the identifier is prefixed with an ampersand symbol `&`. This is known as the address operator.

```c
int year = 1986;
int *pointer_to_year = &year;
int **double_pointer = &pointer_to_year
```

If the value of `year` were to be printed, the output would read "1986". If the value of `pointer_to_year` were printed, it would display the memory address of year, such as `0x7ffeeb2b07fc`. However, if the value of `double_pointer` were printed, it would display the memory address of pointer_to_year, such as `0x7ffeeb2b07f8` .


The dereference operator (also known as the indirection operator), represented by an asterisk (*), allows one to access the value of the variable that a pointer points to. When working with double pointers, the dereference operator is applied twice — first to access the pointer, and then to access the value the pointer points to.

```c
int year = 1986;                             // Value of year: 1986

int *pointer_to_year = &year;                // Value of pointer_to_year: 0x7ffeeb2b07fc

int **double_pointer = &pointer_to_year;     // Value of double_pointer: 0x7ffeeb2b07f8

int another_year = **double_pointer - 33;    // Value of another_year: 1953

**double_pointer = 2019;                    // This sets the value of year to 2019
```

## Functions and Double Pointers

Like other data types, pointers can be passed to and returned from [functions](https://www.codecademy.com/resources/docs/c/functions). One common scenario is dynamically allocating memory or modifying the address that a pointer holds.

```c
#include <stdio.h>

void print2DArray(int **arr, int rows, int cols) {
   
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", arr[i][j]);  
        }
        printf("\n");
    }
}

int main() 
{
    int rows = 3, cols = 3;
    
    int arr[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    print2DArray((int **)arr, rows, cols);  

    return 0;
}
```

`(int **)arr` casts the 2D array arr to a double pointer, allowing it to be passed to the `print2DArray` function, which expects a pointer to a pointer . 