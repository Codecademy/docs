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

Here we will declare a variable `size` of type [`int`](https://www.codecademy.com/resources/docs/java/data-types)  and initializing it with the size of a `list`. Here the `List` interface is an ordered collection of elements and is implemented by various classes such as `ArrayList`, `LinkedList`, and `Vector`.

```pseudo
int size = list.size()
```

## Example

The following example creates an `ArrayList`, uses `.add()` to add to elements to the `ArrayList`, and uses `.size()` to print the size of the `ArrayList`:

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

```
Size of list: 3
```
