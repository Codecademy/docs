---
Title: 'Queue'
Description: 'Queue is a first-in, first-out (FIFO) data structure that allows insertion of elements to the rear and removal of elements from the front.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Queues'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**`Queue`** is a [data structure](https://www.codecademy.com/resources/docs/general/data-structures) representing a first-in, first-out (FIFO) collection of elements that allows insertion of new elements to the rear, and removal of elements from the front.

## Syntax

The syntax to create a new queue is:

```pseudo
Queue<T> queueName = new Queue<T>();
```

**Parameters:**

- `T`: The type of elements the queue will store.

**Return value:**

Creating a queue with new `Queue<T>()` returns a new empty `Queue<T>` instance.

## Queue Operations

`Queue<T>` provides three primary operations:

- `Enqueue` adds an element to the end of the `Queue<T>` instance. `null` is an acceptable value for reference type elements.
- `Dequeue` returns and removes an element from the front of the `Queue<T>` instance.
- `Peek` returns the front-most element in the `Queue<T>` instance without removing it.

## Key Behaviors of a Queue

1. `Queue<T>` accepts `null` as a valid value for reference types, and allows insertion of duplicate elements.
2. The `Peek()` and `Dequeue()` methods will throw an `InvalidOperationException` if the queue is empty.
3. `Enqueue()`, `Dequeue()`, and `Peek()` are O(1) amortized.
4. `Queue<T>` is not thread-safe. Consider using `ConcurrentQueue<T>` for concurrent access.
5. The `Capacity` property returns the maximum number of elements the `Queue<T>` instance can currently hold. This value is increased automatically as elements are added to the collection, and can be reduced by calling the `TrimExcess()` method.

## Example

In this example a queue is created, populated with strings, and processed using `Peek()` and `Dequeue()`:

```cs
using System;
using System.Collections.Generic;

class Program
{
  static void Main()
  {
    Queue<string> queue = new Queue<string>();

    // Adding elements to the back of the queue
    queue.Enqueue("one");
    queue.Enqueue("two");
    queue.Enqueue("three");
    queue.Enqueue("four");
    queue.Enqueue("five");

    // Peeking the front-most element
    string peek = queue.Peek();
    Console.WriteLine($"Peek: {peek}");

    // Removing elements from the front of the queue
    while (queue.Count > 0)
    {
      string front = queue.Dequeue();
      Console.WriteLine($"Dequeue: {front}");
    }
  }
}
```

Output:

```shell
Peek: one
Dequeue: one
Dequeue: two
Dequeue: three
Dequeue: four
Dequeue: five
```

## Codebyte Example

In this example a queue of integers is used to demonstrate peeking at the front element and removing items in FIFO order:

```codebyte/csharp
using System;
using System.Collections.Generic;

public class Example
{
  public static void Main()
  {
    Queue<int> queue = new Queue<int>();

    queue.Enqueue(1);
    queue.Enqueue(2);

    Console.WriteLine("Peek: " + queue.Peek());

    int first = queue.Dequeue();
    int second = queue.Dequeue();

    Console.WriteLine("Dequeue 1: " + first);
    Console.WriteLine("Dequeue 2: " + second);
  }
}
```
