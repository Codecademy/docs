---
Title: '.removeRange()'
Description: 'Removes every element within a specified range.'
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

The `.removeRange()` method is used for removing all elements inside a specified range from an instance of the `ArrayList` class.

## Syntax

Elements within a range can be removed from an `ArrayList` object by passing the range as `int` parameters to the `.removeRange()` method:

```pseudo
arrayListInstance.removeRange(int fromIndex, int toIndex);
```

> **Note:** `fromIndex` and `toIndex` are both inclusive in the elements removed from the `ArrayList`.

## Example

```java
import java.util.ArrayList;

// Extend the class to arraylist because removeRange() is a protected method
public class Tasks extends ArrayList<String> {
  public static void main(String[] args) {

    // Create an ArrayList called tasksList, which will be empty for now.
    Tasks tasksList = new Tasks();

    // Add tasks to the ArrayList
    tasksList.add("Grab lunch");
    tasksList.add("Check mail");
    tasksList.add("Pick up Sammy");
    tasksList.add("Project review");
    tasksList.add("Java terms research");

    // Print the list with the new elements, before removing them.
    System.out.println("Original list: " + tasksList);

    // Remove elements from index 0 to index 3. The first 4 elements.
    tasksList.removeRange(0, 3);

    // Print the list again to see the differences
    System.out.println("List with elements removed: " + tasksList);
   
  }
}
```

The output will look like this:

```shell
Original list: [Grab lunch, Check mail, Pick up Sammy, Project review, Java terms research]
List with elements removed: [Project review, Java terms research]
```
