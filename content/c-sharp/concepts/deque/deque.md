---
Title: 'Deque'
Description: 'A Deque (Double-Ended Queue) allows insertion and removal of elements from both the front and rear. In C#, it can be implemented using LinkedList<T>.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Deques'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A `Deque` (Double-Ended Queue) allows insertion and removal of elements from both the front and rear. In `C#`, it can be implemented using `LinkedList<T>`.

## Creating a Deque in `C#`

To create a deque in `C#`, use `LinkedList<T>`, where `T` defines the type of elements stored.

```pseudo
LinkedList<T> deque = new LinkedList<T>();
```

## Examples

The below examples shows how to implement deque using `LinkedList`.

```cs
using System;
using System.Collections.Generic;

class Program {
  static void Main() {
    LinkedList<int> deque = new LinkedList<int>();

    // Adding elements to the front
    deque.AddFirst(1);
    deque.AddFirst(2);

    // Adding elements to the back
    deque.AddLast(3);
    deque.AddLast(4);

    // Removing elements from the front
    int front = deque.First.Value;
    deque.RemoveFirst();

    // Removing elements from the back
    int back = deque.Last.Value;
    deque.RemoveLast();

    foreach (int value in deque) {
      Console.WriteLine(value);
    }
  }

  // Output:
  // 1
  // 3
}
```

Use this example to experiment with implementing a `Deque` using `LinkedList`. Enjoy coding!

```codebyte/csharp
using System;
using System.Collections.Generic;

public class Example
{
  public static void Main()
  {
    LinkedList<int> deque = new LinkedList<int>();

    // Add elements to the front and rear
    deque.AddLast(10); // Rear
    deque.AddFirst(5); // Front
    deque.AddLast(15); // Rear

    // Remove elements from front and rear
    deque.RemoveFirst(); // Removes 5 (Front)
    deque.RemoveLast();  // Removes 15 (Rear)

    // Display the remaining element
    foreach (var item in deque)
    {
      Console.WriteLine(item); // Output: 10
    }
  }
}
```
