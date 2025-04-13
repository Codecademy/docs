---
Title: '.trimToSize()'
Description: 'Adjusts the capacity of the ArrayList to be the same as its size.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.trimToSize()`** method of the [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) class adjusts the capacity of the list to be the same as its size.

## Syntax

The `.trimToSize()` method does not require any parameters. It adjusts the capacity of the [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) to be the same as its size:

```pseudo
list.trimToSize();
```

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list), uses [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method to append elements to it, and then trims its capacity to match its size using `.trimToSize()`:

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create an ArrayList of Strings with an initial capacity
    ArrayList<String> list = new ArrayList<>(10);

    // Add some elements to the list
    list.add("Apple");
    list.add("Banana");
    list.add("Orange");

    // Trim the capacity to match the size
    list.trimToSize();

    System.out.println("Trimmed Capacity: " + list.size());
  }
}
```

The output for the above code is:

```shell
Trimmed Capacity: 3
```
