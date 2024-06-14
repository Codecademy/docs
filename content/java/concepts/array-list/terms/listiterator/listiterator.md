---
Title: '.listIterator()'
Description: 'Returns a ListIterator over the elements in ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Elements'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `ArrayList` [class](https://www.codecademy.com/resources/docs/java/classes) in Java implements the **`ListIterator`** interface using the **`.listiterator()`** [method](https://www.codecademy.com/resources/docs/java/methods). The default method returns a `ListIterator` that points to the first element in the `ArrayList`. This method can be used to traverse the list in either direction and modify the list concurrently.

- **`.hasNext()`**: This method returns true if there are remaining elements in the list.
- **`.next()`**: This method returns the next list element and moves forward one index.

## Syntax

```pseudo
public ListIterator<T> it = list.listiterator();
```
This creates a ListIterator on the given `list` [collection](https://www.codecademy.com/resources/docs/java/collection). `T` represents the type of the elements in `list`.

## Examples

### Example 1

In this example, the `.listiterator()` method is called on the `ArrayList` instance named `arrayList` to obtain a `ListIterator` for its elements:

```java
import java.util.ArrayList;
import java.util.ListIterator;

public class ArrayListListIteratorExample {
  public static void main(String[] args) {

    // Creating an ArrayList
    ArrayList<String> arrayList = new ArrayList<>();
    arrayList.add("A");
    arrayList.add("B");
    arrayList.add("C");
    arrayList.add("D");

    // Creating a ListIterator from ArrayList
    ListIterator<String> it = arrayList.listiterator();

    // Iterating through the elements and printing them
    while (it.hasNext) {
        System.out.println(it.next());
    }
  }
}
```

The output of the mentioned code is as follows:

```shell
A
B
C
D
```

### Example 2

In this example, we create a ListIterator at a specified index.

```java
import java.util.ArrayList;
import java.util.List;
```

The output of the mentioned code is as follows:

```shell
test
```
