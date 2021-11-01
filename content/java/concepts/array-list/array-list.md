---
Title: 'ArrayList'
Description: 'The ArrayList class uses dynamic arrays for storing elements. Conceptually, it is like an array but with no size limit.'
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

The `ArrayList` class uses dynamic arrays for storing elements. Conceptually, it is like an array but with no size limit.

Elements can be added or removed at any time. Therefore, instances of the `ArrayList` class are much more flexible than the traditional array. This class is found in the `java.util` package.

Some other important points about the `ArrayList` class include:

- It has the ability to contain duplicate elements.
- It maintains insertion order.
- It is non-synchronized and, therefore, not safe for multiple threading.
- It allows random access since arrays work on an index basis.
- The space/time complexity is a bit slower than a LinkedList due to the nature of adding/removing elements.

## Syntax

```java
ArrayList<String> arr = new ArrayList<String>();
```

## Example

```java
// Import from the java.util package
import java.util.ArrayList;

public class Example {
  public static void main(String []args) {
    ArrayList<String> arr = new ArrayList<>();

    System.out.println(arr);  // Prints an empty list

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

The output would be:

```shell
[]
[hello, India]
1
[]
```
