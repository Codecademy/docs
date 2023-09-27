---
Title: '.set()'
Description: 'Replaces the element present in a specified position in an ArrayList.'
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

The **`.set()`** method replaces an element at a specified position with another element in an `ArrayList` instance. After execution, the replaced element is returned.

## Syntax

```pseudo
arrayListInstance.set(index, newElement);
```

An element at a specified `index` is replaced in an `arrayListInstance` with the `newElement`.

> **Note:** The `newElement` must be of the same [data type](https://www.codecademy.com/resources/docs/java/data-types) as the rest of the elements in `arrayListInstance`. Otherwise, an error will occur.

## Example

In the example below, an empty `ArrayList` instance `studentList` is created and can hold `String`-type elements. Next, a few elements are added with the [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method. Lastly, two students are replaced with the `.set()` method:

```java
import java.util.ArrayList;

public class Students {
  public static void main(String[] args) {

    ArrayList<String> studentList = new ArrayList<String>();

    // Add new values to the studentList
    studentList.add("John");
    studentList.add("Lily");
    studentList.add("Samantha");
    studentList.add("Tony");

    // `.set()` method returns replaced element's value
    String replacedStudentOne = studentList.set(1, "David");
    String replacedStudentTwo = studentList.set(2, "George");

    // Output updated ArrayList and replaced elements
    System.out.println("Updated ArrayList: " + studentList);
    System.out.println("Replaced Elements: " + replacedStudentOne + " and " + replacedStudentTwo);
  }
}
```

The output should look like this:

```shell
Updated ArrayList: [John, David, George, Tony]
Replaced Elements: Lily and Samantha
```
