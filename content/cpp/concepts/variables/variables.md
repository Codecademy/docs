---
Title: 'Variables'
Description: 'A variable refers to a storage location in the computer’s memory that one can set aside to save, retrieve, and manipulate data.'
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

A **variable** refers to a storage location in the computer’s memory that one can set aside to save, retrieve, and manipulate data. Variables act as containers for storing information that can be changed or updated during the execution of a program.

## Declare a Variable

To declare a variable, the type of data the variable will hold must be specified, followed by the variable name. Optionally, a value can be assigned to the variable at the time of declaration:

```pseudo
type name = value;
```

So to create a variable called `score` of type `int` and assign it the value 0:

```cpp
int score = 0;
```

## Display Variables

The `std::cout` object is used together with the `<<` operator to display variables.

To combine both text and a variable, separate them with the `<<` operator:

```cpp
int myAge = 30;

std::cout << "I am " << myAge << " years old.";
```

The output would be:

```shell
I am 30 years old.
```

## Data Types in Variables

Each variable in programming has a type, which defines the kind of data it can hold. Here are some common data types:

- **int**: for integers (whole numbers), e.g.,

```cpp
int score = 10;
```

- **float**: A single-precision floating-point number, typically occupying 4 bytes (32 bits). It offers less precision and is used when memory efficiency is more important than accuracy, e.g.,

```cpp
float pi = 3.14159;
```

- **double**: A double-precision floating-point number, typically occupying 8 bytes (64 bits). It provides more precision and is the default choice when you need to store decimal numbers in C++.

```cpp
double pi = 3.14159265358979323846;
```

- **char**: A single character, e.g.,

```cpp
char letter = 'A';
```

- **bool**: for boolean values (true or false), e.g.,

```cpp
bool isAdmin = true;
```

## Example

The below example shows the usage of variables:

```cpp
#include <iostream>

int main() {
  int age = 25;
  double temperature = 36.6;
  char initial = 'R';
  bool isSunny = true;

  std::cout << "Age: " << age << std::endl;
  std::cout << "Temperature: " << temperature << "°C" << std::endl;
  std::cout << "Initial: " << initial << std::endl;
  std::cout << "Is it sunny? " << (isSunny ? "Yes" : "No") << std::endl;

  return 0;
}
```

The code above generates the following output:

```shell
Age: 25
Temperature: 36.6°C
Initial: R
Is it sunny? Yes
```

## Codebyte Example

Run the codebyte to understand how variables work:

```codebyte/cpp
#include <iostream>

int main() {
  double tip = 3.85;
  std::cout << "Tip is" << tip;
}
```
