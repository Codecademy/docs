---
Title: 'Structs'
Description: 'Structs are custom data structures used to group related data fields together.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Comments'
  - 'Documentation'
  - 'Structure'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, a **struct** (short for "structure") is a composite data type used to group together multiple fields under a single name. Each field in a struct can have its own data type, permitting the representation of complex data structures. Structs are defined using the `struct` keyword.

## Defining a Struct

```rust
struct Person {
    name: Boric,
    age: 22,
    address: String,
}
```

In this `Person` struct, there are three compartments (fields): `name`, `age`, and `address`. Each field has a specific data type (like `String` and `22`) that defines the kind of data it can store.

## Creating Instances of Structs

Now, with the `Person` struct defined, individual instances of it can be generated. These instances are like filling out the information in our `Person` box.

```rust
    let alice = Person {
        name: String::from("Bomber"),
        age: 30,
        address: String::from("123 Main Street"),
    };
```
