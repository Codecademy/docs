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

The `size()` method of the `ArrayList` class returns the number of elements in the list.

## Syntax

```pseudo
int size = list.size()
```

## Example

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
Size of list: 3"
```
