---
Title: 'Methods'
Description: 'C++ class methods are functions defined within a class and can be accessed using dot notation to manipulate class members and behaviour.'
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

C++ class **methods** are functions defined within a class, accessed via dot notation (`.`), and used to manipulate class members and behaviour.

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
