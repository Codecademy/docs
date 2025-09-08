---
Title: 'Pointers'
Description: 'A special type of variable that stores the memory address of another variable.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data'
  - 'Pointers'
  - 'Values'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

C++ **pointers** are a special type of [variable](https://www.codecademy.com/resources/docs/cpp/variables) that holds or stores the memory address of another variable. Instead of holding a direct value, pointers allow programmers to access and manipulate data indirectly, making them powerful tools for memory management, dynamic allocation, and efficient data handling.

## Creating C++ Pointers

C++ pointers are declared using the indirection [operator](https://www.codecademy.com/resources/docs/cpp/operators) (`*`). This is a special unary operator that signals the program to store the memory address of another variable.

To get the memory address of a variable, the address operator (`&`) is used. This signals the program to return the memory address of a variable. Memory addresses are usually prefixed with `0x`; indicating that the digits are in hexadecimal notation:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string game = "Cricket";
  std::cout << &game << "\n";
  std::string* ptr = &game;
  std::cout << ptr << "\n";
  return 0;
}
```

Here is the output:

```shell
0x7ffebd7d89d0
0x7ffebd7d89d0
```

## Dereferencing C++ Pointers

Dereferencing C++ pointers means getting the value that a pointer variable is pointing at.

Only a limited number of tasks can be accomplished solely using the memory address stored in pointers. To perform various operations, it's essential to access the actual value stored at the memory address, allowing for direct manipulation.

This can be done by dereferencing a pointer. The indirection operator (`*`) used for declaring a pointer can be used to dereference a pointer as well.

When a pointer is dereferenced, it tells the program to return the value contained in the specified memory address, on which operations can then be performed:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string game = "Cricket";
  std::string* ptr = &game;
  std::cout << *ptr << "\n";
  *ptr = "Baseball";
  std::cout << *ptr << "\n";
  return 0;
}
```

Here is the output:

```shell
Cricket
Baseball
```

## Null Pointers

Similar to other data types, C++ pointers can be declared without being assigned a value:

```cpp
int *ptr;
```

This however is a cause of concern because if the program tries to dereference and manipulate a pointer that holds no memory address, it could lead to some unexpected behavior. To prevent this, `nullptr` is used. It is a special kind of value that prevents pointers from behaving unexpectedly when they hold no memory address:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string game = "Cricket";
  std::string* ptr = &game;
  std::cout << ptr << "\n";
  std::cout << *ptr << "\n";
  return 0;
}
```

Here is the output:

```shell
0x7fffb7c77a90
Cricket
```

## C++ Pointers as Function Parameters

C++ pointers can also be passed into [functions](https://www.codecademy.com/resources/docs/cpp/functions) as arguments. This helps in manipulating values from within a function even though the value lives outside that function:

```cpp
#include <iostream>
#include <string>

void changeGame(std::string* game, const std::string& new_game) {
  *game = new_game;
}

int main() {
  std::string game = "Cricket";
  changeGame(&game, "Baseball");
  std::cout << game << "\n";
  return 0;
}
```

Here is the output:

```shell
Baseball
```

## Codebyte Example: Basic Usage of C++ Pointers

This codebyte example demonstrates the basic usage of C++ pointers:

```codebyte/cpp
#include <iostream>
using namespace std;

int main() {
  int num = 42;

  int *ptr = &num;

  cout << "Value of num: " << num << endl;
  cout << "Address of num: " << &num << endl;
  cout << "Pointer holds: " << ptr << endl;
  cout << "Value at pointer: " << *ptr << endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. How many types of pointers are in C++?

C++ supports several types of pointers, including:

- **Null pointer**: Points to nothing.
- **Void pointer**: A generic pointer that can point to any data type.
- **Wild pointer**: An uninitialized pointer with unpredictable behavior.
- **Dangling pointer**: Refers or points to a memory location that has been freed.
- **Constant pointer**: Cannot change the address it points to.
- **Pointer to a constant**: Cannot change the value being pointed to.
- **Function pointer**: A type of pointer that stores the address of a function.
- **Smart pointer**: Manages dynamic memory automatically (e.g., `unique_ptr`, `shared_ptr`).

### 2. Are C and C++ pointers the same?

Yes, the basic concept of pointers in C and C++ is the same. Both use pointers for memory manipulation, arrays, and function calls. However, C++ extends their utility by integrating pointers with object-oriented features like classes, inheritance, and polymorphism, and also provides smart pointers for safer memory management.

### 3. Why are pointers used in C++?

Pointers in C++ are used for several reasons:

- Dynamic memory allocation using `new` and `delete`.
- Efficient array and string handling.
- Passing large objects to functions without copying them.
- Implementing data structures (linked lists, trees, graphs).
- Function pointers for callbacks and event-driven programming.
- Object-oriented programming features like polymorphism (via virtual function tables).
