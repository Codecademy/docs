---
Title: 'Pointers'
Description: 'A pointer is a special type of variable that stores the address of another variable in it. A pointer variable points to the same data type and is created with the  operator. Then the address of another variable is stored in it. cpp std::string game = "Cricket"; // A pointer with the name ptr, that stores the address of game std::string ptr = &game; std::cout << game << "\n"; // Output: Cricket'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Pointers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A pointer is a special type of variable that stores the address of another variable in it.

## Declaration and Initialization of Pointer variable

A pointer variable points to the same data type and is created with the `*` operator. Then the address of another variable is stored in it.

```cpp
std::string game = "Cricket";

// A pointer with the name ptr, that stores the address of game
std::string* ptr = &game;

std::cout << game << "\n";   // Output: Cricket
std::cout << &game << "\n";  // Output of game memory address: 0x6dfed4
std::cout << ptr << "\n";    // Output of pointer to game: 0x6dfed4
```

## Pointer Dereferencing

Dereferencing a pointer means getting the value that a pointer variable is pointing at.

The dereference operator `*` is used to get the value stored in the memory location pointed by the pointer:

```cpp
std::string game = "Cricket";  // Variable declaration
std::string* ptr = &game;    // Pointer declaration

std::cout << *ptr << "\n"; // Output of value dereferenced from ptr: Cricket
```
