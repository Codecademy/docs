---
Title: 'ArrayList'
Description: 'A dynamic array class in Java that automatically resizes and offers type safety along with convenient methods for data access and manipulation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Classes'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **ArrayList** is a dynamic array implementation in Java that provides flexible size, type safety, and convenient methods for data manipulation. Unlike traditional [arrays](https://www.codecademy.com/resources/docs/java/arrays) with fixed sizes, ArrayLists dynamically expand and shrink as elements are added or removed, providing more flexibility for data manipulation.

## Syntax

The ArrayList class is part of the java.util package and must be imported before use:

```java
import java.util.ArrayList;
```

## Creating an ArrayList

There are three ways to initialize an ArrayList:

```java
// Empty ArrayList with default initial capacity (10)
ArrayList<DataType> list1 = new ArrayList<>();

// Empty ArrayList with specified initial capacity
ArrayList<DataType> list2 = new ArrayList<>(initialCapacity);

// ArrayList initialized with elements from another collection
ArrayList<DataType> list3 = new ArrayList<>(collection);
```

Where:

- `DataType` is the type of elements the ArrayList will hold
- `initialCapacity` is the initial storage capacity of the ArrayList
- `collection` is another collection whose elements will be added to the ArrayList

## Working with Primitive Types

ArrayList can only store objects, not primitive types. For primitives, use their wrapper classes:

| Primitive Type | Wrapper Class |
| -------------- | ------------- |
| boolean        | Boolean       |
| byte           | Byte          |
| char           | Character     |
| double         | Double        |
| float          | Float         |
| int            | Integer       |
| long           | Long          |
| short          | Short         |

For example, to create an ArrayList of integers:

```java
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);  // Auto-boxing converts int to Integer
```

This process is called auto-boxing, where primitive values are automatically converted to their corresponding wrapper class.

## Comparison with Other Collections

ArrayList has several important characteristics that distinguish it from other [collection](https://www.codecademy.com/resources/docs/java/collection) types:

| Feature            | ArrayList | LinkedList | HashSet |
| ------------------ | --------- | ---------- | ------- |
| Ordered            | Yes       | Yes        | No      |
| Allows Duplicates  | Yes       | Yes        | No      |
| Allows Nulls       | Yes       | Yes        | Yes     |
| Fast Random Access | Yes       | No         | N/A     |
| Thread-Safe        | No        | No         | No      |

## Example

In this example, a new `ArrayList` instance `arr` is defined. There are print statements throughout to show elements being added to and removed from `arr` before it is ultimately cleared:

```java
// Import from the java.util package
import java.util.ArrayList;

public class Example {
  public static void main(String []args) {
    ArrayList<String> arr = new ArrayList<>();

    System.out.println(arr);  // Currently empty

    arr.add("hello");
    arr.add("India");

    System.out.println(arr);

    arr.remove("hello");

    System.out.println(arr.size());  // Prints size of ArrayList

    arr.clear();

    System.out.println(arr); // Empty again
  }
}
```

The output would be:

```shell
[]
[hello, India]
1
[]
```

## Frequently Asked Questions

### 1. What is the difference between ArrayList and LinkedList?

ArrayList is better for fast random access and low overhead; LinkedList is better for frequent insertions/deletions.

### 2. What is an ArrayList vs. array?

ArrayLists are dynamic and only hold objects. Arrays are fixed-size and can hold primitives or objects.

### 3. Does ArrayList allow duplicates?

Yes, it maintains insertion order and allows duplicate elements.
