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

The `ArrayList` [class](https://www.codecademy.com/resources/docs/java/classes) in Java provides the `.listIterator()` [method](https://www.codecademy.com/resources/docs/java/methods) to obtain a `ListIterator` for its elements. The default method returns a `ListIterator` that points to the first element in the `ArrayList`. This iterator allows for traversing the list in both forward and backward directions and supports modifications to the list during iteration.

## Syntax

```pseudo
public ListIterator<T> it = list.listiterator();
public ListIterator<T> it = list.listiterator(int index);
```

- This creates a `ListIterator` on the given `ArrayList` [collection](https://www.codecademy.com/resources/docs/java/collection).
- `T`: The type of elements in the `ArrayList`.
- `index`: The starting position of the iterator in the list. It must be a valid index in the list (0 ≤ `index` ≤ size of the list). This is an optional parameter.

## Example 1

In this example, the `.listiterator()` method is called on an `ArrayList` instance named `arrayList` to obtain a `ListIterator` for its elements:

```java
import java.util.ArrayList;
import java.util.ListIterator;

public class ArrayListListIteratorExample {
  public static void main(String[] args) {

    // Creating an ArrayList
    ArrayList<String> arrayList = new ArrayList<>();
    arrayList.add("Nice");
    arrayList.add("to");
    arrayList.add("meet");
    arrayList.add("you");

    // Creating a ListIterator from ArrayList
    ListIterator<String> it = arrayList.listIterator();

    // Iterating through the elements and printing them
    while (it.hasNext()) {
        System.out.println(it.next());
    }
  }
}
```

The output of the mentioned code is as follows:

```shell
Nice
to
meet
you
```

### Example 2

In this example, we create a `ListIterator` at a specified index.

```java
import java.util.ArrayList;
import java.util.ListIterator;

public class ArrayListListIteratorExample {
  public static void main(String[] args) {

    // Creating an ArrayList
    ArrayList<String> arrayList = new ArrayList<>();
    arrayList.add("Nice");
    arrayList.add("to");
    arrayList.add("meet");
    arrayList.add("you");

    // Creating a ListIterator from ArrayList at index 2
    ListIterator<String> it = arrayList.listIterator(2);

    // Iterating through the remaining elements and printing them
    while (it.hasNext()) {
        System.out.println(it.next());
    }
  }
}
```

The output of the mentioned code is as follows:

```shell
meet
you
```

### Example 3

In this example, we create a `ListIterator` at a specified index. Note that if the index is larger than the size of the arraylist, the method will return an `IndexOutOfBounds` exception.

```java
import java.util.ArrayList;
import java.util.ListIterator;

public class ArrayListListIteratorExample {
  public static void main(String[] args) {

    // Creating an ArrayList
    ArrayList<String> arrayList = new ArrayList<>();
    arrayList.add("Nice");
    arrayList.add("to");
    arrayList.add("meet");
    arrayList.add("you");

    System.out.println("ArrayList size: " + arrayList.size());

    try {
        // Attempting to create a ListIterator at index 5
        ListIterator<String> it = arrayList.listIterator(5);
    } catch (IndexOutOfBoundsException e){
        System.out.println("Exception: " + e);
    }
  }
}
```

The output of the mentioned code is as follows:

```shell
ArrayList size: 4
Exception: java.lang.IndexOutOfBoundsException: Index: 5, Size: 4
```
