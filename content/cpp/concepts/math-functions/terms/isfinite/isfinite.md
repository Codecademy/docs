---
Title: 'isfinite()'
Description: 'Returns whether the argument is a finite value.'
Subjects:
  - 'Computer Science'
Tags: 
  - 'Functions'
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
  int x = 5;
  int result;

  result = std::isfinite(x);
  
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
  int x = 2;
  int result;

  result = std::isfinite(x);
  
  if(result == 0){
    std::cout << "Not finite" << "\n";
  }
  else{
    std::cout << "Is finite" << "\n";
  }
}

```
