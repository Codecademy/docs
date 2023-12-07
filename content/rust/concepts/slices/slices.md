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

**Slices** in Rust are references to consecutive elements in memory, allowing you to reference parts of a collection without copying the entire data, providing a view into arrays, vectors, or other sequences for focused data manipulation.

## Syntax

The syntax for a slice in Rust is represented as `&[T]`, where `T` is the element type.

```pseudo
 let my_slice = &data_structure[start_index..end_index];
```

- **data_structure:** Refers to the chosen data structure.
- **start_index:** Denotes the starting point.
- **end_index:** Represents one past the last element of the slice.

> **Note:** This syntax is applicable to many forms of data, enabling the creation of slices from different collections.

## Example

```rust
fn main() {
    let my_array = [1, 2, 3, 4, 5];
    let my_slice = &my_array[1..4];
    println!("Slice: {:?}", my_slice);
}
```

The above example will result in the following output:

```shell
Slice: [2, 3, 4]
```

## Omit Indexes of a Rust Slice

When creating a `slice` in Rust, one can include both the start and end index or one can include only one of the indexes.

### Excluding the Start Index of a Slice

This example illustrates how to create a slice from the start of the array to index `3` (excluding the element at index 3):

```rust
fn main() {
    let my_arr = [1, 2, 3, 4, 5];
    let my_slice = &my_arr[..3];
    println!("Slice without start index: {:?}", my_slice);
}
```

The above example will result in the following output:

```shell
Slice without start index: [1, 2, 3]
```

### Excluding the End Index of a Slice

This example demonstrates how to create a slice from index `2` to the end of the array:

```rust
fn main() {
    let my_arr = [1, 2, 3, 4, 5];
    let my_slice = &my_arr[2..];
    println!("Slice without end index: {:?}", my_slice);
}
```

The above example will result in the following output:

```shell
Slice without end index: [3, 4, 5]
```

### Excluding both the Start and End Index of a Slice

This example displays the complete slice of the array, including all elements:

```rust
fn main() {
    let my_arr = [1, 2, 3, 4, 5];
    let my_slice = &my_arr[..];
    println!("Complete slice: {:?}", my_slice);
}
```

The above example will result in the following output:

```shell
Complete slice: [1, 2, 3, 4, 5]
```

## Rust's Mutable Slices

In Rust, when a slice is designated as mutable, the alteration of the elements within the slice is allowed. The creation of a mutable slice is done by using the `&mut` keyword.

## Mutable Slice Syntax

```pesudo
let slice = &mut data_structure[start_index..end_index];
```

## Mutable Slice Example

The following example demonstrates how to modify an element in a mutable slice. In this case, the second element of the slice is changed from `3` to `10`:

```rust
fn main() {
    let mut my_vec = vec![1, 2, 3, 4, 5];
    let my_slice = &mut my_vec[1..4];

    my_slice[1] = 10; // Modifying the second element of the slice
    println!("Modified Slice: {:?}", my_slice);
}
```

The above example will result in the following output:

```shell
Modified Slice: [2, 10, 4]
```

> **Note:** Slices are often used in Rust for tasks like substring extraction, working with subarrays, and allowing multiple parts of a data structure to be manipulated separately without copying the entire data. They offer a flexible and memory-efficient way to handle data subsets.
