---
Title: 'Local Variables'
Description: 'A variable defined inside a function body between braces is called a local variable.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **local variable** is a variable whose scope is limited to the function or block where it is defined. It exists only within that function and can only be accessed from there.

## Syntax

```pseudo
void local_variable(){
    int a_local_variable;
}
```

The variable `a_local_variable` is local to the `local_variable` function in which it is defined. It can only be accessed and used within that function. When the function `local_variable` exits, the life of `a_local_variable` ends, and its memory is released.

## Example

In the following example, the `a_local_variable` of integer data type is defined inside the function `local_variable()`:

```cpp
#include <iostream>
using namespace std;

void local_variable(){
    int a_local_variable = 1;
    cout <<a_local_variable;
}

int main()
{
    local_variable();
}
```

The output of the above code will be:

```shell
1
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
using namespace std;

void local(){
    int var = 0;
    cout<<var;
}

int main()
{
    local();
}
```
