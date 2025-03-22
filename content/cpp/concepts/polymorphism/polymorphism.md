---
Title: 'Polymorphism'
Description: 'Polymorphism allows a single function or operator to behave differently based on the context.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Polymorphism'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Polymorphism** is an important concept in [object-oriented programming](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming). It means "more than one form" — the same entity (function or operator) can operate differently under different situations.

There are two types of polymorphism in C++:

- Compile-time polymorphism: This is also called static (or early) binding.
- Runtime polymorphism: This is also called dynamic (or late) binding.

## Compile-time Polymorphism

Compile-time polymorphism is perfect for function overloading as well as operator overloading.

In the example below, there are two functions with the same name, `sum()`, but a different number of arguments.

The number of parameters passed during function invocation (function calling) determines which function to be called. This is why it is considered as an example of polymorphism because the output is different in different conditions. Since the call is determined during compile time, it is called compile-time polymorphism.

```cpp
#include <iostream>

class Add {
public:
  // sum() with 2 parameters
  int sum(int num1, int num2) {
    return num1 + num2;
  }

  // sum() with 3 parameters
  int sum(int num1, int num2, int num3) {
    return num1 + num2 + num3;
  }
};

int main() {
  // Create object of Add class
  Add obj;

  // This will call the first variant of the sum() function
  std::cout << "Output: " << obj.sum(10, 20) << "\n";

  // This will call the second variant of the sum() function
  std::cout << "Output: " << obj.sum(11, 22, 33) << "\n";

  return 0;
}
```

The output would look like:

```shell
Output: 30
Output: 66
```

## Runtime Polymorphism

Function overriding is an example of runtime polymorphism.

When a child class declares a method that is already present in the parent class, it is called function overriding because the child class overrides the parent class.

In the case of function overriding, there are two definitions of the same function, one in the parent class and one in the child class. Since the call to the function is determined at runtime to decide which definition of the function is to be called, it is called runtime polymorphism.

```cpp
#include <iostream>

class A {
public:
  void print() {
    std::cout << "Output: Parent Class Function" << "\n";
  }
};

class B: public A {
public:
  void print()
  {
    std::cout << "Output: Child Class Function" << "\n";
  }
};

int main() {
  // Parent class object
  A obj1;
  obj1.print();

  // Child class object
  B obj2;
  obj2.print();

  return 0;
}
```

The output would look like:

```shell
Output: Parent Class Function
Output: Child Class Function
```
