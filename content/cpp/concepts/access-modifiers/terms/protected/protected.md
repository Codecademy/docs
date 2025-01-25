---
Title: 'Protected'
Description: 'Allows class members to be accessed within their class and by derived classes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Encapsulation'
  - 'Inheritance'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`protected`** access specifier is used to define the accessibility of [class](https://www.codecademy.com/resources/docs/cpp/classes) members. Members declared as `protected` are accessible within the class itself and by its derived classes (subclasses).

This approach balances [encapsulation](https://www.codecademy.com/resources/docs/cpp/encapsulation) and [inheritance](https://www.codecademy.com/resources/docs/cpp/inheritance) by restricting access while enabling derived classes to extend functionality.

## Syntax

The following syntax defines a base class with two `protected` members that can be accessed from derived classes:

```pseudo
class BaseClass {
protected:
  // Protected members
  int myVar;
  void myFunc();
};
```

## Example

The following example demonstrates the use of the `protected` access specifier in C++:

```cpp
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

  // The following lines will cause compilation errors if uncommented
  // obj.myVar = 20;
  // obj.myFunc();

  return 0;
}
```

In this example:

`BaseClass` includes a protected [variable](https://www.codecademy.com/resources/docs/cpp/variables) `myVar` and a protected [function](https://www.codecademy.com/resources/docs/cpp/functions) `myFunc()`, which `DerivedClass` can access and modify through inheritance.

In the `main` function, `useProtectedMembers()` demonstrates accessing these members in a controlled manner.

> **Note:** Attempts to access protected members directly from objects of `BaseClass` or `DerivedClass` result in compilation errors, maintaining encapsulation.
