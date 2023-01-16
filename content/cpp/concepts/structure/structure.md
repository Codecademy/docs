---
Title: 'Structures'
Description: 'A structure stores together elements of different data types, including arrays.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Structure'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **structure** in C++ stores together data elements under a single name. The data elements, also called data members, can be of different data types.

## Syntax

A structure is defined with:

1. The `struct` keyword in the beginning.
2. Curly brackets `{` `}` to define the body.
3. A semicolon `;` at the end.

```pseudo
struct name {
  member1_type member1_name;
  member2_type member2_name;
  member3_type member3_name;
};
```

## Example

The example below is a `struct` with the name `coder`:

```cpp
struct coder {
  long id;
  char name[30];
  char username[15];
};
```

This structure contains three members:

- `id`
- `name`
- `username`

## Declaring and Initializing Structure Variables

The members of a structure can be initialized inside the structure definition in C++11 and higher.

An example of declaring and initializing a structure variable:

```cpp
#include <iostream>

struct coordinates {
  int x;
  int y;
};

int main() {
  // Declaring variable c1
  struct coordinates c1;

  c1.x = 2;
  c1.y = 2;

  // Declaring and initializing variable c2
  struct coordinates c2 = { 0, 1 };

  std::cout << "x1 = " << c1.x << ", y1 = " << c1.y << "\n"; // For variable c1
  std::cout << "x2 = " << c2.x << ", y2 = " << c2.y << "\n"; // For variable c2

  return 0;
}
```

The output will look like this:

```shell
x1 = 2, y1 = 2
x2 = 0, y2 = 1
```

## Array of Structure

Like other primitive data types, an array of structures can be created.

An example of array of structure:

```cpp
#include <iostream>

struct coordinates {
  int x;
  int y;
};

int main() {
  struct coordinates c[4];
  int i;

  for (i = 0; i < 4; i++)
    std::cin >> c[i].x >> c[i].y;

  for (i = 0; i < 4; i++) {
    std::cout << "x" << i+1 << "=" << c[i].x << "\t";
    std::cout << "y" << i+1 << "=" << c[i].y << "\n";
  }

  return 0;
}
```

Input:

```shell
1 0
1 2
1 1
0 2
```

Output:

```shell
x1 = 1  y1 = 0
x2 = 1  y2 = 2
x3 = 1  y3 = 1
x4 = 0  y4 = 2
```

## Nested Structure

A structure's variable can also be a member of, or nested in, another structure.

In the example below, a `DOB` structure is nested in a `coder` structure:

```cpp
struct coder {
  long id;
  char name[30];
  char username[15];
  struct DOB {
    int month;
    int day;
    int year;
  } d;
} bjarne;
```

The `d` is the structure's variable for `struct DOB` and `bjarne` is the structure variable for `struct coder`.

Members of a nested structure can be accessed using `var1.var2.member1`.

Initializing a member of the structure `DOB` from the example above:

```cpp
bjarne.d.day = 10;
```
