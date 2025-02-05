---
Title: 'Storage Classes'
Description: 'Define the lifetime, visibility, and scope of variables.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Storage'
  - 'Scope'
  - 'Objects'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, **storage classes** determine where and for how long a variable is stored in memory, as well as its default value and scope. C provides four storage classes:

1. `auto`
2. `register`
3. `static`
4. `extern`

Each storage class has a specific role in how variables behave in a program.

## 1. `auto` Storage Class

The `auto` storage class acts as the default class for local variables. Variables declared with `auto` are automatically created when the block of code (such as a function) is entered, and they are destroyed when the block is exited. These variables have automatic storage duration.

Here is how a variable can be declared using the `auto` storage class:

```pseudo
auto type variable_name;
```

Let's look at an example that demonstrates the behavior of the `auto` storage class:

```c
#include <stdio.h>

int main() {
  auto int num = 5; // 'auto' is optional here as it's the default for local variables
  printf("%d\n", num);  // Output: 5
  return 0;
}
```

In this case, the `num` variable is created and destroyed within the `main` function.

## 2. `register` Storage Class

The `register` storage class suggests the compiler that a variable can be stored in a CPU register instead of RAM. This can improve the speed of access, but it is just a suggestion and not a guarantee. The `register` keyword can only be used for local variables.

Here is how a variable can be declared using the `register` storage class:

```pseudo
register type variable_name;
```

Below is an example demonstrating the `register` storage class:

```c
#include <stdio.h>

int main() {
  register int count;
  for (count = 0; count < 5; count++) {
    printf("%d ", count);
  }
  return 0;
}
```

In this example, the `count` variable is suggested to be stored in a register for faster access during the loop.

## 3. `static` Storage Class

The `static` storage class is used to maintain the value of a variable across function calls. A static variable retains its value even after the function in which it is declared finishes executing. Additionally, static variables are initialized only once, and their lifetime is the entire program runtime.

Here is how a variable can be declared using the `static` storage class:

```pseudo
static type variable_name;
```

Let's see an example where a `static` variable retains its value across multiple function calls:

```c
#include <stdio.h>

void counter() {
  static int count = 0;  // This variable retains its value across function calls
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

In this example, the `count` variable retains its value across multiple calls to the `counter` function, and its value continues from where it was left off in the previous call.

## 4. `extern` Storage Class

The `extern` storage class helps declare a variable that is defined in another file or elsewhere in the program. It tells the compiler that the variable exists, but its definition will be provided later. It is used for sharing variables between files.

Here is how a variable can be declared using the `extern` storage class:

```pseudo
extern type variable_name;
```

Below is an example demonstrating how the `extern` storage class is used across files:

```c
// file1.c
#include <stdio.h>

int count = 10;  // Definition of count

void display() {
  printf("Count: %d\n", count);
}

// file2.c
extern int count;  // Declaration of count from file1.c

int main() {
  display();  // Output: Count: 10
  return 0;
}
```

In this example, the `extern` keyword in `file2.c` allows access to the `count` variable defined in `file1.c`.

Each of these storage classes provides different advantages, depending on how and where the variable is used in the program.

The table below provides a concise comparison of the four storage classes in C, outlining their lifetime, scope, initialization behavior, and typical use case:

| Storage Class | Lifetime               | Scope                          | Initialization               | Use Case                                     |
| ------------- | ---------------------- | ------------------------------ | ---------------------------- | -------------------------------------------- |
| `auto`        | Local function/block   | Local function/block           | Automatic                    | Default for local variables                  |
| `register`    | Local function/block   | Local function/block           | Automatic                    | Suggests variable to be stored in a register |
| `static`      | Entire program runtime | Local function/block or global | Zero (if not initialized)    | Retains value between function calls         |
| `extern`      | Entire program runtime | Global                         | External (defined elsewhere) | Access variables from other files            |
