---
Title: 'Conditionals'
Description: 'Conditional statements are the decision-making statements that evaluate an expression to provide control flow in a program.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'paths/computer-science'
  - 'learn/rust-for-programmers'
---

**Conditional** statements in Rust allow the control of flow in program based on certain conditions. Rust provides support for Conditional statements that include `if`, `else if` and `else` statements. Unlike the rest of the programming languages, the condition is not surrounded by paranthesis.

## If Statement

The `if` statement is used to execute a block of code if the evaluating condition is true.

### Syntax

```pseudo
if condition {
  // Code goes here
}
```

### Example

```rust
let number = 15;

if number > 10 {
  println!("This code will be executed.");
}
```

## Else If Statement

The `else if` statement ladder is used to evaluate multiple conditions after the initial `if` statememt. An `else if` statement checks another condition if all prior ones are false.

### Syntax

```pseudo
if condition {
  // Code to be executed if condition is true
} else if condition1 {
  // Code to be executed if condition1 is true
} else if condition2 {
  // Code to be executed if condition2 is true
}
```

Example of `else if` statement:

### Example

```rust
let number = 25;

if number > 40 {
  println!("The number is greater than 40.");
}
else if number > 20 {
  println!("The number is greater than 20.");
}
// In this example, the else if statement will check the condition and since number > 20 is true, it will execute the code of block inside the else if statement.
```

## Else Statement

The `else` statement is used to execute a block of code when all prior conditions are false.

### Syntax

```pseudo
if condition {
  # Code to be executed if condition is true
} else if condition1 {
  # Code to be executed if condition1 is true
} else {
  # Code to be executed if all above conditions are false
}
```

Example of `else` statement:

### Example

```rust
let number = 15;

if number > 40 {
  println!("The number is greater than 40.");
}
else if number > 20 {
  println!("The number is greater than 20.");
}
else {
  println!("This line will be executed.");
}
// In this example, since all the conditions are false, the code of block inside the else statement will be executed.
```
