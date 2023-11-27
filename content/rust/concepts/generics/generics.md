---
Title: 'Generics'
Description: 'Generics are a programming feature that allows the programmer to write versatile and reusable code that operates on different data types.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Generics'
  - 'Data Types'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, **Generics** are a powerful tool that enhance code flexibility and reusability. They enable the creation of functions, structs, enums, and traits that can operate on various data types while maintaining type safety. This approach not only reduces code duplication but also increases efficiency.

## Use Cases of Generics

Generics are integral in various Rust constructs, each offering unique benefits:

- Functions: Generics allow functions to handle arguments of any type, enabling code reuse and flexibility.
- Structs: Generics enable structs to store elements of different types, making them more versatile.
- Enums: Generics in enums provide the ability to create flexible and reusable enum types, often used for error handling and state representation.
- Traits: Applying generics to traits allows for defining shared behavior across various types, enhancing polymorphism.
- Trait Bounds: Specify trait constraints on generics, ensuring they adhere to certain behaviors, which enhances type safety and predictability.
- Multiple Bounds: Specify multiple trait constraints on generics, increasing the robustness and capabilities of generic types.

## Implementation

### Functions

Generics provide flexibility in function parameters:

```rust
fn generic_function<T>(item: T) {
    println!("{}", item);
}
generic_function(1);
generic_function("Hello, World!");
generic_function(true);
```

In this example, `generic_function`, defined with `<T>`, illustrates how a single function can adapt to various argument types.

### Structs

Generics increase the adaptability of structs:

```rust
struct GenericStruct<T> {
    x: T,
    y: T,
}
let str_struct = GenericStruct { x: "Hello", y: "World" };
```

In this example, `GenericStruct`uses of generics to create flexible and reusable struct definitions.

### Enums

Generics allow enums to represent a range of values:

```rust
enum GenericEnum<T> {
    Some(T),
    None,
}
let str_enum = GenericEnum::Some("Hello, World!");
let none_enum: GenericEnum<i32> = GenericEnum::None;
```

In this example, `GenericEnum` showcases how enums can handle various data types, with `None` illustrating a common Rust pattern for optional values.

### Traits

Generics enhance traits by enabling broader applicability:

```rust
trait GenericTrait<T> {
    fn generic_function(&self, item: T) -> T;
}
struct ExampleStruct<T> {
    value: T,
}
impl<T> GenericTrait<T> for ExampleStruct<T> {
    fn generic_function(&self, item: T) -> T {
        item
    }
}
```

In this example, the `GenericTrait` trait, applied to `ExampleStruct`, exemplifies polymorphism through generic methods.

### Trait Bounds

Trait bounds restrict generics to specific behaviors:

```rust
fn print_debug<T: std::fmt::Debug>(item: T) {
    println!("{:?}", item);
}
```

In this example, `print_debug` function uses trait bounds (`std::fmt::Debug`) to ensure generic types can be safely and predictably debugged.

### Multiple Bounds

Multiple trait bounds expand the capabilities of generics:

```rust
fn compare_items<T: PartialEq + PartialOrd>(item1: T, item2: T) -> bool {
    item1 == item2 || item1 > item2
}
```

In this example, `compare_items` uses of multiple trait bounds (`PartialEq` and `PartialOrd`), allowing more complex operations on generic types.
