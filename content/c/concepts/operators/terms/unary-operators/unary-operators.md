
# Unary Operators in C

## Definition
Unary operators in C are operators that operate on a single operand. These operators perform various operations such as incrementing, decrementing, negation, and address manipulation.

## Syntax
The general syntax for unary operators in C is:

```c
operator operand;
// or
operand operator;
```

## Types of Unary Operators

### 1. Increment (`++`)
- Increases the value of the operand by 1.
- **Pre-increment (`++operand`)**: Increments before using the value.
- **Post-increment (`operand++`)**: Uses the value before incrementing.

#### Example:
```c
#include <stdio.h>

int main() {
    int x = 5;
    printf("Pre-increment: %d\n", ++x); // x becomes 6, prints 6
    printf("Post-increment: %d\n", x++); // prints 6, then x becomes 7
    printf("Final value: %d\n", x); // prints 7
    return 0;
}
```

### 2. Decrement (`--`)
- Decreases the value of the operand by 1.
- **Pre-decrement (`--operand`)**: Decrements before using the value.
- **Post-decrement (`operand--`)**: Uses the value before decrementing.

#### Example:
```c
#include <stdio.h>

int main() {
    int y = 10;
    printf("Pre-decrement: %d\n", --y); // y becomes 9, prints 9
    printf("Post-decrement: %d\n", y--); // prints 9, then y becomes 8
    printf("Final value: %d\n", y); // prints 8
    return 0;
}
```

### 3. Unary Plus (`+`)
- Returns the positive value of the operand (usually redundant in C).

#### Example:
```c
#include <stdio.h>

int main() {
    int a = -7;
    printf("Unary plus: %d\n", +a); // prints -7
    return 0;
}
```

### 4. Unary Minus (`-`)
- Negates the value of the operand.

#### Example:
```c
#include <stdio.h>

int main() {
    int b = 8;
    printf("Unary minus: %d\n", -b); // prints -8
    return 0;
}
```

### 5. Logical NOT (`!`)
- Returns 1 if the operand is 0, otherwise returns 0.

#### Example:
```c
#include <stdio.h>

int main() {
    int c = 0;
    printf("Logical NOT: %d\n", !c); // prints 1
    return 0;
}
```

### 6. Bitwise NOT (`~`)
- Inverts all bits of the operand (two's complement representation).

#### Example:
```c
#include <stdio.h>

int main() {
    int d = 5;
    printf("Bitwise NOT: %d\n", ~d); // prints -6
    return 0;
}
```

### 7. Address-of (`&`)
- Returns the memory address of the operand.

#### Example:
```c
#include <stdio.h>

int main() {
    int e = 15;
    printf("Address of e: %p\n", &e); // prints memory address of e
    return 0;
}
```

### 8. Dereference (`*`)
- Accesses the value stored at a memory address (pointer dereferencing).

#### Example:
```c
#include <stdio.h>

int main() {
    int f = 20;
    int *ptr = &f;
    printf("Value using pointer: %d\n", *ptr); // prints 20
    return 0;
}
```

## Conclusion
Unary operators in C are useful for performing operations on a single operand, such as incrementing, decrementing, negation, and pointer manipulation. Understanding these operators helps in writing efficient and concise C programs.
