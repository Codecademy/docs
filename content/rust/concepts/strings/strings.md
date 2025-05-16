---
Title: 'Strings'
Description: 'Strings in Rust are encodings of UTF-8 sequences, which can be created, manipulated and referenced.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Index'
  - 'Strings'
  - 'Unicode'
CatalogContent:
  - 'learn-rust'
  - 'paths/computer-science'
---

In Rust, a **string** is essentially a sequence of Unicode characters encoded in UTF-8, which can be created, manipulated and referenced. For example, each character in the "Codecademy Rust Strings" string is a valid Unicode entity, i.e., "C", "o", "d", "e", "c", and so on.

Rust Strings diverge a little bit from conventional programming languages. The approach to string manipulation in Rust is influenced by its system-focused design. Though tackling them can get a bit tricky, they are essential for tasks such as reading user input, handling file paths, formatting output, managing configuration values, and communicating over networks.

## Types of Strings in Rust

In Rust, there are two types of strings that differ in various aspects such as modification, performance of operations, and [ownership](https://www.codecademy.com/resources/docs/rust/ownership) rules:

### 1. `String`

- **Description:** A heap-allocated, growable, and mutable string type.
- **Usage:** Used when dynamic string manipulation and ownership transfer are required.

```rust
let mut dynamic_string = String::from("Hello, Rust!");
```

### 2. `&str` (String Slice)

- **Description:** A reference to a sequence of UTF-8 bytes, often used as a view into a `String` or a string literal.
- **Usage:** Commonly used for string references without ownership or when dealing with parts of a string.

```rust
let string_literal: &str = "Hello, Rust!";
```

> **Note:** These string types cover various scenarios, from dynamic and mutable strings (`String`) to static and immutable string slices (`&str`). The string type should be chosen depending on the specific requirements and the characteristics of the data being manipulated.

## Creating Strings in Rust

There are different ways to create a string in Rust:

### 1. Using `String::from()`

This example creates a string using `String::from()` in Rust:

```rust
let str = String::from("Hello");
```

### 2. Using `String::new()`

This example creates a string using `String::new()` in Rust:

```rust
let mut empty_string = String::new();
empty_string.push_str("Hello");
```

`String::new()` only allows us to create an empty string. After creating it, a value can be assigned to it using the `.push_str()` method.

## Concatenating Strings in Rust

There are several ways to concatenate strings in Rust:

### `+` Operator

- **Usage:** Concatenates two strings.
- **Ownership:** Consumes the left operand.
- **Borrowing:** To concatenate with a borrowed string (sliced out of another string using `&str`), it is necessary to explicitly borrow it using the `&` [operator](https://www.codecademy.com/resources/docs/rust/operators).

```rust
fn main() {
  let hello = String::from("Hello, ");
  let world = String::from("World!");

  let hello_world = hello + &world;  // Ownership of 'hello' is moved, 'world' is borrowed

  println!("{}", hello_world);
}
```

Here is the output:

```shell
Hello, World!
```

### `+=` Operator

- **Usage:** Concatenates two strings in-place.
- **Ownership:** Consumes the existing string on the left operand and appends to it.
- **Borrowing:** It works directly with the mutable reference of the left operand, but the ownership of the left operand is transferred to the result.

```rust
fn main() {
  let mut hello = String::from("Hello, ");
  let world = String::from("World!");

  hello += &world;  // Appends 'World!' to the existing 'Hello, '

  println!("{}", hello);
```

Here is the output:

```shell
Hello, World!
```

### `format!` Macro

- **Usage:** Creates a new string by formatting text, allowing string interpolation.
- **Ownership:** It does not involve ownership transfer and is a convenient way to create strings without borrowing or ownership concerns.

```rust
fn main() {
  let hello = String::from("Hello, ");
  let world = String::from("World!");

  let hello_world = format!("{}{}", hello, world);  // Creates a new string without ownership issues

  println!("{}", hello_world);
}
```

Here is the output:

```shell
Hello, World!
```

> **Note:** When working with strings in Rust, it's crucial to be mindful of ownership and borrowing semantics, especially when using operators like `+`. The operator `+` is used to create a new string while `+=` is used to modify an existing string in-place. To concatenate strings with interpolation, the `format!` macro provides a flexible and ownership-friendly way.

## Slicing and Appending Strings in Rust

In this example, the `.push_str()` method is used to append a string slice to the existing string `message`, whereas the `.push()` method is used to add the character `!` to the end of the concatenated string:

```rust
fn main() {
  let mut message = String::from("Rust");

  message.push_str(" Programming");
  message.push('!');

  println!("{}", message);
}
```

Here is the output:

```shell
Rust Programming!
```

## Referencing Strings

This example demonstrates the usage of `&str` to reference parts of a string without ownership:

```rust
fn main() {
  let full_string = String::from("Hello, World!");

  let slice = &full_string[0..5];

  println!("{}", slice);
}
```

Here is the output:

```shell
Hello
```

Here, `&full_string[0..5]` creates a reference to the first five characters of `full_string`.

## Iterating over Strings in Rust

The `.chars()` method can be used to return an iterator of characters in a string, which can then be looped over:

```rust
fn main() {
  let str = String::from("Rust");

  for char in str.chars() {
    println!("{}", char);
  }
}
```

Here is the output:

```shell
R
u
s
t
```

## Frequently Asked Questions

### 1. How do I convert between `String` and `&str`?

`String` to `&str`: Use `.as_str()` or dereference (`&s`).

```rust
let s = String::from("Hello");

// Method 1: Using .as_str()
let slice1: &str = s.as_str();

// Method 2: Using dereferencing
let slice2: &str = &s;
```

`&str` to `String`: Use `.to_string()` or `String::from()`.

```rust
let slice = "Hello";

// Method 1: Using .to_string()
let s1 = slice.to_string();

// Method 2: Using String::from()
let s2 = String::from(slice);
```

### 2. Why does Rust have 2 string types?

Rust separates strings into `String` and `&str` to balance performance and flexibility. `&str` is lightweight and fast, perfect for reading or referencing text, while `String` is ideal for ownership and mutation. This separation ensures memory safety and efficient handling of text data.

### 3. What is the difference between Rust string and C string?

Rust strings are safe and UTF-8 encoded, while [C strings](https://www.codecademy.com/resources/docs/c/strings) (`char*`) are null-terminated and unsafe. Rust avoids common C string pitfalls like buffer overflows by enforcing strict memory and type safety, at the cost of some complexity.
