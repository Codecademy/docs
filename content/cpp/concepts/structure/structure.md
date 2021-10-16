---
Title: 'Structure'
Description: 'A structure stores together elements of different data types.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Structure'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A structure stores together elements of different data types, including arrays.

## Syntax

A structure is defined with:

1. The `struct` keyword in the beginning.
2. Curly brackets (`{ }`) to define the body.
3. A semicolon (`;`) at the end.

```cpp
struct StructureName {
  // Structure body
  member1;
  member2;
  member3;
  .
  .
  .
  memberN;
};
```

## Example

The example below is a `struct` with the tag name `Coder`. This structure contains three members declared within a pair of curly brackets (`{ }`):

- `Name`
- `Username`
- `ID`

A `;` is used after the closing bracket to end the declaration of the structure.

```cpp
struct Coder {
   char Name[30];
   char Username[15];
   long ID;
};
```

## Declaring and Initializing Structure Variables

The members of a structure can be initialized inside the structure definition in C++11 and higher.

An example of declaring and initializing a structure variable:

```cpp
#include <iostream>
using namespace std;
struct Coordinates {
  int x, y;
}c1; // Declaring variable c1

int main()
{
  struct Coordinates c2 = { 0, 1 }; // Declaring and initializing variable c2
    c1.x = 2;
    c1.y = 2;
    cout << "x1 = " << c1.x << ", y1 = " << c1.y << "\n"; // For variable c1
    cout << "x2 = " << c2.x << ", y2 = " << c2.y; // For variable c2
    return 0;
}
```

The output will look like this:

```
x1 = 2, y1 = 2
x2 = 0, y2 = 1
```

## Array of Structure

Like other primitive data types, we can create an array of structures.

An example of array of structure:

```cpp
#include <iostream>
using namespace std;
struct Coordinates {
  int x, y;
};

int main()
{
  struct Coordinates c[4];
  int i;
  for(i = 0; i < 4; i++)
  cin >> c[i].x >> c[i].y;
  for(i = 0; i < 4; i++)
  {
    cout << "x" << i+1 << "=" << c[i].x << "\t";
    cout << "y" << i+1 << "=" << c[i].y << "\n";
  }
  return 0;
}
```

Input:

```
1 0
1 2
1 1
0 2
```

Output:

```
x1=1    y1=0
x2=1    y2=2
x3=1    y3=1
x4=0    y4=2
```

## Nested Structure

A structure variable can also be a member of, or nested in, another structure.

In the example below, a `DOB` structure is nested in a `Coder` structure:

```cpp
struct Coder {
    char Name[30];
    char Username[15];
    long ID;
    struct DOB {
        int Day;
        char Month[12];
        int Year;

    }D;
}C;
```

`D` is the structure variable for structure `DOB` and `C` is the structure variable for structure `Coder`.

Members of a nested structure can be accessed in the following way:

`var1.var2.member1`

Initializing a member of the structure `DOB` from the example above:

```cpp
C.D.Day=10;
```
