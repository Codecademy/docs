---
Title: 'Static Variables'
Description: 'Variables that maintain their value throughout program execution'
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

**Static variables** in C are special variables that preserve their values between function calls and throughout the program's execution. Unlike regular variables, static variables maintain their state even after exiting the scope where they were declared. There are two main uses of the static keyword in C: to create variables with persistent values within functions, and to limit the visibility of variables or functions to a single file.

Static variables are particularly useful for maintaining state information across function calls without using global variables, implementing counters, and creating file-scoped variables inaccessible from other files.

## Syntax

The syntax for declaring static variables in C is:

```pseudo
static data_type variable_name = value;
```

### Parameters

Where **data_type** is any valid C [data type](https://www.codecademy.com/resources/docs/c/data-types) (int, char, float, etc.), **variable_name** is the identifier for the variable, and **value** is an optional initialization value.

## Example 1: Static Variable Inside a Function

Here's an example showing how static variables retain their values between function calls:

```c
#include <stdio.h>

void counter() {
  static int count = 0;  // Initialized only once
  count++;
  printf("Count value: %d\n", count);
}

int main() {
  counter();  // First call
  counter();  // Second call
  counter();  // Third call
  return 0;
}
```

This example demonstrates how the static variable `count` retains value between function calls. It's initialized to 0 only during the first call, and each subsequent call increases its value by 1.

This example results in the following output:

```shell
Count value: 1
Count value: 2
Count value: 3
```

## Example 2: Static Variable for File Scope

Here's an example showing how static can limit variable visibility to a single file:

```c
#include <stdio.h>

static int file_variable = 10;  // Only visible in this file

void display() {
  printf("Static file variable: %d\n", file_variable);
}

int main() {
  display();
  file_variable = 20;
  display();
  return 0;
}
```

This example shows a static variable declared at file scope. The variable `file_variable` is only accessible within this C file and cannot be accessed from other files, even with an `extern` declaration.

This example results in the following output:

```shell
Static file variable: 10
Static file variable: 20
```

## Codebyte Example: Comparing Static vs Non-Static Variables

This example demonstrates the fundamental difference between static and non-static variables by showing how static variables retain their values across multiple function calls. In contrast, regular variables are reinitialized each time.

```codebyte/c
#include <stdio.h>

int get_non_static() {
  int count = 0;
  count++;
  return count;
}

int get_static() {
  static int count = 0;
  count++;
  return count;
}

int main() {
  printf("Non-static calls: %d, %d, %d\n",
         get_non_static(), get_non_static(), get_non_static());

  printf("Static calls: %d, %d, %d\n",
         get_static(), get_static(), get_static());

  return 0;
}
```

## Frequently Asked Questions

### 1. What is static and dynamic in C?

In C, **static** refers to variables or functions with static storage duration for the entire program execution. They are allocated memory in the data segment rather than the stack. **Dynamic** typically refers to memory that is allocated at runtime using functions like [`malloc()`](https://www.codecademy.com/resources/docs/c/memory-management/malloc) and [`free()`](https://www.codecademy.com/resources/docs/c/memory-management/free), which exists in the heap memory until explicitly deallocated.

### 2. What is static in programming?

In C programming, the **static** keyword serves two primary purposes:

1. When applied to a variable inside a function, it preserves the variable's value between function calls.
2. When applied to global variables or functions, it restricts their visibility to the file where they are declared, implementing the concept of encapsulation at the file level.

### 3. What is static typing in C?

**Static typing** in C means that variable types are checked at compile time, not at runtime. This is a feature of the C language itself and is unrelated to the `static` keyword. The `static` keyword in C is about storage duration and scope, not about the type checking system. C is a statically typed language, which means variable types must be declared explicitly and cannot change during program execution.
