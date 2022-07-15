---
Title: 'Structures'
Description: 'A structure is used to group different types of data together.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Lists'
  - 'Structure'
  - 'Variable Types'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **structure** is used to group different types of data together. It is defined using the `struct` keyword.

## Syntax

```pseudo
struct Name{
  type1 memberName1;
  type2 memberName2;
  type3 memberName3;
  ...
  typeN memberNameN;
};
```

A structure is made up of members where each `memberName` has to be declared with a `type`.

## Example

The following example uses the `struct` keyword to create a `Patient` structure:

```c
struct Patient{
  char name[30];
  int age;
  int weight;
  int heightInInches;
};
```

`name`, `age`, `weight`, and `heightInInches` are members of the `Patient` structure.

## Structure Variables

[Variables](https://www.codecademy.com/resources/docs/c/variables) can be created in order to work with the `Patient` structure above. The following example declares and initializes a structure variable:

```c
#include <stdio.h>
#include <string.h>

struct Patient {
  char name[30];
  int age;
  int weight;
  int heightInInches;
};

int main() {
  // Variable initialization at declaration
  struct Patient patientA = {"Douglas Franklin", 62, 280, 74};
  return 0;
}
```

## Accessing Members

Members can be accessed using the member operator `.`:

```c
#include <stdio.h>
#include <string.h>

struct Patient {
  char name[30];
  int age;
  int weight;
  int heightInInches;
};

int main() {
  // Variable initialization at declaration
  struct Patient patientA = {"Douglas Franklin", 62, 280, 74};

  // Accessing members
  printf("Name: %s \nAge: %d \nWeight: %d \nHeight: %d\n",
        patientA.name, patientA.age, patientA.weight, patientA.heightInInches);

  return 0;
}
```

This will output the following:

```shell
Name: Douglas Franklin
Age: 62
Weight: 280
Height: 74
```

## Nested Structures

A structure can be within another structure. Nested structure members can be accessed using the member operator `.`. The example below shows a `Hospital` structure member variable being declared within the `Patient` structure:

```c
#include <stdio.h>
#include <string.h>

struct Hospital {
  char department[30];
  int roomNum;
};

struct Patient {
  char name[30];
  int age;
  int weight;
  int heightInInches;
  struct Hospital roomDetails;
};

int main() {
  // Variable initialization at declaration
  struct Patient patientA = {"Douglas Franklin", 62, 280, 74, "oncology", 526};

  // Accessing nested structure members
  printf("Department: %s \nRoom: %d \n", patientA.roomDetails.department, patientA.roomDetails.roomNum);

  return 0;
}
```

The output is as follows:

```shell
Department: oncology
Room: 526
```
