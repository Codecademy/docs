---
Title: "Functions"
Subjects: 
  - "Code Foundations"
  - "Computer Science"
Tags:
  - "Functions"
  - "Arguments"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

Functions are blocks of code that can be run multiple times within a program. They are stored under a name similar to a variable and can be called using this name.

## Declaring a Function

A function is declared with the return type, the function name, parameter(s), and the code for it to run in curly brackets. 

```pseudo
return_type name(parameters) {
  // Code goes here
}
```

A function named `greet()` that prints a greeting to the console can be declared like this:

```c
void greet(void) {
  puts("Howdy!");
}
```

## Calling a Function

After declaring a function it can be used in a program by calling it. The sytax for this is the variables name followed by parenthesis.

```c
#include <stdio.h>

// Declaring the function

void greet(void) {
  puts("Howdy!");
}

// Calling the function inside main()

int main(void) {
  greet();
}
```

The output would be:

```shell
Howdy!
```

## Arguments 

Arguments are variables passed to the function when it is called that can be used in it. 

They are set inside of the functions parenthesis when it is declared in the same way as a variable, and values are passed to the function inside the parenthesis when it is called.

```c
#include <stdio.h>

void greet(char* name) {
  printf("Howdy %s!\n")
}

int main(void) {
  greet("John Doe"); // Output: Howdy John Doe!
  return 0;
}
```

## Returning Values

A function is also capable of returning a value back to were it was called using the `return` keyword. This is useful for computing values within a function. Notice that the word proceeding the function name indicates the type of value returned.

```c
#include <stdio.h>

int add(int a, int b) {
  return a + b;
}

int main(void) {
  int num = add(1, 1);
  printf("%d\n", num);
}
```

Here, the `add()` function has a return value of `int`.
