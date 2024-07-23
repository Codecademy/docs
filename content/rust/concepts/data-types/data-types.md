---
Title: 'Data Types'
Description: 'Specify the kind of data variables can hold.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Variables'
  - 'Values'
  - 'Elements'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, **data types** classify the types of values that can be used and manipulated within a program. Rust's type system ensures that data types are known at compile time, which helps catch errors early.

## Scalar Types

Scalar types represent single values. Rust has four primary scalar types:

- Integers: Represent whole numbers. The signed integer types start with `i` followed by the bit number (e.g., `i32`, `i64`). The unsigned integer types start with `u` followed by the bit number (e.g., `u32`, `u64`). The built-in integer types in Rust include 8-bit (`i8`, `u8`), 16-bit (`i16`, `u16`), 32-bit (`i32`, `u32`), 64-bit (`i64`, `u64`), and 128-bit (`i128`, `u128`).
- Floating-Point Numbers: Represent numbers with fractional components. Rust has two floating-point types - `f32` and `f64`, which are 32-bit and 64-bit floating-point numbers, respectively. These types adhere to the IEEE-754 standard for floating-point arithmetic.
- Booleans: Represent true or false values using `bool`. This can hold one of two values: `true` or `false`. Booleans are useful in control flow structures such as [conditionals](https://www.codecademy.com/resources/docs/rust/conditionals) and [loops](https://www.codecademy.com/resources/docs/rust/loops).
- Characters: Represent single Unicode characters using `char`. A `char` in Rust is 4 bytes in size and represents a Unicode Scalar Value, which means it can represent more than just ASCII characters, including accented letters, Chinese/Japanese/Korean characters, emojis, and more.

## Example 1

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

The above code produces the following output:

```shell
Integer: 42
Float: 3.14
Boolean: true
Character: R
```

## Compound Types

Compound types represent multiple values and can be grouped. It consists of the following:

- Tuples: A tuple groups multiple values of different types into one compound type with a fixed length that cannot change once declared.
- Arrays: An array also holds multiple values, but all elements must be of the same type, and arrays in Rust have a fixed length too.

## Example 2

```rust
fn main() {
  let tuple: (i32, f64, bool) = (42, 3.14, true);
  let array: [i32; 3] = [1, 2, 3];

  println!("Tuple: ({}, {}, {})", tuple.0, tuple.1, tuple.2);
  println!("Array: {:?}", array);
}
```

The above code produces the output as follows:

```shell
Tuple: (42, 3.14, true)
Array: [1, 2, 3]
```

The below GIF shows the output for a program that combines the code from the above examples:

![Output for the code combining above examples](https://raw.githubusercontent.com/Codecademy/docs/main/media/rust-data-types.gif)
