---
Title: 'Pointers'
Description: 'A pointer is a special type of variable that stores the address of another variable in it. A pointer variable points to the same data type and is created with the * operator. Then the address of another variable is stored in it.'
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

Declare a pointer using the indirection operator (`*`). Use the address operator (`&`) to get the memory address of a variable.

```cpp
std::string game = "Cricket";
std::string* ptr = &game;    // Pointer storing the address of game
std::cout << game << "\n";   // Output: Cricket
std::cout << &game << "\n";  // Output: 0x6dfed4 (example address)
```

## Pointer Dereferencing

Dereferencing a pointer means accessing the value stored at the memory address the pointer holds. This is done using the indirection operator (`*`), which can both declare and dereference a pointer. By dereferencing, you can directly manipulate the value at the memory address.

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

To prevent unexpected behavior when a pointer holds no memory address, use `nullptr`. It is a special value that ensures pointers do not behave unpredictably when uninitialized.

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
