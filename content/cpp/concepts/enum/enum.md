---
Title: 'Enums'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Enum'
  - 'Data Types'
  - 'Arrays'
  - 'Vectors'
  - 'Pointers'
  - 'Memory'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, an enumeration (enum) is a user defined type where we specify a set of values for a variable and the variable can only take one out of a small set of possible values.

## Syntax

The keyword `enum` is used to define an enumeration.

```cpp
enum name {const1, const2, ...};
```

Here's an example:

```cpp
enum day {sun, mon, tue, wed, thu, fri, sat};
```

- `sun` would have the value 0
- `mon` would have the value 1
- `tue` would have the value 2
- `wed` would have the value 3
- `thu` would have the value 4
- `fri` would have the value 5
- `sat` would have the value 6

Here'a another example where one of the constants is assigned a value:

```cpp
enum grade {freshman=9, sophomore, junior, senior};
```

The enumerator `freshman` is assigned the value 9. Subsequent enumerators, if they are not given an explicit value, receive the value of the previous enumerator plus one.

So here:

- `freshman` would have the value 9
- `sophomore` would have the value 10
- `junior` would have the value 11
- `senior` would have the value 12

## Codebyte Example

```codebyte/cpp
#include <iostream>

int main() {

  enum quarter_one {
    january=1,
    february,
    march
  };

  int month = february;

  std::cout << month;
}
```
