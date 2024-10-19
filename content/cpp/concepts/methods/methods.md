---
Title: 'Methods'
Description: 'C++ class methods are user-defined functions that can be used within an instance of the class. A dot notation is used before method names to distinguish them from regular functions.'
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

C++ class **methods** are user-defined functions that can be used within an instance of the class. A dot notation `.` is used before method names to distinguish them from regular functions.

## Class Methods

A class method can be defined in two ways:

- Inside the class definition
- Outside the class definition

### Inside the Class

```cpp
class Person {
  string name;

  public:
    // Defines the method
    string get_name() {
      return name;
    }
};

int main() {
  Person robert;

  // Calls the method
  robert.get_name();

  return 0;
}
```

### Outside the Class

```cpp
class Person {
  string name;

  public:
    void get_name();
};

// Defines the method
void Person::get_name() {
  cout << name << endl;
}

int main() {
  Person robert;

  // Calls the method
  robert.get_name();

  return 0;
}
```

Parameters can also be added to class methods:

```cpp
class Person {
  string name;

  public:
    // Defines the method
    void set_name(string newName) {
      name = newName;
    }

    string get_name() {
      return name;
    }
};

int main() {
  Person robert;

  // Sets the name class member
  robert.set_name("Robert");

  // Prints "Robert"
  std::cout << robert.get_name();

  return 0;
}
```

#### Access Specifiers

Access specifiers determine the visibility of class members. The three main access specifiers in C++ are:

- **public**: Members are accessible from outside the class.
- **private**: Members are only accessible from within the class.
- **protected**: Members are accessible from within the class and by derived classes.

Here's an example:

```cpp
#include <iostream>
#include <string>

using namespace std;

class Person {
  private:
    string name; // Private member

  public:
    // Method to set the name
    void set_name(string newName) {
      name = newName;
    }

    // Method to get the name
    string get_name() {
      return name;
    }
};

int main() {
  Person robert;

  // Sets the name class member
  robert.set_name("Robert");

  // Prints "Robert"
  cout << robert.get_name(); 

  return 0;
}
```

#### Templates

Templates allow you to create generic classes or methods that can work with any data type. This is useful for creating classes that can handle multiple data types without rewriting code.

```cpp
#include <iostream>
using namespace std;

template <typename T>
class Box {
  private:
    T value;

  public:
    // Constructor
    Box(T val) : value(val) {}

    T get_value() {
      return value;
    }
};

int main() {
  Box<int> intBox(123);
  cout << intBox.get_value() << endl; // Prints 123

  Box<string> strBox("Hello");
  cout << strBox.get_value() << endl; // Prints "Hello"

  return 0;
}
```