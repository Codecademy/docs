---
Title: 'Methods'
Description: 'C++ class methods are user-defined functions that can be used within an instance of the class. We use a . before method names to distinguish them from regular functions.'
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

C++ class methods are user-defined functions that can be used within an instance of the class. We use a dot notation `.` before method names to distinguish them from regular functions.

## Class Methods

A class method can be defined in two ways:

- Inside the class definition
- Outside the class definition

## Inside Class

```cpp
class Person {
  string name;

  public:
  // Method
  void get_name() {
    return name;
  }
}

int main() {
  Person robert;

  // Calls the method
  robert.get_name();
  
  return 0;
}
```

## Outside Class

```cpp
class Person {
  string name;

  public:
    void get_name();
}

void Person::get_name() {
    return name;
}

int main() {
  Person robert;

  // Calls the method
  robert.get_name();

  return 0;
}
```

You can also add parameters to class methods

```cpp
class Person{
  string name;

  public:

  // Method
  void set_name(string newName){
    name = newName;
  }
  void get_name() {
    return name;
  }
}

int main() {
  Person robert;

  // Sets the name class memeber
  robert.set_name("Robert");
  
  // Prints "Robert"
  std::cout << robert.get_name();
  return 0;  
}
```
