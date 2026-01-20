---
Title: 'ArrayDeque'
Description: 'A resizable-array implementation of the double-ended queue (Deque) interface.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Methods'
  - 'Numbers'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`ArrayDeque`** class in Java’s `java.util` package implements the `Deque<E>` interface using a resizable circular [array](https://www.codecademy.com/resources/docs/java/arrays). It allows elements to be added or removed efficiently from both the front and the end of the queue.

This class provides better performance than `LinkedList` when used as a queue or stack and does not permit `null` elements. It is not thread-safe and must be externally synchronized for concurrent use.

## Syntax

In Java, the declaration of ArrayDeque can be done as:

```pseudo
ArrayDeque<E> deque = new ArrayDeque<>();
```

Or, alternatively:

```pseudo
ArrayDeque<E> deque = new ArrayDeque<>(int numElements);
```

Or, alternatively:

```pseudo
ArrayDeque<E> deque = new ArrayDeque<>(Collection<? extends E> c);
```

**Parameters:**

- `E`: The type of elements maintained by this deque.
- `numElements`: The initial number of elements that the deque can hold.
- `c`: A collection whose elements are to be placed into the deque.

**Return value:**

An instance of `<class 'java.util.ArrayDeque'>` is created.

## Example 1: Using `ArrayDeque` as a Queue (FIFO)

In this example, the `ArrayDeque` class is used as a queue where elements are inserted at the end and removed from the front:

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class QueueExample {
  public static void main(String[] args) {
    Deque<String> deque = new ArrayDeque<>();
    deque.add("First");
    deque.add("Second");
    deque.add("Third");
    System.out.println(deque.remove());
    System.out.println(deque.peek());
    System.out.println(deque);
  }
}
```

The output of this code is:

```shell
First
Second
[Second, Third]
```

## Example 2: Using `ArrayDeque` as a Stack (LIFO)

In this example, `ArrayDeque` functions as a stack where elements are pushed and popped in last-in, first-out order:

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class StackExample {
  public static void main(String[] args) {
    Deque<Integer> stack = new ArrayDeque<>();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    System.out.println(stack.pop());
    System.out.println(stack.peek());
    System.out.println(stack);
  }
}
```

The output of this code is:

```shell
30
20
[20, 10]
```

## Example 3: Performing Mixed Front and End Operations

In this example, the code demonstrates adding and removing elements from both ends of the deque using `addFirst()`, `addLast()`, `removeFirst()`, and `removeLast()`:

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class MixedDequeExample {
  public static void main(String[] args) {
    Deque<String> deque = new ArrayDeque<>();
    deque.addFirst("A");
    deque.addLast("B");
    deque.addFirst("C");
    deque.addLast("D");
    System.out.println("Initial deque: " + deque);

    String firstRemoved = deque.removeFirst();
    String lastRemoved  = deque.removeLast();
    System.out.println("Removed first: " + firstRemoved);
    System.out.println("Removed last:  " + lastRemoved);

    System.out.println("Final deque:   " + deque);
  }
}
```

The output of this code is:

```shell
Initial deque: [C, A, B, D]
Removed first: C
Removed last:  D
Final deque:   [A, B]
```
