---
Title: 'Deque'
Description: 'A Deque extends the Queue interface and offers additional methods to access and manipulate items at the top and end of the deque.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Queues'
  - 'Stacks'
  - 'Collections'
  - 'Interface'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **Deque** extends the [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface and is a double-ended queue. It provides methods to add, access, and remove items at the top and end of the deque. Thereby, it can be used as a queue or stack. The `Deque` interface is included in the `java.util` package.

## Syntax

```pseudo
import java.util.deque;

Deque<DataType> myDeque = new DequeClass<DataType>();
```

Where [`DataType`](https://www.codecademy.com/resources/docs/java/data-types) is the data type to be stored in the deque, and `DequeClass` is a class implementing the `Deque` interface, for example, `ArrayDeque` or `LinkedList`.

## Example

The following is an example of the `Deque` interface implemented by an `ArrayDeque`:

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

The above example results in the following output:

```shell
[Potatoes, Cabbage, Sausage, Salad]
Potatoes
Cabbage
[Cabbage, Sausage, Salad]
```

## Methods

The following list contains a selection of methods provided by the `Deque` interface:

- `.addFirst(item)`: Adds `item` at the top of the `Deque` if possible, otherwise it throws an exception.
- `.addLast(item)`: Adds `item` at the end of the `Deque` if possible, otherwise it throws an exception.
- `.getFirst()`: Returns, without removal, the first item of the `Deque`. It throws an exception if the Deque is empty.
- `.offerLast(item)`: Adds `item` at the end of the `Deque` if possible, otherwise it returns `false`.
- `.peekFirst()`: Returns, without removal, the first element of the `Deque`. Returns `null` if the `Deque` is empty.
- `.pollFirst()`: Returns and removes the first item of the `Deque`. Returns `null` if the `Deque` is empty.
- `.removeFirst()`: Returns and removes the first item of the `Deque`. Throws an exception if the `Deque` is empty.

### Equivalent methods Stack and Queue

The following table lists the equivalent methods for `Queue` and `Stack`:

|   `Deque` method   | Equivalent `Queue` method | Equivalent `Stack` method |
| :----------------: | :-----------------------: | :-----------------------: |
| `.addFirst(item)`  |             -             |       `.push(item)`       |
|  `.addLast(item)`  |       `.add(item)`        |             -             |
|   `.getFirst()`    |       `.element()`        |             -             |
| `.offerLast(item)` |      `.offer(item)`       |             -             |
|   `.peekFirst()`   |         `.peek()`         |         `.peek()`         |
|   `.pollFirst()`   |         `.poll()`         |             -             |
|  `.removeFirst()`  |        `.remove()`        |         `.pop()`          |
