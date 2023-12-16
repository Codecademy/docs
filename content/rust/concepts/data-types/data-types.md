---
Title: 'Data-Types'
Description: 'A brief description.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'An nth subject name'
Tags:
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Data types** serve to define the nature of data a variable can store. Rust employs static typing, ensuring that variable types are known at compile time, aiding in the detection of potential errors before runtime. These data types are broadly categorized into two groups: primitive types and compound types.

## Primitive types || scala types

Scala types represent a single value.

- Integer
- Floating-Point
- Boolean
- Character

## Compound Types

compund types represent multiple values and can group them together.

- tuples
- arrays

## Examples

The first example shows the primitive data types and the second example shows the compound data types respectively.

```rust
fn main() {
    // Integer Type
    let integer_num: i32 = 42;

    // Floating-Point Type
    let float_num: f64 = 3.14;

    // Boolean Type
    let is_rust_cool: bool = true;

    // Character Type
    let unicode_char: char = 'A';

    // Printing the values
    println!("Integer: {}", integer_num);
    println!("Floating-Point: {}", float_num);
    println!("Boolean: {}", is_rust_cool);
    println!("Character: {}", unicode_char);
}

```

```rust
fn main() {
    // Tuple
    let person: (&str, usize, bool) = ("Alice", 30, true);

    // Accessing tuple elements
    let name = person.0;
    let age = person.1;
    let is_adult = person.2;

    // Array
    let numbers: [i32; 5] = [1, 2, 3, 4, 5];

    // Accessing array elements
    let first_number = numbers[0];
    let second_number = numbers[1];

    // Printing tuple and array elements
    println!("Person: {} is {} years old. Adult: {}", name, age, is_adult);
    println!("Array: [{}, {}]", first_number, second_number);
}
```
