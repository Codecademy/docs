---
Title: '.size()'
Description: 'Returns the number of elements in the ArrayList.'
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

The **`.size()`** method of the `ArrayList` class returns the number of elements in the list.

## Syntax

Here, a variable `size` of type [`int`](https://www.codecademy.com/resources/docs/java/data-types) is initialized with the size of a `list`. The `List` [interface](https://www.codecademy.com/resources/docs/java/interfaces) is an ordered collection of elements and is implemented by various classes such as `ArrayList`, `LinkedList`, and `Vector`:

```pseudo
int size = list.size()
```

## Example

The following example creates an `ArrayList`, uses [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) to append elements to it, and uses `.size()` to print out its size:

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create an ArrayList of Strings
    ArrayList<String> list = new ArrayList<>();

    // Add some elements to the list
    list.add("Apple");
    list.add("Banana");
    list.add("Orange");

    // Get the size of the list
    int size = list.size();

    // Print the size of the list
    System.out.println("Size of list: " + size);
  }
}
```

The output for the above code is:

```shell
Size of list: 3
```
