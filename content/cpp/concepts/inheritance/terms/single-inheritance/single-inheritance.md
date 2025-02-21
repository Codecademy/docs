---
Title: 'Single Inheritance'
Description: 'Single inheritance in C++ allows a derived class to inherit properties and behaviors from a single base class, enabling code reuse and modular design.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Single inheritance** is an [Object-Oriented Programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming) feature in which a class (derived class) inherits attributes and behaviors from a single base class. This allows code reuse, modular design, and the ability to extend the functionalities of existing classes.

## Syntax

In C++, single inheritance follows this syntax:

```pseudo
class BaseClass {
  // Base class members
};

class DerivedClass : AccessSpecifier BaseClass {
  // Derived class members
};
```

- `BaseClass` is the parent (superclass), containing common functionality.
- `DerivedClass` inherits from `BaseClass`, gaining its attributes and methods.
- `AccessSpecifier` ([`public`](https://www.codecademy.com/resources/docs/cpp/access-modifiers/public), [`protected`](https://www.codecademy.com/resources/docs/cpp/access-modifiers/protected), or [`private`](https://www.codecademy.com/resources/docs/cpp/access-modifiers/private)) controls access to inherited members.

## Example

In the following example, Car (derived class) inherits properties and methods from Vehicle (base class):

```cpp
#include <iostream>
using namespace std;

class Vehicle {
public:
  void startEngine() {
    cout << "Engine started." << endl;
  }
};

class Car : public Vehicle {
public:
  void drive() {
    cout << "Car is driving." << endl;
  }
};

int main() {
  Car myCar;

  myCar.startEngine(); // Inherited from Vehicle
  myCar.drive(); // Car's own method

  return 0;
}
```

This produces the output as follows:

```shell
Engine started.
Car is driving.
```

In this example:

- `Car` inherits the `startEngine()` method from `Vehicle`.
- `Car` has its own method `drive()`, which extends the functionality.

## Codebyte Example

Run the following example to understand how the single inheritance works:

```codebyte/cpp
#include <iostream>
#include <string>

class Person {
protected:
  std::string name;
  int age;

public:
  Person(std::string n, int a) : name(n), age(a) {}

  void display() {
    std::cout << "Name: " << name << "\nAge: " << age << std::endl;
  }
};

class Student : public Person {
private:
  int studentID;

public:
  Student(std::string n, int a, int id) : Person(n, a), studentID(id) {}

  void display() {
    Person::display();
    std::cout << "Student ID: " << studentID << std::endl;
  }
};

int main() {
  Student student1("Alice", 20, 101);
  student1.display();
  return 0;
}
```

> **Note**: The above code snippet uses the concept of [`Constructor Initialization Lists`](https://www.codecademy.com/resources/docs/cpp/constructor-initializer-list) which is a common practice in C++ to call the base class constructor and initialize private data members.
