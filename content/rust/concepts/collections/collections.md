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

In Rust, **collections** are fundamental data structures offered by the standard library, enabling the storage and manipulation of multiple values. These dynamic structures differ from fixed-size `arrays` and `tuples` by allowing a variable number of elements. The key advantage lies in their ability to dynamically allocate memory on the heap, which means that the amount of data does not need to be known at compile time and can shrink and grow during runtime.The most common used collection data types include `vector` `string` and `Hashmap`.The rest include `VecDeque`,`LinkedList`,`BTreeMap`,`set` and `BinaryHeap`.

## Vectore

The `Vec<T>` in rust is a dynamic array that allow to store values of the same type in single data structure that puts all values in a contigous memory block.Its useful when you have a list of items such as text in a file or prices of items in a shopping cart.
The vectore array can be created in two ways using a macro `vec![]` or `Vec::new()` constructor:

```rust

let mut vec1: Vec<i32> = Vec::new() // Creates an empty vector of integers

let vec2 = vec![5, 2, 3]; // Creates a vector with initial values

```

## String

The `String` collection data type is provided by the Rust standard library rather than being coded into the core language. It is a growable, mutable, owned, and UTF-8 encoded string type. The String collection data type is useful when you want to dynamically create and modify string data at runtime. This data type can be created in the following way:

```rust

let mut s = String::new(); // Creating a new, empty String

// Using the to_string method to create a String from a string literal
    let data = "OOH! I love Rust.";

    let s = data.to_string();

// the method also works on a literal directly:
    let s = "OOH! I love Rust.".to_string();

// Using the String::from function to create a String from a string literal

    let hello = String::from("السلام عليكم");
    let hello = String::from("habari");


```

## HashMap

The `HashMap<K, V>` stores a mapping of keys of type K to values of type V using a hashing function. This function is responsible for determining how it places these keys and values into memory. Hash maps are useful when you want to look up data not by using an index, as you can with vectors, but by using a key that can be of any type. Most programming languages support this data structure and have different names such as hash, map, object, hash table, dictionary etc.

## VecDeque

## LinkedList

## BTreeMap

## set

## BinaryHeap

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
