---
Title: 'Functors'
Description: 'A functor is an object or struct that can be called like a function by overloading the function call operator.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functors'
  - 'Classes'
  - 'Objects'
  - 'OOP'
  - 'Functions'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **functor** is an [object](https://www.codecademy.com/resources/docs/cpp/objects) or [structure](https://www.codecademy.com/resources/docs/cpp/structure) that can be called like a function by overloading the function call operator `()`. Public access must be granted to the overloading of the `()` operator in order to be used as intended. Functors can simplify tasks and improve efficiency in many cases.

## Syntax

For an object to be a functor, the class body must contain the following:

```pseudo
class MyClass {
  public:
    type operator()(...) {
      // Function body
    }
};
```

- `type` is the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) to be returned
- `operator()` overloads the function call operator `()` and `(...)` are the arguments required to execute the function body.

To use the functor, an instance of the class is created. Then, it is called with arguments passed in:

```pseudo
MyClass myclass;

myclass(...);
```

## Example

The following code overloads the function call operator `()` of class `Hello` in order to print `Hello world!` as many times as indicated by the argument `(int times)` allowing to create functors from such class:

```cpp
#include<iostream>
using namespace std;

class Hello {
  public:
    void operator()(int times){
      for (int i = 1; i <= times; i++)
        cout << "Hello world!" << endl;
      }
};

int main() {
  Hello salute;
  salute(3);

  return 0;
}
```

This results in the following output:

```shell
Hello world!
Hello world!
Hello world!
```
