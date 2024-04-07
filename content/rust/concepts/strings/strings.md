---
Title: 'Strings'
Description: 'Strings in Rust are encodings of UTF-8 sequences, which can be created, manipulated and referenced.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'A tag'
  - 'A second tag'
  - 'An nth tag'
CatalogContent:
  - 'learn-rust'
  - 'paths/computer-science'
---

**`Strings`** in Rust diverge a little bit from conventional programming languages. The approach to string manipulation
in Rust is influenced by its systems-focused design. There are two types of strings that differ for example in modification, performance of operations and ownership rules.

Tackling data structures of variable size, such as strings, can get a bit tricky, and Rust has its spin on it. In Rust,
a string is essentially a sequence of Unicode characters encoded in UTF-8. As an example - the string "Codecademy Rust
concept," where each character is a valid Unicode entity – "C," "o," "d," "e," "c," and so on.

## String types

In Rust, there are two main types related to strings, each serving a specific purpose.

1. **`String`**

   - **Description:** A heap-allocated, growable, and mutable string type.
   - **Usage:** Used when dynamic string manipulation and ownership transfer are required.
   - **Example:**

     ```rust
     let mut dynamic_string = String::from("Hello, Rust!");
     ```

2. **`&str` (String Slice)**

   - **Description:** A reference to a sequence of UTF-8 bytes, often used as a view into a `String` or a string
     literal.
   - **Usage:** Commonly used for string references without ownership or when dealing with parts of a string.
   - **Example:**

     ```rust
     let string_literal: &str = "Hello, Rust!";
     ```

> **Note:** These string types cover various scenarios, from dynamic and mutable strings `String` to static and immutable string slices `&str`. The type of string should be chosen depending on the specific requirements and the characteristics of the data being manipulated.

## Creating Strings

1. **Using `String::new()`**:

   ```rust
   let mut empty_string = String::new();
   ```

   This creates a new, mutable, empty `String` that can be later modified and or assigned to a variable.

2. **Using String Literals with `String::from`**:

   ```rust
   let greeting = String::from("Hello, World!");
   ```

   `String::from` allocates memory on the heap and initializes a new string with the specified string literal.

## String Manipulation

### 1. Concatenation

  In Rust, there are multiple ways to concatenate strings. Here is a list of concatenation operators including examples:

   **`+` Operator:**

   - **Usage:** Concatenating two strings.
   - **Ownership:** Consumes the left operand.
   - **Borrowing:** To concatenate with a borrowed string (sliced out of another string using `&str`), it is necessary to explicitly borrow it using the `&` operator.
   - **Example:**
     ```rust
     let hello = String::from("Hello, ");
     let world = String::from("World!");
     let hello_world = hello + &world;  // Ownership of 'hello' is moved, 'world' is borrowed
     ```

   **`+=` Operator:**

   - **Usage:** In-place concatenation operation.
   - **Ownership:** Consumes the existing string on the left operand and appends to it.
   - **Borrowing:** It works directly with the mutable reference of the left operand, but the ownership of the left operand is transferred to the result.
   - **Example:**

     ```rust
     let mut hello = String::from("Hello, ");
     let world = String::from("World!");
     hello += &world;  // Appends 'World!' to the existing 'Hello, '
     ```

   > **`format!` Macro:**
   - **Usage:** Creates a new string by formatting text, allowing string interpolation.
   - **Ownership:** It does not involve ownership transfer and is a convenient way to create strings without borrowing
     or ownership concerns.
   - **Example:**
     ```rust
     let hello = String::from("Hello, ");
     let world = String::from("World!");
     let hello_world = format!("{}{}", hello, world);  // Creates a new string without ownership issues
     ```
   > **Note:** When working with strings in Rust, it's crucial to be mindful of ownership and borrowing semantics, especially when using operators like `+`. The operator `+` is used to create a new string while `+=` is used to modify an existing string in place. To concatenate strings with interpolation the `format!` macro provides a flexible and ownership-friendly way.

### 2. Slicing & Appending with `push_str` and `push`:

   ```rust
   let mut message = String::from("Rust");
   message.push_str(" Programming");
   message.push('!');
   let part_of_message = &message[0..5];
   ```

   In the example above, `push_str` is used to append a string slice to the existing string `message`, and `push` is used to add the character `!` to the end of the concatenated string.

## Referencing Strings

To reference parts of a string without ownership `&str` can be used as follows:

```rust
let full_string = String::from("Hello, World!");
let slice = &full_string[0..5];
```

Here, `&full_string[0..5]` creates a reference to the first five characters of `full_string`.

A certain familiarity with the described methods and operators as well as the concept of string slices is crucial to
work efficiently with and fully grasp the syntax of **Rust strings**.
