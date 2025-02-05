---
Title: 'Destructors'
Description: 'A destructor is a special method in a C++ class that is automatically called when an instance of that class is destroyed.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Memory'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **destructor** is a special method in a C++ class that is automatically called when an instance of that class is destroyed. Destructors are used to free resources that were allocated during the object's lifetime, such as dynamic memory or file handles. Unlike constructors, destructors cannot take arguments and do not return a value.

## Syntax

A destructor method is defined using the tilde (`~`) character followed by the class name. It has no parameters and no return type.

```pseudo
class ClassName {
  public:
    ~ClassName() {
      // Destructor code
    }
};
```

## Examples

### Basic Destructor

A basic destructor is defined to perform cleanup tasks, such as releasing dynamically allocated memory or closing file streams.

```cpp
#include <iostream>

class MyClass {
  public:
    // Constructor
    MyClass() {
      std::cout << "The constructor was executed!\n";
    }
    // Destructor
    ~MyClass() {
      std::cout << "The destructor was executed!\n";
    }
};

int main() {
  MyClass myObject; // Constructor is called here
  // Destructor will be called automatically when myObject goes out of scope
  return 0;
}
```

The output of the above code will be:

```shell
The constructor was executed!
The destructor was executed!
```

### Destructor with Dynamic Memory Cleanup

Destructors are especially useful when a class allocates memory dynamically, ensuring proper cleanup to avoid memory leaks.

```cpp
#include <iostream>

class DynamicArray {
  private:
    int* data;
    int size;

  public:
    // Constructor
    DynamicArray(int s) {
      size = s;
      data = new int[s]; // Allocate memory dynamically
      std::cout << "Array of size " << size << " created.\n";
    }
    // Destructor
    ~DynamicArray() {
      delete[] data; // Free allocated memory
      std::cout << "Array of size " << size << " destroyed.\n";
    }
};

int main() {
  DynamicArray arr(5); // Constructor is called
  // Destructor will be called automatically when arr goes out of scope
  return 0;
}
```

The output of the above code will be:

```shell
Array of size 5 created.
Array of size 5 destroyed.
```

## Destructor Definition Outside the Class

Like constructors, destructors can also be declared in the class and defined outside the class using the scope resolution operator.

```cpp
#include <iostream>

class Resource {
  private:
    int* value;

  public:
    // Constructor
    Resource(int v);
    // Destructor
    ~Resource();
};

// Define constructor outside the class
Resource::Resource(int v) {
  value = new int(v);
  std::cout << "Resource allocated with value " << *value << "\n";
}
// Define destructor outside the class

Resource::~Resource() {
  delete value;
  std::cout << "Resource deallocated.\n";
}

int main() {
  Resource res(10); // Constructor is called
  // Destructor will be called automatically when res goes out of scope
  return 0;
}
```

The output of the above code will be:

```shell
Resource allocated with value 10
Resource deallocated.
```

## Codebyte Example

The following example demonstrates a simple class that dynamically allocates memory for an integer and ensures proper cleanup using a destructor.

```codebyte/cpp
#include <iostream>

class Number {
  private:
    int* num;

  public:
    // Constructor
    Number(int n) {
      num = new int(n);
      std::cout << "Number " << *num << " created.\n";
    }

    // Destructor
    ~Number() {
      std::cout << "Number " << *num << " destroyed.\n";
      delete num;
    }
};

int main() {
  Number myNumber(42); // Constructor is called

  // Destructor will be called automatically when myNumber goes out of scope
  return 0;
}
```
