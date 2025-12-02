---
Title: 'Queue'
Description: 'Queue is a type of data structure that allows insertion of elements to the rear and removal of elements from the front.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Queues'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

`Queue` is a data structure representing a first-in, first-out collection of objects that allows insertion of elements to the rear and removal of elements from the front, with the additional capability of inspecting the front-most element without removing it. In `C#`, it is implemented by the `Queue<T>` class from `.NET`.

## Queue Operations

There are three main methods that `Queue<T>` exposes: Enqueue, Dequeue, and Peek.

- `Enqueue` adds an element to the end of the `Queue<T>` instance.
- `Dequeue` removes an element from the front of the `Queue<T>` instance.
- `Peek` returns the front-most element in the `Queue<T>` instance without removing it.

## Example

The below example shows how to instantiate and use a `Queue<T>`.

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

Use this example to experiment with using a `Queue<T>`. Enjoy coding!

```codebyte/csharp
using System;
using System.Collections.Generic;

public class Example
{
  public static void Main()
  {
    Queue<int> queue = new Queue<int>();

    // Add elements to the rear
    queue.Enqueue(1);
    queue.Enqueue(2);

    // Peek at the front element
    int peek = queue.Peek(); // returns front element without removing it

    // Remove elements from the front
    int front = queue.Dequeue(); // removes 1 from the queue
    int second = queue.Dequeue(); // removes 2 from the queue
  }
}
```

## Notes

1. The `Peek()` and `Dequeue()` methods will throw an `InvalidOperationException` if the queue is empty.
2. `Enqueue()`, `Dequeue()`, and `Peek()` are O(1) amortized.
3. `Queue<T>` is not thread-safe. Consider using `ConcurrentQueue<T>` for concurrent access.
