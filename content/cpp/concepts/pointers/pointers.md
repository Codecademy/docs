---
Title: 'Pointers'
Description: 'A pointer is a special type of variable that stores the address of another variable in it. A pointer variable points to the same data type and is created with the  operator. Then the address of another variable is stored in it.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Pointers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **pointer** is a special type of variable that stores the memory address of another variable.

## Creating Pointers

A pointer variable is declared using the indirection operator (`*`). This is a special unary operator that signals the program to store the memory address of another variable.

To get the memory address of a variable to store in the pointer variable, the address operator (`&`) is used. This signals the program to return the memory address of a variable. Memory addresses are usually prefixed with `0x`; this indicates that the following digits are in hexadecimal notation.

```cpp
std::string game = "Cricket";

std::cout << game << "\n";   // Output: Cricket
std::cout << &game << "\n";  // Output of game memory address: 0x6dfed4

// A pointer with the name ptr, that stores the address of game
std::string* ptr = &game;
std::cout << ptr << "\n";    // Output of pointer to game: 0x6dfed4
```

## Pointer Dereferencing

Dereferencing a pointer means getting the value that a pointer variable is pointing at.

Only a limited number of tasks can be accomplished solely using the memory address stored in pointers. To perform various operations, it's essential to access the actual value stored at the memory address, allowing for direct manipulation.

This can be done by dereferencing a pointer. The indirection operator (`*`) used for declaring a pointer can be used to dereference a pointer as well.

When a pointer is dereferenced, it tells the program to return the value contained in the specified memory address and then operations can be performed on it.

```cpp
std::string game = "Cricket";  // Variable declaration
std::string* ptr = &game;    // Pointer declaration

std::cout << *ptr << "\n"; // Output of value dereferenced from ptr: Cricket

*ptr = "Baseball";
std::cout << *ptr << "\n"; // Output of value dereferenced from ptr: Baseball
```

## Null Pointers

Similar to other data types, pointers can be declared without being assigned a value.

```cpp
 int *ptr;
```

This however is a cause of concern because if the program tries to dereference and manipulate a pointer that holds no memory address, it could lead to some unexpected behavior. To prevent this, `nullptr` is used. It is a special kind of value that prevents pointers from behaving unexpectedly when they hold no memory address.

```cpp
int *ptr = nullptr; // Assigns the pointer to a null pointer value

std::cout << *ptr << "\n"; // 0

std::string game = "Cricket";
*ptr = &game;

std::cout << *ptr << "\n"; // Cricket
```

## Pointers As Function Parameters

Pointers can also be passed into functions as arguments. This helps to manipulate values from within a function even though the value lives outside that function.

```cpp
void changeGame(std::string *game, std::string new_game) { // defining a pointer as a function parameter
  *game = new_game; // Dereference the pointer and change the game
}

std::string game = "Cricket";
changeGame(&game, "Baseball"); // Passing a pointer as a function argument

std::cout << game << "\n" // Baseball
```
