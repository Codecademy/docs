---
Title: 'Multilevel Inheritance'
Description: 'Multilevel inheritance is when a derived class inherits from another derived class, forming a parent-child-grandchild class hierarchy.'
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

**Multilevel inheritance** is an [Object-Oriented Programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming) concept where a class can inherit properties and methods from a class that is already inherited from another class, forming a hierarchical class structure. This forms a parent-child-grandchild relationship between classes, enabling the creation of specialized classes from existing ones.

## Syntax

In C++, multilevel inheritance follows this syntax:

```pseudo
class BaseClass {
    // Base class members
};

class DerivedClass1 : AccessSpecifier BaseClass {
    // First level derived class members
};

class DerivedClass2 : AccessSpecifier DerivedClass1 {
    // Second level derived class members
};
```

## Example

In the following example, multilevel inheritance is demonstrated where `Puppy` inherits from `Dog`, which in turn inherits from `Animal`, allowing `Puppy` to access methods from both `Dog` and `Animal`:

```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal is eating." << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking." << endl;
    }
};

class Puppy : public Dog {
public:
    void weep() {
        cout << "Puppy is weeping." << endl;
    }
};

int main() {
    Puppy myPuppy;

    myPuppy.eat();        // Inherited from Animal
    myPuppy.bark();       // Inherited from Dog
    myPuppy.weep();       // Inherited from Puppy

    return 0;
}
```

The output of the above code will be:

```
Animal is eating.
Dog is barking.
Puppy is weeping.
```

## Codebyte Example

The following example demonstrates how multilevel inheritance allows a class to inherit features across multiple levels, forming a structured class hierarchy:

```codebyte/cpp
#include <iostream>
#include <string>

class Employee {
protected:
    std::string name;
    int id;

public:
    Employee(std::string n, int i) : name(n), id(i) {}

    virtual void displayInfo() {
        std::cout << "Name: " << name << "\nID: " << id << std::endl;
    }
};

class Developer : public Employee {
protected:
    std::string programmingLanguage;

public:
    Developer(std::string name, int id, std::string lang)
        : Employee(name, id), programmingLanguage(lang) {}

    void displayInfo() override {
        Employee::displayInfo();
        std::cout << "Role: Developer\n";
        std::cout << "Programming Language: " << programmingLanguage << std::endl;
    }
};

class SeniorDeveloper : public Developer {
private:
    int teamSize;
    std::string projectName;

public:
    SeniorDeveloper(std::string name, int id, std::string lang,
                    int team, std::string project)
        : Developer(name, id, lang), teamSize(team), projectName(project) {}

    void displayInfo() override {
        Developer::displayInfo();
        std::cout << "Position: Senior Developer\n";
        std::cout << "Team Size: " << teamSize << "\n";
        std::cout << "Current Project: " << projectName << std::endl;
    }
};

int main() {
    SeniorDeveloper lead("Alice Johnson", 1001, "C++", 5, "Payment Gateway");
    lead.displayInfo();
    return 0;
}
```
