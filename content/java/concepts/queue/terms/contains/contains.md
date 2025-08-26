---
Title: 'contains()'
Description: 'Checks whether a specific element is present in a Java Queue and returns a boolean value indicating the result'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Boolean'
  - 'Collections'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`contains()`** method in Java's [Queue](https://www.codecademy.com/resources/docs/java/queue) interface that checks whether a specific element is present in the queue. This method returns `true` if the queue contains the specified element, and `false` otherwise. The `contains()` method is inherited from the [Collection](https://www.codecademy.com/resources/docs/java/collection) interface and provides an efficient way to verify the presence of elements without modifying the queue structure.

## Syntax

```pseudo
boolean contains(Object element)
```

**Parameters:**

- `element`: The element whose presence in the queue is to be checked.

**Return value:**

The method returns a boolean value:

- `true` if the queue contains the specified element.
- `false` if the element is not found in the queue.

## Example 1: Basic `contains()` Usage in Java

This example demonstrates the fundamental usage of the `contains()` method with a `LinkedList` queue implementation:

```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueContainsExample {
  public static void main(String[] args) {
    // Create a queue using LinkedList
    Queue<String> queue = new LinkedList<>();

    // Add elements to the queue
    queue.add("Apple");
    queue.add("Banana");
    queue.add("Cherry");

    // Check if queue contains specific elements
    boolean hasApple = queue.contains("Apple");
    boolean hasGrape = queue.contains("Grape");

    System.out.println("Queue contains Apple: " + hasApple);
    System.out.println("Queue contains Grape: " + hasGrape);
  }
}
```

The output of this code is:

```shell
Queue contains Apple: true
Queue contains Grape: false
```

This example creates a queue with fruit names and demonstrates how `contains()` returns `true` for existing elements and `false` for non-existing elements.

## Example 2: Customer Order Processing with `contains()`

This example shows how the `contains()` method can be used in a real-world customer order processing system to check if specific orders are pending:

```java
import java.util.LinkedList;
import java.util.Queue;

public class OrderProcessor {
  public static void main(String[] args) {
    // Create a queue to store pending order IDs
    Queue<Integer> pendingOrders = new LinkedList<>();

    // Add some order IDs to the queue
    pendingOrders.add(1001);
    pendingOrders.add(1002);
    pendingOrders.add(1003);
    pendingOrders.add(1004);

    // Check if specific orders are in the pending queue
    int customerOrder = 1002;
    if (pendingOrders.contains(customerOrder)) {
      System.out.println("Order " + customerOrder + " is currently pending");
      System.out.println("Estimated position in queue: " + getOrderPosition(pendingOrders, customerOrder));
    } else {
      System.out.println("Order " + customerOrder + " is not in the pending queue");
    }

    // Check another order
    int anotherOrder = 1005;
    if (pendingOrders.contains(anotherOrder)) {
      System.out.println("Order " + anotherOrder + " is currently pending");
    } else {
      System.out.println("Order " + anotherOrder + " has been processed or doesn't exist");
    }
  }

  // Helper method to find position of order in queue
  private static int getOrderPosition(Queue<Integer> queue, int orderId) {
    int position = 1;
    for (Integer order : queue) {
      if (order.equals(orderId)) {
        return position;
      }
      position++;
    }
    return -1; // Not found
  }
}
```

The output of this code is:

```shell
Order 1002 is currently pending
Estimated position in queue: 2
Order 1005 has been processed or doesn't exist
```

This example demonstrates how businesses can use the `contains()` method to quickly verify order status and provide customers with accurate information about their pending orders.

## Example 3: Task Management System with `contains()`

This example illustrates using the `contains()` method in a task management system where different priority tasks are queued for execution:

```java
import java.util.PriorityQueue;
import java.util.Queue;

class Task implements Comparable<Task> {
  private String name;
  private int priority;

  public Task(String name, int priority) {
    this.name = name;
    this.priority = priority;
  }

  @Override
  public int compareTo(Task other) {
    return Integer.compare(this.priority, other.priority); // Lower number = higher priority
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Task task = (Task) obj;
    return name.equals(task.name);
  }

  @Override
  public String toString() {
    return name + " (Priority: " + priority + ")";
  }
}

public class TaskManager {
  public static void main(String[] args) {
    // Create a priority queue for task management
    Queue<Task> taskQueue = new PriorityQueue<>();

    // Add tasks with different priorities
    taskQueue.add(new Task("Database Backup", 1));
    taskQueue.add(new Task("Send Email Report", 3));
    taskQueue.add(new Task("Update Security Patches", 1));
    taskQueue.add(new Task("Clean Temp Files", 5));

    // Check if specific tasks are scheduled
    Task searchTask1 = new Task("Database Backup", 1);
    Task searchTask2 = new Task("Generate Analytics", 2);

    if (taskQueue.contains(searchTask1)) {
      System.out.println("Database Backup is scheduled for execution");
    }

    if (taskQueue.contains(searchTask2)) {
      System.out.println("Generate Analytics is scheduled for execution");
    } else {
      System.out.println("Generate Analytics is not in the task queue");
    }

    // Display current queue status
    System.out.println("\nCurrent tasks in queue:");
    for (Task task : taskQueue) {
      System.out.println("- " + task);
    }
  }
}
```

The output of this code is:

```shell
Database Backup is scheduled for execution
Generate Analytics is not in the task queue

Current tasks in queue:
- Database Backup (Priority: 1)
- Update Security Patches (Priority: 1)
- Send Email Report (Priority: 3)
- Clean Temp Files (Priority: 5)
```

> **Note:** `PriorityQueue` iteration does not guarantee elements will appear in priority order - the displayed task sequence may vary between program runs due to internal heap storage organization.
This example shows how the `contains()` method can be used in system administration scenarios to verify whether critical tasks are queued for execution, helping administrators track and manage automated processes.

## Frequently Asked Questions

### 1. What is string contains() in Java?

The `contains()` method for queues works with any object type, including strings. When used with String elements in a queue, it checks if a specific string value exists in the queue using the `equals()` method for comparison.

### 2. What is contains in priority queue in Java?

In a PriorityQueue, the `contains()` method searches through the internal heap structure to find the specified element. It returns `true` if the element exists regardless of its position in the priority ordering. The time complexity is O(n) since it may need to check multiple elements.

### 3. Is Java priority queue max or min?

By default, Java's PriorityQueue is a min-heap, meaning the smallest element (according to natural ordering or provided Comparator) has the highest priority and is removed first. To create a max-heap, you need to provide a reverse Comparator or implement Comparable in reverse order.
