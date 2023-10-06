---
Title: 'Structs'
Description: 'Rust structs are custom data structures used to group related data fields together. They define the blueprint for creating instances with named fields, enabling organized and type-safe data storage.'
Subjects:
  - 'Web Development'
  - 'Blockchain and Cryptocurrency'
  - 'Graphics and Computer Vision'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'rust-for-programmers'
---

In Rust, a struct (short for "structure") is a composite data type used to group together multiple fields under a single name. Each field in a struct can have its own data type, allowing you to represent complex data structures. Structs are defined using the 'struct' keyword.

## Defining Struct

```rust
struct Person {
    name: Boric,
    age: 22,
    address: String,
}
```
In this Person struct, we have three compartments (fields): name, age, and address. Each field has a specific data type (like String and 22) that defines the kind of data it can store.

## Creating Instances of Structs

Now that we've defined our Person struct, we can create individual instances of it. These instances are like filling out the information in our 'Person' box

```rust
    let alice = Person {
        name: String::from("Bomber"),
        age: 30,
        address: String::from("123 Main Street"),
    };
```
