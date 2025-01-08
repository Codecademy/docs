---
Title: 'Ownership'
Description: 'A compile-time system enforcing strict memory safety rules.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Alias'
  - 'Const'
  - 'Memory'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Ownership** in Rust is one of the core memory management concepts that ensures every value has a single owner responsible for it. This system avoids memory leaks and data races without needing a garbage collector. Ownership features include move semantics, where the ownership is transferred between variables, borrowing, and the borrow checker, by which these rules are checked at compile time to keep memory safe.

## Syntax

Here's the syntax for the ownership concept in Rust:

```pseudo
let variable1 = value;
let variable2 = variable1;
// 'variable1' is no longer valid and cannot be accessed.
```

- `variable1`: First owner of the value.
- `value`: The value or data to be owned initially.
- `variable2`: New owner of `value` after the ownership transfer.

## Example

This example demonstrates how ownership works, ensuring that only one variable owns the data at a time:

```rust
fn main() {
    let s1 = String::from("Hello, Welcome to Codecademy!");
    println!("s1: {}", s1);
    let s2 = take_ownership(s1);
    // println!("s1: {}", s1);  // Uncommenting this line would result in a compile-time error because 's1' no longer owns the value.
    println!("s2: {}", s2);  // Prints: s2: Hello, Welcome to Codecademy!
}

fn take_ownership(s: String) -> String {  // Function takes ownership of the passed value
    println!("Taking ownership: {}", s);  // Prints: Taking ownership: Hello, Welcome to Codecademy!
    s  // Ownership is returned to the caller, moving it back to the caller.
}
```

In this example, the ownership of the string s1 is moved to s2, and s1 is no longer valid. After moving, s2 holds the ownership of the string "Hello, Welcome to Codecademy!":

The example will result in the following output:

```shell
s1: Hello, Welcome to Codecademy!
Taking ownership: Hello, Welcome to Codecademy!
s2: Hello, Welcome to Codecademy!
```

### Unsafe Code Example

Rust’s ownership system prevents operations that could lead to unsafe memory access, like accessing data after ownership is moved, at compile time :

```rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = take_ownership(s1);
    // println!("{}", s1);  // Uncommenting this line would cause a compile-time error: use of moved value
}

fn take_ownership(s: String) -> String {
    s
}
```

In this unsafe scenario, the ownership of `s1` is moved to `s2`, and attempting to access `s1` after the move results in a compile-time error.
