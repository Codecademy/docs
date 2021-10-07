---
Title: 'Polymorphism'
Description: 'Polymorphism is an important concept of object-oriented programming. It means more than one form — the same entity (function or operator) can behave differently in different scenarios.'
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

Polymorphism is an important concept of object-oriented programming. It means more than one form — the same entity (function or operator) can operate differently under different situations.

There are two types of polymorphism in C++:

- Compile-time polymorphism: This is also called static (or early) binding.
- Runtime polymorphism: This is also called dynamic (or late) binding.

## Compile-time Polymorphism

Compile-time polymorphism is perfect for function overloading as well as operator overloading.

In the example below, there are two functions with the same name but a different number of arguments.

The number of parameters we pass during function invocation (function calling) determines which function is to be called. This is why it is considered as an example of polymorphism because in different conditions the output is different. Since the call is determined during compile time that's why it is called compile-time polymorphism.

```cpp
#include <iostream>

class Add {
  public:
    // Function sum() with 2 parameters
    int sum(int num1, int num2){
      return num1 + num2;
    }

    // Function sum() with 3 parameters
    int sum(int num1, int num2, int num3){
      return num1 + num2 + num3;
    }
};

int main() {
  // Create object of Add class
  Add obj;

  // This will call the first variant of sum() function
  std::cout << "Output: " << obj.sum(10, 20) << "\n";

  // This will call the second variant of sum() function
  std::cout << "Output: " << obj.sum(11, 22, 33); << "\n";
  
  return 0;
}
```

Above code snippet will generated below output.

```shell
Output: 30 // Result of first function invocation
Output: 66 // Result of second function invocation
```

## Runtime Polymorphism

Function overriding is an example of runtime polymorphism.

### Function overriding

It is a concept when a child class declares a method, which is already present in the parent class then this is called function overriding, here the child class overrides the parent class.

In the case of function overriding, we have two definitions of the same function, one in the parent class and one in the child class. Since the call to the function is determined at runtime to decide which definition of the function is to be called, it is called runtime polymorphism.

```cpp
#include <iostream>

class A {
  public:
    void print(){
      std::cout << "Output: Parent Class Function" << "\n";
    }
};

class B: public A{
  public:
    void print(){
      std::cout << "Output: Child Class Function";
    }
};

int main() {
  // Parent class object
  A obj;
  obj.print();

  // Child class object
  B obj2;
  obj2.print();

  return 0;
}
```

Above code snippet will generated below output.

```shell
Output: Parent Class Function // Result of parent print() function invocation
Output: Child Class Function // Result of child print() function invocation
```
