---
Title: '.set()'
Description: 'Replaces the current entry in the underlying collection of a ListIterator object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.set()`** method replaces the current entry in the underlying collection of a `ListIterator` object. This is the last item returned by the [`.next()`](https://www.codecademy.com/resources/docs/java/iterator/next) or [`.previous()`](https://www.codecademy.com/resources/docs/java/iterator/previous) methods.

## Syntax

```pseudo
myListIterator.set(value);
```

Where `myListIterator` is a `ListIterator` object, and `value` is the object to use in replacing the current element in the underlying collection.

## Example

This example populates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then replaces the existing values in the collection:

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

    System.out.println(l);

    ListIterator i = l.listIterator();

    // Loop through ArrayList contents
    while(i.hasNext()) {
      int item = (Integer) i.next();
      i.set(item * 2);
    }

    System.out.println(l);
  }
}
```

This results in the following output:

```shell
[1, 2, 3, 4, 5]
[2, 4, 6, 8, 10]
```
