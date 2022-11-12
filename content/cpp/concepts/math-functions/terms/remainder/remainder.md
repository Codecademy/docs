---
Title: 'remainder()' 
Description: 'Returns the floating-point remainder of numerator/denominator (rounded to the nearest number)' 
Subjects: 
  - 'Computer Science'
Tags: 
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent: 
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

The **remainder()** function returns the IEEE floating-point remainder resulting from the division of the arguments provided.

## Syntax

```pseudo
double remainder(double numerator, double denominator);
float remainder(float numerator, float denominator);
long double remainder(long double numerator, long double denominator);
double remainder(Type1 numerator, Type2 denominator); // additional overloads for other combination of arithmetic types
```
- the function returns remainder = numerator - n * denominator
- n is the result of numerator / denominator rounded down to the nearest integral value
- halfway cases are rounded toward the even number
- if remainder is zero, it will have the same sign as numerator

## Example

```cpp
#include <iostream>      
#include <cmath>

using namespace std;

int main ()
{
  cout << "Remainder of 7.3 / 2 is " << remainder(33.2, 13) << endl;
  cout << "Remainder of 9/ 2 is " << remainder(9, 2) << endl;
  return 0;
}
```

This produces the following output:

```shell
Remainder of 7.3 / 2 is -5.8
Remainder of 9/ 2 is 1
```

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```