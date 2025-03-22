---
Title: 'Rust Operators'
Description: 'Rust operators are symbols that perform operations on values or variables, guiding compilers and interpreters in computing specific mathematical or logical operations.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Operators'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Operators** are symbols that perform operations on values or variables (operands) which are crucial for instructing compilers and interpreters on specific mathematical or logical operations. Rust categorizes operators by their precedence and associativity, understanding the precedence and associativity of operators make it possible to write clear and predictable code, as operations are performed in the intended order.

Operator precedence dictates the order in which operations in an expression are evaluated. Operators with higher precedence are evaluated before those with lower precedence. In an instance, multiplication takes precedence over addition. Therefore this expression `3 + 2 × 3` is calculated as `3 + (2 × 3) = 9` not `(3 + 2) × 3 = 15`.

Below is a table of rust operators precedence, operators are listed top to bottom, in descending order:

| Precedence |            Operator             |                                                          Description                                                          |
| :--------: | :-----------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
|     19     |              Paths              |                                          The specific location of a field or element                                          |
|     18     |          Method calls           |                                     Performs specific operations or calculations on data                                      |
|     17     |        Field Expressions        |                                   Used to access individual fields or attributes of a data                                    |
|     16     | Function calls, Arrays indexing | Used to execute user-defined or built-in functions while array index allows you to access individual elements within an array |
|     15     |                ?                |                                                    Question mark operator                                                     |
|     14     |               -a                |                                                          Unary minus                                                          |
|            |                !                |                                                    Bitwise or Logical NOT                                                     |
|            |               \*                |                                                      Difference operator                                                      |
|            |                &                |                                                    Shared borrow operator                                                     |
|            |              &mut               |                                                        Mutable borrow                                                         |
|     13     |               as                |                                                     Type casting keyword                                                      |
|            |                :                |                                                         Multiple uses                                                         |
|     12     |             \* / %              |                                              Multiplication, Division, Remainder                                              |
|     11     |               + -               |                                                     Addition, Subtraction                                                     |
|     10     |              << >>              |                                              Bitwise left shift and right shift                                               |
|     9      |                &                |                                                    Bitwise or Logical AND                                                     |
|     8      |                ^                |                                                    Bitwise or Logical XOR                                                     |
|     7      |               \|                |                                                     Bitwise or Logical OR                                                     |
|     6      |             == !==              |                                                     Equality, Inequality                                                      |
|            |            < <= > >=            |                              Less than, Less than or equal, Greater than, Greater than or equal                               |
|     5      |               &&                |                                                          Logical AND                                                          |
|     4      |              \|\|               |                                                          Logical OR                                                           |
|     3      |             .. ..=              |                                          Range literal, Assignment by range literal                                           |
|     2      |                =                |                                                       Direct assignment                                                       |
|            |         += -= \*= /= %=         |                            Compound assignment by sum, difference, product, quotient and remainder                            |
|            |             <<= >>=             |                                   Compound assignment by Bitwise left shift and right shift                                   |
|            |           &= ^= \| =            |                                        Compound assignment by Bitwise AND, XOR and OR                                         |
|     1      |             return              |                                                       Return statement                                                        |
|            |              break              |                                                        Break statement                                                        |

Operators with higher precedence are evaluated before operators with lower precedence but when operators have the same precedence, the associativity of the operators determines the order in which the operation is performed.
Below is a table showing the associativity of rust operators:

| Operator            | Description                                                             | Associativity                                  |
| ------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- |
| `Field expressions` | Expressions                                                             | Left to Right                                  |
| `as`                | Type casting keyword                                                    |
| `:`                 | Operator (multiple uses)                                                |
| `* / %`             | Multiplication, Division, Remainder                                     |
| `<< >>`             | Bitwise left shift and right shift                                      |
| `&`                 | Bitwise or Logical AND                                                  |
| `^`                 | Bitwise or Logical XOR                                                  |
| `&&`                | Logical AND                                                             |
| `=`                 | Direct assignment                                                       | Right to Left                                  |
| `+= -= *= /= %=`    | Compound assignment by sum, difference, product, quotient and remainder |
| `<<= >>=`           | Compound assignment by Bitwise left shift and right shift               |
| `&= ^=` `           | =`                                                                      | Compound assignment by Bitwise AND, XOR and OR |

## Types of Operators

