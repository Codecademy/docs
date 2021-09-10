---
Title: 'Classes'
Description: 'A C++ class is a user-defined data type that encapsulates information and behavior about an object. It serves as a blueprint for future inherited classes. cpp class Person { };  A class is comprised of class members: - Attributes, also known as member data, consist of information about an instance of the class.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A C++ class is a user-defined data type that encapsulates information and behavior about an object. It serves as a blueprint for future inherited classes.

```cpp
class Person {

};
```

## Class Members

A class is comprised of class members:

- Attributes, also known as member data, consist of information about an instance of the class.
- Methods, also known as member functions, are functions that can be used with an instance of the class.

```cpp
class City {

  // Attribute
  int population;

public:
  // Method
  void add_resident() {
    population++;
  }

};
```

## Access Control Operators

C++ classes have access control operators that designate the scope of class members:

- `public` members are accessible everywhere.
- `private` members can only be accessed from within the same instance of the class or from friends classes.

```cpp
class City {

  int population;

public:
  void add_resident() {
    population++;
  }

private:
  bool is_capital;

};
```
