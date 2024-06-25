---
Title: 'Rust Operators'
Description: 'Rust operators handle arithmetic, comparison, logical, bitwise, assignment, and range operations, guiding compilers and interpreters in computing specific mathematical or logical operations.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Operators'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

## Rust Operators

In programming and computing, **operators** are crucial for instructing compilers and interpreters on specific mathematical or logical operations. Rust categorizes operators by their precedence and associativity. Understanding precedence and associativity makes it possible to write clear and predictable code, as operations are performed in the intended order.

Operator precedence dictates the order in which operations in an expression are evaluated. Operators with higher precedence are evaluated before those with lower precedence. In an instance, multiplication takes precedence over addition. Therefore this expression `3 + 2 × 3` is calculated as `3 + (2 × 3) = 9` not `(3 + 2) × 3 = 15`. The exponent operator takes precedence over both addition and multiplication.

Below is a table of rust operators precedence, operators are listed top to bottom, in descending order:

| Precedence | Operator | Description |
| --- | --- | --- |
| 19 | `Paths` | The specific location of a field or element. |
| 18 | `Method calls` | Performs specific operations or calculations on data. |
| 17 | `Field Expressions` | Used to access individual fields or attributes of a data. |
| 16 | `Function calls`, `Arrays indexing` | Used to execute user-defined or built-in functions while array index allows you to access individual elements within an array. |
| 15 | `?` | Question mark operator |
| 14 | `-a` | Unary minus |
| | `!` | Bitwise or Logical NOT |
| | `*` | Difference operator |
| | `&` | Shared borrow operator |
| | `&mut` | Mutable borrow |
| 13 | `as` | Type casting keyword |
| | `:` | Multiple uses |
| 12 | `* / %` | Multiplication, Division, Remainder |
| 11 | `+ -` | Addition, Subtraction |
| 10 | `<< >>` | Bitwise left shift and right shift |
| 9 | `&` | Bitwise or Logical AND |
| 8 | `^` | Bitwise or Logical XOR |
| 7 | `|` | Bitwise or Logical OR |
| 6 | `== !==` | Equality, Inequality |
| | `< <= > >=` | Less than, Less than or equal, Greater than, Greater than or eqaul |
| 5 | `&&` | Logical AND |
| 4 | `||` | Logical OR |
| 3 | `.. ..=` | Range literal, Assignment by range literal |
| 2 | `=` | Direct assignment |
| | `+= -= *= /= %=` | Compound assignment by sum, difference, product, quotient and remainder |
| | `<<= >>=` | Compound assignment by Bitwise left shift and right shift |
| | `&= ^=` `|=` | Compound assignment by Bitwise AND, XOR and OR |
| 1 | `return` | Return statement |
| | `break` | Break statement |

Operators with higher precedence are evaluated before operators with lower precedence but when operators have the same precedence, the associativity of the operators determines the order in which the operations are performed. Below is a table showing the associativity of rust operators:

| Operator | Description | Associativity |
| --- | --- | --- |
| `Field expressions` | Expressions | Left to Right | 
| `as` | 	Type casting keyword |
| `:` | Operator (multiple uses) |
| `* / %` | Multiplication, Division, Remainder |
| `<< >>` | Bitwise left shift and right shift |
| `&` | Bitwise or Logical AND |
| `^` | Bitwise or Logical XOR |
| `&&` | Logical AND |
| `=` | Direct assignment | Right to Left |
| `+= -= *= /= %=` | Compound assignment by sum, difference, product, quotient and remainder |
| `<<= >>=` | Compound assignment by Bitwise left shift and right shift |
| `&= ^=` `|=` | Compound assignment by Bitwise AND, XOR and OR |

## Types of Operators

| Category | Operator | Description |
| --- | --- | --- |
| Arithmetic Operators | `+` | Addition |
| | `-` | Subtraction |
| | `*` | Multiplication |
| | `/` | Division |
| | `%` | Modulo |
| Comparison Operators | `==` | Is equal to |
| | `!=` | Not equal to |
| | `>` | Greater than |
| | `<` | Less than |
| | `>=` | Greater than or equal to |
| | `<=` | Less than or equal to |
| Logical Operators | `&&` | Logical AND |
| | `||` | Logical OR |
| | `!` | Logical NOT |
| Bitwise Operators | `&` | Bitwise AND |
| | `|` | Bitwise OR |
| | `^` | Bitwise XOR |
| | `!` | Bitwise NOT |
| | `<<` | Left shift |
| | `>>` | Right shift |
| Compound Assignment Operators | `+=` | Addition assignment |
| | `-=` | Subtraction assignment |
| | `*=` | Multiplication assignment |
| | `/=` | Division assignment |
| | `%=` | Modulo assignment |

## Example

Here is a simple rust code block that demonstrates the use of various operators:

``` rust
fn main() {
  let x = 8;
  let y = 4;
  let z = 10

// Arithmetic Operators
  println!("x = {}, y = {}\n", x, y);
  let result_add = x + y;
  println!("x + y = {}", result_add);

  let result_sub = x - y;
  println!("x - y = {}", result_sub);

  let result_mul = x * y;
  println!("x * y = {}", result_mul);

  let result_div = x / y;
  println!("x / y = {}", result_div);

  let result_modulo = x % y;
  println!("x % y = {}", result_modulo);

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
  println!("{} >= {} is {}", a, b, is_greater_or_equal);

  let is_less_or_equal = x <= y;
  println!("{} <= {} is {}", x, y, is_less_or_equal);

// Logical Operators
    let result_1 = x < y && y < z;  // true
    println!("Result_1: {}", result_1);

    let result_2 = x > y || y > z;
    println!("Result_2: {}", result_2);

    let result_3 = x != y;
    println!("Result_3: {}", result_3);

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
  println!("{} >> 2 = {}", x, result_right_shift);

// Compound Assignment Operators
  x += y;  // x = x + y
  println!("x += y: {}", x);

  x -= y;  // x = x - y
  println!("x -= y: {}", x);

  x *= y;  // x = x * y
  println!("x *= y: {}", x);

  x /= y;  // x = x / y
  println!("x /= y: {}", x);

  x %= y;  // x = x % y
  println!("x %= y: {}", x);

  // Reset x and y for bitwise operations
  x = 0b1010; // 10 in binary
  y = 0b1100; // 12 in binary

  x &= y;  // x = x & y
  println!("x &= y: {:b}", x);
}
```

The above code will give the following output:

```
x = 8, y = 4, z = 10
x + y = 12
x - y = 4
x * y = 32
x / y = 2
x % y = 0

8 == 10 is false
8 != 10 is true
8 > 10 is false
8 < 10 is true
8 >= 10 is false
8 <= 10 is true

Result_1: true
Result_2: false
Result_3: true

x & y = 1000
x | y = 1110
x ^ y = 0110
!1100 = 11111111111111111111111111110011
x << 2 = 110000
x >> 2 = 0b0011

x += y: 15
x -= y: 10
x *= y: 50
x /= y: 10
x %= y: 0
x &= y: 8
```

In conclusion, Rust operators play a crucial role in functionality and efficiency, providing a wide array of operations that cater to various programming needs. From arithmetic and comparison to logical and bitwise operators, they ensure developers can perform complex calculations, make decisions, and manipulate data effectively. Understanding and utilizing these operators proficiently empowers developers to write more efficient and readable code.
