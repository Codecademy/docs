---
Title: '.get()'
Description: 'Brings the element present in a specified position in an ArrayList.'
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

The **`.get()`** method brings the element at a specified position within an `ArrayList` instance.

## Syntax

```pseudo
arrayListInstance.get(index);
```

An element at a specified `index` is brought in an `arrayListInstance`.

## Example

In the example below, an empty `ArrayList` instance `studentList` is created and can hold `String`-type elements. Next, a few elements are added with the [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method. Lastly, two students are brought up with the `.get()` method:

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

    // `.get()` method stores element's value
    String StudentOne = studentList.set(0);
    String StudentTwo = studentList.set(1);

    // Output ArrayList and searched elements
    System.out.println("ArrayList: " + studentList);
    System.out.println("Searched Elements: " + StudentOne + " and " + StudentTwo);
  }
}
```

The output should look like this:

```shell
ArrayList: [John, Lily, Samantha, Tony]
Searched Elements: John and Lily
```