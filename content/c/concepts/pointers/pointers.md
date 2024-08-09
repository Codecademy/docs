---
Title: 'Pointers'
Description: 'A pointer is a variable that stores a memory address, which typically represents the location of another variable.'
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

A **pointer** is a [variable](https://www.codecademy.com/resources/docs/c/variables) that stores a memory address, which typically represents the location of another variable. Pointers are useful because they allow the efficient creation and manipulation of complex data structures.

## Understanding Pointers

Data is stored in a computer's [memory](https://www.codecademy.com/resources/docs/general/computer-hardware/ram). A variable represents a specific location within that memory and consists of three parts:

- An identifier (name)
- A value
- An address

The address is a value that describes _where_ in memory a variable is located.

To understand pointers, it may be helpful to think of variables as boxes on a shelf. Each box has a label (the identifier), a unique serial number that allows one to locate it (the address), and possibly something inside of it (the value).

Following this analogy, a pointer can be described as a box that contains the serial number of another box within it.

## Declaring and Assigning a Pointer

A pointer is declared similarly to how a variable is — by specifying its type, identifier, and value. However, an asterisk character `*` is inserted in front of the identifier.

```pseudo
type *name = value;
```

In order to obtain the address of a variable, the identifier is prefixed with an ampersand symbol `&`. This is known as the address operator.

```c
int year = 1986;
int *pointer_to_year = &year;
```

The left-hand side of this declaration may be read in reverse order — "`pointer_to_year` is a pointer to an integer."

If the value of `year` were to be printed, the output would read "1986". However, if the value of `pointer_to_year` were to be printed, the output would be an address such as `0x2aba1c0cf890`.

The dereference operator (also known as the indirection operator), represented by an asterisk (`*`), allows one to access the value of the variable that a pointer points to.

```c
int year = 1986;                            // Value of year: 1986

int *pointer_to_year = &year;               // Value of pointer_to_year: 0x2aba1c0cf890

int another_year = *(pointer_to_year) - 33; // Value of another_year: 1953

*(pointer_to_year) = 2019;                  // This sets the value of year to 2019
```

## Functions and Pointers

Like other data types, pointers can be passed to and returned from [functions](https://www.codecademy.com/resources/docs/c/functions). One scenario in which this might be useful is "returning" two values from a function.

```c
bool divide(int a, int b, bool *d) {
  int c = a / b;

  if (c * b == a) {
    *(d) = true;
  } else {
    *(d) = false;
  }
  return c;
}

int numerator = 10;
int denominator = 5;
bool divisible;

int result = divide(numerator, denominator, divisible);
```

In the example above, the `divide()` function returns the result of `a / b` and sets the variable that `d` points at to represent whether or not `a` is divisible by `b`. When this function is called on the last line, `result` is assigned a value of 2 and `divisible` becomes true.
