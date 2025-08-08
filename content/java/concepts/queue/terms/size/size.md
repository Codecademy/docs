---
Title: 'size'
Description: 'Returns the number of elements in a queue in Java.'
Subjects:
  - 'java'
  - 'queues'
Tags:
  - 'java'
  - 'queue-methods'
  - 'collections'
CatalogContent:
  - 'learn-java'
  - 'paths/java-fundamentals'
---

**size()** is a method in Java that returns the number of elements currently present in a collection like a queue. It helps to determine how many items are stored in the queue at any given moment.

## Syntax

```java
int size()
```

- Takes no parameters.
- Returns an integer representing the count of elements in the queue.
- Available in classes implementing the `Queue` interface, such as `LinkedList` and `PriorityQueue`.

## Example

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

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
// Example runnable Java code to illustrate size concept using Queue interface
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

