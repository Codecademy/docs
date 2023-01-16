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

The `.set()` method is used for replacing element present in a specified position, with another element in instances of the `ArrayList` class. After execution, returns the replaced elements value.

## Syntax

An element can be replaced in an `ArrayList` instance by another element, by passing new value to the `.set()` method on specified index:

```pseudo
arrayListInstance.set(index, element);
```

## Return Value


## Example

In the example below, an empty `ArrayList` instance `studentList` is created and can hold `String`-type elements. Next, a few elements are added with [the `.add()` method](https://www.codecademy.com/resources/docs/java/array-list/add). Lastly, two students are replaced in the `ArrayList` with `.set()` method:

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

The `studentList` output should look like this:

```shell
Updated ArrayList: [John, David, George, Tony]
Replaced Elements: Lily and Samantha
```