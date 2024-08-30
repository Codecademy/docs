---
Title: 'Comments'
Description: 'A comment is a line, or a few lines, of text that adds an extra explanation to the code to ease readability of the code.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Best Practices'
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

A **comment** is a line, or few lines, of text that adds extra explanation to the code to ease readability of the code. Any comment will be ignored and not executed by the compiler. In Rust programming, there are two types of comments:

- Line comments
- Block comments

## Line comments

Line comments are single lines of comments. The `//` syntax denotes the line of comment which can be placed either before a line of code or at the end of it.

```rust
fn main() {
  //A line comment just before the line of code!
  println!("Learning about comments in Rust!");

  println!("First, line comments");//A line comment in the same line of code.
}
```

## Block comments

Block comments add various lines of comments. The `/*` syntax starts the block of comments, while the `*/` syntax ends the block.

```rust
fn main() {
  /*
  A block comment
  to add various lines.
  */
  println!("Second, the block comments");
}
```
