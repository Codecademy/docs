---
Title: 'Union'
Description: 'A user-defined data type that allows storing different data types in the same memory location.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Input'
  - 'Print'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **union** in C is a special data type that enables a single memory location to hold different types of variables at different times.

Unlike [structures](https://www.codecademy.com/resources/docs/c/structures), where each member has its own memory space, all members of a union share the same memory space, and only one member can hold a value at any given time.

## Syntax

```pseudo
union union_name {
  data_type member1;
  data_type member2;
  ...
  data_type memberN;
};
```

- `union_name`: The name given to the union.
- `data_type`: It can be any valid C data type (`int`, `float`, `char`, etc.).
- `member`: The names given to the union members.

## Memory Allocation

In C unions, memory is allocated based on the largest member. For example, if a union contains an integer (4 bytes) and a character (1 byte), the union will occupy 4 bytes. This is because all members share the same memory space – when one member is modified, it affects the memory of other members.

## Accessing Members

Union members are accessed using the dot (`.`) operator for regular union variables or the arrow (`->`) operator for pointers to unions. However, it is important to remember that only the last member assigned a value should be accessed. Accessing an uninitialized or overwritten member leads to undefined behavior due to shared memory.

```c
union Data {
    int number;
    char letter;
} data;

data.number = 65;
printf("%d\n", data.number);  // Prints 65
printf("%c\n", data.letter);  // Prints 'A' (ASCII 65)
```

Here, `data.number = 65` stores the integer 65 in the shared memory. Since `data.letter` uses the same memory, interpreting the value as a character (`char`) results in `'A'`, which is the ASCII representation of 65.

## Example

The following code demonstrates the use of a union in C, where different data types (integer, float, and string) share the same memory location:

```c
#include <stdio.h>
#include <string.h>

union Data {
  int i;
  float f;
  char str[20];
};

int main() {
  union Data data;

  data.i = 10;
  printf("Integer: %d\n", data.i);

  data.f = 3.14;
  printf("Float: %.2f\n", data.f);

  strcpy(data.str, "Hello");
  printf("String: %s\n", data.str);

  printf("Memory size: %lu\n", sizeof(data));
  return 0;
}
```

The output of the above code will be:

```shell
Integer: 10
Float: 3.14
String: Hello
Memory size: 20
```
