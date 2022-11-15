---
Title: 'nan()'
Description: 'Returns a quiet NaN (Not-A-Number) value of type double.'
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

The **`nan()`** function in C++ returns a quiet `NaN` (not a number) value of type `double`.

## Syntax

```pseudo
nan(x)
```

The `nan()` function returns quiet NaN value.

## Example

The following example uses the `nan()` function to return a `NaN` value :

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  double number1 = 1.0;
  double number2 = nan("");

  if (isnan(number1)) 
  { 
    cout << "number1 is not a number"; 
  }

  if (isnan(number2)) 
  {
    cout << "number2 is not a number"; 
  }

  return 0;
}
```

This produces the following output:

```shell
number2 is not a number
```

## Codebyte Example

The following example is runnable and returns a quiet NaN value:

```codebyte/cpp
#include <iostream>
#include <cmath>
#include <cstring>

int main() {
  double result = nan("2");
  uint64_t dest;

  // copies variable src to dest
  // use <cstring> for memcpy()
  memcpy(&dest, &src, sizeof src);
  std::cout << "nan(\"2\") = " << result << " (" << hex << dest << ")\n";
}
```
