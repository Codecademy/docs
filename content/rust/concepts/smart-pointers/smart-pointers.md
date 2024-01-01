---
Title: 'Smart Pointers'
Description: 'Smart Pointers are abstract data types that simulate pointers while providing additional features.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Pointers'
  - 'Data Structures'
  - 'References'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Smart Pointers** are abstract data types that store memory addresses of variables and have additional metadata and capabilities, such as automatic memory management and bounds checking. The most common smart pointers in Rust include `Box<T>`, `Rc<T>`, as well as `Ref<T>` and `RefMut<T>`, which are accessed through `RefCell<T>`.

## Syntax

### Ownership and Heap Allocation with Box&lt T&gt

The `Box<T>` smart pointer is used to store data on the heap rather than the stack. All that remains on the stack is the pointer to the heap data:

```pseudo
let boxed_value: Box<i32> = Box::new(42);
```

- **boxed_value**: It is a variable of type `Box<i32>`. The result is a heap-allocated box that contains an Integer with the value of 42.

### Reference Counted Smart Pointer Type

The `Rc<T>` stands for Reference Counted smart pointer type. This pointer keeps track of the number of references to each variable in the code. When the reference count reaches zero, indicating they are no longer in use, the smart pointer cleans them up:

```pseudo
let shared_value: Rc<i32> = Rc::new(42);
```

- **shared_value** It is a variable of type `Rc<i32>`. The result is a heap-allocated reference-counted smart pointer that contains an Integer with the value of 42.

###  Dynamic Borrow Checking with RefCell&lt;T&gt; and its Borrowed References (Ref&lt;T&gt; and RefMut&lt;T&gt;)

The `RefCell<T>` is a smart pointer type that enforces borrowing rules at runtime instead of compile time. `RefCell<T>` employs a design pattern called "interior mutability," enabling the mutation of data with immutable references:

```pseudo

let mutable_data = RefCell::new(42);
```

- **mutable_data** It is a variable of type `RefCell<i32>`. The result is an instance of the `RefCell<T>` smart pointer, which provides interior mutability.

## Examples

### Illustrating Dynamic Memory Allocation with Box&lt T&gt

This code snippet demonstrates the concept of heap allocation in Rust. It creates an integer (stack_data) on the stack with the value 10. Then, it uses the `Box::new` function to allocate memory on the heap and move the stack_data onto the heap: 

```rust
fn main() {
  let stack_data = 10;
  let heap_data = Box::new(stack_data); // Creates pointer to the data in the heap
  println!("Heap Data = {}", heap_data); // Prints output, which will be 10
}
```

The above example will result in the following output:

```shell
Heap Data = 10
```

### Shared Ownership with Rc&lt;T&gt; in Rust

This code snippet demonstrates the use of reference counting (Rc) to manage shared ownership of a tree-like structure. It creates a simple binary tree (Tree enum) with nodes and leaves. The Rc::new function is used to create reference-counted pointers to share ownership of parts of the tree. The `Rc::strong_count` function is used to count the number of strong references to the `first_tree`:

```rust
use std::rc::Rc;

#[derive(Debug)]
enum Tree {
  Node(i32, Rc<Tree>),
  Leaf,
}

use Tree::{Node, Leaf};

fn main() {
  let first_tree = Rc::new(Node(10, Rc::new(Node(20, Rc::new(Leaf)))));
  println!("The count after creating first_tree is {}", Rc::strong_count(&first_tree));

  let second_tree = Node(8, Rc::clone(&first_tree));
  println!("The count after creating second_tree is {}", Rc::strong_count(&first_tree));

  {
      let third_tree = Node(9, Rc::clone(&first_tree));
      println!("The count after creating third_tree is {}", Rc::strong_count(&first_tree));
  }

  println!("The count after third_tree goes out of scope is {}", Rc::strong_count(&first_tree));
}
```

The above example will result in the following output:

```shell
The count after creating the first_tree is 1
The count after creating the second_tree is 2
The count after creating the third_tree is 3
The count after third_tree goes out of scope is 2
```

### Exploring Dynamic Borrowing in Rust: RefCell&lt T&gt 

This code snippet showcases the use of RefCell for interior mutability. It creates a mutable cell (RefCell) containing an integer with an initial value of 42. The `RefCell::borrow_mut` method is used to obtain a mutable borrow of the data, allowing the value to be updated. Finally, it borrows the data immutably to print its updated value:

```rust
use std::cell::RefCell;

fn main() {
  // Create a mutable data cell with an initial value of 42
  let data = RefCell::new(42);

  // Borrow the mutable data and update its value
  *data.borrow_mut() = 50;

  // Borrow the data immutably and print its value
  println!("Updated data value: {}", *data.borrow());
}
```

The above example will result in the following output:

```shell
Updated data value: 50
```
