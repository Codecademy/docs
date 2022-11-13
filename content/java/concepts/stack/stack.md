---
Title: 'Stack'
Description: 'A Stack is a concrete class that offers operations for accessing or manipulating items at the top of a stack, a linear data structure that follows the last-in, first-out (LIFO) rule.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Stack'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `Stack` is a concrete class provided in the `java.util` package that extends the legacy `Vector` class. It is a linear data structure which supports retrieval by last-in, ﬁrst-out (LIFO) order. It means that the insert and remove operations only occur on the top of the stack. The insert/put operation is called `push`, whereas the remove is called `pop`.

An opposite data structure is the [Queue](https://www.codecademy.com/resources/docs/java/queue) interface, which follows the first-in, first-out (FIFO) order. Both `Stack` and `Queue` concepts are present in our daily life (e.g., when people are standing in a queue to buy entry ticket for watching a soccer game or when we have a stack of dishes waiting to be washed!).

## Syntax

```java
import java.util.Stack;

Stack<DataType> s = new Stack<>();
```
Where `DataType` is the data type to be stored in the stack. Note that, differently from `Queue`, Stack is a concrete class, not an interface.

## Methods

The `Stack` class provides the following methods:

- `.push()` : `.push(item)`  adds  `item`  onto the top of the  `Stack`  .
- `.pop()` : removes and returns the object at the top of the  `Stack`, throwing an exception when the `Stack` is empty.
- `.peek()` : returns the head (top) of the `Stack` without removing it. It throws an exception when the `Stack` is empty.
- `.empty()` : returns `true` if the `Stack` contains no items. Otherwise, it returns `false`.
- `.search(item)` : returns the distance of `item` from the top of the stack, starting from `1`. A `-1` value is returned if `item` is not on the stack.

## Example

The following example demonstrates the `Stack` class:

```java
import java.util.Stack;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
	Stack<String> books = new Stack<>();
	System.out.println(books.isEmpty());
	books.push("Effective Java");
	books.push("Head First Java");
	books.push("Thinking in Java");
	System.out.println(books.size());
	System.out.println(books.search("Effective Java"));
	System.out.println(books.search("Java for dummies"));
	System.out.println(books.peek());
	System.out.println(books.pop());
	System.out.println(books.size());
	System.out.println(Arrays.toString(books.toArray()));
 }
}
```

This will output the following:

```shell
true
3
3
-1
Thinking in Java
Thinking in Java
2
[Effective Java, Head First Java]
```

## Important note

Since Java 1.6 there is a more recent implementation of LIFO stack operations, the `Deque` interface.
As stated in the JDK documentation, `Deque` interface should be used in preference to the legacy `Stack` class. Whenever a `Deque` is used as a `Stack`, elements are pushed and popped from the beginning of the `Deque`. The table below shows the equivalent methods between `Stack` and `Deque`:

|Stack method| Equivalent Deque method |
|:--:|:--:|
| `.push(item)` | `.addFirst(item)` |
| `.pop()` | `.removeFirst()`  |
| `.peek()` | `.getFirst()` |
