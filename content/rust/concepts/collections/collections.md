---
Title: 'Collections'
Description: 'A collection refers to data structures that can store multiple values.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'collections'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, **collections** are fundamental data structures offered by the standard library, enabling the storage and manipulation of multiple values. These dynamic structures differ from fixed-size `arrays` and `tuples` by allowing a variable number of elements. The key advantage lies in their ability to dynamically allocate memory on the heap, which means that the amount of data does not need to be known at compile time and can shrink and grow during runtime. The most commonly used collection data types include `vector`, `string`, and `Hashmap`. The rest include `VecDeque`, `LinkedList`, `BTreeMap`, `set`, and `BinaryHeap`.

## Vectore

The `Vec<T>` in Rust is a dynamic array that allows storing values of the same type in a single data structure that puts all values in a contiguous memory block. It's useful when you have a list of items such as text in a file or prices of items in a shopping cart. The vector array can be created in two ways using a macro `vec![]` or `Vec::new()` constructor:

```rust

let mut vec1: Vec<i32> = Vec::new() // Creates an empty vector of integers

let vec2 = vec![5, 2, 3]; // Creates a vector with initial values

```

## VecDeque

`VecDeque` is a double-ended queue implemented as a growable, contiguous vector. It is part of the standard library and is defined in the `std::collections` module. A `VecDeque` allows efficient insertion and removal of elements at both ends of the `deque`.`VecDeque` can be created in the following way:

```rust
use std::collections::VecDeque;

fn main() {
    // Create a VecDeque with initial elements
    let mut deque: VecDeque<i32> = vec![1, 2, 3].into();

    // Push and pop elements
    deque.push_front(0);
    deque.push_back(4);
    println!("Front pop: {:?}", deque.pop_front());
    println!("Back pop: {:?}", deque.pop_back());

    // Print elements
    for element in &deque {
        println!("{}", element);
    }
}
```

## LinkedList

`LinkedList`, provides dynamic memory allocation and efficient insertions and removals at both ends of the list. The `pop_front` method removes an element from the front, while `pop_back` removes an element from the back if needed.LinkedList can be created in the following way:

```rust
use std::collections::LinkedList;

fn main() {
    // Create an empty LinkedList
    let mut linked_list: LinkedList<i32> = LinkedList::new();

    // Add elements to the list
    linked_list.push_back(1);
    linked_list.push_back(2);
    linked_list.push_front(0);

    // Remove an element from the list
    let removed_element = linked_list.pop_front();

    // Print the removed element
    println!("Removed element: {:?}", removed_element);

    // Iterate over the elements in the list
    for element in &linked_list {
        println!("{}", element);
    }
}
```
