---
Title: 'Iterator'
Description: 'Provides a standardized way to traverse elements in a collection sequentially.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Java iterator** is an interface that provides a standardized way to traverse elements in a collection sequentially, one element at a time. It acts as a cursor, meaning a pointer that moves through the collection and keeps track of the current position during iteration. This allows access to elements individually without exposing the internal structure of the collection.

The iterator can be used with collections such as [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list), `LinkedList`, [`HashSet`](https://www.codecademy.com/resources/docs/java/hashset), and other classes that implement the [`Collection`](https://www.codecademy.com/resources/docs/java/collection) interface. It is part of the Java Collections Framework and is found in the `java.util` package.

## Syntax

To create an iterator, use the following syntax:

```pseudo
Iterator<E> iteratorName = collection.iterator();
```

**Parameters:**

- `collection`: Any object that implements the `Collection` interface
- `E`: The type of elements stored in the collection

**Return value:**

Returns an `Iterator` that can traverse the collection one element at a time

**Key methods:**

- [`hasNext()`](https://www.codecademy.com/resources/docs/java/iterator/hasNext): Returns `true` if there are more elements to iterate over
- [`next()`](https://www.codecademy.com/resources/docs/java/iterator/next): Returns the next element in the iteration and advances the cursor
- [`remove()`](https://www.codecademy.com/resources/docs/java/iterator/remove): Removes the last element returned by the iterator. Not all iterators support this operation.

## Example 1: Basic Java Iterator Usage

This example demonstrates the fundamental usage of an iterator to traverse through an `ArrayList`:

```java
import java.util.ArrayList;
import java.util.Iterator;

public class BasicIteratorExample {
  public static void main(String[] args) {
    // Create an ArrayList and add elements
    ArrayList<String> fruits = new ArrayList<>();
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Cherry");
    fruits.add("Date");

    // Create an iterator for the ArrayList
    Iterator<String> it = fruits.iterator();

    // Iterate through the collection
    while (it.hasNext()) {
      String fruit = it.next();
      System.out.println(fruit);
    }
  }
}
```

The output of the above code is:

```shell
Apple
Banana
Cherry
Date
```

This example creates an `ArrayList` of fruits, obtains an iterator using the `iterator()` method, and uses a `while` loop with `hasNext()` and `next()` methods to traverse and print each element.

## Example 2: Filtering Values in a List Using Java Iterators

This example shows how to use an iterator to filter elements based on a condition:

```java
import java.util.ArrayList;
import java.util.Iterator;

public class FilterExample {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<>();
    numbers.add(10);
    numbers.add(25);
    numbers.add(40);
    numbers.add(55);

    Iterator<Integer> it = numbers.iterator();
    System.out.println("Numbers greater than 30:");
    while (it.hasNext()) {
      int num = it.next();
      if (num > 30) {
        System.out.println(num);
      }
    }
  }
}

```

The output of the above code is:

```shell
Numbers greater than 30:
40
55
```

This example demonstrates using an iterator to process a collection of employee objects, filtering for engineering employees with salaries above $70,000.

## Example 3: Using Java Iterators To Remove Elements During Iteration

This example shows how to use `iterator.remove()` to safely remove matching elements from a list during iteration:

```java
import java.util.ArrayList;
import java.util.Iterator;

public class RemoveExample {
  public static void main(String[] args) {
    ArrayList<String> items = new ArrayList<>();
    items.add("Keep");
    items.add("Remove");
    items.add("Keep");

    Iterator<String> it = items.iterator();
    while (it.hasNext()) {
      String item = it.next();
      if (item.equals("Remove")) {
        it.remove(); // Safe removal
      }
    }

    System.out.println("Updated list: " + items);
  }
}
```

The output of the above code is:

```shell
Updated list: [Keep, Keep]
```

## Frequently Asked Questions

### 1. What is the difference between for loop and iterator?

A traditional for loop uses index access and is limited to indexed collections. An iterator works with all collection types and provides safe element removal during traversal, while modifying collections during for loops can cause issues.

### 2. What is the alternative to iterator in Java?

The main alternatives include enhanced for loops (for-each), traditional for loops, streams, and `ListIterator`. Enhanced for loops are the most common alternative for simple traversal.

### 3. What is the purpose of an iterator?

An iterator provides a standard, safe way to traverse collections without exposing their internal structure. It enables sequential access and supports safe modification during iteration across all collection types.
