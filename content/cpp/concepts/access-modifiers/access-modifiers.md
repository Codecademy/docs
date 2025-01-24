---
Title: 'Access Modifiers'
Description: 'Access modifiers are keywords used to control the visibility and accessibility of class members.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Classes'
  - 'Structure'
  - 'Data Structures'
  - 'Encapsulation'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Access modifiers** are keywords used to specify the visibility and accessibility of a class or structure's members (attributes and methods).

They regulate how and where class members can be accessed, enabling [**encapsulation**](https://www.codecademy.com/resources/docs/general/programming-paradigms/encapsulation) and safeguarding sensitive data.

These modifiers are essential in writing robust, maintainable, and secure code in [Object-Oriented Programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming).

## Types of Access Modifiers

C++ supports _three_ main access modifiers:

```pseudo
class Example {
public:
    // public members

protected:
    // protected members

private:
    // private members
};
```

### 1. Public

Members declared as `public` are accessible from anywhere in the program. They are typically used for the interface of a class, such as methods that allow interaction with private data.

### 2. Protected

Members declared as `protected` are accessible within the defining class and derived classes. This is useful for [**inheritance**](https://www.codecademy.com/resources/docs/general/programming-paradigms/inheritance), where child classes can access and reuse members from the parent class.

### 3. Private

Members declared `private` can only be accessed within the defining class or structure. They hide implementation details and prevent unauthorized access or modification of sensitive data.

## Example

Here's an example of the use of access modifiers within the classes `Planet` and `GasGiant`:

```cpp
#include <iostream>
#include <string>

using namespace std;

class Planet {
public:
    // Constructor
    Planet(string name, double diameter, double mass)
        : name(name), diameter(diameter), mass(mass) {}

    // Public method to display planet details
    void displayDetails() {
        cout << "Planet Name: " << name << endl;
        cout << "Diameter (km): " << diameter << endl;
        cout << "Mass (kg): " << mass << endl;
    }

protected:
    double diameter;  // Accessible in derived classes

private:
    string name;  // Only accessible in this class
    double mass;  // Only accessible in this class
};

// GasGiant inherits from the Planet class, inheriting all attributes and methods.
class GasGiant : public Planet {
public:
    GasGiant(string name, double diameter, double mass)
        : Planet(name, diameter, mass) {}

    // Use of the protected attribute "diameter"
    void displayFeatures() {
        cout << "Diameter: " << diameter << " km" << endl;
    }
};

int main() {
    Planet earth("Earth", 12742, 5.972e24);  // Create an instance of Planet
    earth.displayDetails();  // Call the displayDetails method

    GasGiant jupiter("Jupiter", 139820, 1.898e27);  // Create an instance of GasGiant
    jupiter.displayFeatures();  // Call the displayFeatures method

    return 0;
}
```

This code outputs:

```shell
Planet Name: Earth
Diameter (km): 12742
Mass (kg): 5.972e+24
Diameter: 139820 km
```

## Key differences between Access Modifiers

| Access Modifier | Accessible in Class | Accessible in Derived Classes | Accessible in Outside Classes |
| --------------- | ------------------- | ----------------------------- | ----------------------------- |
| Public          | Yes                 | Yes                           | Yes                           |
| Protected       | Yes                 | Yes                           | No                            |
| Private         | Yes                 | No                            | No                            |

## Default Accessibility in `class` and `struct`

The keywords `class` and `struct` in C++ share similar functionality, with their primary distinction being the default accessibility of their members (attributes and methods).

In a `struct`, the default accessibility of members is `public`, whereas in a `class`, it is `private`. This means that unless specified otherwise, members of a `struct` are accessible outside the structure, while members of a `class` are not.

```cpp
class MyClass {
    int privateData; // Private by default
};

struct MyStruct {
    int publicData; // Public by default
};
```
