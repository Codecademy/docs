---
Title: 'clear()'
Description: 'Removes all elements from a Java Queue making it empty.'
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

The **`clear()`** method in Java [Queue](https://www.codecademy.com/resources/docs/java/queue) removes all elements from the queue, making it completely empty. This method is inherited from the [Collection](https://www.codecademy.com/resources/docs/java/collection) interface and provides a convenient way to reset a queue without creating a new instance.

## Syntax

```pseudo
queueName.clear()
```

**Parameters:**

- This method does not take any parameters.

**Return value:**

- The method does not return any value (`void`).

## Example 1: Basic Queue Clear

This example demonstrates the fundamental usage of the `clear()` method with a [LinkedList](https://www.codecademy.com/resources/docs/java/linked-list) implementation of Queue:

```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueClearBasic {
  public static void main(String[] args) {
    // Create a queue using LinkedList implementation
    Queue<String> queue = new LinkedList<>();

    // Add elements to the queue
    queue.offer("First");
    queue.offer("Second");
    queue.offer("Third");
    queue.offer("Fourth");

    // Display the original queue
    System.out.println("Original queue: " + queue);
    System.out.println("Queue size before clear: " + queue.size());

    // Clear all elements from the queue
    queue.clear();

    // Display the queue after clearing
    System.out.println("Queue after clear: " + queue);
    System.out.println("Queue size after clear: " + queue.size());
  }
}
```

The output of this code is:

```shell
Original queue: [First, Second, Third, Fourth]
Queue size before clear: 4
Queue after clear: []
Queue size after clear: 0
```

This example creates a queue, adds four string elements, displays the original content, clears the queue, and then shows the empty result. The `clear()` method removes all elements but keeps the queue structure intact for future use.

## Example 2: Task Processing System

This example shows how `clear()` can be used in a task processing system where you need to reset the task queue after completing a batch of operations:

```java
import java.util.LinkedList;
import java.util.Queue;

public class TaskProcessingSystem {
  public static void main(String[] args) {
    // Create a task queue
    Queue<String> taskQueue = new LinkedList<>();

    // Add tasks to the queue
    taskQueue.offer("Process Payment");
    taskQueue.offer("Send Email");
    taskQueue.offer("Update Database");
    taskQueue.offer("Generate Report");
    taskQueue.offer("Backup Data");

    System.out.println("Tasks in queue: " + taskQueue);
    System.out.println("Total tasks: " + taskQueue.size());

    // Process all tasks
    while (!taskQueue.isEmpty()) {
      String currentTask = taskQueue.poll();
      System.out.println("Processing: " + currentTask);
    }

    System.out.println("All tasks completed. Queue status: " + taskQueue);

    // Add new batch of tasks
    taskQueue.offer("Daily Cleanup");
    taskQueue.offer("System Maintenance");

    System.out.println("New tasks added: " + taskQueue);

    // Clear the queue for emergency reset
    System.out.println("Emergency reset triggered!");
    taskQueue.clear();

    System.out.println("Queue after emergency clear: " + taskQueue);
    System.out.println("Ready for new tasks: " + taskQueue.isEmpty());
  }
}
```

The output of this code is:

```shell
Tasks in queue: [Process Payment, Send Email, Update Database, Generate Report, Backup Data]
Total tasks: 5
Processing: Process Payment
Processing: Send Email
Processing: Update Database
Processing: Generate Report
Processing: Backup Data
All tasks completed. Queue status: []
New tasks added: [Daily Cleanup, System Maintenance]
Emergency reset triggered!
Queue after emergency clear: []
Ready for new tasks: true
```

This example demonstrates a realistic scenario where a task processing system uses `clear()` for emergency resets or batch completions. The method provides a quick way to empty the queue without affecting its functionality.

## Example 3: Cache Management System

This example illustrates how `clear()` is useful in cache management systems where periodic cache clearing is necessary for memory optimization:

```java
import java.util.PriorityQueue;
import java.util.Queue;

public class CacheManagementSystem {
  public static void main(String[] args) {
    // Create a priority queue for cache management
    Queue<Integer> cacheQueue = new PriorityQueue<>();

    // Simulate adding cache entries with priority values
    cacheQueue.offer(10);  // Low priority
    cacheQueue.offer(5);   // High priority
    cacheQueue.offer(15);  // Lower priority
    cacheQueue.offer(3);   // Highest priority
    cacheQueue.offer(12);  // Medium priority

    System.out.println("Cache entries (priority order): " + cacheQueue);
    System.out.println("Cache size: " + cacheQueue.size());
    System.out.println("Highest priority item: " + cacheQueue.peek());

    // Simulate cache usage
    System.out.println("\nProcessing cache entries:");
    Queue<Integer> tempQueue = new PriorityQueue<>(cacheQueue);
    while (!tempQueue.isEmpty()) {
      System.out.println("Accessing cache entry: " + tempQueue.poll());
    }

    // Check memory usage and clear cache if needed
    boolean memoryThresholdExceeded = true; // Simulated condition

    if (memoryThresholdExceeded) {
      System.out.println("\nMemory threshold exceeded. Clearing cache...");
      cacheQueue.clear();
      System.out.println("Cache cleared successfully.");
      System.out.println("Current cache size: " + cacheQueue.size());
      System.out.println("Cache is empty: " + cacheQueue.isEmpty());

      // Cache is now ready for new entries
      System.out.println("\nCache system ready for new entries.");
    }
  }
}
```

The output of this code is:

```shell
Cache entries (priority order): [3, 5, 15, 10, 12]
Cache size: 5
Highest priority item: 3

Processing cache entries:
Accessing cache entry: 3
Accessing cache entry: 5
Accessing cache entry: 10
Accessing cache entry: 12
Accessing cache entry: 15

Memory threshold exceeded. Clearing cache...
Cache cleared successfully.
Current cache size: 0
Cache is empty: true

Cache system ready for new entries.
```

This example shows how `clear()` method works with different Queue implementations like PriorityQueue. The method is particularly useful in cache management systems where you need to periodically clear cached data to free up memory.

## Frequently Asked Questions

### 1. Does the `clear()` method destroy the queue object?

No, the `clear()` method only removes all elements from the queue but preserves the queue structure. You can continue using the same queue instance after clearing it.

### 2. What is the time complexity of the `clear()` method?

The time complexity is typically O(n) where n is the number of elements in the queue, as it needs to remove each element. However, some implementations may optimize this operation.

### 3. Can I use `clear()` on thread-safe queue implementations?

Yes, the `clear()` method works with thread-safe queue implementations like `LinkedBlockingQueue` and `ConcurrentLinkedQueue`. The operation remains thread-safe in these implementations.
