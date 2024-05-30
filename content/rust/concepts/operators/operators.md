---
Title: 'Rust Operators'
Description: 'Operators in rust perform these operations; arithmetics, comparisons, logical, bitwise, assignment, and range operations on data, instructing compilers and interpreters how to compute specific mathematical or logical operations. 
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

In the world of programming and computing, **operators** play a crucial role in instructing compilers and interpreters how to compute specific mathematical or logical operations. Rust categorizes operators by their precedence and associativity, operators are standard symbols used for the purpose of logical and arithmetic operations performed on values and variables. Understanding Rust's operator precedence and associativity helps you write clear and predictable code by ensuring operations are performed in the intended order.

In this article, we will look into the precedence of operators and the different types of Rust operators and how they are used in code blocks.

Operator precedence determines the order in which a program evaluates different operations in an expression, as operators with higher precedence get evaluated before those with lower precedence. 
For example, multiplication has higher precedence than addition. Thus, the expression 3 + 2 × 3 is interpreted to have the value 3 + (2 × 3) = 9, and not (3 + 2) × 3 = 15. When exponent is used in the expression, it has precedence over both addition and multiplication.

The following table lists the precedence of Rust operators. Operators are listed top to bottom, in descending order:

| Precedence | Operator | Description |
| --- | --- | --- |
| 19 | Paths | |
| 18 | Method calls | |
| 17 | Field Expressions | |
| 16 | Function calls, Arrays indexing | |
| 15 | `?` | Question mark operator |
| 14 | `-a` | Unary minus |
|    | `!` | Bitwise or Logical NOT |
|    | `*` | Difference operator |
|    | `&` | Shared borrow operator |
|    | `&mut` | Mutable borrow |
| 13 | `as` | Type casting keyword |
|    | `:` | Multiple uses |
| 12 | `* / %` | Multiplication, Division, Remainder |
| 11 | `+ -` | Addition, Subtraction |
| 10 | `<< >>` | Bitwise left shift and right shift |
| 9 | `&` | Bitwise or Logical AND |
| 8 | `^` | Bitwise or Logical XOR |
| 7 | `|` | Bitwise or Logical OR |
| 6 | `== !==` | Equality, Inequality |
|   | `< <= > >=` | Less than, Less than or equal, Greater than, Greater than or eqaul |
| 5 | `&&` | Logical AND |
| 4 | `||` | Logical OR |
| 3 | `.. ..=` | Range literal, Assignment by range literal |
| 2 | `=` | Direct assignment |
|   | `+= -= *= /= %=` | Compound assignment by sum, difference, product, quotient and remainder |
|   | `<<= >>=` | Compound assignment by Bitwise left shift and right shift |
|   | `&= ^=` |= | Compound assignment by Bitwise AND, XOR and OR |
| 1 | `return` | Return statement |
|   | `break` | Break statement |

Operators with higher precedence are evaluated before operators with lower precedence but when operators have the same precedence, the associativity of the operators determines the order in which the operations are performed.

Table of Associativity:

| Operator | Description | Associativity |
| --- | --- | --- |
| Field expressions | Expressions | Left to Right | 
| as | 	Type casting keyword | |
| `:` | Operator (multiple uses) | |
| `* / %` | Multiplication, Division, Remainder | |
| `<< >>` | Bitwise left shift and right shift | |
| `&` | Bitwise or Logical AND | |
| `^` | Bitwise or Logical XOR | |
| `&&` | Logical AND | |
| `=` | Direct assignment | Right to Left |
| `+=  -=  *=  /=  %=` | Compound assignment by sum, difference, product, quotient and remainder | |
| `<<=  >>=` | Compound assignment by Bitwise left shift and right shift | |
| `&=  ^=  |=` | Compound assignment by Bitwise AND, XOR and OR | |

Here are a few examples that illustrate operator associativity:

