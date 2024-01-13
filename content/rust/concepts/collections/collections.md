---
Title: 'Collections'
Description: 'A collaction refers to data structures that can store multiple values.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'collections'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, **collections** are fundamental data structures offered by the standard library, enabling the storage and manipulation of multiple values. These dynamic structures differ from fixed-size `arrays` and `tuples` by allowing a variable number of elements. The key advantage lies in their ability to dynamically allocate memory on the heap, which mean that the amount of data does not need to be known at compile time and can shrink and grow during runtime.The most common used collection data types include `vector` `string` and `hash map`.The rest include `VecDeque`,`LinkedList`, `HashMap`,`BTreeMap`,`set` and `BinaryHeap`.

## Vectore

The `Vec<T>` in rust is a dynamic array that allow to store values of the same type in single data structure that puts all values in a contigous memory block.Its useful when you have a list of items such as text in a file or prices of items in a shopping cart.
The vectore array can be created in two ways using a macro `vec![]` or `Vec::new()` constructor.

```rust

let mut vec1: Vec<i32> = Vec::new() // Creates an empty vector of integers

let vec2 = vec![5, 2, 3]; // Creates a vector with initial values

```

## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
