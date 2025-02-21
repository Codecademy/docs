---
Title: 'Multiple Inheritance'
Description: 'Allows classes to inherit characteristics from more than one base class.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Abstraction'
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Multiple inheritance** is a type of [inheritance](https://www.codecademy.com/resources/docs/cpp/inheritance) where classes can inherit from more than one base class.

## Syntax

The syntax for multiple inheritance is similar to the syntax for single inheritance:

```pseudo
class DerivedClass : public BaseClass1, public BaseClass2 {
    // Derived class members
};
```

Classes can inherit from as many base classes as necessary, and, as with single inheritance, access modifiers can be used to modify access for inherited members.

The ordering of base classes affects the order in which [constructors](https://www.codecademy.com/resources/docs/cpp/constructors) and [destructors](https://www.codecademy.com/resources/docs/cpp/destructors) are called:

- Virtual base class constructors are called first (from left to right).
- Direct base class constructors are then called (from left to right).
- Destructors are called in reverse order of constructors.

## Examples

### Basic multiple inheritance

```cpp
class Bat {
  public:
    void fly();
};

class Man {
  public:
      void run();
};

class ManBat : public Man, public Bat {
  // run() and fly() are both available as they're inherited from Man and Bat
};
```

### Ambiguity errors

With multiple inheritance, ambiguity errors can occur if two base classes have members with identical names. This happens because it is unclear which base class member should be referenced. The **scope resolution operator** (`::`) can resolve such conflicts.

```cpp
class Dancer {
  public:
    void jump();
};

class Frog {
  public:
      void jump();
};

class DancingFrog : public Dancer, public Frog {
  // jump() is inherited from Dancer and Frog
};

int main () {
  DancingFrog df;
  df.jump(); // This will cause an ambiguity error as it isn't clear which ancestor's jump() we mean
  df.Dancer::jump(); // This won't cause an ambiguity error as the scope resolution operator explicitly references Dancer
  return 0;
}
```

### The Diamond Problem

Ambiguity errors can also occur if multiple base classes inherit from a common ancestor. This is known as the **Diamond Problem**.

```cpp
class Vehicle {
  public:
    void weight();
};

class Car : public Vehicle {
  // Inherits weight() from Vehicle
  public:
      void drive();
};

class Plane : public Vehicle {
  // Inherits weight() from Vehicle
  public:
      void fly();
};

class CarPlane : public Car, public Plane {
  // Inherits drive() from Car and fly() from Plane
  // Inherits weight() twice, once from Car and once from Plane, as each will have their own Vehicle object
  public:
      void switchMode();
};

int main () {
  CarPlane cp;
  cp.weight(); // Causes an ambiguity error as CarPlane as there are two Vehicle ancestor objects
  return 0;
}
```

### Resolving the Diamond Problem with Virtual Inheritance

One way to fix the diamond problem is to use virtual inheritance in the intermediate classes.

```cpp
class Vehicle {
  public:
    void weight();
};

class Car : virtual Vehicle {
  // Inherits weight() from Vehicle
  public:
      void drive();
};

class Plane : virtual Vehicle {
  // Inherits weight() from Vehicle
  public:
      void fly();
};

class CarPlane : public Car, public Plane {
  // Inherits drive() from Car and fly() from Plane
  // Inherits weight() once, as Car and Plane both reference the same Vehicle ancestor object
  public:
      void switchMode();
};

int main () {
  CarPlane cp;
  cp.weight(); // This won't cause an ambiguity error as there is only one Vehicle ancestor object
  return 0;
}
```

## Codebyte Example

Here's an example demonstrating multiple inheritance using a workplace scenario:

```codebyte/cpp
#include <iostream>
using namespace std;

// Base class 1
class Employee {
public:
  void work() {
    cout << "Employee is working on tasks.\n";
  }
};

// Base class 2
class Skill {
public:
  void coding() {
    cout << "Employee is coding in C++.\n";
  }
};

// Derived class inheriting from both Employee and Skill
class SoftwareEngineer : public Employee, public Skill {
public:
  void debug() {
    cout << "Software Engineer is debugging the code.\n";
  }
};

int main() {
  SoftwareEngineer dev;
  dev.work();   // Inherited from Employee
  dev.coding(); // Inherited from Skill
  dev.debug();  // Defined in SoftwareEngineer

  return 0;
}
```
