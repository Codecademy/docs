---
Title: "Functions in C++"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Functions"
  - "Arguments"
  - "Parameters"
  - "Return"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A function is a set of statements that are executed together when the function is called. Every function has a name, which is used to call the respective function.

## Built-in Functions

C++ has many built-in functions. In order to use them, we have to import the required library using `#include`.

Here we are getting a function named `sqrt()` from the `<cmath>` library:

```cpp
#include <iostream>
#include <cmath>
 
int main() {
  
  std::cout << sqrt(10);
  
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

** Void Functions

In C++, if we declare the type of a function as `void`, it does not return a value. These functions are useful for a set of statements that do not require returning a value.

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

Function declarations are generally stored in a header file (**.hpp** or **.h**) and function definitions (body of the function that defines how it is implemented) are written in the **.cpp** file.

**main.cpp**
 
```cpp
#include <iostream>
#include "functions.hpp"
 
int main() {
 
  std::cout << say_hi("Sabaa");
 
}
```
 
**functions.hpp**
 
```cpp
// Function declaration
std::string say_hi(std::string name);
```

**functions.cpp**
 
```cpp
#include <string>
#include "functions.hpp"
 
// Function defintion
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
