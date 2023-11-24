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

In Rust, **strings** are a fundamental data type, consisting of characters such as letters, spaces, numbers, or symbols. There are two main string types:

|            | `String`                       | `&str`                                 |
| ---------- | ------------------------------ | -------------------------------------- |
| Mutability | Mutable (can be changed)       | Immutable (cannot be changed)          |
| Ownership  | Owned (exists on the heap)     | Borrowed (reference to a `String`)     |
| Use Case   | When modifications are needed  | For fixed or temporary strings         |
| Slicing    | Slicing returns `&str` slices. | Slicing returns smaller `&str` slices. |

## Creating `String` and `&str` String Slices

### `String` Type

A string can be created using:

- `String::new()` for an empty, mutable string.
- `String::from("literal")` for initializing with a known value.
- `"literal".to_string()` for converting a string slice to a `String`.

### `&str` Type

A `&str` string can be created by:

- Assigning a literal directly: `let message: &str = "Hello, world!";`
- Slicing a String: `let slice = &message_string[0..5];` for a specific byte range.
- Borrowing from a String: `let slice: &str = &message_string;` for the entire string.

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

- `.len()`: Returns the byte length of the string.
- `.is_empty()`: Checks if the string is empty.
- `.replace("find", "replace")`: Replaces parts of the string.
- `.to_uppercase()`: Converts the string to uppercase.

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
