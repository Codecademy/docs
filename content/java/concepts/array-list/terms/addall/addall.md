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

The `.addAll()` method is used to add the contents of a collection to an instance of the [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) class.

## Syntax

```pseudo
arrayListInstance.addAll(index, collection);
```

The contents of `collection` are inserted into the `arrayListInstance` at the index `index`. The `collection` must be of the same [datatype](https://www.codecademy.com/resources/docs/java/data-types) as `arrayListInstance`.

## Example

The following example creates two `ArrayList`s and inserts one into the other.

```java
import java.util.ArrayList;

public class testAddAll {
  public static void main(String[] args) {

    ArrayList<String> list1 = new ArrayList<String>();

    list1.add("A");
    list1.add("B");
    list1.add("C");
    list1.add("D");

    ArrayList<String> list2 = new ArrayList<String>();

    list2.add("W");
    list2.add("X");
    list2.add("Y");
    list2.add("Z");

    System.out.println("List 1:");
    System.out.println(list1);

    System.out.println("List 2:");
    System.out.println(list2);

    list1.addAll(3,list2);

    System.out.println("List 1 + List 2:");
    System.out.println(list1);

  }
}
```

The output from the snippet above would look like this:

```shell
List 1:
[A, B, C, D]
List 2:
[W, X, Y, Z]
List 1 + List 2:
[A, B, C, W, X, Y, Z, D]
```
