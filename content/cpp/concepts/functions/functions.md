---
Title: 'Functions'
Description: 'A function is a set of statements that are executed together when the function is called. Every function has a name, which is used to call the respective function. C++ has many built-in functions.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Arguments'
  - 'Parameters'
  - 'Return'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **function** is a set of statements that are executed together when the function is called. Every function has a name, which is used to call the respective function.

## Built-in Functions

C++ has many built-in functions. In order to use them, the required library has to be imported using `#include`.

Here a function named `sqrt()` is made available from the `<cmath>` library:

```cpp
#include <iostream>
#include <cmath>

int main() {
  std::cout << sqrt(10);
  // Output: 3.16228
}
```

## Function Declaration & Definition

A C++ function has two parts:

- Function declaration
- Function definition

The declaration includes the function’s name, return type, and any parameters.

The definition is the actual body of the function which executes when a function is called. The body of a function is typically enclosed in curly braces.

```cpp
#include <iostream>

// Function declaration
void blah();

// Main function
int main() {
  blah();
}

// Function definition
void blah() {
  std::cout << "Blah blah";
}
```

## Void Functions

In C++, if the type of a function is declared as `void`, it does not return a value. These functions are useful for a set of statements that do not require returning a value.

```cpp
#include <iostream>

void print() {
  std::cout << "Hello World!";
}

int main() {
  print();
}
```

## Return Values

A function that returns a value must have a `return` statement. The data type of the return value also must match the method’s declared return type.

On the other hand, a `void` function (one that does not return anything) does not require a `return` statement.

```cpp
#include <iostream>

int sum(int a, int b);

int main() {
  int r = sum(10, 20);
  std::cout << r;
}

int sum(int a, int b) {
  return(a + b);
}
```

## Function Declarations in Header File

C++ functions typically have two parts: declaration and definition.

Function declarations are generally stored in a header file (`.hpp` or `.h`) and function definitions (body of the function that defines how it is implemented) are written in the `.cpp` file.

### main.cpp

```cpp
#include <iostream>
#include "functions.hpp"

int main() {
  std::cout << say_hi("Sabaa");
}
```

### functions.hpp

```cpp
// Function declaration
std::string say_hi(std::string name);
```

### functions.cpp

```cpp
#include <string>
#include "functions.hpp"

// Function definition
std::string say_hi(std::string name) {
  return "Hey there, " + name + "!\n";
}
```

## Function Arguments

In C++, the values passed to a function are known as arguments. They represent the actual input values.

```cpp
#include <iostream>

void print(int);

int main() {
  print(10);
  // The argument 10 is received as input value
}

// Parameter a is defined for the function print
void print(int a) {
  std::cout << a;
}
```

## Overloading

The ability to create multiple functions with the same name but different parameters is called function [overloading](https://www.codecademy.com/resources/docs/cpp/overloading) in C++. It provides a way to reuse the same function name in different contexts by accepting different data types and numbers of arguments.

```cpp
#include <iostream>
using namespace std;

void add(int a,int b){
    cout << "Output, when add function is called with integer parameters: " << a+b << "\n";
}

void add(string a, string b){
   cout << "Output, when add function is called with string parameters: " << a+b << "\n";
}

int main() {
  int a=10,b=10;
  string s = "Hello",t="World!";
  add(a,b);
  add(s,t);
}
```

This will output:

```shell
When add function is called with integer parameters: 20
When add function is called with string parameters: HelloWorld!
```
