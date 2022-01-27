---
Title: 'Constructors'
Description: 'A constructor is a specially defined method in a c<span class="x x-first x-last">=C</span>++ class that is automatically called when an instance of that class is created.'
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

A constructor is a specially defined method in a c++ class that is automatically called when an instance of that class is created. It is typically used for tasks such as initializing class attributes in a new object. A constructor can take arguments, like any other function, which can aid in that initialization. Arguments are passed to the constructor method when a new object is created.

### Syntax and Examples

A constructor method is defined within a class by using the class name followed by parenthesis:

```cpp
class MyClass {
  public:
    MyClass() {    // This defines a constructor that outputs a message
      cout << "The constructor was executed!";
    }
};

int main() {
  MyClass myObj;    // This calls the constructor
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
  cout << "X=" << myCircle1.X << ", Y=" << myCircle1.Y << ", radius=" << myCircle1.radius << "\n";
  cout << "X=" << myCircle2.X << ", Y=" << myCircle2.Y << ", radius=" << myCircle2.radius << "\n";

  return 0;
}
```

Like other functions, a constructor can be defined outside the class:

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
Circle::Circle (int a, int b, int c) {
  X = a;
  Y = b;
  radius = c;
};
```
