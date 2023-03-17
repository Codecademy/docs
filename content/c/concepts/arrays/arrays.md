---
Title: 'Arrays'
Description: 'In the C language, an array is a data structure of a fixed length that stores a list of values.'
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

In the C language, an array is a list of values, with a fixed length.

Being able to store multiple pieces of related information in the same structure is very useful when writing C programs.

## Declaring an Array

The syntax for declaring an array is first specify the data type, then a descriptive array name, followed by square brackets surrounding the array's length (number of items):

```pseudo
type name[length];
```

To declare an `int` array named `grades` with a length of 6:

```c
int grades[6]; // An array to hold six integers
```

Alternatively, the length can be omitted and the array's initial values can be assigned to it instead. Values are assigned inside of the curly brackets and separated by commas.

```c
int grades[] = {96, 90, 78, 84, 88, 92};
```

## Accessing Values with Indexes

The values in arrays are accessed using their index, or their position in the array. They can either be assigned or used this way.

```c
char vowels[] = {'a', 'e', 'i', 'o', 'u'};
```

Note that in C, an array's indexes start at 0 instead of 1:

```pseudo
      +-------------------------+
Value | 'a'  'e'  'i'  'o'  'u' |
      +-------------------------+
Index |  0    1    2    3    4  |
      +-------------------------+
```

An element can be accessed by referring to the array name and the element's index number:

- `vowels[0]` will give the value `'a'`
- `vowels[1]` will give the value `'e'`
- `vowels[2]` will give the value `'i'`
- `vowels[3]` will give the value `'o'`
- `vowels[4]` will give the value `'u'`

```c
char vowels[] = {'a', 'e', 'i', 'o', 'u'};

putchar(vowels[3]);
// Output: o
```

## Example

Creating an array that holds the snowfall measurements (in the nearest inch) from the past 7 days:

```c
#include <stdio.h>

int main() {
  int snowfall[] = {10, 13, 14, 11, 9, 8, 6};
  printf("%d\n", snowfall[0]);

  snowfall[2] = 16; // Update an element
  printf("%d\n", snowfall[2]);

  return 0;
}
```

The output would be:

```shell
10
16
```
