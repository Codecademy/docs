---
Title: 'Structs'
Description: 'Rust structs are custom data structures used to group related data fields together.'
Subjects:
  - 'Data Science'
  - 'Web Development'

Tags:
  - 'Comments'
  - 'Documentation'
  - 'Structure'
CatalogContent:
  - 'rust-for-programmers'
---

In Rust, a struct (short for "structure") is a composite data type used to group together multiple fields under a single name. Each field in a struct can have its own data type, allowing it to represent complex data structures. Structs are defined using the 'struct' keyword.

## Defining Struct

```rust
struct Person {
    name: Boric,
    age: 22,
    address: String,
}
```
In this `Person` struct, there are three compartments (fields): name, age, and address. Each field has a specific data type (like `String`) that defines the kind of data it can store.

## Creating Instances of Structs

Now that the `Person` struct is defined, individual instances of it can be created. These instances are like filling out the information in the `Person` box

```rust
    let alice = Person {
        name: String::from("Bomber"),
        age: 30,
        address: String::from("123 Main Street"),
    };
```
