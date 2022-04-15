---
Title: 'Queue'
Description: 'A collection interface offering additional operations to access or manipulate items at the head of the queue.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Queues'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `Queue` is an interface provided in the `java.util` package that extends collections to provide additional methods to access or manipulate items at the head of the queue. Where the "head" of the queue is defined by the particular implementation. In a typical implementation, the queue will access elements in a FIFO (first-in-first-out) manner. However, in a stack implementation, the order will be LIFO (last-in-first-out). In a priority queue implementation, the first item out will be defined by its specified priority.

## Syntax

```java
import java.util.Queue;

Queue<DataType> q = new QueueClass<DataType>();
```

Where `DataType` is the data type to be stored in the queue, and `QueueClass` is some class implementing the `Queue` interface.

## Mehods

The `Queue` interface utilizes the following methods:

- `.add()` : `.add(item)` adds `item` to the `Queue` if possible, otherwise it throws an exception.
- `.offer()` : `.offer(item)` adds `item` to the `Queue` if possible, otherwise it returns `false`.
- `.remove()` : removes and returns the head item of the `Queue`, throwing an exception when the `Queue` is empty.
- `.poll()` : removes and returns the head item of the `Queue`, returning `null` if the `Queue` is empty.
- `.element()` : returns the head of the `Queue` without removing it.
- `.peek()` : returns the head of the `Queue` without removing it.

## Example

This is an example of the `Queue` interface implemented by a `LinkedList`:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
 public static void main(String[] args) {
   Queue<String> food = new LinkedList<String>();
   food.offer("Cabbage");
   food.offer("Pizza");
   food.offer("Sausage");
   food.offer("Potatoes");
   food.offer("Salad");
   System.out.println(food.peek());
   System.out.println(food.poll());
   System.out.println(food);
 }
}
```

This will output the following:

```shell
Cabbage
Cabbage
[Pizza, Sausage, Potatoes, Salad]
```
