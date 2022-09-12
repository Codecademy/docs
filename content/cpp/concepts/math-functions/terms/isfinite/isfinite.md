---
Title: 'isfinite()'
Description: 'Returns whether the argument is a finite value.'
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

Returns whether the argument is a finite value.

## Syntax

```cpp
isfinite(x)
```

## Example

Use `isfinite()` to check whether `5` is finite:

```cpp
#include <iostream>
#include <cmath>

int main() {
  int result;

  result = std::isfinite(5.0);

  if(result == 0){
    std::cout << "Not finite" << "\n";
  }
  else{
    std::cout << "Is finite" << "\n";
  }
  // Output: Is finite
}
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  int result;

  result = std::isfinite(1.0/0.0);

  if(result == 0){
    std::cout << "Not finite" << "\n";
  }
  else{
    std::cout << "Is finite" << "\n";
  }
}
```
