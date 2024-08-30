---
Title: '.get()'
Description: 'Retrieves the element present in a specified position in an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.get()`** method retrieves the element at some index in an `ArrayList`.

## Syntax

```pseudo
arrayListInstance.get(index);
```

The element at index `index` in `arrayListInstance` is returned. If the index is out of range, an `IndexOutOfBoundsException` will be thrown.

## Example

In the example below, an empty `ArrayList`, `studentList`, is created and populated with several elements of type `String`. The `.get()` method retrieves the students at indexes 0 and 1.

```java
// Students.java
import java.util.ArrayList;

public class Students {
  public static void main(String[] args) {

    ArrayList<String> studentList = new ArrayList<>();

    // Add new values to the studentList
    studentList.add("John");
    studentList.add("Lily");
    studentList.add("Samantha");
    studentList.add("Tony");

    // `.get()` method extracts the element's value
    String StudentOne = studentList.get(0);
    String StudentTwo = studentList.get(1);

    // Output ArrayList and searched elements
    System.out.println("ArrayList: " + studentList);
    System.out.println("Searched Elements: " + StudentOne + " and " + StudentTwo);
  }
}
```

The output will look like this:

```shell
ArrayList: [John, Lily, Samantha, Tony]
Searched Elements: John and Lily
```
