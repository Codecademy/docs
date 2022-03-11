---
Title: '.remove()'
Description: 'Removes a specified element from an ArrayList.'
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

The `.remove()` method is used for removing specified elements from instances of the `ArrayList` class.

## Syntax

An element can be removed from an `ArrayList` instance by being passed to the `.remove()` method. It can be referenced either by value or index:

```pseudo
arrayListInstance.remove(element);
```

## Example

In the example below, an empty `ArrayList` instance `studentList` is created and can hold `String`-type elements. Next, a few elements are added with [the `.add()` method](https://www.codecademy.com/resources/docs/java/array-list/add). Lastly, two students are removed from the `ArrayList` with `.remove()`:

```java
import java.util.ArrayList;

public class Students {
  public static void main(String[] args) {

    ArrayList<String> studentList = new ArrayList<String>();

    studentList.add("John");
    studentList.add("Lily");
    studentList.add("Samantha");
    studentList.add("Tony");

    // Remove John via index, then Lily via value
    studentList.remove(0);
    studentList.remove("Lily");

    System.out.println(studentList);
  }
}
```

The `studentList` output should look like this:

```shell
[Samantha, Tony]
```
