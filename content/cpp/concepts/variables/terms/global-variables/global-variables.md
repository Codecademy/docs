---
Title: 'Global Variables'
Description: 'Variables that are defined outside of all functions are called global variables.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Variables'
  - 'Functions'
  - 'Data Types'
  - 'Values'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, **global variables** are variables that are defined outside of all [functions](https://www.codecademy.com/resources/docs/cpp/functions) and are usually defined at the beginning of a program. They can be utilized anywhere in the program after their declaration.

## Syntax

```pseudo
data_type global_variable = value;
```

- `data_type`: Specifies the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the global variable.
- `global_variable`: The name of the global variable.
- `value` (Optional): The initial value assigned to the global variable.

## Example

The following example defines a global variable, modifies its value and prints the result:

```cpp
#include <iostream>
using namespace std;

// Define a global variable
int num = 9;

int main()
{
  // Modify the value of the global variable
  ++num;

  // Print the result
  cout << num << endl;

  return 0;
}
```

The above code produces the following output:

```shell
10
```

## Codebyte Example

The following codebyte example demonstrates the usage of global variables:

```codebyte/cpp
#include <iostream>
using namespace std;

// Define a global variable
int num = 15;

int main()
{
  // Modify the value of the global variable
  ++num;

  // Print the result
  cout << num << endl;

  return 0;
}
```
