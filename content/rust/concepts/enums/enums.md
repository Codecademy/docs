---
Title: 'Enums'
Description: 'Enums are a custom data type that enables the selection of a value from a predefined list of related options.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Enums'
  - 'Data Types'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Enums**, short for enumerations, are a custom data type that enables the selection of a value from a predefined list of related options. Enums are useful for modelling concepts categorized into distinct cases or states. They can help to enhance code readability and handle different scenarios in a structured way.

> **Note:** Enums differ from structs because they don't store data associated with each variant. They are a way to define a type with distinct values, whereas structs are used to create custom data structures that can store various fields.

## Syntax

```pseudo
enum MyEnum {
  OptionOne,
  OptionTwo,
  OptionThree,
}

let option_one = MyEnum::OptionOne;
```

The declaration of enums in Rust is initiated with the `enum` keyword, followed by the enum's name, in this case `MyEnum`. The enum consists of distinct values enclosed within curly braces, in this case, `OptionOne`, `OptionTwo` and `OptionThree`.

Accessing values within an enum is achieved through the `::` notation. `MyEnum::OptionOne` represents the enum variant `OptionOne` of the `MyEnum` enum, and this reference is assigned the variable `option_one`.

## Data Types in Enums

Enums in Rust are versatile and can store many data types. They are not limited to strings; they enable different data types, such as:

- Variants with No Associated Data: These are simple variants without associated data.
- Variants with Associated Data: These variants can hold data of different types, such as integers, floats, or booleans.
- Tuple Variants: These variants store tuples as associated data.
- Struct Variants: These variants can contain structured data, enabling the use of more complex data structures.

This example contains an enum with different data type options:

```rust
fn main() {
  enum Hulk {
    Hero,                       // Variant with no associated data
    Name(String),               // Variant with a string associated data
    Parameters(f64, f64),       // Variant with a tuple as associated data
    Bio { name: String, age: i32 },  // Variant with a struct as associated data
  }

  let name = Hulk::Name(String::from("Hulk"));

  println!("{:?}", name); // Output: Name("Hulk")
}
```

## Example

The following example first creates an enum called `Avengers` containing variants with no associated data. Then, it creates variables for each variant in the `Avengers` enum. Finally, the `println!()` function prints each variable to the console:

```rust
fn main() {
// Define Avengers enum
 #[derive(Debug)]
enum Avengers {
  IronMan,
  Thor,
  Hulk,
 }

// Access enum variants
let iron_man = Avengers::IronMan;
let thor = Avengers::Thor;
let hulk = Avengers::Hulk;

// Print enum values
println!("{:?}", iron_man);
println!("{:?}", thor);
println!("{:?}", hulk);
}
```

The example will result in the following output:

```shell
IronMan
Thor
Hulk
```
