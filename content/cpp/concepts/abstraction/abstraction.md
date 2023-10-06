---
Title: 'Abstraction'
Description: 'Abstraction involves displaying only essential information while concealing underlying details.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Abstraction'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Abstraction** involves displaying only essential information while concealing underlying details.

Data abstraction refers to providing only data-related information to the user, hiding additional information that is not needed.

## Access Specifiers

Abstraction can be implemented by using access specifiers to control the accessibility of members within a [class](https://www.codecademy.com/resources/docs/cpp/classes):

- Members declared as `public` in a class can be accessed from anywhere in the program.
- Members declared as `private` in a class, can be accessed only from within the class. They are not allowed to be accessed from any part of the code outside the class.

```cpp
// C++ Program to demonstrate abstraction
#include <iostream>
using namespace std;

class implementAbstraction {
private:
  int a, b;

public:
  // Method to set values of
  // private members
  void set(int x, int y) {
    a = x;
    b = y;
  }

  void display() {
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
  }
};

int main() {
  implementAbstraction obj;
  obj.set(10, 20);
  obj.display();
  return 0;
}
```

The output will be:

```shell
a = 10
b = 20
```

## Advantages of Data Abstraction

Data abstraction has several advantages including:

- Simplicity: Helps the user to avoid writing the low-level code.
- Reusability: Avoids code duplication and increases reusability.
- Modularity: Allows for changes to the internal implementation of the class independently without affecting the user.
- Security: Enhances the security of an application or program by only providing essential details to the user and keeping sensitive information hidden.
- Readability: Reduces the complexity as well as the redundancy of the code, therefore increasing the readability.
