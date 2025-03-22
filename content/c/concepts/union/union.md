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

A **union** in C is a user-defined data type that allows storing different data types in the same memory location.

Unlike [structures](https://www.codecademy.com/resources/docs/c/structures), which allocate separate memory for each member, a union uses the same memory block for all its members. This means that at any given time, only one member of a union can hold a value, making unions memory-efficient but requiring careful handling.

## Syntax

```pseudo
union union_name {
  data_type member1;
  data_type member2;
  ...
  data_type memberN;
};
```

**Parameters:**

Unions do not take parameters directly, but their members can be of different data types:

- `union_name`: The name given to the union.
- `data_type`: It can be any valid C data type (`int`, `float`, `char`, etc.).
- `member`: The names given to the union members.

**Return Value:**

A union does not hold a value itself, but its members can hold values. The memory is shared among all members, so assigning a value to one member overwrites the value of the others.

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

## Example - Memory Optimization in Unions

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

## Difference Between Structure and Union

Structures and unions are both user-defined data types in C, but they serve different purposes. The following table highlights the key differences between structures and unions, making it easier to choose the appropriate data type based on memory usage and accessibility requirements.

| Feature               | Structure                                       | Union                                         |
| --------------------- | ----------------------------------------------- | --------------------------------------------- |
| **Memory Allocation** | Allocates memory for all members                | Shares memory among members                   |
| **Accessibility**     | All members can hold values simultaneously      | Only one member holds a value at a time       |
| **Use Case**          | Suitable when all data fields need to be stored | Suitable for memory-efficient operations      |
| **Data Integrity**    | Stores all data without overwriting             | Only the last assigned value is retained      |
| **Memory Usage**      | Uses more memory as all members exist           | Uses less memory as only one member is active |
