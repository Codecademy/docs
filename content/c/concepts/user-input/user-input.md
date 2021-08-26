---
Title: "User Input"
Subjects:
  - "Computer Science"
  - "Code Foundations"
Tags: 
  - "Input"
  - "Print"
  - "Variables"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

The `scanf()` function, which stands for “scan format", reads a formatted string from the the standard input stream, which is usually the user keyboard.

## Syntax

```pseudo
scanf("formatted string", &variable);  
```

Here, the user can enter a value in the terminal, press <kbd>Enter</kbd>, and that number will get stored in the `pinNumber` variable.

```c
scanf("%d", &pinNumber);  
```

**Note:** There's an ampersand `&` in front of the variable names that are `scanf()`'s arguments. The program will crash if there's a missing `&` sign.

## Example

In this example, the program will prompt the user to enter a number with `"Enter amount: "`. Then the user can enter a number in the terminal, press <kbd>Enter</kbd>, and the number will get stored in the variable `tip`.

```c
#include <stdio.h>

int main() {
  float tip = 0.0;
  
  printf("Enter tip amount: ");
  scanf("%f", &tip);  

  printf("You gave a tip of $%.2f", tip);
  
  return 0;
}
```