|           Category            | Operator |        Description        |
| :---------------------------: | :------: | :-----------------------: |
|     Arithmetic Operators      |    +     |         Addition          |
|                               |    -     |        Subtraction        |
|                               |    \*    |      Multiplication       |
|                               |    /     |         Division          |
|                               |    %     |          Modulo           |
|     Comparison Operators      |    ==    |        Is equal to        |
|                               |    !=    |       Not equal to        |
|                               |    >     |       Greater than        |
|                               |    <     |         Less than         |
|                               |    >=    | Greater than or equal to  |
|                               |    <=    |   Less than or equal to   |
|       Logical Operators       |    &&    |        Logical AND        |
|                               |  `\|\|`  |        Logical OR         |
|                               |    !     |        Logical NOT        |
|       Bitwise Operators       |    &     |        Bitwise AND        |
|                               |   `\|`   |        Bitwise OR         |
|                               |    ^     |        Bitwise XOR        |
|                               |    !     |        Bitwise NOT        |
|                               |    <<    |        Left shift         |
|                               |    >>    |        Right shift        |
| Compound Assignment Operators |    +=    |    Addition assignment    |
|                               |    -=    |  Subtraction assignment   |
|                               |   \*=    | Multiplication assignment |
|                               |    /=    |    Division assignment    |
|                               |    %=    |     Modulo assignment     |

## Example

Here is a simple code block that demonstrates the use of various operators in rust:

```rust
fn main() {
  let mut x = 8;
  let mut y = 4;
  let mut z = 10;

// Arithmetic Operators
  println!("x = {}, y = {}, z = {}\n", x, y, z);

  let result_add = x + y;
  println!("x + y = {}", result_add);

  let result_sub = x - y;
  println!("x - y = {}", result_sub);

  let result_mul = x * y;
  println!("x * y = {}", result_mul);

  let result_div = x / y;
  println!("x / y = {}", result_div);

  let result_modulo = x % y;
   println!("x % y = {}\n", result_modulo);

// Comparison Operators
  let is_equal = x == y;
  println!("{} == {} is {}", x, y, is_equal);

  let is_not_equal = x != y;
  println!("{} != {} is {}", x, y, is_not_equal);

  let is_greater = x > y;
  println!("{} > {} is {}", x, y, is_greater);

  let is_less = x < y;
  println!("{} < {} is {}", x, y, is_less);

  let is_greater_or_equal = x >= y;
  println!("{} >= {} is {}", x, y, is_greater_or_equal);

  let is_less_or_equal = x <= y;
  println!("{} <= {} is {}\n", x, y, is_less_or_equal);

// Logical Operators
  let result_1 = x < y && y < z;  // true
  println!("Result_1: {}", result_1);

  let result_2 = x > y || y > z;
  println!("Result_2: {}", result_2);

  let result_3 = x != y;
  println!("Result_3: {}\n", result_3);

// Bitwise Operators
  let result_and = x & y;
  println!("{} & {} = {}", x, y, result_and);

  let result_or = x | y;
  println!("{} | {} = {}", x, y, result_or);

  let result_xor = x ^ y;
  println!("{} ^ {} = {}", x, y, result_xor);

  let result_not = !x;
  println!("!{} = {}", x, result_not);

  let result_left_shift = x << 2;
  println!("{} << 2 = {}", x, result_left_shift);

  let result_right_shift = x >> 2;
   println!("{} >> 2 = {}\n", x, result_right_shift);

// Compound Assignment Operators
  x += y;
  println!("x += y: {}", x);

  x -= y;
  println!("x -= y: {}", x);

  x *= y;
  println!("x *= y: {}", x);

  x /= y;
  println!("x /= y: {}", x);

  x %= y;
  println!("x %= y: {}\n", x);

  // Reset x and y for bitwise operations
  x = 0b1010; // 10 in binary
  y = 0b1100; // 12 in binary

  x &= y;
  println!("x &= y: {:b}", x);
}
```

Here is the output of the above code:

```
x = 8, y = 4, z = 10

x + y = 12
x - y = 4
x * y = 32
x / y = 2
x % y = 0

8 == 4 is false
8 != 4 is true
8 > 4 is true
8 < 4 is false
8 >= 4 is true
8 <= 4 is false

Result_1: true
Result_2: false
Result_3: true

8 & 4 = 0
8 | 4 = 12
8 ^ 4 = 12
!8 = 0
8 << 2 = 32
8 >> 2 = 2

x += y: 12
x -= y: 8
x *= y: 32
x /= y: 8
x %= y: 0

x &= y: 0b1000
```
