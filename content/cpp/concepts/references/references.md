---
Title: 'References'
Description: 'A reference variable is an alias for another object.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Memory'
  - 'Parameters'
  - 'References'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **reference** variable is an alias for another object. It is created using the `&` sign.

Two things to note:

- Anything done to the reference also happens to the original.
- Aliases cannot be changed to alias or something else.

## Syntax

```pseudo
int &alias = varname;
```

## Pass-By-Reference

In C++, pass-by-reference refers to passing parameters to a function by using references.

It allows the ability to:

- Modify the value of the function arguments.
- Avoid making copies of a variable/object for performance reasons.

```cpp
void swap_num(int &i, int &j) {
  int temp = i;
  i = j;
  j = temp;
}

int main() {
  int a = 100;
  int b = 200;

  swap_num(a, b);

  std::cout << "A is " << a << "\n"; // Expected output: A is 200
  std::cout << "B is " << b << "\n"; // Expected output: B is 100
}
```

## `const` Reference

In C++, pass-by-reference with `const` can be used for a function where the parameter(s) won’t change inside the function.

This saves the computational cost of making a copy of the argument.

```cpp
int triple(int const &i) {
  return i * 3;
}
```

## References with Classes

References can also be used with objects of classes. This allows object properties to be modified directly by passing them as reference parameters.

```cpp
#include <iostream>

class Car {
 public:
  int speed;
  Car(int spd) : speed(spd) {}

  void setSpeed(int &newSpeed) { speed = newSpeed; }
};

int triple(const int &i) { return i * 3; }

int main() {
  Car myCar(100);
  int newSpeed = 200;
  myCar.setSpeed(newSpeed);

  std::cout << "The new speed is: " << myCar.speed << "\n";  // The new speed is: 200
  std::cout << "Triple the speed: " << triple(myCar.speed) << "\n";  // Triple the speed: 600

  return 0;
}
```

## Modifying Arrays Using References

Passing arrays by reference is also useful for avoiding unnecessary copies, especially for large datasets.

```cpp
void modifyArray(int (&arr)[5]) {
  for (int i = 0; i < 5; i++) {
    arr[i] = arr[i] * 2;
  }
}

int main() {
  int myArr[5] = {1, 2, 3, 4, 5};
  modifyArray(myArr);

  for (int i = 0; i < 5; i++) {
    std::cout << myArr[i] << " ";  // 2 4 6 8 10
  }
}
```
