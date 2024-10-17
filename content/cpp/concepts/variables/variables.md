---
Title: 'Variables'
Description: 'A variable refers to a storage location in the computer’s memory that one can set aside to save, retrieve, and manipulate data. To create a variable, the type must be specified and a value must be assigned to it.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **variable** refers to a storage location in the computer’s memory that one can set aside to save, retrieve, and manipulate data.

## Declare a Variable

To create a variable, the type must be specified and a value must be assigned to it:

```pseudo
data_Type name = value;
```

So to create a variable called `score` of type `int` and assign it the value 0:

```cpp
int score = 0;
```

## Display Variables

The `std::cout` object is used together with the `<<` operator to display variables.

To combine both text and a variable, separate them with the `<<` operator:

```cpp
int my_Age = 30;

std::cout << "I am " << myAge << " years old.";
```

The output would be:

```shell
I am 30 years old.
```

## Codebyte Example

```codebyte/cpp
#include <iostream>

int main() {
  float tip = 3.85;
  std::cout << "Tip is"<<" " << tip;
return 0;
}
```
