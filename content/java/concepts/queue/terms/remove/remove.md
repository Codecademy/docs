---
Title: 'remove()'
Description: 'Removes and returns the head (first element) of the queue, throwing an exception if the queue is empty.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Java's [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface's **`remove()`** method removes and returns the element at the head (front) of the queue. If the queue is empty, it throws a `NoSuchElementException`.

## Syntax of Java `remove()`

```pseudo
queue.remove()
```

**Parameters:**

The `remove()` method does not take any parameters.

**Return value:**

Returns the element removed from the head of the queue.

**Exception:**

Throws `NoSuchElementException` exception if the queue is empty.

> **Note:** Don’t confuse `remove()` with `remove(Object o)`, which is inherited from [`Collection`](https://www.codecademy.com/resources/docs/java/collection) and removes the first matching element from the queue if it exists.

## Example: Removing the Head Element Using Java Queue remove()

The example here uses a `LinkedList` implementation to demonstrate `.remove()` returning and deleting the head element:

```java
import java.util.Queue;
import java.util.LinkedList;

public class RemoveExample {
  public static void main(String[] args) {
    Queue<String> queue = new LinkedList<>();
    queue.offer("Alice");
    queue.offer("Bob");
    queue.offer("Charlie");

    System.out.println("Queue before remove: " + queue);

    String head = queue.remove(); // removes and returns "Alice"
    System.out.println("Removed head: " + head);
    System.out.println("Queue after remove: " + queue);
  }
}
```

This results in the following output:

```shell
Queue before remove: [Alice, Bob, Charlie]
Removed head: Alice
Queue after remove: [Bob, Charlie]
```
