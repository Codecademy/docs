---
title: "Operators in Rust"
description: "Learn about the various operators in Rust and how they facilitate different operations."
---

Rust provides a variety of operators to perform different operations on data types.Understanding how these operators work is important for writing efficient Rust code.

1. Arithmetic Operators

Arithmetic operators are used for basic mathematical operations like addition, subtraction, multiplication, division, and remainder. 

```rust
fn main() {
    let a = 10;
    let b = 3;

    // Addition
    let sum = a + b;
    println!("Sum: {}", sum);

    // Subtraction
    let difference = a - b;
    println!("Difference: {}", difference);

    // Multiplication
    let product = a * b;
    println!("Product: {}", product);

    // Division
    let quotient = a / b;
    println!("Quotient: {}", quotient);

    // Remainder
    let remainder = a % b;
    println!("Remainder: {}", remainder);
}

2. Comparison Operators
Comparison operators are used to compare values and return a boolean result. They are essential for making decisions in your code. Example:

rust
fn main() {
    let x = 5;
    let y = 8;

    // Equality
    println!("Equal: {}", x == y);

    // Inequality
    println!("Not Equal: {}", x != y);

    // Greater than
    println!("Greater than: {}", x > y);

    // Less than
    println!("Less than: {}", x < y);

    // Greater than or equal to
    println!("Greater than or equal to: {}", x >= y);

    // Less than or equal to
    println!("Less than or equal to: {}", x <= y);
}

3. Logical Operators
The operators include: > , < , >= , <= , === , !== . Logical operators are operators that combine multiple boolean expressions or values and provide a single boolean output. They are there to create conditional statements. Example:

rust
fn main() {
    let is_sunny = true;
    let is_warm = false;

    // Logical AND
    println!("AND: {}", is_sunny && is_warm);

    // Logical OR
    println!("OR: {}", is_sunny || is_warm);

    // Logical NOT
    println!("NOT: {}", !is_sunny);
}

4. Bitwise Operators
 A bitwise operation operates on a bit string, a bit array or a binary numeral at the level of its individual bits. They are particularly useful in low-level programming. Example:

rust
fn main() {
    let a = 0b1100;
    let b = 0b1010;

    // Bitwise AND
    println!("AND: {:b}", a & b);

    // Bitwise OR
    println!("OR: {:b}", a | b);

    // Bitwise XOR
    println!("XOR: {:b}", a ^ b);

    // Bitwise NOT
    println!("NOT: {:b}", !a);
}

5. Assignment Operators
Assignment operators are used to assign values to variables. They are a way of performing operations and updating variables. Example:

rust
fn main() {
    let mut num = 10;

    // Add and assign
    num += 5;
    println!("Add and assign: {}", num);

    // Subtract and assign
    num -= 3;
    println!("Subtract and assign: {}", num);

    // Multiply and assign
    num *= 2;
    println!("Multiply and assign: {}", num);

    // Divide and assign
    num /= 4;
    println!("Divide and assign: {}", num);

    // Bitwise AND and assign
    num &= 3;
    println!("Bitwise AND and assign: {}", num);
}