---
Title: 'Queue'
Description: 'A linear data structure that stores and manages elements in First In, First Out order.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **`Queue`** is a linear [data structure](https://www.codecademy.com/resources/docs/general/data-structures) that stores and manages elements in a First In, First Out (FIFO) order. Elements are added to the rear of the queue and removed from the front, similar to how people wait in line at a store or bank. The queue follows the principle where the first element added is the first one to be removed.

Queues are commonly used in task scheduling, process management, breadth-first search algorithms, and buffer management in applications. They provide an efficient way to handle data when processing order matters and help maintain fairness in resource allocation systems.

## Syntax

Since `Queue` is an interface in Java, it cannot be instantiated directly. Instead, use implementing classes to create queue objects:

### Creating Queue Objects

```pseudo
Queue<DataType> queueName = new ImplementingClass<>();
```

**Parameters:**

- `DataType`: The type of elements the queue will store
- `queueName`: The name of the queue variable
- `ImplementingClass`: A class that implements the Queue interface (e.g., LinkedList, ArrayDeque, [PriorityQueue](https://www.codecademy.com/resources/docs/java/priorityqueue))

**Return value:**

`Queue` methods return different values based on success/failure scenarios as described above.

## Common Methods in the Queue Interface

- `add(element)`: Inserts element at the rear of the queue, throws exception if fails
- `offer(element)`: Inserts element at the rear of the queue, returns false if fails
- `remove()`: Removes and returns element from front, throws exception if empty
- `poll()`: Removes and returns element from front, returns null if empty
- `element()`: Returns front element without removing, throws exception if empty
- `peek()`: Returns front element without removing, returns null if empty

## Example 1: Basic Queue Operations

This example demonstrates fundamental queue operations including adding elements, removing elements, and accessing the front element:

```java
import java.util.Queue;
import java.util.LinkedList;

public class BasicQueueExample {
  public static void main(String[] args) {
    // Create a queue using LinkedList implementation
    Queue<String> customerQueue = new LinkedList<>();

    // Add customers to the queue
    customerQueue.offer("Alice");
    customerQueue.offer("Bob");
    customerQueue.offer("Charlie");

    System.out.println("Queue: " + customerQueue);

    // Serve the first customer (remove from front)
    String servedCustomer = customerQueue.poll();
    System.out.println("Served customer: " + servedCustomer);

    // Check who is next without removing them
    String nextCustomer = customerQueue.peek();
    System.out.println("Next customer: " + nextCustomer);

    System.out.println("Updated queue: " + customerQueue);
  }
}
```

The output of this code is:

```shell
Queue: [Alice, Bob, Charlie]
Served customer: Alice
Next customer: Bob
Updated queue: [Bob, Charlie]
```

This example demonstrates how elements maintain their order in the queue. Alice, who was added first, is served first, maintaining the FIFO principle.

## Example 2: Print Job Queue System

This example simulates a real-world scenario where a printer processes print jobs in the order they were submitted:

```java
import java.util.Queue;
import java.util.LinkedList;

public class PrintJobQueue {
  public static void main(String[] args) {
    // Create a queue to manage print jobs
    Queue<String> printQueue = new LinkedList<>();

    // Submit print jobs to the queue
    printQueue.add("Document1.pdf");
    printQueue.add("Presentation.pptx");
    printQueue.add("Report.docx");
    printQueue.add("Invoice.xlsx");

    System.out.println("Print jobs in queue: " + printQueue.size());

    // Process each print job in FIFO order
    while (!printQueue.isEmpty()) {
      String currentJob = printQueue.remove();
      System.out.println("Printing: " + currentJob);

      // Simulate printing time
      try {
        Thread.sleep(1000); // Wait 1 second
      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
      }
    }

    System.out.println("All print jobs completed!");
    System.out.println("Queue status: " + (printQueue.isEmpty() ? "Empty" : "Has jobs"));
  }
}
```

The output of this code is:

```shell
Print jobs in queue: 4
Printing: Document1.pdf
Printing: Presentation.pptx
Printing: Report.docx
Printing: Invoice.xlsx
All print jobs completed!
Queue status: Empty
```

This example shows how queues ensure fair processing where jobs are handled in the order they arrive, preventing newer jobs from jumping ahead of older ones.

## Example 3: Breadth-First Search Implementation

This example demonstrates using a queue to implement breadth-first search in a tree structure, showcasing a common algorithmic use case:

```java
import java.util.Queue;
import java.util.LinkedList;
import java.util.List;
import java.util.ArrayList;

class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode(int val) {
    this.val = val;
  }
}

public class BreadthFirstSearch {
  public static void main(String[] args) {
    // Create a binary tree
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    List<Integer> result = breadthFirstTraversal(root);
    System.out.println("BFS traversal: " + result);
  }

  public static List<Integer> breadthFirstTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;

    // Queue to store nodes for level-by-level processing
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
      TreeNode current = queue.poll();
      result.add(current.val);

      // Add child nodes to queue for next level processing
      if (current.left != null) {
        queue.offer(current.left);
      }
      if (current.right != null) {
        queue.offer(current.right);
      }
    }

    return result;
  }
}
```

The output of this code is:

```shell
BFS traversal: [1, 2, 3, 4, 5, 6, 7]
```

This example illustrates how queues enable level-by-level tree traversal, ensuring nodes are processed in breadth-first order rather than depth-first order.

## Frequently Asked Questions

### 1. What is the difference between `add()` and `offer()` methods?

Both insert elements, but `add()` throws an exception if insertion fails while `offer()` returns false.

### 2. When should I use `remove()` versus `poll()`?

Use `remove()` when you want an exception for empty queues, and `poll()` when you prefer null return values.

### 3. What are the main Queue implementations?

LinkedList (general-purpose), ArrayDeque (resizable array), and PriorityQueue (priority-based ordering).
