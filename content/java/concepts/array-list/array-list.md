---
Title: 'ArrayList'
Description: 'Uses dynamic arrays for storing elements. It is like an array, but there is no size limit.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Classes'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `ArrayList` class uses dynamic arrays for storing elements. Conceptually, an `ArrayList` is like an array, but they have no size limit. Elements can be added or removed at any time. Therefore, instances of the `ArrayList` class are much more flexible than the traditional array. This class is found in the `java.util` package.

Some other important points about the `ArrayList` class include:

- Ability to contain duplicate elements.
- Maintains insertion order.
- It is non-synchronized and, therefore, not safe for multple-threading.
- Allows random access since arrays work on an index basis.
- Space/time complexity is a bit slower than a LinkedList due to the nature of adding/removing elements.

## Syntax

```
ArrayList<String> arr = new ArrayList<String>();
```

## Example

```java
// Import from the java.util package
import java.util.ArrayList;

public class Example {
  public static void main(String []args) {
    ArrayList<String> arr = new ArrayList<>();

    System.out.println(arr);   // Prints an empty list

    arr.add("hello");
    arr.add("India");

    System.out.println(arr);

    arr.remove("hello");  // Removes element with "hello"

    System.out.println(arr.size());  // Returns size of list

    arr.clear();  // Removes all the elements from list

    System.out.println(arr);
    }
}
```

The output will be

```
[]
[hello, India]
1
[]
```
