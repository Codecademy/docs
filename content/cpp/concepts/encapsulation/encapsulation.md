---
Title: 'Encapsulation'
Description: 'Encapsulation is a way of organizing data members and functions by wrapping them together in a single unit. It makes the code cleaner, readable, and maintainable.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Encapsulation'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Encapsulation** is a way of organizing data members (attributes) and function members (methods) by wrapping them together in a single class. By bundling them together in a single unit, the code is cleaner, more readable, and more maintainable.

```pseudo
class Example {
  // Some attributes
  // Some methods
}
```

Here's a `Rectangle` class with `length` and `width` attributes and a `.Area()` method:

```cpp
class Rectangle {
  public:
    int length;
    int width;

  int Area() {
    return length * width;
  }
};
```

## Data Hiding

Encapsulation led to the important OOP concept of data hiding or abstraction.

Access specifiers are C++ keywords that determine the scope of class components:

- `public`: Public class members are accessible from anywhere in the program.
- `private`: Private class members are only accessible from inside the class.

Data hiding is achieved by declaring class attributes as `private`:

```cpp
#include <iostream>

class Encapsulation {
  private:
    // Data hidden from outside world
    int num;

  public:
    // Function to set value of num
    void setNum(int x) {
      num = x;
    }

    // Function to return value of num
    int getNum() {
      return num;
    }
};

int main() {
  Encapsulation obj;

  obj.setNum(10);

  std::cout << obj.getNum() << "\n"; // Output: 10

  return 0;
}
```

In the example above, the `num` attribute and `.setNum()` and `.getNum()` methods are wrapped together into one class called `Encapsulation`.

- `num` can only be accessed by either the `.setNum()` or `.getNum()` method.
- `.setNum()` is used to set the value of `num`.
- `.getNum()` is used to return the value of `num`.
