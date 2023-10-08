---
Title: 'Variable'
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

## Data types in rust

In the Rust programming language, variables are associated with specific data types. These data types determine:

- The layout and size of the variable in memory.
- The range of values that can be stored within that memory.
- The operations that can be conducted on the variable.

## Declaring a Variable

In rust, variable declaration follows a specific syntax pattern. Here's a basic example:

```pseudo
let number: i32 = 42;
```

In the above example a variable is declered named `number` with an initial value of `42` and it specify its data type as `i32` (a 32-bit signed integer).

## Codebyte Example

```codebyte/rs
# Example runnable code block.
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

    // You can also declare variables without initializing them, but you must specify their type.
    // let z: f64; // Declare an uninitialized f64 variable 'z'.

    // Attempting to use 'z' before initializing it will result in a compilation error.
    // println!("Value of 'z': {}", z);
}

```
