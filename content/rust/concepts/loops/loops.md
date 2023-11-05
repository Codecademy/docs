---
Title: 'Loops'
Description: 'A loop is a control structure that allows you to repeatedly execute a block of code.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Loops'
CatalogContent:
  - 'Learn-rust'
  - 'paths/computer-science'
---

A `loop` is a control structure that allows you to execute a block of code repeatedly. Loops are used to perform tasks that need to be done multiple times, such as iterating through a list of items, performing calculations, or waiting for a specific condition to be met.There typically three main types `for`, `while` and `loop`.

## for loops

The `for` loop is used to iterate over collections or ranges.It automatically iterates through elements and executes a block of code for each item in the collection or range.It's commonly used for iterating over arrays, vectors, and other iterable data structures.

```rust
let numbers = ["A", 2,20, 4, 5];
for num in numbers.iter() {
    // Code to be executed for each element in the array
    println!("Number: {}", num);
}
```

## while loops

The `while` loop repeatedly executes a block of code as long as a specified condition remains true.It checks the condition before entering the loop, and if the condition is initially false, the loop won't run.While loops are useful when you don't know in advance how many iterations are needed.

```rust
let mut counter = 0;
while counter < 5 {
    // Code to be executed while the condition is true
    counter += 1;
}
```

## loop loops

The `loop` keyword creates an infinite loop that continues executing the code block indefinitely until it's explicitly interrupted using the break statement.It's useful when you need to perform a task until a certain condition is met within the loop.

```rust
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

## Example

This example demonstrates a `while` loop that iterates from `5` to `10` as the counter variable starts from `5`.The second example shows a `for` loop that iterates over an array that containe numbers `1` to `5` .

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
