---
Title: 'Arrays'
Description: 'An array in C is a data structure that allows users to store a fixed-size sequence of elements of the same data type.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Lists'
  - 'Values'
  - 'Variable Types'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

An **array** in C is a data structure that enables users to store a fixed-size sequence of elements of the same [data type](https://www.codecademy.com/resources/docs/c/data-types). Arrays are useful when there is a need to work with collections of data, such as lists of numbers, characters, or other values.

**Key Characteristics:**

- **Fixed Size**: Once declared, the size of the array cannot be changed.
- **Homogeneous Elements**: All array elements must be of the same data type (e.g., `int`, `float`, etc.).
- **Indexed Access**: Elements are accessed using zero-based indexing (the first element is at index `0`).
- **Contiguous Memory Allocation**: Array items are stored in consecutive memory locations, which makes accessing them efficient.
- **Efficient Iteration**: Arrays can be easily traversed using loops, allowing users to perform operations on each element.
- **No Bounds Checking**: C does not perform automatic bounds checking, so accessing out-of-range elements may lead to undefined behavior.

## Declaring and Initializing an Array

Here is the syntax for declaring an array in C:

```pseudo
type name[length];
```

In the syntax:

- `type`: The data type of the elements to be stored in the array.
- `name`: The name of the array.
- `length`: The length or the number of elements to be stored in the array.

This example declares an `int` array named `grades` with a length of `6`:

```c
int grades[6];
```

Though an array can be initialized after declaration, it is generally initialized during declaration. Here is the syntax for it:

```pseudo
type name[length] = {value1, value2, ..., valueN};
```

In the syntax:

- `value1, value2, ..., valueN`: The elements to be stored in the array.

This example declares and initializes the `grades` array with values:

```c
int grades[] = {96, 90, 78, 84, 88, 92};
```

> **Note:** When arrays are initialized during declaration, the length is generally omitted.

## Accessing Array Elements

The values in arrays are accessed using their index or position in the array.

For example, here is an array:

```c
char vowels[] = {'a', 'e', 'i', 'o', 'u'};
```

The index chart for the array will look like this:

```plaintext
      +-------------------------+
Value | 'a'  'e'  'i'  'o'  'u' |
      +-------------------------+
Index |  0    1    2    3    4  |
      +-------------------------+
```

> **Note:** In C, an array's indices start at `0` instead of `1`.

An element can be accessed by referring to the array name and the element's index number:

- `vowels[0]` will give the value `'a'`
- `vowels[1]` will give the value `'e'`
- `vowels[2]` will give the value `'i'`
- `vowels[3]` will give the value `'o'`
- `vowels[4]` will give the value `'u'`

Here is an example:

```c
#include <stdio.h>

int main() {
  char vowels[] = {'a', 'e', 'i', 'o', 'u'};

  putchar(vowels[3]);

  return 0;
}
```

The output will be:

```shell
o
```

## Modifying Array Elements

The items of an array can be modified by directly assigning values to specific indices:

```c
#include <stdio.h>

int main() {
  int numbers[3] = {1, 2, 3};

  numbers[0] = 10;

  for (int i = 0; i < 3; i++) {
    printf("%d\n", numbers[i]);
  }

  return 0;
}
```

Here is the output:

```shell
10
2
3
```

## Iterating an Array

Arrays in C can be traversed using loops such as `for`, `while`, or `do-while`. The `for` [loop](https://www.codecademy.com/resources/docs/c/loops) is most commonly used for this purpose:

```c
#include <stdio.h>

int main() {
  int numbers[] = {5, 10, 15, 20, 25};
  int i;

  for (i = 0; i < 5; i++) {
    printf("%d\n", numbers[i]);
  }

  return 0;
}
```

Here is the output:

```shell
5
10
15
20
25
```

## Example: Basic Array Operations

Here's a complete example demonstrating array declaration, initialization, element modification, and iteration:

```c
#include <stdio.h>

int main() {
  int marks[5] = {80, 85, 90, 75, 95};

  // Modify one element
  marks[2] = 100;

  // Print all elements
  for (int i = 0; i < 5; i++) {
    printf("Student %d: %d marks\n", i + 1, marks[i]);
  }

  return 0;
}
```

Here is the output:

```shell
Student 1: 80 marks
Student 2: 85 marks
Student 3: 100 marks
Student 4: 75 marks
Student 5: 95 marks
```

## Frequently Asked Questions

### 1. Can arrays in C store elements of different data types?

No. arrays in C are homogeneous, meaning all elements must be of the same data type.

### 2. Is it possible to change the size of an array after declaration?

No. The size of an array is fixed once declared. For dynamic sizes, consider using dynamic memory allocation with `malloc()`.

### 3. What happens if I access an element out of the array's bounds?

Accessing out-of-bounds elements results in undefined behavior and may lead to crashes or incorrect outputs.
