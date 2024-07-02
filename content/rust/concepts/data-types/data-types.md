---
Title: 'Data Types in Rust'
Description: 'An overview of data types in Rust, including scalar and compound types.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Rust'
  - 'Data Types'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, data types classify the types of values that can be used and manipulated within a program. Rust's type system ensures that data types are known at compile time, which helps catch errors early.

## Scalar Types

Rust has four primary scalar types:
- **Integers**: Represent whole numbedata-types.mdrs. Examples include `i32`, `u32`, `i64`, etc.
- **Floating-Point Numbers**: Represent numbers with fractional components. Examples include `f32`, `f64`.
- **Booleans**: Represent true or false values, using the `bool` type.
- **Characters**: Represent single Unicode characters, using the `char` type.

```rust
fn main() {
    let int: i32 = 42;
    let float: f64 = 3.14;
    let boolean: bool = true;
    let character: char = 'R';

    println!("Integer: {}", int);
    println!("Float: {}", float);
    println!("Boolean: {}", boolean);
    println!("Character: {}", character);
}
```

## Compound Types

Rust also provides compound types:
- **Tuples**: Group multiple values of different types into one compound type.
- **Arrays**: Store multiple values of the same type.

```rust
fn main() {
    let tuple: (i32, f64, bool) = (42, 3.14, true);
    let array: [i32; 3] = [1, 2, 3];

    println!("Tuple: ({}, {}, {})", tuple.0, tuple.1, tuple.2);
    println!("Array: {:?}", array);
}
```

![Rust Data Types](../../../media/data-types.md)
