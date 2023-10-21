---
Title: 'Enums'
Description: 'Enums are a custom data type that enables the selection of a value from a predefined list of related options.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Game Development'
Tags:
  - 'Enums'
  - 'Data Types'
CatalogContent:
  - 'paths/computer-science'
  - 'learn/rust-for-programmers'
---

**Enums**, short for enumerations, are a custom data type that enables the selection of a value from a predefined list of related options. Enums are useful for modelling concepts categorized into distinct cases or states. They can help to create self-documenting code and handle different scenarios in a structured way.

> Note: Enums differ from structs because they don't store data associated with each variant. They are a way to define a type with distinct values, whereas structs are used to create custom data structures that can store various fields.

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

## Pattern Matching

text

## Associated Data

text

## Example

The following example...

```rust
fn main() {

  // define enum
  enum Avengers {
    IronMan,
    Thor,
    Hulk,
  }

  //access enum variants
  let iron_man = Avengers::IronMan;
  let thor = Avengers::Thor;
  let hulk = Avengers::Hulk;

  // print enum values
  println!("{:?}", iron_man);
  println!("{:?}", thor);
  println!("{:?}", hulk);
}
```

Output

```shell
IronMan
Thor
Hulk
```
