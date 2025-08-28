---
Title: 'poll()'
Description: 'Retrieves and removes the head of the queue, or returns null if the queue is empty.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Java'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`poll()`** method of a queue retrieves and removes the head element, or returns `null` if the queue is empty.

## Syntax

```pseudo
E poll()
```

**Parameters:**

The `poll()` method does not take any parameters.

**Return value:**

- Returns the head element (`E`) of the queue and removes it.
- Returns `null` if the queue is empty.

## Example

In this example, a queue is used to store elements and the `poll()` method processes them one by one in FIFO order:

```java
import java.util.Queue;
import java.util.LinkedList;

public class PollQueueExample {
  public static void main(String[] args) {
    // Create a queue
    Queue<String> queue = new LinkedList<>();

    // Add elements to the queue
    queue.add("A");
    queue.add("B");
    queue.add("C");

    // Process elements
    while (!queue.isEmpty()) {
      // Removes and returns the head of the queue
      String element = queue.poll(); 
      System.out.println("Processing element: " + element);
    }
  }
}
```

The output of this code is:

```shell
Processing element: A
Processing element: B
Processing element: C
```
