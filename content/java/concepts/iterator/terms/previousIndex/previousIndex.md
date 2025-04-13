---
Title: '.previousIndex()'
Description: 'Returns the index of the previous element from a ListIterator object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.previousIndex()`** method returns the index of the previous element from a `ListIterator` object. If there is not a previous element, it returns -1.

## Syntax

```pseudo
int value = myListIterator.previousIndex();
```

Where `myListIterator` is a `ListIterator` object.

## Example

The following example uses a `ListIterator` to traverse an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then traverse it back in the opposite direction, printing the indices of each item:

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

    // Loop back through ArrayList contents
    while(i.hasPrevious()) {
      int index = i.previousIndex();
      Object item = i.previous();
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
4: E
3: D
2: C
1: B
0: A
```
