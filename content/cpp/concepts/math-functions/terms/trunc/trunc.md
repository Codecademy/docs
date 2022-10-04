---
Title: 'trunc()' 
Description: 'Returns the integral part of the argument.' 
Subjects:
  - 'Computer Science'

Tags: 
  - 'Functions'
  - 'Arithmetic'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

The **`trunc()`** function returns the integral part of the argument. It rounds the argument towards zero and returns the nearest integer that is not greater in magnitude than the argument.

## Syntax

```cpp
std::trunc(x);
```

## Example

```cpp
#include <iostream>
#include <cmath>

int main() {
    double x = 3.14159;
    double result;

    result = std::trunc(x);

    std::cout << "trunc(" << x << ") = " << result << "\n";
    // Output: trunc(3.14159) = 3
}
```

## Codebyte Example (if applicable)

Use `trunc()` to round the double `12.3456` down to the nearest integer by removing the decimal part:


```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
    double n = 12.3456;
    double result;

    result = std::trunc(n);

    std::cout << "The result is " << result << "!\n";
    // Output: The result is 12!
}
```
