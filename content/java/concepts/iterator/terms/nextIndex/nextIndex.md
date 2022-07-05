---
Title: '.nextIndex()'
Description: 'Returns the index of next element from a ListIterator object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.nextIndex()`** method returns the index of the next element from a `ListIterator` object. If there is not a next element, it returns the size of the underlying list.

## Syntax

```pseudo
int value = myListIterator.nextIndex();
```

Where `myListIterator` is a `ListIterator` object.

## Example

The following example uses a `ListIterator` to traverse an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list), printing the indices of each item:

```java
import java.util.*;

public class Example {
  public static void main(String args[]) {
    // Create a new ArrayList
    ArrayList l = new ArrayList();

    // Add some items to the ArrayList
    l.add("A");
    l.add("B");
    l.add("C");
    l.add("D");
    l.add("E");

    ListIterator i = l.listIterator();

    // Loop through ArrayList contents
    while(i.hasNext()) {
      int index = i.nextIndex();
      Object item = i.next();
      System.out.println(index + ": " + item);
    }
  }
}
```

This example outputs the following:

```shell
0: A
1: B
2: C
3: D
4: E
```
