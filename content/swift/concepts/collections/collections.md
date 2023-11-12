---
Title: 'Collections'
Description: 'Collections are data structures for organizing, managing, and manipulating multiple elements.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Collections** are fundamental data structures in Swift for organizing, managing, and manipulating multiple elements. Collections' structured and efficient nature makes them essential tools for both user interface development and general programming tasks. The most common types of collections in Swift include:

- [Arrays](https://www.codecademy.com/resources/docs/swift/arrays),
- [Dictionaries](https://www.codecademy.com/resources/docs/swift/dictionaries),
- [Sets](https://www.codecademy.com/resources/docs/swift/sets),
- [Tuples](https://www.codecademy.com/resources/docs/swift/tuples)

## Syntax

Collections are created by declaring variables with specifying the its type and elements in it:

```pseudo
var collectionName: CollectionType = collectionElements
```

- `var` is a keyword used to declare a [variable](https://www.codecademy.com/resources/docs/swift/variables) in Swift.
- `collectionName` is the name of the collection.
- `collectionType` specifies the  type the collection and the [data type](https://www.codecademy.com/resources/docs/swift/data-types) of the elements in it. For instance, an array of integers can store a list of numbers, a dictionary of strings and integers can hold names with corresponding ages, or a set of unique URL values can keep track of visited websites. The choice of data type depends on the specific nature of the data to store and manage. Here are some common used `collectionType`s:

  | `collectionType` | Result                                                       |
  |------------------|--------------------------------------------------------------|
  | `[Int]`          | An array of integers.                                        |
  | `Set<String>`    | A set of strings.                                            |
  | `[String: Int]`  | A dictionary where keys are strings and values are integers. |
  | `(Int, String)`  | A tuple that stores an integer and a string.                 |

- `collectionElements` is an initializer that specifies the elements in the collection.

## Types of Collections

Swift provides a wide range of collections for different applications. The complete list of the types of collections are listed in the table below:

| Name            | Type        | Definition |
|-----------------|-------------|-------------------------------------------------------|
| Array           | Fundamental | Ordered collection of elements of the same data type. |
| Dictionary      | Fundamental | Unordered collection of key-value pairs.              |
| Linked List     | Fundamental | Linear data structure consisting of a sequence of nodes, each of which contains a value and a pointer to the next node in the list. |
| Queue           | Fundamental | First-in-first-out data structure that allows the addition and removal of the elements in a specific order. |
| Range           | Specialized | Contiguous sequence of elements in a collection.      |
| Set             | Fundamental | Unordered collection of unique elements.              |
| Stack           | Fundamental | Last-in-first-out data structure that allows developers to add and remove elements in the reverse order of which they were added. |
| Slice           | Specialized | Mutable sequence of elements in a collection.         |
| Tree            | Fundamental | Hierarchical data structure consisting of a root node and a collection of child nodes. |
| Tuple           | Fundamental | Fixed-size collection of elements of possibly different data types. |
| Lazy Collection | Specialized | Collection that is not evaluated until it is needed.  |
| Collection View | Specialized | Specialized view that is used to display collections in user interfaces. |

## Working with Collections in Swift

Depending on the type of the collection, different operations are available in Swift to use collections. The most common used operations on collections are:

- Accessing elements of a collection
- Modifying elements of a collection
- Iterating over a collection.

As the type of collection varies a lot, the possible operations also differs and not all operation are possible for every collection. The table below shows the possible actions for the most commonly used collections:

| Collection                              | Array | Dictionary | Set | Tuple |
|-----------------------------------------|-------|------------|-----|-------|
| Access element / key-value pair         | `[]` subscript operator | `[]` subscript getter | - | `.` operator |
| Add element / value for key             | `append()` method | `[]` subscript setter | `insert()` method | - |
| Modify element                          | `[]` subscript operator | `[]` subscript setter | - | `.` operator |
| Remove element / key-value pair         | `remove(at:)` method | `removeValue(forKey:)` method | `remove()` method | - |
| Iterate over elements / key-value pairs | `for`-`in` loop | `for`-`in` loop | `for`-`in` loop | - |
| Search for elements                     | `contains()` method | - | - | - |
| Sort elements                           | `sorted()` method | - | - | - |
| Filter elements                         | `filter()` method | - | - | - |
| Check for membership / key              | - | `contains()` method | `contains()` method | - |
| Find intersection                       | - | - | `intersection()` method | - |
| Find union                              | - | - | `union()` method | - |

## Performance of Collections

The performance of collections in Swift depends on a number of factors, including the type of collection, the size of the collection, and the operations that are being performed on the collection, the way of implementation and if the compiler optimizations are enabled. The table below shows the difference in performance of the most common used collections:

| Collection | Higher Performance | Lower Performance |
|------------|--------------------|-------------------|
| Array      | Random access: arrays store their elements in contiguous memory, which makes it easy to access any element in the array in constant time. |  Inserting and deleting elements: this can require shifting the elements of the array in memory. |
| Dictionary |  Searching for elements: they use a hash table to store their key-value pairs. | Random access: it can take some time to find the key-value pair for a given key. |
| Set        | Checking for membership and finding intersections, difference and unions of sets: they  store unique elements in an unordered way. | Random access: elements are not stored in a contiguous memory location, so to access a specific element in a set, the entire set must be searched. |

## Benefits of Using Collections

Collections are fundamental data structures in Swift that provide various benefits, such as:

- Organization and Management: Collections provide a structured way to organize and manage multiple data items, making them easier to access, iterate over, and manipulate.
- Efficient Data Handling: Collections are optimized for efficient data handling, making them suitable for storing and managing large amounts of data.
- Declarative Syntax: Swift's declarative syntax simplifies the creation and management of collections. This declarative approach reduces boilerplate code and improves code readability.
- Algorithm Support: Swift provides a rich collection of algorithms for manipulating collections, such as searching, sorting, and filtering.
- Memory Management: Collections are automatically managed by Swift's memory management system, ensuring efficient usage and preventing memory leaks.
- Type Safety: Swift's type system ensures that collections can only store elements of the same type. This prevents errors caused by incompatible data types and enhances code reliability.
- Interoperability: Collections can be easily converted to other data structures, such as arrays or dictionaries, and vice versa. This creates a seamless work with data in different formats and allows integration with existing codebases.

## Example

The following example initializes the `colors` array with four color names. Then, it showcases how to access elements by index. Afterwards, it adds a new element to the `colors` array using the `append` method. Then, the example demonstrates removing an element from the array with the `remove` method. Finally, the example demonstrates how to iterate through the `colors` array using a `for-in` loop and prints each color individually.

```swift
// Define an array of strings
var colors: [String] = ["Yellow", "Purple", "Orange", "Green"]

// Access and print elements
print(colors[0])  // Output: Yellow
print(colors[2])  // Output: Orange

// Add an element
colors.append("Red")
print(colors)  // Output: ["Yellow", "Purple", "Orange", "Green", "Red"]

// Remove an element
colors.remove(at: 1)
print(colors)  // Output: ["Yellow", "Orange", "Green", "Red"]

// Iterate through the array
for color in colors {
    print(color)
}

// Output:
// Yellow
// Orange
// Green
// Red
```
