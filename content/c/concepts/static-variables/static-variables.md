# Static Variables in C

## Introduction
In C, a `static` variable is a special type of variable that retains its value across function calls. Unlike local variables, which are recreated every time a function is called, static variables are initialized only once and maintain their value for the lifetime of the program. Static variables can be declared inside functions, blocks, or globally, but their behavior differs based on their scope.

Static variables are often used to store data that needs to persist, like counters or state information.

## Syntax
Here’s the basic syntax for declaring a static variable:

```c
static data_type variable_name = value;
```

* `static`: The keyword that makes the variable static.
* `data_type`: The type of the variable (e.g., `int`, `char`, etc.).
* `variable_name`: The name of the variable.
* `value`: (Optional) The initial value of the variable. If not explicitly initialized, static variables are automatically initialized to zero.

## Example
Here’s an example demonstrating the use of static variables:

```c
#include <stdio.h>

void counter() {
    static int count = 0; // Static variable retains its value
    count++;
    printf("Count: %d\n", count);
}

int main() {
    counter(); // Output: Count: 1
    counter(); // Output: Count: 2
    counter(); // Output: Count: 3
    return 0;
}
```

### Explanation:

* The variable `count` is declared as `static`. This means it is initialized only once (to 0) and keeps its value between function calls.
* Every time `counter()` is called, `count` increments and retains its updated value.