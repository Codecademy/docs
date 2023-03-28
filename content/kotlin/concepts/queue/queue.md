---
Title: 'Queue'
Description: 'A Queue is a collection interface that represents a data structure that stores elements in a linear order, and follows the First In, First Out (FIFO) principle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Queues'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

A **`Queue`** is a collection interface in Kotlin that represents a data structure that stores elements in a linear order, and follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.

## Creating a Queue

In Kotlin, a queue can be created using the `Queue` interface:

```pseudo
val queue: Queue<Type> = Collection()
```

- `queue` is a variable that is of type `Queue`.
- `Type` is the data type of the elements within the queue.
- `Collection` is the collections class that is used to implement the queue. Some possible implementations include a `LinkedList`, `ArrayDeque`, and `PriorityQueue`.

Below, a queue of string elements is created using an instance of the `LinkedList` collection:

```kotlin
val queue: Queue<String> = LinkedList()
```

## Adding Elements to a Queue

The `.add()` method can be used to add elements to a queue:

```kotlin
import java.util.*

fun main() {
  // Create a queue of strings
  val queue: Queue<String> = LinkedList()

  // Add elements to the queue
  queue.add("apple")
  queue.add("banana")
  queue.add("orange")
  println(queue)
}
```

The output for the above code will be:

```shell
[apple, banana, orange]
```

## Removing Elements from a Queue

The `.remove()` method can be used to remove elements from a queue:

```kotlin
import java.util.*

fun main() {
  // Create a queue of strings
  val queue: Queue<String> = LinkedList()

  // Add elements to the queue
  queue.add("apple")
  queue.add("banana")
  queue.add("orange")

  println(queue)

  val a = queue.remove()
  val b = queue.remove()
  val c =queue.remove()

  println(queue)
  print(a,b,c)
}

fun print(a: String, b: String, c: String) {
  println("First element removed is: $a ")
  println("Second element removed is: $b ")
  println("Third element removed is: $c ")
}
```

The output for the above code will be:

```shell
[apple, banana, orange]
[]
First element removed is: apple
Second element removed is: banana
Third element removed is: orange
```

In the above code, the elements were removed from the queue using `.remove()` method. In addition, a variable was created to hold each element that was removed.

## Peeking at Elements in a Queue

The `.peek()` method can be used to print out the first element in a queue:

```kotlin
import java.util.*

fun main() {
  val queue: Queue<String> = LinkedList()

  queue.add("apple")
  queue.add("banana")
  queue.add("orange")

  println(queue)

  val frontElement = queue.peek()
  println("The front element peeked is: $frontElement")
}
```

The output for the above code will be:

```shell
[apple, banana, orange]
The front element peeked is: apple
```
