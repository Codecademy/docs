---
Title: 'Local Variables'
Description: 'A variable defined inside a function body between braces is called a local variable.'
Subjects:
  - 'Game Development'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Local Variable** is a variable whose scope is only limited to the function where it is defined. It exists and can only be accessed inside a function.

## Syntax

```pseudo
void local_variable(){
    int a_local_variable;
}
```

The variable `a_local_variable` is local to the `local_variable` function in which it is defined. It can only be used inside that function and the life of the variable ends when the function exits. 

## Example

In the following example, the `a_local_variable` of integer data type is defined inside the function `local_variable()`.

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