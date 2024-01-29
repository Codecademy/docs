---
Title: 'Java-TreeSet'
Description: 'TreeSet is one of the implementations of the SortedSet interface in Java. This type of set uses a Tree for storage. The ordering of the elements is maintained by a set using their natural ordering whether or not an explicit comparator is provided. ex. Set set = new TreeSet<>()'
Subjects:
  - 'Computer science'
Tags:
  - 'Sets'
  - 'Strings'
CatalogContent:
  - 'learn-java'
---

**Tree set** is a sorted collection that stores objects in a tree structure. It stores unique elements and sorts them in ascending order. 

## Syntax

```pseudo
Set <String> treeset = new TreeSet<>();
```

## Example

In the following example, TreeSet is used to store string objects. It can be observed that the TreeSet iterates through the objects in an ascending order. It also doesn't allow duplicate objects.

```java
// Example.java
import java.util.*;
public class MyClass {
  public static void main(String[] args) {
    Set <String> treeset = new TreeSet<>();
    treeset.add("Diablo III");
    treeset.add("The Witcher");
    treeset.add("Doom");
    treeset.add("Doom");

    System.out.println(treeset);
  }
}
```


This results in the following output:

```shell
[Diablo III, Doom, The Witcher]
```