- Addition and Subtraction (Left-to-Right). 
  ``` rust
  let result = 7 + 4 - 2;  // interpreted as (7 + 4) - 2`
  ```
- Assignment Operators (Right-to-Left).
  ``` rust
  let mut x = 7;
  let mut y = 14;
  x = y = 21;  // Interpreted as a = (b = 21), so both a and b become 21
  ```
- Unary Operators (Right-to-Left).
  ``` rust
    let a = 7;
  let b = -a;  // Unary minus is applied to a
  let c = !true;  // Logical NOT applied to true
  ```

The following are the types of operators in Rust:

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Bitwise Operators
- Compound Assignment Operators

## Arithmetic Operators

Rust supports several arithmetic operators for performing basic mathematical arithmetic operations like addition, subtraction, multiplication, and division.
Below is a code block example of Rust's arithmetic operators that perform and print the result of various calculations:

``` rust
fn main() {
  let a = 8;
  let b = 4;

  println!("a = {}, b = {}\n", a, b);

  // Addition
  let result_add = a + b;
  println!("a + b = {}", result_add);

  // Subtraction
  let result_sub = a - b;
  println!("a - b = {}", result_sub);

  // Multiplication
  let result_mul = a * b;
  println!("a * b = {}", result_mul);

  // Division
  let result_div = a / b;
  println!("a / b = {}", result_div);

  // Return remainder
  let result_modulo = a % b;
  println!("a % b = {}", result_modulo);
}
```

Here is the output of the arithmetic operator code block:
```
a = 8, b = 4

