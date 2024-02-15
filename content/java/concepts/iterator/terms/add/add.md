---
Title: '.add()'
Description: 'Adds an entry to the underlying collection of a ListIterator object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.add()`** method adds an item to the underlying collection of a `ListIterator` object. This method adds the item before the next element that would be returned by the [`.next()`](https://www.codecademy.com/resources/docs/java/iterator/next) method.

## Syntax

```pseudo
myListIterator.add(value);
```

Where `myListIterator` is a `ListIterator` object, and `value` is the object to add to the underlying collection.

## Example

This example populates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list), then inserts values between the existing values in the collection:

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
      int item = (Integer) i.next();
      i.add(item * 2);
    }

    System.out.println(l);
  }
}
```

This results in the following output:

```shell
[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
```
