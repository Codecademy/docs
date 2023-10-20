---
Title: 'Classes'
Description: 'A C++ class is a user-defined data type that encapsulates information and behavior about an object. It serves as a blueprint for future inherited classes. A class is comprised of class members which includes attributes and methods.'
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

In C++, a **class** is a user-defined data type that encapsulates information and behavior about an object. It serves as a blueprint for future inherited classes.

```pseudo
class Person {
  // Class members
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

## Overloading

Redefining operators to work differently with custom data types is called operator [overloading](https://www.codecademy.com/resources/docs/cpp/overloading) in C++. This enables the user to use these operators with objects of their own classes.

The following overloads the `+` and `==` operators:

```cpp
#include <iostream>
using namespace std;

class Point {
public:
  int x;
  int y;

public:
  Point(int x = 0, int y = 0) : x(x), y(y) {}

  Point operator+(const Point& other) const {
    return Point(x + other.x, y + other.y);
  }

  bool operator==(const Point& other) const {
    return (x == other.x) && (y == other.y);
  }

  void display() const {
    std::cout << "Point(" << x << ", " << y << ")\n";
  }
};

int main() {
  Point point1(3, 4);
  Point point2(1, 2);

  Point sum = point1 + point2;
  sum.display();

  Point point3(5, 2);
  Point point4(3, 6);

  bool isEqual = (point3 == point4);
  std::cout << "Points are equal: " << (isEqual ? "true" : "false") << "\n";
}
```

This will output:

```shell
Point(4, 6)
Points are equal: false
```
