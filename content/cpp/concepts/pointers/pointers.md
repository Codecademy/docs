---
Title: "Pointers"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Pointers"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

A pointer is a special type of variable that stores the address of another variable in it. 

## Declaration and Initialization of Pointer variable

A pointer variable points to the same data type and is created with the `*` operator. Then the address of another variable is stored in it.

```cpp
string game = "Cricket"; // A game variable of type string

// A pointer variable, with the name ptr, that stores the address of game
string* ptr = &game;    

cout << game << "\n"; // Output: Cricket

cout << &game << "\n"; // // Output of game memory address: 0x6dfed4

cout << ptr << "\n"; // Output of pointer to game: 0x6dfed4
```

## Pointer Dereferencing

Dereferencing a pointer means getting the value that a pointer variable is pointing at.

The dereference operator `*` is used to get the value stored in the memory location pointed by the pointer:

```cpp
string game = "Cricket";  // Variable declaration
string* ptr = &game;    // Pointer declaration

cout << *ptr << "\n"; // Output of value dereferenced from ptr: Cricket
```
