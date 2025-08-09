---
Title: '.remove()'
Description: 'Removes and returns the head of the queue; throws an exception if the queue is empty.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Queues'
  - 'Collections'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface's **`.remove()`** method removes and returns the element at the head (front) of the queue. If the queue is empty, it throws a `NoSuchElementException`.

## Syntax

```pseudo
queue.remove()
```

- **Receiver**: `queue` is an instance of `Queue<E>` from `java.util`.
- **Returns**: `E` — the head element.
- **Throws**: `NoSuchElementException` if the queue is empty.

Note: Do not confuse this with `remove(Object o)`, which is inherited from `Collection` and removes a single matching element from the queue if present.

## Example

The example below uses a `LinkedList` implementation to demonstrate `.remove()` returning and deleting the head element:

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