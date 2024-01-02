---
Title: 'Data-Types'
Description: 'Data types are a classification that specifies which type of value a variable can hold and which operations can be performed on that variable.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Data types** define the nature of data a variable can store. Rust employs static typing, ensuring that variable types are known at compile time, aiding in detecting potential errors before runtime. These data types are broadly categorized into two groups: primitive types and compound types.

## Primitive types || scala types

Scala types represent a single value.

### Integer

An integer in Rust is a number without a fractional component. The signed integer starts with an `i` followed by the bit number and the unsigned integer starts with `u` followed by the bit number. The built-in integer types in Rust include 8bit, 16bit, 32bit, 64bit, and 128bit.

```rust
fn main() {
// Integer Type
    let integer_num: i32 = 42;
    }
```

### Floating-Point

A floating-point represents numbers with decimal points. The built-in floating-point types are `f32` and `f64` which are 32 bits and 64 bits in size respectively. The default size is `f64` and all floating points are signed.

```rust
fn main() {
// Floating-Point Type
    let float_num: f64 = 3.14;
    }
```

### Boolean

A boolean is a data type representing one of two values: `true` or `false`. Booleans have a size of one byte and they are specified using the `bool` keyword with explicit type annotation.

```rust
fn main() {
 // Boolean Type
    let is_rust_cool: bool = true;
    }
```

### Character

In Rust, char values are declared using single quotes `''`.It represents a single-character Unicode character. It's specified using the `char` keyword. Each Character is 4 bytes in size and can represent a wide range of characters, including ASCII characters, symbols, and various international characters.

```rust
fn main() {
    // Character Type
let unicode_char: char = 'A';

    // Printing the values
    println!("Integer: {}", integer_num);
    println!("Floating-Point: {}", float_num);
    println!("Boolean: {}", is_rust_cool);
    println!("Character: {}", unicode_char);
}
```

## Compound Types

Compound types represent multiple values and can be grouped.

## Tuples

A tuple is a collection of values of different types. Tuples are constructed using parentheses `()` and each has a value with type signature. Tuples are used by functions to return multiple values as tuples can hold any number of values.

```rust
fn main() {
// Tuple
    let person: (&str, usize, bool) = ("Alice", 30, true);

    // Accessing tuple elements
    let name = person.0;
    let age = person.1;
    let is_adult = person.2;
    }
```

## Arrays

An array is a collection of values with the same type and fixed length. The values are written as a comma-separated list inside a square bracket. Arrays are useful when data needs to be allocated on a stack rather than heap memory.

```rust
fn main() {


    // Array
    let numbers: [i32; 5] = [11, 82, 12, 88, 90];

    // Accessing array elements
    let first_number = numbers[0];
    let second_number = numbers[1];

    // Printing tuple and array elements
    println!("Person: {} is {} years old. Adult: {}", name, age, is_adult);
    println!("Array: [{}, {}]", first_number, second_number);
}
```

## Example

The example below shows the use of arrays in Rust:

```rust
use std::io;

fn main() {
    let a = [10, 25, 78, 40, 155];

    println!("Please enter an array index of choice.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!("The value of the element at index {index} is: {element}");
}
```
