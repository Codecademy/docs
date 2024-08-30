---
Title: 'Collections'
Description: 'Data structures for organizing, managing, and manipulating multiple elements.'
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

**Collections** are fundamental data structures in Swift for organizing, managing, and manipulating multiple elements. A collection's structure and efficient operations make them essential tools for user interface development and general programming tasks. The most common types of collections in Swift include:

- [Arrays](https://www.codecademy.com/resources/docs/swift/arrays)
- [Dictionaries](https://www.codecademy.com/resources/docs/swift/dictionaries)
- [Sets](https://www.codecademy.com/resources/docs/swift/sets)
- [Tuples](https://www.codecademy.com/resources/docs/swift/tuples)

## Syntax

Collections are created by declaring variables and specifying the type and elements:

```pseudo
var collectionName: collectionType = collectionElements
```

- `var` is a keyword used to declare a [variable](https://www.codecademy.com/resources/docs/swift/variables) in Swift.
- `collectionName` is the name of the collection.
- `collectionType` specifies the type of the collection and the [data type](https://www.codecademy.com/resources/docs/swift/data-types) of the elements in it. For instance, an array of integers can store a list of numbers, a dictionary of strings and integers can hold names with corresponding ages, or a set of unique URL values can keep track of visited websites. The choice of data type depends on the specific nature of the data to store and manage. Here are some commonly used collection types:

  | `collectionType` | Result                                                       |
  | ---------------- | ------------------------------------------------------------ |
  | `[Int]`          | An array of integers.                                        |
  | `Set<String>`    | A set of strings.                                            |
  | `[String: Int]`  | A dictionary where keys are strings and values are integers. |
  | `(Int, String)`  | A tuple that stores an integer and a string.                 |

- `collectionElements` is an initializer that specifies the elements in the collection.

## Types of Collections

Swift provides a wide range of collections for different applications. The complete list of the types of collections are listed in the table below:

| Name            | Type        | Definition                                                                                                                   |
| --------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Array           | Fundamental | Ordered collection of elements of the same data type.                                                                        |
| Dictionary      | Fundamental | Unordered collection of key-value pairs.                                                                                     |
| Linked List     | Fundamental | Linear data structure consists of a sequence of nodes, each containing a value and a pointer to the next node in the list.   |
| Queue           | Fundamental | First-in-first-out data structure that allows adding and removing the elements in a specific order.                          |
| Range           | Specialized | Contiguous sequence of elements in a collection.                                                                             |
| Set             | Fundamental | Unordered collection of unique elements.                                                                                     |
| Stack           | Fundamental | Last-in-first-out data structure allows developers to add and remove elements in the reverse order in which they were added. |
| Slice           | Specialized | Mutable sequence of elements in a collection.                                                                                |
| Tree            | Fundamental | Hierarchical data structure consisting of a root node and a collection of child nodes.                                       |
| Tuple           | Fundamental | Fixed-size collections that can hold elements of different data types.                                                       |
| Lazy Collection | Specialized | Collection that is not evaluated until needed.                                                                               |
| Collection View | Specialized | Specialized view that displays collections in user interfaces.                                                               |

## Working with Collections in Swift

Each collection has certain capabilities and limitations that often inform how they are used and in which applications. The most common operations on collections are:

- Accessing elements of a collection
- Modifying elements of a collection
- Iterating over the elements of a collection

While some collections share common features, they also possess distinct characteristics, resulting in a broad range of available operations that can vary significantly. The table below catalogs some of these operations for the most widely used collections:

| Collection                              | Array                   | Dictionary                    | Set                     | Tuple        |
| --------------------------------------- | ----------------------- | ----------------------------- | ----------------------- | ------------ |
| Access element / key-value pair         | `[]` subscript operator | `[]` subscript getter         | -                       | `.` operator |
| Add element / value for key             | `append()` method       | `[]` subscript setter         | `insert()` method       | -            |
| Modify element                          | `[]` subscript operator | `[]` subscript setter         | -                       | `.` operator |
| Remove element / key-value pair         | `remove(at:)` method    | `removeValue(forKey:)` method | `remove()` method       | -            |
| Iterate over elements / key-value pairs | `for`-`in` loop         | `for`-`in` loop               | `for`-`in` loop         | -            |
| Search for elements                     | `contains()` method     | -                             | -                       | -            |
| Sort elements                           | `sorted()` method       | -                             | -                       | -            |
| Filter elements                         | `filter()` method       | -                             | -                       | -            |
| Check for membership / key              | -                       | `contains()` method           | `contains()` method     | -            |
| Find intersection                       | -                       | -                             | `intersection()` method | -            |
| Find union                              | -                       | -                             | `union()` method        | -            |

## Performance of Collections

The performance or efficiency of collections in Swift depends on several factors, including the type of collection, the collection size, the operations being performed on the collection, the implementation, and the compiler optimizations that are enabled. Higher performance implies that certain operations are faster and consume fewer resources, making them suitable for specific use cases. Lower performance indicates that some operations may be slower or resource-intensive in comparison. The table below separates the three most commonly used collections in terms of these basic definitions:

| Collection | Higher Performance                                                                                                                        | Lower Performance                                                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Array      | Random access: Arrays store their elements in contiguous memory, which makes it easy to access any element in the array in constant time. | Inserting and deleting elements: this can require shifting the elements of the array in memory.                                                   |
| Dictionary | Searching for elements: They store their key-value pairs using a hash table.                                                              | Random access: finding the key-value pair for a given key can take some time.                                                                     |
| Set        | Checking for membership and finding intersections, differences, and unions of sets: they store unique elements unordered.                 | Random access: elements are not stored in a contiguous memory location, so the entire set must be searched to access a specific element in a set. |

## Benefits of Using Collections

Collections are fundamental data structures in Swift that provide various benefits, such as:

- **Organization and Management:** Collections provide a structured way to organize and manage multiple data items, making them easier to access, iterate, and manipulate.
- **Efficient Data Handling:** Collections are optimized for efficient data handling, making them suitable for storing and managing large amounts of data.
- **Declarative Syntax:** Swift's declarative syntax simplifies the creation and management of collections. This declarative approach reduces boilerplate code and improves code readability.
- **Algorithm Support:** Swift provides a rich collection of algorithms for manipulating collections, such as searching, sorting, and filtering.
- **Memory Management:** Collections are automatically managed by Swift's memory management system, ensuring efficient usage and preventing memory leaks.
- **Type Safety:** Swift's type system ensures that collections can only store elements of the same type. This prevents errors caused by incompatible data types and enhances code reliability.
- **Interoperability:** Collections can be easily converted to other data structures, such as arrays or dictionaries, and vice versa. This can allow for seamless workflows when working with data in different formats and integration with existing codebases.

## Example

The following example initializes the `colors` array with four color names. This array is then modified with the addition of an element, and the removal of another. Finally, a `for-in` loop is used to iterate through the array and print each color individually.

```swift
// Define an array of strings
var colors: [String] = ["Yellow", "Purple", "Orange", "Green"]

// Access and print elements
print(colors[0])
print(colors[2])

// Add an element
colors.append("Red")
print(colors)

// Remove an element
colors.remove(at: 1)
print(colors)

// Iterate through the array
for color in colors {
    print(color)
}
```

The above example will result in the following output:

```shell
Yellow
Orange
["Yellow", "Purple", "Orange", "Green", "Red"]
["Yellow", "Orange", "Green", "Red"]
Yellow
Orange
Green
Red
```
