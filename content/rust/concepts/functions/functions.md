---
Title: 'Functions'
Description: 'Functions are blocks of reusable code that can be used to repeat processes throughout a script or program.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

## Syntax

Rust functions are declared using the `fn` keyword. Every Rust program has at least one function: the _main_ function, which is the entry point of many programs.

```rust
 fn main(){
    println("hello, world!");

 }
```

## Naming Functions

Rust uses the _snake_case_ convention for function and variable names, in which all letters are lowercase and underscores separate words. Here’s a program that contains an example function definition:

```rust
 fn main(){
    println("hello, world!");

    another_function();
 }

 fn another_function(){
    println("This is another function");
 }
```

Note that, `another_function` can also be declared before as well as after the function `main`. Rust doesn't care about where it is defined, it just must be somewhere in the scope.

## Functions as Parameters

Functions can have parameters, which are special variables that are part of a function’s signature. When a function has parameters, it can be called with concrete values for those parameters.
Here, the declaration of `another_function` has one parameter named `x`. The type of `x` is specified as `i32`. In function signatures, you must declare the type of each parameter.

```rust
fn main() {
    another_function(5);
}

fn another_function(x: i32) {
    println!("The value of x is: {x}");
}
```

Parameters can be passed to function using following techniques-

### Pass by Value

When a method is invoked, a new storage location is created for each value parameter. The values of the actual parameters are copied into them. Hence, the changes made to the parameter inside the invoked method have no effect on the argument.

Here's an example declares a variable `number`, which is initially `5`. The variable is passed as a parameter (by value) to the `make_zero()` function, which changes the value to zero. After the function called it returns back to main method and the value will be same.

```rust
fn main(){
   let number:i32 = 5;
   make_zero(number);
   println!("The value of number is:{}",number);
}

fn make_zero(mut param_num: i32) {
   param_num = 0;
   println!("param_num value is :{}",param_num);
}
```

The output will be -

```pseudo
param_num value is :0
The value of number is:5
```

Note that, `mut` keyword is used to bind value to a variable name which specified the value can be modified inside the function.

### Pass by reference

When you pass parameters by reference, unlike value parameters, a new storage location is not created for these parameters. The reference parameters represent same memory location as the actual parameters. Parameter values can be passed by reference by prefixing the variable name with an `&`.
In the example given below, we have a variable `number`, which is initially `5`. A _reference_ to the variable `number` is passed to the `make_zero()` function. The function now operates on the original variable, After the function is called it returns back to main method, the value of the original variable will be the zero.

```rust
fn main(){
   let mut number:i32 = 5;
   make_zero(&mut number);
   println!("The value of number is:{}",number);
}

fn make_zero(mut param_num:&mut i32) {
   *param_num = 0;
   println!("param_num value is :{}",param_num);
}
```

The output will be-

```pseudo
param_num value is:0
The value of number is:0
```

Note that, `*` operator is used to access value stored in the memory location that variable `param_num` points to. This is also known as _dereferencing_.

## Functions with Return Values

Functions can return values to the code that calls them. Its arguments are type annotated, just like variables, and, if the function returns a value, the return type must be specified after an arrow `->`. In Rust, the return value of the function is determined by the value of the final expression in the block of the body of a function.
Here's an example defining funtion with return values,

```rust
fn number() -> i32 {
    5
}

fn main() {
    let x = number();

    println!("The value of x is: {x}");
}
```

There is no function calls, macros, or even let statements in the function `number`, just the number 5 itself, And that’s a perfectly valid function in Rust.

Now, look at another example-

```rust
fn main() {
    let x = add_one(5);

    println!("The value of x is: {x}");
}

fn add_one(x: i32) -> i32 {
    x + 1
}
```

The output the above code will print `The value of x is: 6`. But if we place a _semicolon_ at the end of the line containing `x + 1`, changing it from an _expression_ to a _statement_, we’ll get an error!

Note that, Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, and it will then not return a value.
