---
Title: 'Public Access Modifier'
Description: 'Specifies that class members are accessible from any part of the program.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Access Modifiers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, access modifiers control how and where class members ([variables](https://www.codecademy.com/resources/docs/cpp/variables) and [methods](https://www.codecademy.com/resources/docs/cpp/methods)) can be accessed. The **`public`** keyword makes the associated members accessible from anywhere in the program. This means any code that has access to an instance (object) of the class can read, write, or invoke these members directly.

## Syntax

```pseudo
class ClassName {
public:
  // Public members
};
```

## Example

The following example demonstrates how to use the `public` keyword in a class definition:

```cpp
#include <iostream>

class MyClass {
public:
  // Public member variable
  int publicVar;

  void sayHello() {
    // Public member function
    std::cout << "Hello from MyClass!\n";
  }
};

int main() {
  MyClass obj;

  // Directly access the public variable
  obj.publicVar = 42;
  std::cout << "obj.publicVar = " << obj.publicVar << std::endl;

  // Call the public method
  obj.sayHello();

  return 0;
}
```

The above code will result in the following output:

```shell
obj.publicVar = 42
Hello from MyClass!
```

## Codebyte Example

Below is a runnable snippet showcasing `public` access in a simple C++ class:

```codebyte/cpp
#include <iostream>

class Person {
public:
    std::string name;

    void greet() {
        std::cout << "Hello, my name is " << name << "!\n";
    }
};

int main() {
    Person alice;
    alice.name = "Alice";
    alice.greet();

    return 0;
}
```
