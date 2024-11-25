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

```pseudo
class ClassName {
  public:
    ClassName() {
      // Constructor code
    }
};
```

## Examples

### Basic Constructor

A **basic constructor**, also known as a **default constructor**, is a special type of constructor in C++ that takes no parameters.

The compiler will automatically provide a default constructor if there is no constructor explicitly defined for a class.

This constructor is used for initializing an object when no specific values are needed, and it also initializes member variables to default values.

```cpp
class MyClass {
  public:
    // Define a basic constructor
    MyClass() {
      std::cout << "The constructor was executed!";
    }
};

int main() {
  MyClass myObject;   // This calls the constructor
  return 0;
}
```

The result of the following code:

```shell
The constructor was executed!
```

### Parameterized Constructor

A **parameterized constructor** is one that accepts arguments, allowing initial values to be set for an object's attributes at the time of creation. This constructor is useful for initializing objects with custom data or values that differ between instances.

```cpp
class Circle {
  public:
    int X;
    int Y;
    int radius;

    Circle (int a, int b, int c) {
      X = a;
      Y = b;
      radius = c;
    }
};

int main() {
  // Call the constructor using arguments
  Circle myCircle1(5,5,10);
  Circle myCircle2(0,0,5);

  // Print out the attribute values set for each object

  std::cout << "X=" << myCircle1.X << ", Y=" << myCircle1.Y << ", radius=" << myCircle1.radius << "\n";
  // Output: X=5, Y=5, radius=10

  std::cout << "X=" << myCircle2.X << ", Y=" << myCircle2.Y << ", radius=" << myCircle2.radius << "\n";
  // Output: X=0, Y=0, radius=5

  return 0;
}
```

The result of the following code:

```shell
X=5, Y=5, radius=10
X=0, Y=0, radius=5
```

Like member functions, once declared in the class, the constructor can be defined outside the class:

```cpp
class Circle {
  public:
    int X;
    int Y;
    int radius;

    // Declare the constructor
    Circle (int a, int b, int c);
};

// Define constructor outside the class
Circle::Circle(int a, int b, int c) {
  X = a;
  Y = b;
  radius = c;
};
```

## Codebyte Example

The following example defines a simple class called `Circle` that has a single public attribute `radius`, and a default constructor that initializes this attribute.

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
