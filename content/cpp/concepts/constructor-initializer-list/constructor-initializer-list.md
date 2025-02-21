---
Title: 'Constructor Initializer List'
Description: 'Allows direct initialization of member variables before the constructor body executes.'
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

A **constructor initializer list** in C++ is a way to directly initialize member variables when an object is created. It sets variable values before the [constructor](https://www.codecademy.com/resources/docs/cpp/constructors) body runs. This helps make the program more efficient and is required for [const variables](https://www.codecademy.com/resources/docs/cpp/variables/constant-variables), [references](https://www.codecademy.com/resources/docs/cpp/references), and base class [objects](https://www.codecademy.com/resources/docs/cpp/objects).

## Syntax

A constructor initializer list comes after the constructor's name and parameter list. It starts with a colon (:) and is followed by a list of variables being initialized:

```pseudo
class ClassName {
  private:
    int x;
    int y;
  public:
    ClassName(int a, int b) : x(a), y(b) {
      // Constructor body (optional)
    }
};
```

## Examples

### Using Constructor Initializer List

This example shows how to use a constructor initializer list to set values when an object is created:

```cpp
#include <iostream>

class Point {
  private:
    int x;
    int y;
  public:
    // Constructor using initializer list
    Point(int a, int b) : x(a), y(b) {
      std::cout << "Point initialized with x = " << x << " and y = " << y << "\n";
    }
};

int main() {
  Point p1(3, 4); // Constructor is called with values 3 and 4
  return 0;
}
```

The result of the above code is the following:

```shell
Point initialized with x = 3 and y = 4
```

### Initializing Constant and Reference Members

If a class has `const` or reference `variables`, they must be initialized using a constructor initializer list since they cannot be assigned values later:

```cpp
#include <iostream>

class Example {
  private:
    const int value;
    int& ref;
  public:
    Example(int v, int& r) : value(v), ref(r) {
      std::cout << "Const value: " << value << " | Reference value: " << ref << "\n";
    }
};

int main() {
  int num = 10;
  Example ex(5, num);
  return 0;
}
```

The result of the above code is the following:

```shell
Const value: 5 | Reference value: 10
```

## Codebyte Example

This example demonstrates how a **constructor initializer list** can be used to initialize multiple members, including a base class and constant members:

```codebyte/cpp
#include <iostream>

class Base {
  protected:
    int baseValue;
  public:
    Base(int val) : baseValue(val) {
      std::cout << "Base class initialized with baseValue=" << baseValue << "\n";
    }
};

class Derived : public Base {
  private:
    const int derivedValue;
    int normalValue;
  public:
    Derived(int bVal, int dVal, int nVal) : Base(bVal), derivedValue(dVal), normalValue(nVal) {
      std::cout << "Derived class initialized with derivedValue=" << derivedValue
                << " and normalValue=" << normalValue << "\n";
    }
};

int main() {
  Derived obj(10, 20, 30);
  return 0;
}
```

### Explanation

- The `Base` class has a constructor that initializes `baseValue` using an initializer list.
- The `Derived` class inherits from `Base` and initializes its own members using an initializer list.
- The `Derived` class constructor first calls the `Base` class constructor and then initializes `derivedValue` (a const member) and `normalValue`.
- The initializer list ensures all members are set before the constructor body executes.
