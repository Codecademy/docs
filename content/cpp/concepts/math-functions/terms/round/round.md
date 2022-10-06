---
Title: 'round()'
Description: 'Returns the integer that is nearest to the argument, with halfway cases rounded away from zero.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`round()`** function returns the integer that is closest to the argument, with halfway cases rounded away from zero.

## Syntax

```pseudo
round(num);
```

The `num` parameter must be a `double`,`float`, or `long double`. The return value will be an integer.
In `halfway case` the number get round-off to the next closest integer.

## Example 1

```cpp
double num = 4.5;
double result;

result = std::round(num);

std::cout << "The result is " << result << "!\n";
// Output: The result is 5!

```


## Example 2

```cpp
double num = 9.23;
double result;

result = std::round(num);

std::cout << "The result is " << result << "!\n";
// Output: The result is 9!
```

## Codebyte Example

The following example is runnable and rounds the halfway case away from zero:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double num = 10.89;
  double result;

  result = std::round(num);

  std::cout << "The result is " << result << "!\n";
  // Output: The result is 11!
}
```
