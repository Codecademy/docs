---
Title: 'Macros'
Description: 'A macro is a label defined in the source code that is replaced by its value by the preprocessor before compilation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Developer Tools'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **macro** is a label defined in the source code that is replaced by its value by the preprocessor before compilation. Macros are initialized with the `#define` preprocessor command and can be undefined with the `#undef` command.

There are two types of macros: [object](https://www.codecademy.com/resources/docs/cpp/objects)-like macros and [function](https://www.codecademy.com/resources/docs/cpp/functions)-like macros.

## Object-Like Macros

These macros are replaced by their value in the source code before compilation. Their primary purpose is to define constants to be used in the code.

> **Note**: Macro definitions are not followed by a semicolon `;`.

### Example

In the following example, `PI` is defined as an object-like macro:

```cpp
#include <iostream>

using namespace std;

#define PI 3.1416

int main() {
  float radius = 3;
  float area;

  area = PI * radius * radius;

  cout << "Area is " << area;

  return 0;
}
```

This results in the output:

```shell
Area is 28.2744
```

## Function-Like Macros

These macros behave like functions, in that they take arguments that are used in the replaced code.

> **Note**: When defining a function-like macro, there cannot be a space between the macro name and the opening parenthesis.

### Example

In the following example, `AREA` is defined as a function-like macro. Note that other macros can be used in defining a subsequent macro. The inner macro is replaced by its value before the outer macro is replaced.

```cpp
#include <iostream>

using namespace std;

#define PI 3.1416
#define AREA(r) r * r * PI

int main() {
  float radius = 5;
  float result;

  result = AREA(radius);

  cout << "Area is " << result;

  return 0;
}
```

This results in the output:

```shell
Area is 78.54
```

## Predefined Macros

C++ has a number of predefined macros, including the following:

- `__DATE__`: Current date formatted as `MMM DD YYYY`.
- `__TIME__`: Current time formatted as `HH:MM:SS`.
- `__FILE__`: Current filename.
- `__LINE__`: Current line number.

### Example

The following example uses the predefined macros mentioned above:

```cpp
#include <iostream>

using namespace std;

int main() {
  char file[] = __FILE__;
  char date[] = __DATE__;
  char time[] = __TIME__;
  int line = __LINE__;

  cout << "File name: " << file << "\n";
  cout << "Date: " << date << "\n";
  cout << "Time: " << time << "\n";
  cout << "Line number: " << line << "\n";
}
```

This results in the output:

```shell
File name: main.cpp
Date: Jun 25 2022
Time: 14:17:50
Line number: 9
```

## Undefining a Macro

Once defined, a macro can be undefined with the `#undef` command. Using the macro after that point will result in a compile error.

### Example

```cpp
#include <iostream>

using namespace std;

#define TEST 1

int main() {
  #ifdef TEST
    cout << "TEST defined\n";
  #else
    cout << "TEST undefined\n";
  #endif

  #undef TEST

  #ifdef TEST
    cout << "TEST defined\n";
  #else
    cout << "TEST undefined\n";
  #endif
}
```

This results in the output:

```shell
TEST defined
TEST undefined
```
