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

In Rust, **Generics** are tools that enhance code flexibility and reusability. They enable functions, structs, enums, and traits to work with different data types while ensuring type safety. Generics help in reducing code duplication, increasing efficiency, and allowing for abstract and scalable code designs.

## Implementation

### Functions

Generics enable functions to handle arguments of various types, promoting code reuse and flexibility. In the following example, `generic_function`, defined with `<T>`, illustrates how a single function can adapt to various argument types.

```
fn generic_function<T>(item: T) {
    println!("{}", item);
}
generic_function(1);                 // prints: 1
generic_function("Hello, World!");   // prints: Hello, World!
generic_function(true);              // prints: true
```

`<T>` represents a generic type, meaning `generic_function` can accept any type of argument. The `println!("{}", item);` line prints the argument. Since the function is generic, `item` can be of different types, such as an integer, a string, or a boolean.

### Structs

Generics in structs allow for flexible structures capable of storing various types. In the following example, `GenericStruct` uses of generics to create flexible and reusable struct definitions.

```
struct GenericStruct<T> {
    firstWord: T,
    secondWord: T,
}
let words_struct = GenericStruct { firstWord: "Hello", secondWord: "World" };
```

`T` in `GenericStruct<T>` is a type placeholder for `firstWord` and `secondWord`, meaning these fields will have the same type, but can be any type. In `words_struct`, both fields are strings, but they could be integers, booleans, or any other type.

### Enums

Generics in enums allow for creating enums that can represent a range of value types, which is particularly useful in scenarios like error handling or representing different states in a type-safe manner. In the following example, `GenericEnum` handles various data types, with `None` illustrating a common Rust pattern for optional values.

```
enum GenericEnum<T> {
    Some(T),
    None,
}
let some_enum = GenericEnum::Some("Hello, World!");  // Instance with a string value
let none_enum: GenericEnum<i32> = GenericEnum::None; // Instance without a value, but designed to hold an integer
```

In this example, `GenericEnum<T>` can either be `Some` with a value of any type or `None`, which has no value. `some_enum` is an instance of `GenericEnum` with a string, while `none_enum` is an instance without a value but specified to optionally hold an integer (`i32`).

### Traits

Generics in traits allow for defining shared behavior across different types. In the following example, the `GenericTrait` trait, applied to `ExampleStruct`, shows polymorphism through generic methods.

```
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
let example = ExampleStruct { value: 10 };
let result = example.generic_function(20);
println!("Result: {}", result); // Prints: Result: 20
```

In this example, `GenericTrait<T>` defines a generic method `generic_function` which will return the item it is given. `ExampleStruct<T>` implements `GenericTrait<T>`, meaning it adopts the behavior defined in `GenericTrait`. In the last line, `result` calls the `generic_function` method on `example` with an integer argument of `20`, returning `20`.

### Trait Bounds

Trait bounds are used to specify constraints on generic types, ensuring they adhere to certain behaviors. In the following example, `print_debug` function uses trait bounds to ensure generic types can be safely and predictably debugged.

```
fn print_debug<T: std::fmt::Debug>(item: T) {
    println!("{:?}", item);
}
```

In this example, `T: std::fmt::Debug` is a trait bound that limits `print_debug` to types implementing the `Debug` trait, essential for formatting the value with the `{:?}` formatter.

### Multiple Bounds

Multiple trait bounds can be specified on generics to increase their capabilities. In this example, `compare_items` uses of multiple trait bounds which allows for more complex operations on generic types.

```
fn compare_items<T: PartialEq + PartialOrd>(item1: T, item2: T) -> bool {
    item1 == item2 || item1 > item2
}
```

In this example, `T: PartialEq + PartialOrd` ensures the `compare_items` function only works with types that can be compared for equality (`PartialEq`) and order (`PartialOrd`). `compare_items` will return `true` if `item1` is equal to or greater than `item2`.
