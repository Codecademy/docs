---
Title: '.addAll()'
Description: 'Adds a collection to an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.addAll()`** method is used to add the contents of a collection to an instance of the [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) class.

## Syntax

```pseudo
arrayListInstance.addAll(index, collection);
```

The contents of `collection` are inserted into the `arrayListInstance` at the specified `index`. The `collection` must be of the same [data type](https://www.codecademy.com/resources/docs/java/data-types) as `arrayListInstance`.

## Example

The following example creates two `ArrayList`s and inserts one into the other.

```java
import java.util.ArrayList;

public class testAddAll {
  public static void main(String[] args) {

    // Create first ArrayList
    ArrayList<String> list1 = new ArrayList<String>();

    // Add items to first ArrayList
    list1.add("A");
    list1.add("B");
    list1.add("C");
    list1.add("D");

    // Create second ArrayList
    ArrayList<String> list2 = new ArrayList<String>();

    // Add items to second ArrayList
    list2.add("W");
    list2.add("X");
    list2.add("Y");
    list2.add("Z");

    // Print first ArrayList
    System.out.println("List 1:");
    System.out.println(list1);

    // Print second ArrayList
    System.out.println("List 2:");
    System.out.println(list2);

    // Add second ArrayList to first ArrayList at index 3
    list1.addAll(3, list2);

    // Print the combined ArrayList
    System.out.println("List 1 + List 2:");
    System.out.println(list1);
  }
}
```

The output would look like this:

```shell
List 1:
[A, B, C, D]
List 2:
[W, X, Y, Z]
List 1 + List 2:
[A, B, C, W, X, Y, Z, D]
```
