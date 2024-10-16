---
Title: 'References'
Description: 'A reference variable is an alias for another object. It is created using the & sign. Two things to note: Anything done to the reference also happens to the original and aliases cannot be changed to alias something else.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'References'
  - 'Pointers'
  - 'Parameters'
  - 'Memory'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **reference** variable is an alias for another object. It is created using the `&` sign.

Two things to note:

- Anything done to the reference also happens to the original.
- Aliases cannot be changed to alias something else.

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

  std::cout << "A is " << a << "\n";
  std::cout << "B is " << b << "\n";
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
References can also be used with objects of classes. This allows modifying object properties directly by passing them as reference parameters.

```cpp
class Car {
public:
  int speed;
  Car(int spd) : speed(spd) {}

  void setSpeed(int &newSpeed) {
    speed = newSpeed;
  }
};

int main() {
  Car myCar(100);
  int newSpeed = 200;
  myCar.setSpeed(newSpeed);

  std::cout << "The new speed is: " << myCar.speed << "\n";
}
int triple(int const &i) {
  return i * 3;
}
```

## Reference vs Pointer
References and pointers are similar in their usage but have key differences:

References are aliases for variables and cannot be reseated (i.e., they cannot be made to refer to another object after initialization).
Pointers, on the other hand, store the memory address of variables and can be reassigned to point to different memory locations.

```cpp
int main() {
  int a = 10;
  int b = 20;

  int &ref = a;  // Reference to 'a'
  int *ptr = &a; // Pointer to 'a'

  ref = b; // This modifies 'a' (not the reference itself)

  ptr = &b; // This changes the pointer to point to 'b'

  std::cout << "Reference points to: " << a << "\n";  // 20
  std::cout << "Pointer now points to: " << *ptr << "\n";  // 20
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
    std::cout << myArr[i] << " ";
  }
}

```
