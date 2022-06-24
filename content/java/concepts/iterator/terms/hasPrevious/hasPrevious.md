---
Title: '.hasPrevious()'
Description: 'Returns true if a ListIterator object has prior elements. Returns false otherwise.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.hasPevious()`** method returns `true` if a `ListIterator` object has prior elements (i.e., elements before the current element). Returns `false` otherwise.

## Syntax

```pseudo
Boolean value = iterator.hasPevious();
```

Where `iterator` is a `ListIterator` object.

## Example

The following example uses a `ListIterator` to traverse an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then traverse back:

```java
import java.util.*;

public class Example {
  public static void main(String args[]) {
    // Create a new ArrayList
    ArrayList l = new ArrayList();

    // Add some items to the ArrayList
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    l.add(5);

    ListIterator i = l.listIterator();

    // Loop through ArrayList contents
    while(i.hasNext()) {
      Object item = i.next();
      System.out.print(item + ", ");
    }

    System.out.println();

    // Loop back through ArrayList contents
    while(i.hasPrevious()) {
      Object item = i.previous();
      System.out.print(item + ", ");
    }
  }
}
```

This example outputs the following:

```shell
1, 2, 3, 4, 5,
5, 4, 3, 2, 1,
```
