---
Title: 'Deque'
Description: 'The Deque interface extends the Queue interface and provides methods to access and manipulate items at the top and end of a deque.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Interface'
  - 'Queues'
  - 'Stacks'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The Java **`Deque`** interface extends the [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface and is a double-ended queue. It provides methods to add, access, and remove items at the top and end of a deque. Thereby, it can be used as a queue or stack. The `Deque` interface is included in the `java.util` package.

## Java `Deque` Syntax

```pseudo
import java.util.Deque;

Deque<DataType> myDeque = new DequeClass<DataType>();
```

In the syntax:

- `DataType`: The [data type](https://www.codecademy.com/resources/docs/java/data-types) to be stored in the deque.
- `DequeClass`: A class implementing the `Deque` interface, e.g., `ArrayDeque` or `LinkedList`.

## Java `Deque` Methods

This list contains a selection of methods provided by the Java `Deque` interface:

- `.addFirst(item)`: Adds `item` at the top of the `Deque` if possible, otherwise it throws an exception.
- `.addLast(item)`: Adds `item` at the end of the `Deque` if possible, otherwise it throws an exception.
- `.getFirst()`: Returns, without removal, the first item of the `Deque`. It throws an exception if the Deque is empty.
- `.offerLast(item)`: Adds `item` at the end of the `Deque` if possible, otherwise it returns `false`.
- `.peekFirst()`: Returns, without removal, the first element of the `Deque`. Returns `null` if the `Deque` is empty.
- `.pollFirst()`: Returns and removes the first item of the `Deque`. Returns `null` if the `Deque` is empty.
- `.removeFirst()`: Returns and removes the first item of the `Deque`. Throws an exception if the `Deque` is empty.

## Example 1: Implementing Java `Deque` Using `LinkedList`

This example shows how to implement Java `Deque` using `LinkedList`:

```java
import java.util.Deque;
import java.util.LinkedList;

public class DequeExample {
  public static void main(String[] args) {
    Deque<String> deque = new LinkedList<>();

    deque.addFirst("Apple");
    deque.addLast("Banana");
    deque.addFirst("Orange");

    System.out.println("Deque: " + deque);

    deque.removeLast();
    System.out.println("After removing last: " + deque);
  }
}
```

Here is the output:

```shell
Deque: [Orange, Apple, Banana]
After removing last: [Orange, Apple]
```

## Example 2: Implementing Java `Deque` Using `ArrayDeque`

This example shows how to implement Java `Deque` using `ArrayDeque`:

```java
import java.util.Deque;
import java.util.ArrayDeque;

public class Main {
  public static void main(String[] args) {
    Deque<String> food = new ArrayDeque<String>();

    food.addFirst("Cabbage");
    food.addLast("Sausage");
    food.addFirst("Potatoes");
    food.addLast("Salad");

    System.out.println(food);
    System.out.println(food.pollFirst());
    System.out.println(food.peekFirst());
    System.out.println(food);
  }
}
```

Here is the output:

```shell
[Potatoes, Cabbage, Sausage, Salad]
Potatoes
Cabbage
[Cabbage, Sausage, Salad]
```

## Example 3: Using Java `Deque` as a Stack

This example shows how to use Java `Deque` as a stack:

```java
import java.util.Deque;
import java.util.ArrayDeque;

public class StackExample {
  public static void main(String[] args) {
    Deque<Integer> stack = new ArrayDeque<>();

    stack.push(10);
    stack.push(20);
    stack.push(30);

    System.out.println("Stack: " + stack);

    System.out.println("Popped: " + stack.pop());
    System.out.println("After pop: " + stack);
  }
}
```

Here is the output:

```shell
Stack: [30, 20, 10]
Popped: 30
After pop: [20, 10]
```

## Frequently Asked Questions

### 1. Is `Deque` FIFO or LIFO?

`Deque` can behave as both FIFO (queue) and LIFO (stack) depending on the methods used.

### 2. Is a `Deque` faster than a `Stack`?

Yes, `Deque` (like `ArrayDeque`) is faster than `Stack` because `Stack` is synchronized, which adds overhead for single-threaded operations.

### 3. Is Java `Queue` FIFO or LIFO?

A Java `Queue` follows FIFO (First-In-First-Out) order, meaning elements are removed in the order they were added.
