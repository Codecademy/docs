---
Title: 'Smart Pointers'
Description: 'Smart Pointers are abstract data types that store memory addresses of variables, but also have additional metadata and capabilities such as automatic memory management or bounds checking.'
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

**Smart Pointers** are abstract data types that store memory addresses of variables, but also have additional metadata and capabilities such as automatic memory management or bounds checking. The most common smart pointers in Rust include `Box<T>`, `Rc<T>`, `Ref<T>` and `RefMut<T>`.

## Syntax

### Box<T>

The `Box<T>` smart pointer is used to store data on the heap rather than the stack. All that remains on the stack will be the pointer to the heap data.

```pseudo
fn main() {
	let stack_data = 10;
	let heap_data = Box::new(stack_data); // Creates pointer to the data in the heap
	println!("Heap Data = {}", heap_data); // Prints output, which will be 10
}
```

### Rc<T>

The `Rc<T>` stands for Reference Counted smart pointer type. This pointer keeps a record of the number of references you have for each variable in your code. When the reference count reaches zero, they are no longer in use, and the smart pointer cleans them up.