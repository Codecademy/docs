---
Title: 'Constructors'
Description: 'A constructor is a specially defined method in a C++ class that is automatically called when an instance of that class is created.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Constructors'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **constructor** is a specially defined method in a C++ class that is automatically called when an instance of that class is created. It is typically used for tasks such as initializing class attributes in a new object. Like with functions, a constructor can take arguments that can aid in the initialization. The arguments are passed to the constructor method when a new object is created.

## Syntax

A constructor method is defined within a class by using the `ClassName` followed by parentheses. It does not have a return type.

```cpp
class  ClassName {
  public:
    ClassName() {
      // Constructor code
    }
};
```
## Examples

1. Basic Constructor

A basic constructor, also known as a default constructor, is a special type of constructor in C++ that takes no parameters. The compiler will automatically provide a default constructor if there is no constructor explicitly defined for a class. This constructor is used for initializing an object when no specific values are needed, and it also initializes member variables to default values.

```cpp
class MyClass {
  public:
    // Define a basic constructor
    MyClass () {
      std::cout << "The constructor was executed!" << std::endl;
    }
};

int main() {
  MyClass myObject;
  return 0;
}
```
The result of following code:
```cpp
The constructor was executed!
```

2. Parameterized Constructor
   A parameterized constructor is one that accepts arguments, allowing initial values to be set for an object's attrubutes at the time of creation. This constructor is useful for initializing objects with custom data or values that differ between instances.

```cpp
class Rectangle {
  public:
    int width;
    int height;

    // Declare the constructor
    Rectangle (int w, int h) {
      width = w;
      height = h;
    }
};

int main() {
  // Declare implicitly
  Rectangle rect1(10, 20);
  // Declare explicitly
  Rectangle rect2 = Rectangle(5, 15);

  std::cout << "Rectangle 1: Width = " << rect1.width << ", Height = " << rect1.height << std::endl;
  std::cout << "Rectangle 2: Width = " << rect2.width << ", Height = " << rect2.height << std::endl;
}
```
The result of following code:
```cpp
Rectangle 1: Width = 10, Height = 20
Rectangle 2: Width = 5, Height = 15
```

## Codebyte Example

Run the following codebyte example below to see how constructors work:
1. Basic Constructor

```codebyte/cpp
#include <iostream>

class Circle {
  public:
    int radius;

  Circle() {
    radius = 5;
  }
};

int main() {
  Circle circle1;

  std::cout << "The radius of the circle1 is " << circle1.radius << std::endl;
}
```

2. Parameterized Constructor
```codebyte/cpp
#include <iostream>

class Circle {
  public:
    int radius;

    Circle(int r) {
      radius = r;
    }
};

int main() {
  Circle circle2(11);
  std::cout << "The radius of the circle2 is " << circle2.radius << std::endl;
}
```
