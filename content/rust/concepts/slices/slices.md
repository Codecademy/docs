---
Title: 'Slices'
Description: 'Slices in Rust act as windows into collections, enabling users to focus on and manipulate specific portions of the data without altering the original collection.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Slices'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

**Slices** in Rust are references to a contiguous sequence of elements in memory. They allow you to reference a portion of a collection without making a full copy of the data. Slices provide a view into arrays, vectors, or other sequences, allowing you to work with specific parts of the data.

## Syntax

The syntax for a slice in Rust is represented as `&[T]`, where `T` is the element type.

```pseudo
 let my_slice = &data_structure[start_index..end_index];
```

Where `data_structure` refers to the chosen data structure, `start_index` denotes the starting point, and `end_index` represents one past the last element of the slice. This syntax is applicable to diverse data structures, enabling the creation of slices from different collections.

## Example

```rust
fn main() {
    let my_array = [1, 2, 3, 4, 5];
    let my_slice = &my_array[1..4];
    println!("Slice: {:?}", my_slice);
}
```

The example will result in the following output:

```shell
Slice: [2, 3, 4]
```

## Omit Indexes of a Rust Slice

Slices in Rust provide a convenient way to omit start and end indexes, allowing you to create slices without specifying both or either of these indexes.

### Excluding the Start Index of a Slice

This example illustrates how to create a slice from the start of the array to index 3 (excluding the element at index 3).

```rust
fn main() {
    let my_arr = [1, 2, 3, 4, 5];
    let my_slice = &my_arr[..3];
    println!("Slice without start index: {:?}", my_slice);
}
```

The example will result in the following output:

```shell
Slice without start index: [1, 2, 3]
```

### Excluding the End Index of a Slice

This Example demonstrates how to create a slice from index 2 to the end of the array.

```rust
fn main() {
    let my_arr = [1, 2, 3, 4, 5];
    let my_slice = &my_arr[2..];
    println!("Slice without end index: {:?}", my_slice);
}
```

The example will result in the following output:

```shell
Slice without end index: [3, 4, 5]
```

### Excluding both Start and End Index of a Slice

This example displays the complete slice of the array, including all elements.

```rust
fn main() {
    let my_arr = [1, 2, 3, 4, 5];
    let my_slice = &my_arr[..];
    println!("Complete slice: {:?}", my_slice);
}
```

The example will result in the following output:

```shell
Complete slice: [1, 2, 3, 4, 5]
```

## Rust's Mutable Slices

In Rust, the mutability of slices permits the alteration of elements contained within the slice. When a slice is designated as mutable, it enables the modification of values within the slice. The creation of a mutable slice involves the usage of the `&mut` keyword.

### Syntax

```pesudo
let slice = &mut data_structure[start_index..end_index];
```

### Example

```rust
fn main() {
    let mut my_vec = vec![1, 2, 3, 4, 5];
    let my_slice = &mut my_vec[1..4];

    my_slice[1] = 10; // Modifying the second element of the slice
    println!("Modified Slice: {:?}", my_slice);
}
```

The example will result in the following output:

```shell
Modified Slice: [2, 10, 4]
```

This example demonstrates how to modify an element in a mutable slice. In this case, the second element of the slice is changed from 3 to 10.

> **Note**: Slices are often used in Rust for tasks like substring extraction, working with subarrays, and allowing multiple parts of a data structure to be manipulated separately without copying the entire data. They offer a flexible and memory-efficient way to handle data subsets.
