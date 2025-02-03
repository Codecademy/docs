---
Title: 'Scope'
Description: 'Scope defines the region in a program where a variable can be accessed.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Control Flow'
  - 'Memory'
  - 'Programming'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, [**scope**](https://www.codecademy.com/resources/docs/general/scope) defines the region of a program where a [variable](https://www.codecademy.com/resources/docs/c/variables) can be accessed. Variables in C are categorized into local and global scopes based on their accessibility.

## Local Scope

Variables declared inside a [function](https://www.codecademy.com/resources/docs/c/functions) or block have local scope, meaning they are accessible only within that function or block.

## Syntax for local scope

```pseudo
return_type function_name() {
    // Variable with local scope
    data_type variable_name = value;

    // Code that uses the variable
    ...
}
```

- `data_type`: Represents the type of the variable.
- `variable_name`: Name of the variable used in the code.
- `value`: Value assigned to the variable.

## Global Scope

Variables declared outside of any function have global scope and can be accessed and modified from any function within the program.

## Syntax for global scope

```pseudo

data_type variable_name = value;
// Global variable (declared outside any function)
return_type function_name() {
    // Code that can access the global variable
}
```

## Example

The example demonstrates variable scope in C, where `globalVar` has global scope (accessible throughout the program), while `localVar` has local scope (accessible only within `myFunction`):

```c
#include <stdio.h>
// Global variable
int globalVar = 100;
void myFunction() {
    // Local variable
    int localVar = 10;

    // Accessing both local and global variables
    printf("Local variable inside myFunction: %d\n", localVar);
    printf("Global variable inside myFunction: %d\n", globalVar);
}
int main() {
    // Accessing the global variable
    printf("Global variable inside main: %d\n", globalVar);

    // Calling the function which accesses both local and global variables
    myFunction();

    return 0;
}
```

The code above produces this output:

```shell
Global variable inside main: 100
Local variable inside myFunction: 10
Global variable inside myFunction: 100
```
