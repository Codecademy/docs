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

A pointer is a speacial type variable that stores address of another variable in it. 

## Declaration and Initialization of Pointer variable

A pointer variable points to the same data type and is created with the `*` operator. Then the address of another variable is stored in it.

```cpp
string game = "Cricket";  // A game variable of type string
string* ptr = &game;    // A pointer variable, with the name ptr, that stores the address of game

// Output the value of game (Cricket)
cout << game << "\n";

// Output the memory address of game (0x6dfed4)
cout << &game << "\n";

// Output the memory address of game with the pointer (0x6dfed4)
cout << ptr << "\n";
```

## Pointer Dereferencing

Dereferencing a pointer means getting the value or address that is stored in the memory location pointed by the pointer.

The dereference operator `*` is used to get the value stored in the memory location pointed by the pointer:

```cpp
string game = "Cricket";  // Variable declaration
string* ptr = &game;    // Pointer declaration

// Dereference: Output the value of game with the pointer (Cricket)
cout << *ptr << "\n";
```
