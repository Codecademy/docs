---
Title: 'Queue'
Description: 'A Queue is a collection interface that offers additional operations for accessing or manipulating items at the head of the queue.'
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

A **`Queue`** is an interface in Kotlin that represents a data structure that stores elements in a linear order, and follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed.

## Creating a Queue

In Kotlin, creating a queue is easy if we follow these steps:

```kotlin
import java.util*
fun main() {
  // create a queue of strings
  val queue: Queue<String> = LinkedList()
}
```

In the above code sample we have create an empty queue and to further add elements in it we will learn the method call `.add`.

## Adding elements in Queue

We use the `.add()` function to add elements in the queue that we have created above:

```kotlin
import java.util.*

fun main() {
  // create a queue of strings
  val queue: Queue<String> = LinkedList()

  // add elements to the queue
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

So here we learned to add elements in our queue and now in the next section we will learn about removing the elements from the queue.

## Removing an element from the Queue

We use the `.remove()` function to remove elements from the queue we created. Here's an example that shows how we can use the `.remove()` function:

```kotlin
import java.util.*

fun main() {
  // create a queue of strings
  val queue: Queue<String> = LinkedList()

  // add elements to the queue
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

In the above code we removed the elements using the `.remove()` function and also showcased the removed elements order in the output.

## Peeking an element in the Queue

We use the `.peek()` function to print out the first element of the queue. We can use the function like:

```kotlin
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
