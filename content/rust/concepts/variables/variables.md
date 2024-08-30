---
Title: 'Variables'
Description: 'A variable is a location in computer memory used to store data.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Variables'
CatalogContent:
  - 'learn-rust'
  - 'paths/computer-science'
---

A **variable** is a fundamental concept in computer programming. It represents a location in computer memory used to store data temporarily. Whenever there's a need to store a piece of data for use in a program, a variable is used. This practice ensures code reusability, as variables can replace the same value in multiple locations within the same code.

## Data types in Rust

In the Rust programming language, variables are associated with specific data types. These data types determine:

- The layout and size of the variable in memory.
- The range of values that can be stored within that memory.
- The operations that can be conducted on the variable.

## Declaring a Variable

In Rust, variable declaration follows a specific syntax pattern. Here's a basic example:

```pseudo
let number: i32 = 42;
```

The declaration above uses the name `number`, with an initial value of `42`, and a data type of `i32` (a 32-bit signed integer).

## Declaring a Mutable Variable

The `mut` keyword is short for `mutable` and is used in combination with `let` to create mutable variables. Mutable variables allow their values to be changed after the initial assignment.

```pseudo
let mut number: f64 = 3.14159;
```

## Example

This example demonstrates variable declaration and mutability in Rust. First, it declares an immutable variable `x` with an initial value of `5` and a mutable variable `y` with an initial value of `10`.

```rust
fn main() {

// Declare an immutable variable named 'x' with an initial value of 5.
let x = 5;

// Declare a mutable variable named 'y' with an initial value of 10.
let mut y = 10;

// Print the values of 'x' and 'y' to the console.
println!("Value of 'x': {}", x);
println!("Value of 'y': {}", y);

// Change the value of 'y'.
y = 20;

// Print the updated value of 'y' to the console.
println!("Updated value of 'y': {}", y);
}
```

This example results in the following output:

```shell
Value of 'x': 5
Value of 'y': 10
Updated value of 'y': 20
```
