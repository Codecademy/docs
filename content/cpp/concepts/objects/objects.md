---
Title: 'Objects'
Description: 'In C++, an object is an instance of a class that encapsulates data and functionality pertaining to that data.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, an **object** is an instance of a class that encapsulates data and functionality pertaining to that data.

Suppose a class named `MyClass` was created, so now it can be used to create objects.

To create an object of `MyClass`, specify the class name, followed by the object name.

```cpp
City nyc;      // Used the City class to create an object named nyc
City shanghai; // Used the City class to create an object named shanghai
```

To access the class attributes, use the dot syntax (`.`) on the object:

Create an object called `myObj` and access the attributes:

```cpp
class MyClass {
  public:
    int myNum;
    std::string myString;
};

int main() {
  // Create an object of MyClass
  MyClass myObj;

  // Access attributes and set values
  myObj.myNum = 15;
  myObj.myString = "Some text";

  // Print attribute values
  std::cout << myObj.myNum << "\n";
  std::cout << myObj.myString;

  return 0;
}
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <string>

class Cat {
  public:
    std::string name;
    std::string color;
    int age;
};

int main() {
  // Create an object of Cat
  Cat mochi;

  // Access attributes and set values
  mochi.name = "Mochi";
  mochi.color = "Gray";
  mochi.age = 2;

  std::cout << mochi.color;

  return 0;
}
```
