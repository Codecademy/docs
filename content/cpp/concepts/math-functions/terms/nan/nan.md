---
Title: 'nan()'
Description: 'The nan() function in C++ returns a quiet NaN (Not-A-Number) value of type double.'
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

## Syntax

```pseudo
nan(x)
```

## Return value

The nan() function returns quiet NaN value.

## Example

The following example uses the `nan()` function to find the quiet NaN value :

```cpp
#include <iostream>
#include <cmath>
#include <cstring>

int main()
{
    double result = nan("1");
    uint64_t dest;
     // copies variable src to dest
     // use <cstring> for memcpy()
    memcpy(&dest, &src, sizeof src);
    std::cout << "nan(\"1\") = " << result << " (" << hex << dest << ")\n";

    return 0;
}
```

This produces the following output:

```shell
nan("1") = nan (7ff8000000000001)
```

## Codebyte Example

The following example is runnable and returns the quiet NaN value

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