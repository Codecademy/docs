---
Title: '.spliterator()'
Description: 'Returns a Spliterator over the elements in ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---


In Java, a `Spliterator` is an interface introduced in Java 8 as part of the Stream API. It provides a way to traverse elements of a source in parallel.
The `ArrayList` class in Java also implements the `Spliterator` interface, allowing to create spliterators for ArrayLists. It is a better way to traverse over element because it provides more control over elements.

- `tryAdvance()`: This method is used to iterate elements separately in several threads to enable parallel processing.
- `forEachRemaining()`: This method is used to iterate elements consecutively in a single thread.
- `trySplit()`: This method is used to split itself into Sub-Spliterators to facilitate parallel processing.

## Syntax

```pseudo
public Spliterator<T> spliterator()
```

Here, `T` represents the type of elements in the collection. For example, if there is a `List<String>`, then `T` would be `String`.

## Examples

### Example 1

In this example, the `spliterator()` method is called on the `ArrayList` to obtain a `Spliterator` for its elements. 

```java
import java.util.ArrayList;
import java.util.Spliterator;

public class ArrayListSpliteratorExample {
    public static void main(String[] args) {

        // Creating an ArrayList
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Java");
        arrayList.add("Python");
        arrayList.add("C++");
        arrayList.add("JavaScript");

        // Obtaining a Spliterator from ArrayList
        Spliterator<String> spliterator = arrayList.spliterator();

        // Performing some operation using forEachRemaining
        spliterator.forEachRemaining(System.out::println);
    }
}
```

The output of the mentioned code will be as follows:

```shell
Java
Python
C++
JavaScript
```

### Example 2

In this example, the `trySplit` method is used to attempt to split the `Spliterator` into two parts.
Each part is then processed separately using the `processSpliterator` method, and the label indicates whether it's the first or second half.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Spliterator;

public class ArrayListSpliteratorExample {
    public static void main(String[] args) {

        // Creating an ArrayList
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("Ruby");
        arrayList.add("Rust");
        arrayList.add("PHP");
        arrayList.add("Go");

        // Obtaining a Spliterator from ArrayList
        Spliterator<String> spliterator = arrayList.spliterator();

        // Splitting the Spliterator
        Spliterator<String> secondHalf = spliterator.trySplit();

        // Processing the first half
        processSpliterator(spliterator, "First Half");

        // Processing the second half
        processSpliterator(secondHalf, "Second Half");
    }

    private static void processSpliterator(Spliterator<String> spliterator, String label) {
        System.out.println(label);
        spliterator.forEachRemaining(System.out::println);
    }
}
```

The output of the mentioned code will be as follows:

```shell
First Half
Ruby
Rust

Second Half
PHP
Go
```
