---
Title: 'Static Variables'
Description: 'Static variables retain their value across function calls and exist for the lifetime of the program, providing persistent storage.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Variable Types'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, a **static variable** is a special type of variable that retains its value across function calls. Unlike local variables, which are recreated every time a function is called, static variables are initialized only once and maintain their value for the lifetime of the program. Static variables can be declared inside functions, blocks, or globally, but their behavior differs based on their scope.

Static variables are often used to store data that needs to persist, like counters or state information.

## Syntax

```pseudo
static data_type variable_name = value;
```

- `static`: A keyword that declares the variable as static, ensuring it retains its value across function calls and persists for the program's lifetime.
- `data_type`: Specifies the type of the variable (e.g., `int`, `float`, `char`).
- `variable_name`: The name of the variable, used to access it.
- `value` (Optional): The initial value assigned to the variable. If not provided, static variables are automatically initialized to zero.

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

The output of the above code will be:

```shell
Count: 1
Count: 2
Count: 3
```

The code demonstrates the use of a static variable `count` inside the `counter` function, which retains its value across multiple function calls. Each time `counter()` is called, `count` increments and prints its updated value, showcasing the persistence of static variables.
