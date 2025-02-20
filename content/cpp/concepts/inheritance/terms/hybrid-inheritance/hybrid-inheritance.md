---
Title: 'Hybrid Inheritance'
Description: 'Hybrid inheritance combines two or more types of inheritance, forming a complex class hierarchy.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Hybrid inheritance** is an [object-oriented programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming) concept where a class can inherit methods and properties from multiple base classes, forming a complex class hierarchy. This allows for the combination of multiple inheritance types, such as single, multiple, and multilevel inheritance.

## Syntax

In C++, hybrid inheritance follows this syntax:

```pseudo
class BaseClass1 {
  // Base class 1 members
};

class BaseClass2 {
  // Base class 2 members
};

class DerivedClass : AccessSpecifier BaseClass1, AccessSpecifier BaseClass2 {
  // Derived class members
};
```

## Example

In the following example, hybrid inheritance is demonstrated where `Child` inherits from both `Parent1` and `Parent2`, allowing `Child` to access methods from both the base classes:

```cpp
#include <iostream>
using namespace std;

class Parent1 {
public:
  void method1() {
    cout << "Method from Parent1." << endl;
  }
};

class Parent2 {
public:
  void method2() {
    cout << "Method from Parent2." << endl;
  }
};

class Child : public Parent1, public Parent2 {
public:
  void method3() {
    cout << "Method from Child." << endl;
  }
};

int main() {
  Child myChild;

  myChild.method1();    // Inherited from Parent1
  myChild.method2();    // Inherited from Parent2
  myChild.method3();    // Defined in Child

  return 0;
}
```

The output of the above code will be:

```shell
Method from Parent1.
Method from Parent2.
Method from Child.
```

## Codebyte Example

The following codebyte example demonstrates how hybrid inheritance enables a class to inherit methods and properties from multiple base classes, forming a complex class hierarchy:

```codebyte/cpp
#include <iostream>
#include <string>

class Person {
protected:
  std::string name;
  int age;

public:
  Person(std::string n, int a) : name(n), age(a) {}

  virtual void displayInfo() {
    std::cout << "Name: " << name << "\nAge: " << age << std::endl;
  }
};

class Employee {
protected:
  int id;

public:
  Employee(int i) : id(i) {}

  virtual void displayInfo() {
    std::cout << "ID: " << id << std::endl;
  }
};

class Manager : public Person, public Employee {
private:
  std::string department;

public:
  Manager(std::string name, int age, int id, std::string dept)
    : Person(name, age), Employee(id), department(dept) {}

  void displayInfo() override {
    Person::displayInfo();
    Employee::displayInfo();
    std::cout << "Department: " << department << std::endl;
  }
};

int main() {
  Manager mgr("John Doe", 45, 1001, "Sales");
  mgr.displayInfo();
  return 0;
}
```
