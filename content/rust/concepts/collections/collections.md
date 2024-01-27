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

In Rust, **collections** are fundamental data structures offered by the standard library, enabling the storage and manipulation of multiple values. These dynamic structures differ from fixed-size `arrays` and `tuples` by allowing a variable number of elements. The key advantage lies in their ability to dynamically allocate memory on the heap, which means that the amount of data does not need to be known at compile time and can shrink and grow during runtime. The most commonly used collection data types include `vector` `string` and `Hashmap`.The rest include `VecDeque`, `LinkedList`, `BTreeMap`, `set`, and `BinaryHeap`.

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

The `HashMap<K, V>` stores a mapping of keys of type K to values of type V using a hashing function. This function is responsible for determining how it places these keys and values into memory. Hash maps are useful when you want to look up data not by using an index, as you can with vectors, but by using a key that can be of any type. Most programming languages support this data structure and have different names such as hash, map, object, hash table, dictionary etc.This data type can be created in the following way:

```rust
    use std::collections::HashMap;

    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

```

## BTreeMap

The `BTreeMap` is another data structure provided by the Rust standard library. It is a type of map that maintains its keys in sorted order. The name "BTreeMap" is derived from the underlying data structure it uses, which is a B-tree.The "B" in B-tree stands for "balanced," indicating that the tree structure is kept balanced to ensure efficient operations.It provides a key-value mapping similar to HashMap, but with the added benefit of keys being sorted.The data type can be created in the following way:

```rust

  let mut btree_map: BTreeMap<&str, i32> = BTreeMap::new(); // Create an empty BTreeMap

  btree_map.insert("one", 1);     //Insert key-value pairs
  btree_map.insert("three", 3);   //Insert key-value pairs

println!("Value for key 'two': {:?}", btree_map.get("two")); // Access and print values

```

## Set

In Rust, the standard library provides a `HashSet` collection, which is an implementation of a set. A set is a collection of unique elements, and the HashSet ensures that each element appears only once.`BTreeSet` is another collection provided by the standard library. It is a set implemented using a B-tree, just like BTreeMap is a map implemented using a B-tree. The `BTreeSet` maintains a sorted set of unique elements. Here's an example of creating and using a `HashSet` and `BTreeSet`:

```rust
use std::collections::{HashSet, BTreeSet};

fn main() {
    // HashSet example
    let mut hash_set: HashSet<i32> = [3, 1, 2].iter().cloned().collect();
    hash_set.remove(&2);
    println!("Is 2 in HashSet? {}", hash_set.contains(&2));
    println!("HashSet elements: {:?}", hash_set);

    // BTreeSet example
    let mut btree_set: BTreeSet<i32> = [3, 1, 2].iter().cloned().collect();
    btree_set.remove(&2);
    println!("Is 2 in BTreeSet? {}", btree_set.contains(&2));
    println!("BTreeSet elements: {:?}", btree_set);
}

```

## BinaryHeap

A `binaryHeap` is a data structure provided by the standard library in the std::collections module.Its useful for scenarios where you need quick access to the maximum element.Elements are ordered such that the parent is always greater than or equal to its children.The data type can be created in the following way:

```rust
use std::collections::BinaryHeap;

fn main() {
    // Create a max binary heap
    let mut max_heap = BinaryHeap::from(vec![4, 2, 8, 5]);

    // Insert elements into the heap
    max_heap.push(10);
    max_heap.push(1);

    // Pop and print elements (max to min)
    while let Some(max_element) = max_heap.pop() {
        println!("{}", max_element);
    }
}

```
