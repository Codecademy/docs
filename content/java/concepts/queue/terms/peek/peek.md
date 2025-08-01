---
Title: '.peek()'
Description: 'Returns the head element of the queue without removing it, or null if the queue is empty.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Collections'
  - 'Data Structures'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.peek()`** method retrieves the head element of a [Queue](https://www.codecademy.com/resources/docs/java/queue) without removing it from the queue. If the queue is empty, it returns `null` instead of throwing an exception. This makes it a safe way to check what element is next in line without modifying the queue structure.

## Syntax

```pseudo
queueName.peek()
```

**Return value:** 

Retrieves the head of the queue without removing it. Returns `null` if the queue is empty.

## Example 1: Usage of `.peek()` Method

This example demonstrates how `.peek()` is used to inspect the next element without removing it from the queue:

```java
import java.util.Queue;
import java.util.LinkedList;

public class Main {
  public static void main(String[] args) {
    // Create a queue for customer service
    Queue<String> customerQueue = new LinkedList<>();
    
    // Add customers to the queue
    customerQueue.offer("Alice");
    customerQueue.offer("Bob");
    customerQueue.offer("Charlie");
    
    System.out.println("Queue: " + customerQueue);
    
    // Peek at the next customer without removing them
    String nextCustomer = customerQueue.peek();
    System.out.println("Next customer to be served: " + nextCustomer);
    
    // Queue remains unchanged after peek
    System.out.println("Queue after peek: " + customerQueue);
    System.out.println("Queue size: " + customerQueue.size());
    
    // Serve the customer
    String servedCustomer = customerQueue.poll();
    System.out.println("Served customer: " + servedCustomer);
    System.out.println("Updated queue: " + customerQueue);
  }
}
```

The output of this code is:

```shell
Queue: [Alice, Bob, Charlie]
Next customer to be served: Alice
Queue after peek: [Alice, Bob, Charlie]
Queue size: 3
Served customer: Alice
Updated queue: [Bob, Charlie]
```

This example shows how `.peek()` provides read-only access to the head element, keeping the queue unchanged until an actual removal operation is performed.

## Example 2: Handling Empty Queues with `.peek()`

This example shows how `.peek()` safely handles empty queues by returning `null` instead of throwing exceptions:

```java
import java.util.Queue;
import java.util.LinkedList;

public class EmptyQueueHandling {
  public static void main(String[] args) {
    Queue<String> messageQueue = new LinkedList<>();
    
    // Peek at empty queue
    String result = messageQueue.peek();
    System.out.println("Peek on empty queue: " + result);
    System.out.println("Queue is empty: " + messageQueue.isEmpty());
    
    // Add some messages
    messageQueue.offer("Welcome message");
    messageQueue.offer("Alert notification");
    
    // Peek at non-empty queue
    String nextMessage = messageQueue.peek();
    System.out.println("Next message: " + nextMessage);
    
    // Process all messages while checking what's next
    while (!messageQueue.isEmpty()) {
      String current = messageQueue.peek();
      System.out.println("About to process: " + current);
      
      String processed = messageQueue.poll();
      System.out.println("Processed: " + processed);
      
      // Check if there are more messages
      String upcoming = messageQueue.peek();
      if (upcoming != null) {
        System.out.println("Next up: " + upcoming);
      } else {
        System.out.println("No more messages in queue");
      }
      System.out.println("---");
    }
  }
}
```

The output of this code is:

```shell
Peek on empty queue: null
Queue is empty: true
Next message: Welcome message
About to process: Welcome message
Processed: Welcome message
Next up: Alert notification
---
About to process: Alert notification
Processed: Alert notification
No more messages in queue
---
```

This example demonstrates the safety of `.peek()` when dealing with potentially empty queues, making it ideal for defensive programming practices.
