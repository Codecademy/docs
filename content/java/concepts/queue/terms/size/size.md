---
Title: 'size()'
Description: 'Returns the number of elements in a queue in Java.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, **`size()`** is a method that returns the number of elements currently present in a collection like a queue, helping determine how many items are stored at any given moment.

## Syntax

```pseudo
queue.size()
```

**Parameters:**

`size()` method does not take any parameters.

**Return value:**

- Returns an integer representing the count of elements in the queue.

## Example 1: Get Queue Length using Java `size()`

 In this example, the `size()` method in Java is used to find the number of elements present in a queue:
 
```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueSizeExample {
  public static void main(String[] args) {
    Queue<String> queue = new LinkedList<>();

    queue.add("Apple");
    queue.add("Banana");
    queue.add("Cherry");

    System.out.println("Queue size: " + queue.size());  // Output: Queue size: 3
  }
}
```

The output of this code is:

```shell
Queue size: 3
```

## Example 2: Check Queue Before Processing

In this example, the `size()` method in Java is used to verify if a queue contains elements before processing them:

```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueSizeCheckExample {
  public static void main(String[] args) {
    Queue<Integer> numbers = new LinkedList<>();

    numbers.add(10);
    numbers.add(20);
    numbers.add(30);

    if (numbers.size() > 0) {
      System.out.println("Queue has " + numbers.size() + " elements. Processing...");
      while (!numbers.isEmpty()) {
        System.out.println("Removed: " + numbers.remove());
      }
    } else {
      System.out.println("Queue is empty. Nothing to process.");
    }
  }
}
```

The output of this code is:

```shell
Queue has 3 elements. Processing...
Removed: 10
Removed: 20
Removed: 30
```

