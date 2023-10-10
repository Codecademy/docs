---
Title: 'Functions'
Description: 'Functions are blocks of reusable code that can be used to repeat processes throughout a script or program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Game Development'
Tags:
  - 'Functions'
CatalogContent:
  - 'Computer Science'
  - 'rust-for-programmers'
---

**Rust functions** are declared using the `fn` keyword. Its arguments are type annotated, just like variables, and, if the function returns a value, the return type must be specified after an arrow `->`.
Rust code uses _snake_case_ as the conventional style for function and variable names, in which all letters are lowercase and underscores separate words.

Here’s a program that contains an example function definition

```rust
 fn main(){
    println("hello, world!");

    another_function();
 }

 fn another_function(){
    println("This is another function");
 }
```

Here's a program that prints a number

```rust
fn main(){
    print_number(4);
}

fn print_number(x: i32){
    println!("The value of x is: {x}");
}
```

Here's an example in which return type is specified

```rust
fn main(){
    is_equals_to(5, 5);
}

fn is_equals_to(a: u32, b: u32) -> bool {
    if a == b {
        return true;
    }

    return false;
}
```
