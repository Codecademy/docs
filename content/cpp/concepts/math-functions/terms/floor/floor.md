---
Title: 'floor()'

Description: 'Returns the integer value, less than or equal to the given value.'

Subjects:
  - 'Computer Science'

Tags:
  - 'Arithmetic'
  - 'Functions'

CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'

---

The **'floor()'** function returns the integer value, less than or equal to the given value.


## Syntax

The cmath library is required at the top of the file.

```psuedo
std::floor(n);
```
Argument must be a double / float / long double, the return value will be the same type.

## Syntax II

The cmath library is required at the top of the file.
Utilising it with 'using namespace std' declaration, this allows the use of 'floor()' without the 'std::' prefix.

```psuedo
floor(n);
```
Argument must be a double / float / long double, the return value will be the same type.

## Example

The following example demonstrates how to use the 'std::floor()' function:

```cpp
#include <iostream>
#include <cmath>

int main() {}
  double n = 103.523;
  double result;

  result = std::floor(n);

  std::cout << "The result is " << result << std::endl;
}
```
The example will result in the following output:

```shell
The result is 103
```

The following example demonstrates how to use the 'floor()' function:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double n = 103.523;
  double result;

  result = floor(n);

  cout << "The result is " << result << endl;
}
```
The example will result in the following output:

```shell
The result is 103
```

## Codebyte Example

Use floor() to round down double '59.7954':

Optional: You can add 'using namespace std' declaration to avoid using the 'std::' prefix.

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 59.7954;
  double result;

  result = std::floor(n);

  std::cout << "The result is " << result << std::endl;
}
```
