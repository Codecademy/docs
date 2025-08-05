---
Title: 'Offer'
Description: 'The offer() method in Java Queue interface allows adding elements to the queue without throwing exceptions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Queue'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.offer()`** method is a key operation in the Java `Queue` interface, allowing you to add elements to the queue. It is designed to insert an element at the end of the queue and returns `true` upon success.

If the queue has a capacity limit and is full, it will return `false` instead of throwing an exception, making it a safer option compared to the `add()` method.

This method is particularly useful in scenarios where you want to avoid exceptions and handle full queues gracefully.

## Syntax

```java
Queue<Type> queue = new LinkedList<>();
boolean result = queue.offer(element);
```

### Parameters

- `queue`: The queue to which the element will be added.
- `Type`: The type of elements stored in the queue.
- `element`: The element to be added to the queue.
- `result`: A boolean indicating whether the element was successfully added.

## Key Points

- **Non-blocking**: The `offer()` method does not block the thread if the queue is full; it simply returns `false`.
- **No Exceptions**: Unlike the `add()` method, which throws an `IllegalStateException` if the queue is full, `offer()` handles this situation gracefully by returning `false`.
- **Use Cases**: Ideal for scenarios where you want to add elements to a queue without worrying about exceptions, such as in producer-consumer scenarios or when implementing a print job queue.

### Return Value

- Returns `true` if the element was added successfully, `false` if the queue is full.

## Example: Using `offer()` in a Print Job Queue System

```java
import java.util.LinkedList;
import java.util.Queue;

public class PrintJobQueue {
    public static void main(String[] args) {
        Queue<String> printQueue = new LinkedList<>();

        // Simulate adding print jobs to the queue
        boolean added = printQueue.offer("Document1");
        System.out.println("Added Document1: " + added);

        added = printQueue.offer("Document2");
        System.out.println("Added Document2: " + added);

        // Simulate a full queue scenario
        while (!printQueue.isEmpty()) {
            String job = printQueue.poll();
            System.out.println("Processing " + job);
        }

        // Attempt to add another job to a full queue
        added = printQueue.offer("Document3");
        System.out.println("Added Document3: " + added);
    }
}
```

Output:

```shell
Added Document1: true
Added Document2: true
Processing Document1
Processing Document2
Added Document3: false
```
