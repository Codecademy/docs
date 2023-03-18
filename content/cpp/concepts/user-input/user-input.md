---
Title: 'User Input'
Description: 'std::cin, which stands for “character input”, reads user input from the keyboard.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Input'
  - 'Print'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

`std::cin`, which stands for **character input**, reads user input from the keyboard.

## Syntax

```pseudo
std::cin >> variable;
```

Here, the user can enter a value in the terminal, press <kbd>enter</kbd>, and that number will get stored in the variable.

## Example

In this example, the program will prompt the user to enter a number with `"Enter amount: "`. Then the user can enter a number, press <kbd>enter</kbd>, and that number will get stored in the variable `tip`.

```cpp
#include <iostream>

int main() {
  int tip = 0;

  std::cout << "Enter amount: ";
  std::cin >> tip;

  std::cout << "You gave a tip of $" << tip << "\n";
}
```
