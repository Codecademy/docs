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

## Declaration and Initialization of Pointer variable

A pointer variable is declared using the indirection operator (`*`). This is a special unary operator that signals the program to store the memory address of another variable.

To get the memory address of a variable to store in the pointer variable, the address operator (`&`) is used. This signals the program to return the memory address of a variable. Memory addresses are usually prefixed with `0x` this just indicates that the following digits are in hexadecimal notation.

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

We cannot perform a lot of useful operations using just the memory address that pointers store. Instead, we need a way to get the value stored in the memory address so we can manipulate it directly.
Dereferencing a pointer helps us do this. We dereference a pointer with the indirection operator (`*`) as well.
When we dereference a pointer, we tell the program to give us the value contained in the specified memory address and then we can perform operations on it.

```cpp
std::string game = "Cricket";  // Variable declaration
std::string* ptr = &game;    // Pointer declaration

std::cout << *ptr << "\n"; // Output of value dereferenced from ptr: Cricket

*ptr = "Baseball";
std::cout << *ptr << "\n"; // Output of value dereferenced from ptr: Baseball
```

## Null Poiners

Just like with other data types, pointers can be declared without being assigned a value.

```cpp

 int *ptr;

```

This however is a cause of concern because if we try to dereference and manipulate a pointer that holds no memory address, it could lead to some unexpected behaviour. To prevent this we use `nullptr` which is a special kind of value that prevents our pointers from behaving unexpectedly when they hold no memory address.

```cpp

int *ptr = nullptr; // assings a null pointer value to our pointer

std::cout << *ptr << "\n"; // 0

std::string game = "Cricket";
*ptr = &game;

std::cout << *ptr << "\n"; // Cricket

```

## Pointers as Function Parameters

We can also pass pointers into functions as arguments. This helps us manipulate values from within a function even though the value lives outside that function

```cpp

void changeGame(std::string *game, std::string new_game) { // defining a pointer as a function parameter
  *game = new_game; // derefernce the pointer and change the game
}

std::string game = "Cricket";
changeGame(&game, "Baseball"); // passing a pointer as a function argument


std::cout << game << "\n" // Baseball
```
