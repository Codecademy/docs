---
Title: 'Stack'
Description: 'Represents a last-in, first-out data structure for storing objects.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Stack'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **stack** in Java represents a _last-in, first-out_ (LIFO) data structure for storing objects. It is implemented as the `Stack` class within the `java.util` package and extends the `Vector` class. A stack allows operations such as pushing items to the top, popping items off the top, and peeking at the top item without removing it.

Stacks are commonly used in programming problems involving recursion, expression evaluation, undo functionality, and backtracking algorithms.

A common use of stacks is implementing the _undo_ feature in text editors. Each action a user takes (e.g., typing a character) is pushed onto a stack. When the undo command is triggered, the most recent action is popped from the stack and reversed.

To use the `Stack` class, it must first be imported using:

```java
import java.util.Stack;
```

Since Java 1.6, the [`Deque`](https://www.codecademy.com/resources/docs/java/deque) interface has provided a more modern and efficient way to implement LIFO stack operations. According to the JDK documentation, `Deque` should be used in preference to the legacy `Stack` class.

| `Stack` method | Equivalent `Deque` method |
| :------------: | :-----------------------: |
| `.push(item)`  |     `.addFirst(item)`     |
|    `.pop()`    |     `.removeFirst()`      |
|   `.peek()`    |       `.getFirst()`       |

## Syntax

```pseudo
Stack<Type> stackName = new Stack<>();
```

**Parameters:**

- `Type`: The data type of elements stored in the stack (e.g., `Integer`, `String`).
- `stackName`: The variable name of the `Stack` object.

> **Note:** Java stacks are generic, meaning they can store any object type specified in angle brackets.

## Common Stack Methods

The `Stack` class provides the following methods:

- `.push(item)`: Adds an item to the top of the stack.
- `.pop()`: Removes and returns the item from the top of the stack.
- `.peek()`: Returns the item at the top without removing it.
- `.empty()`: Returns `true` if the stack is empty.
- `.search(item)`: Returns the 1-based position from the top of the stack if found; otherwise, returns -1.

![Diagram showing stack structure where push adds an element to the top and pop removes the top element](https://raw.githubusercontent.com/Codecademy/docs/main/media/java-stack-push-pop-diagram1.png)

## Example: Basic Stack Operations

The following example demonstrates how to use common stack methods such as `.push()`, `.pop()`, `.peek()`, `.empty()`, and `.search()`:

```java
import java.util.Stack;

public class StackExample {
  public static void main(String[] args) {
    Stack<String> books = new Stack<>();

    // Push items onto the stack
    books.push("Java");
    books.push("Python");
    books.push("C++");

    // Peek at the top item
    System.out.println("Top item: " + books.peek()); // C++

    // Pop the top item
    books.pop();

    // Check if stack is empty
    System.out.println("Is stack empty? " + books.empty());

    // Search for an item
    System.out.println("Position of Java: " + books.search("Java"));
  }
}
```

This example will result in the following output:

```shell
Top item: C++
Is stack empty? false
Position of Java: 2
```

## Frequently Asked Questions

### 1. What is a stack in Java?

A stack is a linear data structure that follows the _last-in, first-out_ (LIFO) principle. In Java, it is represented by the `Stack` class in the `java.util` package.

### 2. How do you implement a stack in Java?

A stack can be implemented using the built-in `Stack` class or manually using [arrays](https://www.codecademy.com/resources/docs/java/arrays) or linked lists. The simplest approach is:

```java
Stack<Integer> stack = new Stack<>();
```

### 3. What is the difference between stack and queue in Java?

A stack uses LIFO (last-in, first-out) ordering, while a [queue](https://www.codecademy.com/resources/docs/java/queue) uses FIFO (first-in, first-out). This means stacks remove the most recently added element, while queues remove the oldest one.
