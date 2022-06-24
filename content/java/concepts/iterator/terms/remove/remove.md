---
Title: '.remove()'
Description: 'Removes an entry from the underlying collection of an Iterator or ListIterator object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.remove()`** method removes an item from the underlying collection of an `Iterator` or a `ListIterator` object. This method removes the current element (i.e., the one returned by the last [`.next()`](https://www.codecademy.com/resources/docs/java/iterator/next) or [`.previous()`](https://www.codecademy.com/resources/docs/java/iterator/previous) method).

## Syntax

```pseudo
iterator.remove();
```

Where `iterator` is an `Iterator` or `ListIterator` object.

## Example

This example populates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then removes the even items with the `.remove()` method:

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
      int item = (Integer) i.next();
      // If item is even remove the element
      if (item % 2 == 0) {
        i.remove();
        }
    }
    System.out.println(l);
  }
}
```

This results in the following output:

```shell
[1, 3, 5]
```
