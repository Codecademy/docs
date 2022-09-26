---
Title: '.next()'
Description: 'Returns the next element from an Iterator or a ListIterator object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.next()`** method returns the next element from an `Iterator` or a `ListIterator` object.

## Syntax

```pseudo
Object value = iterator.next();
```

Where `iterator` is an `Iterator` or a `ListIterator`.

## Example

The following example uses an `Iterator` to traverse an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list):

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

    Iterator i = l.iterator();

    // Loop through ArrayList contents
    while(i.hasNext()) {
      Object item = i.next();
      System.out.print(item + ", ");
    }
  }
}
```

This example outputs the following:

```shell
1, 2, 3, 4, 5,
```
