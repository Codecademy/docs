---
Title: '.spliterator()'
Description: 'Returns a Spliterator over the elements in ArrayList.'
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

In [Java](https://www.codecademy.com/resources/docs/java), a **`Spliterator`** is an [interface](https://www.codecademy.com/resources/docs/java/interfaces) introduced in Java 8 as part of the Stream API(Application Programming Interface). It provides a way to perform parallel traversal over the elements of a source, such as an [array](https://www.codecademy.com/resources/docs/java/arrays), a generator function, etc.

The `ArrayList` [class](https://www.codecademy.com/resources/docs/java/classes) in Java also implements the **`Spliterator`** interface using the **`.spliterator()`** [method](https://www.codecademy.com/resources/docs/java/methods). This method returns a `Spliterator` over the elements in `ArrayList`. It is considered a better way to iterate over elements as it gives more control over them.

The `.spliterator()` method can be combined with a number of other methods:

- **`.tryAdvance()`**: This method is used to iterate elements separately in several [threads](https://www.codecademy.com/resources/docs/java/threading) to enable parallel processing.
- **`.forEachRemaining()`**: This method is used to iterate elements consecutively in a single thread.
- **`.trySplit()`**: This method splits the obtained `Spliterator` into separate parts to facilitate parallel processing.

## Syntax

```pseudo
public Spliterator<T> split = list.spliterator()
```

Here, `T` represents the type of elements in the `list` [collection](https://www.codecademy.com/resources/docs/java/collection). For example, if the collection is of type `List<String>`, i.e., it contains [`String`](https://www.codecademy.com/resources/docs/java/strings) elements, then `T` would be `String`.

## Examples

### Example 1

In this example, the `.spliterator()` method is called on the `ArrayList` instance named `arrayList` to obtain a `Spliterator` for its elements:

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

    // // Iterating elements using the .forEachRemaining() method
    spliterator.forEachRemaining(System.out::println);
  }
}
```

The output of the mentioned code is as follows:

```shell
Java
Python
C++
JavaScript
```

### Example 2

In this example, the `.trySplit()` method is used to split the `Spliterator` into two parts. Then, the `.forEachRemaining()` method is used to traverse over the elements on each part one-by-one:

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

    System.out.println("First Half:");

    // Iterating elements using the .forEachRemaining() method
    spliterator.forEachRemaining(System.out::println);

    System.out.println("Second Half:");

    secondHalf.forEachRemaining(System.out::println);
  }
}
```

The output of the mentioned code is as follows:

```shell
First Half:
PHP
Go
Second Half:
Ruby
Rust
```
