---
Title: ‘Generics'
Description: 'Allows to create flexible functions and data type definitions.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Generics'
  - 'Types'
  - 'Data Structures'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Generics** in Rust allows developers to write flexible, reusable code that can work with many data types. They can be used to create [functions](https://www.codecademy.com/resources/docs/rust/functions), data structures, and methods that operate over a variety of types while still providing compile-time type safety.

## Generic Function

A generic function can be defined by specifying a type parameter inside angle brackets (<>). This type parameter can then be used as a stand-in for any type. By convention, most rust developers use `T`, which is short for `Type`. The following example demonstrates how to define a generic function:

```rust
fn my_function<T>(value: T) -> T {
  ...
}
```

In the above example, `my_function` is a generic function that takes a single parameter `value` of any type `T`.

The next example illustrates a generic function that returns a value:

```rust
fn test<T>(a: T) -> T {
  return a;
}

fn main() {
  println!("{}", test(8));
}
```

The above example will output the following:

```shell
8
```

## Using a Generic Data Structure

Similarly, [`struct`](https://www.codecademy.com/resources/docs/rust/structs) or [`enum`](https://www.codecademy.com/resources/docs/rust/enums) can be defined with generics. The following example showcases defining a `struct` with generics:

```rust
struct Coordinates<T> {
  x: T,
  y: T,
}

fn main() {
  let int_coord = Coordinates {x: 5, y: 4};
  let float_coord = Coordinates {x: 5.01, y: 4.10};
  println!("int_coord: ({}, {})", int_coord.x, int_coord.y);
  println!("float_coord: ({}, {})", float_coord.x, float_coord.y);
}
```

The above example will give the following output:

```shell
int_coord: (5, 4)
float_coord: (5.01, 4.1)
```

> **Note:** For the above example, it needs to be ensured that `x` and `y` are of the same type, else there will be a `mismatched types` error.

`struct` or `enum` can also be defined with multiple generic type parameters. The following example showcases how to do so:

```rust
struct Coordinates<T, U> {
  x: T,
  y: U,
}

fn main() {
  let mixed_coord = Coordinates {x:10, y:5.9};
  println!("mixed_coord: ({}, {})", mixed_coord.x, mixed_coord.y);
}
```

The above example will give the following output without any `mismatched types` error:

```shell
mixed_coord: (10, 5.9)
```

## Trait Bounds in Generics

In Rust, a **trait** is a collection of methods that define behaviour. **Trait bounds** specify that a type must implement a given trait which will be used in a particular context. They help to ensure type safety, enable polymorphism and clearly states the capabilities of the generic type, thereby improving code readability.

The following is an example of a generic function that returns the sum of two integers using trait bounds:

```rust
fn sum<T:std::ops::Add<Output = T>>(a: T, b: T) -> T {
  return a + b;
}

fn main() {
  println!("Sum of 4 and 5 is {}", sum(4, 5));
}
```

Here, `T` is bounded by `std::ops::Add` to ensure that the `+` operator can be used.

The above example will provide the following output:

```shell
Sum of 4 and 5 is 9
```
