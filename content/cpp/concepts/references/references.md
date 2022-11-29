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
