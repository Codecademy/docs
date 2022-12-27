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

### Syntax and Examples

A constructor method is defined within a class by using the `ClassName` followed by parentheses.

```cpp
class MyClass {
  public:
    // Define a constructor that outputs a message
    MyClass() {
      std::cout << "The constructor was executed!";
    }
};

int main() {
  MyClass myObj;  // This calls the constructor
  return 0;
}
```

Using arguments in a constructor:

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
