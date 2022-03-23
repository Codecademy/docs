---
Title: '.add()'
Description: 'Adds an element to an ArrayList.'
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

The `.add()` method is used for adding elements to instances of the `ArrayList` class.

## Syntax

An `element` can be added to an instance of `ArrayList` by being passed to the `.add()` method:

```pseudo
arrayListInstance.add(element);
```

## Example

```java
import java.util.ArrayList;

public class Students {
  public static void main(String[] args) {

    // Create an ArrayList called studentList, which initially holds []
    ArrayList<String> studentList = new ArrayList<String>();

    // Add students to the ArrayList
    studentList.add("John");
    studentList.add("Lily");
    studentList.add("Samantha");
    studentList.add("Tony");

    System.out.println(studentList);
  }
}
```

The output from the snippet above would look like this:

```shell
[John, Lily, Samantha, Tony]
```
