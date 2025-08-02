---
Title: '.isEmpty()'
Description: 'Returns true if the queue contains no elements, false otherwise.'
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

The **`.isEmpty()`** method is a built-in method of the [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface in Java that returns `true` if the queue contains no elements, and `false` otherwise. This method is inherited from the [`Collection`](https://www.codecademy.com/resources/docs/java/collection) interface and provides a convenient way to check if a queue is empty before performing operations that require elements. The method has O(1) time complexity in most implementations, making it an efficient way to validate queue state.

## Syntax

```pseudo
queueName.isEmpty()
```

**Parameters:**

- The `.isEmpty()` method does not take any parameters.

**Return value:**

The `.isEmpty()` method returns a `boolean` value:

- `true` if the queue contains no elements
- `false` if the queue contains one or more elements

## When to Use `.isEmpty()`

The `.isEmpty()` method is particularly useful in the following scenarios:

1. **Before polling elements**: To avoid `null` returns or exceptions
2. **In loop conditions**: To process all elements safely
3. **Validation checks**: Before performing operations that require elements
4. **Algorithm implementations**: In data structure algorithms and queue-based solutions

## Example 1: Basic Usage of `.isEmpty()` Method

In this example, `.isEmpty()` is used to check if a queue is empty before and after adding elements:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
  public static void main(String[] args) {
    Queue<String> queue = new LinkedList<String>();

    // Check if queue is empty initially
    System.out.println("Is queue empty? " + queue.isEmpty());
    System.out.println("Queue contents: " + queue);

    // Add elements to the queue
    queue.offer("First");
    queue.offer("Second");
    queue.offer("Third");

    // Check if queue is empty after adding elements
    System.out.println("Is queue empty after adding elements? " + queue.isEmpty());
    System.out.println("Queue contents: " + queue);
    System.out.println("Queue size: " + queue.size());

    // Remove all elements
    queue.poll();
    queue.poll();
    queue.poll();

    // Check if queue is empty after removing all elements
    System.out.println("Is queue empty after removing all elements? " + queue.isEmpty());
    System.out.println("Queue contents: " + queue);
  }
}
```

The output of this code is:

```shell
Is queue empty? true
Queue contents: []
Is queue empty after adding elements? false
Queue contents: [First, Second, Third]
Queue size: 3
Is queue empty after removing all elements? true
Queue contents: []
```

## Example 2: Using `.isEmpty()` in a Loop

This example demonstrates how `.isEmpty()` can be used to safely process all elements in a queue:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
  public static void main(String[] args) {
    Queue<Integer> numbers = new LinkedList<Integer>();

    // Add some numbers to the queue
    numbers.offer(10);
    numbers.offer(20);
    numbers.offer(30);
    numbers.offer(40);
    numbers.offer(50);

    System.out.println("Initial queue: " + numbers);
    System.out.println("Processing all elements in the queue:");

    int elementCount = 0;
    // Process all elements until queue is empty
    while (!numbers.isEmpty()) {
      Integer number = numbers.poll();
      elementCount++;
      System.out.println("Processing element #" + elementCount + ": " + number);
      System.out.println("Remaining elements: " + numbers.size());
    }

    System.out.println("Queue is now empty: " + numbers.isEmpty());
    System.out.println("Total elements processed: " + elementCount);
  }
}
```

The output of this code is:

```shell
Initial queue: [10, 20, 30, 40, 50]
Processing all elements in the queue:
Processing element #1: 10
Remaining elements: 4
Processing element #2: 20
Remaining elements: 3
Processing element #3: 30
Remaining elements: 2
Processing element #4: 40
Remaining elements: 1
Processing element #5: 50
Remaining elements: 0
Queue is now empty: true
Total elements processed: 5
```
