---
Title: 'Loops'
Description: 'A loop is a control structure that allows a block of code to be executed repeatedly.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Loops'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

A **loop** is a control structure that enables the repetitive execution of a block of code. Loops are employed for tasks that require multiple iterations, such as iterating through a list of items, performing calculations, or waiting for a specific condition to be met. In Rust there are three main types: `for`, `while` and the infinite `loop`.

## Syntax

### For loop

The `for` loop is used to iterate over collections or ranges. It automatically iterates through elements and executes a code block for each item in the pool or scope. It's commonly used for iterating over arrays, vectors, and other iterable data structures.

```pseudo
let numbers = ["A", 2,20, 4, 5];
for num in numbers.iter() {
    // Code to be executed for each element in the array
    println!("Number: {}", num);
}
```

### While Loop

The `while` loop repeatedly executes a block of code as long as a specified condition remains true. It checks the condition before entering the loop, and if the condition is initially false, the loop won't run. While loops are useful when the number of iterations is not known in advance.

```pseudo
let mut counter = 0;
while counter < 5 {
    // Code to be executed while the condition is true
    counter += 1;
}
```

### Infinite Loop

The `loop` keyword creates an infinite loop that continues executing the code block indefinitely until it's explicitly interrupted with a `break` statement. It's useful when a task must be performed until a certain condition is met within the loop.

```pseudo
fn main() {
    loop {
        println!("Enter 'exit' to quit: ");
        let mut input = String::new();
        std::io::stdin().read_line(&mut input).expect("Failed to read line");

        if input.trim() == "exit" {
            break;
        }
    }
}
```

## Examples

The first example demonstrates a `while loop` that iterates through each integer from `5` to `10`. The second example uses a `for` loop to iterate over an array that contains the integers in the range `1` to `5`.

```rust
fn main() {
    let mut counter = 5;
    while counter <= 10 {
        println!("This is iteration number: {}", counter);
        counter += 1;
    }

    let numbers = [1, 2, 3, 4, 5];

    for number in numbers.iter() {
        println!("Number: {}", number);
    }
}
```

This example results in the following output:

```shell
This is iteration number: 5
This is iteration number: 6
This is iteration number: 7
This is iteration number: 8
This is iteration number: 9
This is iteration number: 10
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```
