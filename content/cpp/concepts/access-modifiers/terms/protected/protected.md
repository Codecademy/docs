---
Title: 'Protected'
Description: 'In C++, the protected access specifier is used to define the accessibility of class members. Members declared as protected are accessible within their own class and by derived classes (subclasses). However, they are not accessible from outside the class or derived classes. This ensures a certain level of encapsulation while still allowing subclass-specific extensions.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Accessibility'
  - 'Classes'
  - 'Encapsulation'
  - 'Inheritance'
  - 'Members'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'c-plus-plus-for-programmers'
  - 'learn-c-plus-plus-introduction'
  - 'learn-object-oriented-programming-with-c-plus-plus'
  - 'learn-c-plus-plus-classes-and-objects'
  - 'learn-c-plus-plus-references-and-pointers'
  - 'learn-c-plus-plus-loops'
  - 'learn-c-plus-plus-vectors'
  - 'learn-c-plus-plus-functions'
---

In C++, the **`protected`** access specifier is used to define the accessibility of class members. Members declared as **`protected`** are accessible within their own class and by derived [`classes`](https://www.codecademy.com/resources/docs/cpp/classes) (subclasses). However, they are not accessible from outside the class or derived [`classes`](https://www.codecademy.com/resources/docs/cpp/classes). This ensures a certain level of [`encapsulation`](https://www.codecademy.com/resources/docs/cpp/encapsulation) while still allowing subclass-specific extensions.

## Syntax
The following code fragment defines a base [`class`](https://www.codecademy.com/resources/docs/cpp/classes) with two **`protected`** members, that can be accessed from derived classes.
```c++
class BaseClass {
protected:
    // Protected members
    int myVar;
    void myFunc();
};
```

## Example
Next example demonstrating the use of the protected access specifier in C++:
```c++
#include <iostream>
using namespace std;

// Base class
class BaseClass {
protected:
    int myVar;

    void myFunc() {
        cout << "Accessing protected function from BaseClass" << endl;
    }
};

// Derived class
class DerivedClass : public BaseClass {
public:
    void useProtectedMembers() {
        myVar = 10; // Accessing protected variable
        cout << "Protected variable value: " << myVar << endl;
        myFunc();   // Accessing protected function
    }
};

int main() {
    DerivedClass obj;
    obj.useProtectedMembers();

    // Next lines will cause compilation errors if uncommented
    // obj.myVar = 20; 
    // obj.myFunc();

    return 0;
}
```
### In this example:

`BaseClass` has a protected [`variable`](https://www.codecademy.com/resources/docs/cpp/variables) myVar and a protected [`function`](https://www.codecademy.com/resources/docs/cpp/functions) `myFunc()`.

`DerivedClass`, which [`inherits`](https://www.codecademy.com/resources/docs/cpp/inheritance) from `BaseClass`, can access and modify the **protected** members of `BaseClass`.

In the `main` function, an object of `DerivedClass` is created and its public member function `useProtectedMembers()` is called. This function demonstrates the ability to access and manipulate the protected members [`inherited`](https://www.codecademy.com/resources/docs/cpp/inheritance) from `BaseClass`.

Any lines that attempt to access the protected members directly from an object of `BaseClass` or `DerivedClass` (outside their classes) would result in compilation errors, ensuring [`encapsulation`](https://www.codecademy.com/resources/docs/cpp/encapsulation).
