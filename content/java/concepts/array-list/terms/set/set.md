---
Title: '.set()'
Description: 'Replaces the element present at a specified position with another element in an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Index'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.set()`** [method](https://www.codecademy.com/resources/docs/java/methods) replaces the element present at a specified position with another element in an `ArrayList`. After execution, the method returns the replaced element.

Understanding how `.set()` works is crucial when dealing with mutable lists in Java, especially when updating or modifying elements during processing.

## Syntax

```pseudo
arrayList.set(index, element);
```

**Parameters:**

- `index`: The position in the list where the element should be replaced.
- `element`: The new element that will replace the old one at the given index.

**Return value:**

The `.set()` method returns the replaced element.

> **Note:** The `element` must be of the same [data type](https://www.codecademy.com/resources/docs/java/data-types) as the rest of the elements in the `arrayList`. Otherwise, an [error](https://www.codecademy.com/resources/docs/java/errors) will occur.

## Example 1: Basic Usage of `.set()`

This example uses the `.set()` method to replace elements at multiple positions in an `ArrayList`:

```java
import java.util.ArrayList;

public class Students {
  public static void main(String[] args) {
    // Create an ArrayList
    ArrayList<String> studentList = new ArrayList<String>();

    // Add values to the ArrayList
    studentList.add("John");
    studentList.add("Lily");
    studentList.add("Samantha");
    studentList.add("Tony");

    // Replace elements at multiple positions in the ArrayList
    String replacedStudentOne = studentList.set(1, "David");
    String replacedStudentTwo = studentList.set(2, "George");

    // Print the updated ArrayList
    System.out.println("Updated ArrayList: " + studentList);
  }
}
```

Here is the output:

```shell
Updated ArrayList: [John, David, George, Tony]
```

## Example 2: Using `.set()` with Integers

This example uses the `.set()` method to replace an integer with another integer in an `ArrayList`:

```java
import java.util.ArrayList;

public class Example2 {
  public static void main(String[] args) {
    // Create an ArrayList
    ArrayList<Integer> numbers = new ArrayList<>();

    // Add values to the ArrayList
    numbers.add(10);
    numbers.add(20);
    numbers.add(30);

    // Replace the second element
    numbers.set(1, 99);

    // Print the updated ArrayList
    System.out.println(numbers);
  }
}
```

Here is the output:

```shell
[10, 99, 30]
```

## Example 3: Handling Index Errors

This example attempts to replace an element at an out-of-bounds index using the `.set()` method, resulting in an `IndexOutOfBoundsException`:

```java
import java.util.ArrayList;

public class Example3 {
  public static void main(String[] args) {
    // Create an ArrayList
    ArrayList<String> colors = new ArrayList<>();

    // Add values to the ArrayList
    colors.add("Red");
    colors.add("Green");

    try {
        colors.set(5, "Blue");
    } catch (IndexOutOfBoundsException e) {
        System.out.println("Error: " + e.getMessage());
    }
  }
}
```

In this example, the `try...catch` block is used to catch the exception and display the error message.

Here is the output:

```shell
Error: Index 5 out of bounds for length 2
```

## Frequently Asked Questions

### 1. Can `.set()` be used to add new elements to a list?

No. The `.set()` method only replaces existing elements. To add a new element, use `.add()`.

### 2. Is `.set()` available for all collections in Java?

No. `.set()` is only available for classes that implement the `List` interface, such as `ArrayList`, `LinkedList`, and `Vector`.

### 3. Does `.set()` change the size of the list?

No. `.set()` only modifies the value at the specified index.
