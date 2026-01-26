---
Title: 'Classes'
Description: 'A C++ class is a blueprint for creating objects that combines data attributes and functions to define the behavior and state of an entity.'
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

A C++ **class** is a blueprint for creating objects that combines data attributes and functions to define the behavior and state of an entity.

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

# Base class pointers

A base class pointer gives you the opportunity to create a [pointer](https://github.com/Codecademy/docs/blob/main/content/cpp/concepts/pointers/pointers.md) of type Base, and it can point to any type of class from that hierarchy (it needs to have the Is-A relationship).
If you use [dynamic polymorphism](https://github.com/Codecademy/docs/blob/main/content/cpp/concepts/polymorphism/polymorphism.md), then C++ will know exactly at runtime which function to call (based on the actual object the pointer points to).


It's easier to see it work in an example:

```cpp
#include <iostream>

class Base{
public:
    static constexpr const char* message = "Base class. Cats are cute.\n";
    static constexpr int num = 1;
    static int x;
    virtual void sayHi(){
        std::cout << "Hello from " << message;
        std::cout << "The number: " << num << "\n";
    }
    //good practice to have virtual destructors if your class uses virtual methods.
    virtual ~Base() = default;
};

class Derived1 : public Base {
public:
    static constexpr const char* message = "Derived 1 class. Indeed they are.\n";
    static constexpr int num = 2;
    //this is not called overloading anymore.
    //this is called overriding.
    virtual void sayHi() override{
        std::cout << "Hello from " << message;
        std::cout << "The number: " << num << "\n";
    }
};

int Base::x = 999;

int main(){

    Base* p1 = new Base();
    Base* p2 = new Derived1();
    p1->sayHi();
    p2->sayHi();

    std::cout << "\n";
    std::cout << p2->x << "\n";
    std::cout << p1->x << "\n";

}
```

The output:
```shell
Hello from Base class. Cats are cute.
The number: 1
Hello from Derived 1 class. Indeed they are.
The number: 2

999
999
```

As you can see:
* **p1** is a pointer of type Base. C++ will dynamically bound it and will use the method from the Base class.
* **p2** is a pointer of type Base that points to a Derived1 Object. Because "sayHi()" is virtual, C++ dynamically triggers the Derived1's own implementation of the "sayHi()" method.    


## The keywords used:
* override (C++11) - specifies that this method is overridden, means if the signature of the method is **NOT** the same as the one from the base class, the compiler will throw an error **'virtual void Derived1::sayHi()' marked 'override', but does not override'**. 
Why do we need this? Because to override methods, the signatures MUST be the same. If the derived method has a different signature, then that's not overriding anymore.
* default (C++11) - uses the compiler-generated version of the virtual destructor.
* static - it's a shared variable, it doesn't participate in polymorphism. Therefore the value will be the same in all instances.
* constexpr (C++11) - specifies that the value of the variable can be evaluated at compile-time.