a + b = 12
a - b = 4
a * b = 32
a / b = 2
a % b = 0
```

## Coparison Operators

Rust provides several comparison operators that allow you to compare values. These operators return a boolean value (true or false), if the values match, true is returned; if they do not match, the operators return false. This immediate feedback helps in making decisions and controlling the flow of the program based on the comparisons. 

## Example

``` rust
fn main() {
  let x = 8;
  let y = 10;

  // Equal to
  let is_equal = x == y;
  println!("{} == {} is {}", x, y, is_equal);

  // Not equal to
  let is_not_equal = x != y;
  println!("{} != {} is {}", x, y, is_not_equal);

  // Greater than
  let is_greater = x > y;
  println!("{} > {} is {}", x, y, is_greater);

  // Less than
  let is_less = x < y;
  println!("{} < {} is {}", x, y, is_less);

  // Greater than or equal to
  let is_greater_or_equal = x >= y;
  println!("{} >= {} is {}", a, b, is_greater_or_equal);

  // Less than or equal to
  let is_less_or_equal = x <= y;
  println!("{} <= {} is {}", x, y, is_less_or_equal);
}
```

Here is the output of comparison operators code block:
``` rust
8 == 10 is false
8 != 10 is true
8 > 10 is false
8 < 10 is true
8 >= 10 is false
8 <= 10 is true
```
Understanding and using comparison operators correctly is essential in programming to make decisions based on conditions. Rust's comparison operators provide a straightforward way to compare values and control the flow of your program.

## Logical Operators

Logical operators are used to combine or modify two or more boolean expressions, and returns true only when all conditions are true, otherwise returns false.
Rust provides three main logical operators:

- `&&`
    Logical AND. Returns true when all conditions are true.
- `||`
    Logical OR. Returns true when any condition is true.
- `!`
    Logical NOT. Returns true when the given condition is not true.

## Example

``` rust
fn main() {
    let x = 12;
    let y = 16;
    let z = 18;

    // Check if x is less than y and, if y is less than z
    let result = x < y && y < z;  // true
    println!("Result_1: {}", result_1);

    // Check if x is greater than y or, if y is greater than z
    let result_2 = x > y || y > z;  // false
    println!("Result_2: {}", result_2);

    // Check if x is not equal to y
    let result3 = x != y;  // true
    println!("Result_3: {}", result_3);
}
```

Below is the result from the logical operators code block above:
``` rust
Result_1: true
Result_2: false
Result_3: true
```

## Bitwise Operators

Bitwise operators in Rust perform operations at binary level, manipulating the individual bits of integer values. Bitwise operations involves working with individual bits, which are the smallest units of data in a computer. 
Each bit has a single binary value: 0 or 1.

List of available bitwise operators in Rust:
- `&`
    Bitwise AND. It performs a Boolean AND operation on each bit of its integer arguments.
- `|`
    Bitwise OR. It performs a Boolean OR operation on each bit of its integer arguments.
- `^`
    Bitwise XOR. It performs a Boolean exclusive OR operation on each bit of its integer arguments.
- `!`
    Bitwise NOT. It is a unary operator and operates by reversing all the bits in the operand.
- `>>`
    Bitwise Rigth shift. The left operand’s value is moved right by the number of bits specified by the right operand.
- `<<`
  Bitwise Left shift. It moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros. 

These operators are useful in low-level programming, such as when you need to manipulate individual bits of data, optimize performance, or work with hardware interfaces. 

## Example 

``` rust
fn main() {
  let x = 0b1100;    // 12 in binary
  let y = 0b1010;    // 10 in binary

  // Bitwise AND
  let result_and = x & y;  // 0b1000 (8 in decimal)
  println!("{} & {} = {}", x, y, result_and);

  // Bitwise OR
  let result_or = x | y;   // 0b1110 (14 in decimal)
  println!("{} | {} = {}", x, y, result_or);

  // Bitwise XOR
  let result_xor = x ^ y;  // 0b0110 (6 in decimal)
  println!("{} ^ {} = {}", x, y, result_xor);

  // Bitwise NOT
  let result_not = !x;     // 0b...11110011 (bitwise inverse of 12, or -13 in two's complement form)
  println!("!{} = {}", x, result_not);

  // Left Shift
  let result_left_shift = x << 2;  // 0b110000 (48 in decimal)
  println!("{} << 2 = {}", x, result_left_shift);

  // Right Shift
  let result_right_shift = x >> 2; // 0b0011 (3 in decimal)
  println!("{} >> 2 = {}", x, result_right_shift);
}
```

Output of the bitwise code block operators:
```
12 & 10 = 8
12 | 10 = 14
12 ^ 10 = 6
!12 = -13
12 << 2 = 48
12 >> 2 = 3
```

## Compound Assignment Operators
Compound assignment operators in Rust combine an arithmetic or bitwise operation with assignment, streamlining the process of modifying the value of a variable. In programming, Instead of separating the operation and assignment, you can use these operators to perform both actions in a single step.

Here are the main compound assignment operators in Rust:
- `+=`
  Arithmetic addition and assignment
- `-=`
  Arithmetic subtraction and assignment
- `*=`
  Arithmetic multiplication and assignment
- `/=`
  Arithmetic division and assignment
- `%=`
  Arithmetic remainder and assignment
- `<<=`
  Left-shift and assignment
- `>>=`
  Right-shift and assignment
- `&=`
  Bitwise AND and assignment
- `|=`
  Bitwise OR and assignment
- `^=`
  Bitwise exclusive OR and assignment

## Example

``` rust
fn main() {
  let mut x = 10;
  let mut y = 5;

  // Addition Assignment
  x += y;  // x = x + y
  println!("x += y: {}", x);

  // Subtraction Assignment
  x -= y;  // x = x - y
  println!("x -= y: {}", x);

  // Multiplication Assignment
  x *= y;  // x = x * y
  println!("x *= y: {}", x);

  // Division Assignment
  x /= y;  // x = x / y
  println!("x /= y: {}", x);

  // Remainder Assignment
  x %= y;  // x = x % y
  println!("x %= y: {}", x);

  // Reset x and y for bitwise operations
  x = 0b1010; // 10 in binary
  y = 0b1100; // 12 in binary

  // Bitwise AND Assignment
  x &= y;  // x = x & y
  println!("x &= y: {}", x);
}
```

Compound assignment operators in programming are shorthand notations that combine an arithmetic or bitwise operation with assignment, which makes the code more concise and readable. 

Output of the compound assignment code block:
```
x += y: 15
x -= y: 10
x *= y: 50
x /= y: 10
x %= y: 0
x &= y: 8
```
