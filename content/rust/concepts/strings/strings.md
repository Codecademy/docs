---
Title: 'Strings'
Description: 'A collection of characters used to represent text.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, **strings** are a fundamental data type, consisting of characters such as letters, spaces, numbers, or symbols. There are two main string types, `String` and `&str`.

## Differences between `String` and `&str`

|            | `String`                       | `&str`                                 |
| ---------- | ------------------------------ | -------------------------------------- |
| Mutability | Mutable (can be changed)       | Immutable (cannot be changed)          |
| Ownership  | Owned (exists on the heap)     | Borrowed (reference to a `String`)     |
| Use Case   | When modifications are needed  | For fixed or temporary strings         |
| Slicing    | Slicing returns `&str` slices. | Slicing returns smaller `&str` slices. |

## Creating `String` and `&str` String Slices

### `String` Type

A `String` can be created three different ways:

```
let mut string = String::new();               // Creates an empty, mutable string
string = String::from("literal");             // Creates a string from a known value
let string_literal = "literal".to_string();   // Converts a &str slice to a String
```

### `&str` Type

A `&str` string slice is typically created by assigning a literal directly.

```
let message: &str = "Hello, world!";
```

## Slicing and Borrowing Strings

Slicing creates a `&str` slice of a part of the string, while borrowing allows a `String` object to be used as a `&str` without creating a new string.

```
let message = String::from("Hello, world!");
let slice = &message[0..5];      // Slices a part of the string
let borrowed: &str = &message;   // Borrows the entire string
```

To create a `&str` slice, the slice notation `[0..5]` is used on `message`. This selects a range from the start index 0 to, but not including, index 5. As a result, `slice` contains the substring `"Hello"`. The `borrowed` variable uses borrows the entire `String` object by using `&message` is borrowed as a `&str` slice without creating a new `String` object. This technique is memory-efficient and a common practice in Rust for handling strings.

> **Note**: Be mindful of UTF-8 encoding when slicing to ensure valid character boundaries to avoid runtime errors.

## Modifying Strings

Mutable strings (`String`) can be modified with methods like `push_str()`, `push()`, and `+=` for concatenation.

```
let mut greeting = String::new(); // Creates an empty string
greeting.push_str("Hello");       // Appends "Hello"
greeting.push(' ');               // Appends a space character
greeting += "World";              // Concatenates "World"
```

In this example, an empty string is created using the `String::new()` method and modified using `.push_str()` and `.push()` methods. The `+=` operator is used to concatenate `greeting` with a string slice further modifying `greeting` to `"Hello World"`.

> **Note**: Direct indexing (e.g., string[0]) is not supported due to UTF-8 encoding complexities.

## String Methods

Rust `String` objects offer methods like `.len()`, `.is_empty()`, `.replace()`, and `.to_uppercase()`:

```
let length = greeting.len();                  // Returns the byte length of the string
let is_empty = greeting.is_empty();           // Checks if the string is empty
greeting = greeting.replace("Hello", "Hi");   // Replaces parts of the string
let uppercased = greeting.to_uppercase();     // Converts the string to uppercase
println!("Length: {}, Empty: {}, Greeting: {},  Uppercased: {}", length, is_empty, greeting, uppercased);
```

> **Note**: While many methods are common to both `String` and `&str`, methods that modify the string are exclusive to `String` due to its mutable nature.

## Example

The following example demonstrates creating, modifying, and accessing properties of a `String`:

```rust
fn main() {
    let mut message = String::from("Hello");
    message.push_str(", Codecademy!");
    println!("Message: {}, Length: {}", message, message.len());
}
```

In this example, a `String` is created using the `String::from()` method and modified using the `.push_str()` method. The `.len()` method is called on `message` to find the byte length of the string.

This will output:

```rust
Message: Hello, Codecademy!, Length: 18
```
