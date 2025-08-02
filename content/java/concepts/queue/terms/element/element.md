---
Title: 'element()'
Description: 'Returns the head of the queue without removing it.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`element()`** method of the Queue interface retrieves, but does not remove, the head of the queue. Unlike `peek()`, which returns null if the queue is empty, `element()` throws a `NoSuchElementException` in such cases.
This method provides a way to inspect the next element to be removed without modifying the queue's structure.

## Syntax

```pseudo
queueName.element()
```

**Parameters:**

The `element()` method does not take any parameters.

**Return value:**

- Returns the head element of the queue.
- Throws `NoSuchElementException` if the queue is empty.

## Example

This example demonstrates the `element()` method with a LinkedList implementation of Queue:

```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.NoSuchElementException;


public class Main {
  public static void main(String[] args) {
    Queue<String> animals = new LinkedList<String>();
        
      // Add elements to the queue
      animals.offer("Dog");
      animals.offer("Cat");
      animals.offer("Bird");
        
      // Use element() to peek at the head without removing it
      System.out.println("Head element: " + animals.element());
      System.out.println("Queue after element(): " + animals);
        
      // Remove elements and check head
      animals.poll();
      System.out.println("Head after poll: " + animals.element());
        
      // Clear the queue
      animals.clear();
        
      // Attempting to use element() on empty queue throws exception
      try {
        animals.element();
      } catch (NoSuchElementException e) {
        System.out.println("Exception: Queue is empty!");
    }
  }
}
```

This will output the following:

```shell
Head element: Dog
Queue after element(): [Dog, Cat, Bird]
Head after poll: Cat
Exception: Queue is empty!
```
