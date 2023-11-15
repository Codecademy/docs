---
Title: 'Smart Pointers'
Description: 'Smart Pointers are abstract data types that store memory addresses of variables and have additional metadata and capabilities, such as automatic memory management and bounds checking.'
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

### Box&lt;T&gt;

The `Box<T>` smart pointer is used to store data on the heap rather than the stack. All that remains on the stack will be the pointer to the heap data.

```pseudo
let boxed_value: Box<i32> = Box::new(42);
```

### Rc&lt;T&gt;

The `Rc<T>` stands for Reference Counted smart pointer type. This pointer keeps a record of the number of references you have for each variable in your code. When the reference count reaches zero, they are no longer in use, and the smart pointer cleans them up.

```pseudo
use std::rc::Rc;

let shared_value: Rc<i32> = Rc::new(42);
```

### RefCell&lt;T&gt; (Ref&lt;T&gt; and RefMut&lt;T&gt;)

The `RefCell<T>` is a smart pointer type that executes the borrowing rules at runtime rather than at compile time. RefCell<T> uses a design pattern called "interior mutability", which allows the data to be mutated with immutable references.

```pseudo
use std::cell::RefCell;

let mutable_data = RefCell::new(42);
```

## Examples

### Box&lt;T&gt;

```rust
fn main() {
	let stack_data = 10;
	let heap_data = Box::new(stack_data); // Creates pointer to the data in the heap
	println!("Heap Data = {}", heap_data); // Prints output, which will be 10
}
```

This example results in the following output:

```shell
Heap Data = 10
```

### Rc&lt;T&gt;

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
    println!("The count after creating first_tree is {}", Rc::strong_count(&first_tree)); // Output would be 1

    let second_tree = Node(8, Rc::clone(&first_tree));
    println!("The count after creating second_tree is {}", Rc::strong_count(&first_tree)); // Output would be 2

    {
        let third_tree = Node(9, Rc::clone(&first_tree));
        println!("The count after creating third_tree is {}", Rc::strong_count(&first_tree)); // Output would be 3
    }

    println!("The count after third_tree goes out of scope is {}", Rc::strong_count(&first_tree)); // Since third_tree was declared out of scope, the output would be 2
}
```

This example results in the following output:

```shell
The count after creating the first_tree is 1
The count after creating the second_tree is 2
The count after creating the third_tree is 3
The count after third_tree goes out of scope is 2
```

### RefCell&lt;T&gt; (Ref&lt;T&gt; and RefMut&lt;T&gt;)

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

This example results in the following output:

```shell
Updated data value: 50
```