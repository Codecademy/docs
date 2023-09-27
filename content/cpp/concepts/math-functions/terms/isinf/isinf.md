---
Title: 'isinf()'
Description: 'Returns a value indicating whether or not the argument is an infinite value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isinf()`** function returns a value indicating whether or not the argument is an infinite value.

## Syntax

```pseudo
isinf(x)
```

The `x` parameter is a floating-point value. If `x` is infinite, the `isinf()` function will return a non-zero value for `true`. Otherwise, it will return zero for `false`.

Examples of positive or negative infinite values include division by zero.

## Example

The following example uses the `isinf()` function to check whether `1.0` is infinite:

```cpp
#include <iostream>
#include <cmath>

int main() {
  int result;

  result = std::isinf(1.0);

  if (result == 0) {
    std::cout << "Not infinite" << "\n";
  }
  else {
    std::cout << "Is infinite" << "\n";
  }
}
```

This produces the following output:

```shell
Not infinite
```

## Codebyte Example

The following example is runnable and prints a message based on whether the `isinf()` function indicates a given value is finite or infinite:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  int result, result2;

  result = std::isinf(1.0/2.0);
  result2 = std::isinf(1.0/0.0);

  if (result == 0) {
    std::cout << "Result: Not infinite" << "\n";
  }
  else {
    std::cout << "Result: Is infinite" << "\n";
  }

  if (result2 == 0) {
    std::cout << "Result2: Not infinite" << "\n";
  }
  else {
    std::cout << "Result2: Is infinite" << "\n";
  }
}
```
