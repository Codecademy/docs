---
Title: 'Slices'
Description: 'Slices in Rust are portions of data used to reutilize specific elements within collections or sequences throughout the program.'
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
 let my_slice = &array_name[start_index..end_index];
```

## Example

```rust
fn main() {
    let my_array = [1, 2, 3, 4, 5];
    let my_slice = &my_array[1..4];
    println!("Slice: {:?}", my_slice);
}
```

### Output

```shell
Slice: [2, 3, 4]
```

## Omit Indexes of a Rust Slice

Slices in Rust provide a convenient way to omit start and end indexes, allowing you to create slices without specifying both or either of these indexes.

### Omitting the Start Index of a Slice

```rust
fn main() {
    let my_array = [1, 2, 3, 4, 5];
    let my_slice = &my_array[..3];
    println!("Slice without start index: {:?}", my_slice);
}
```

#### Output

```shell
Slice without start index: [1, 2, 3]
```

This example illustrates how to create a slice from the start of the array to index **3** (excluding the element at index **3**).

### Omitting the End Index of a Slice

```rust
fn main() {
    let my_array = [1, 2, 3, 4, 5];
    let my_slice = &my_array[2..];
    println!("Slice without end index: {:?}", my_slice);
}
```

#### Output

```shell
Slice without end index: [3, 4, 5]
```

This Example demonstrates how to create a slice from index **2** to the end of the array.

### Omitting both Start and End Index of a Slice

```rust
fn main() {
    let my_array = [1, 2, 3, 4, 5];
    let my_slice = &my_array[..];
    println!("Complete slice: {:?}", my_slice);
}
```

#### Output

```shell
Complete slice: [1, 2, 3, 4, 5]
```

This example displays the complete slice of the array, including all elements.

## Mutable Slice in Rust

In Rust, slices can also be mutable, allowing for the modification of elements within the slice.<br>
Once the slice is marked as mutable, we can change values within the slice.
We can create a mutable slice by using the `&mut` keyword.

### Syntax

```pesudo
let slice = &mut array_name[start_index..end_index];
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

### Output

```shell
Modified Slice: [2, 10, 4]
```

This example demonstrates how to modify an element in a mutable slice. In this case, the second element of the slice is changed from **3** to **10**.

> **Note**: Slices are often used in Rust for tasks like substring extraction, working with subarrays, and allowing multiple parts of a data structure to be manipulated separately without copying the entire data. They offer a flexible and memory-efficient way to handle data subsets.
