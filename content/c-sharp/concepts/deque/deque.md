---
Title: 'Deque'
Description: 'Deque is a type of data structure that allows insertion and removal of elements from both the front and rear.'
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

`Deque` (Double-Ended Queue) is a type of data structure that allows insertion and removal of elements from both the front and rear. In `C#`, it can be implemented using `LinkedList<T>` and `List<T>`.

## Creating a Deque using LinkedList Class

To create a deque in `C#`, use `LinkedList<T>`, where `T` defines the type of elements stored.

```pseudo
LinkedList<T> deque = new LinkedList<T>();
```

- `T`: Specifies the element type.

### Example

The below example shows how to implement deque using `LinkedList`.

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
}
```

Output:

```shell
1
3
```

## Creating a Deque using List Class

To create a deque in `C#`, use `List<T>`, where `T` defines the type of elements stored.

```pseudo
List<T> deque = new List<T>();
```

- `T`: Specifies the element type.

### Example

The below example shows how to implement deque using `List`.

```cs
using System;
using System.Collections.Generic;

class Program {
  static void Main() {
    List<int> deque = new List<int>();

    // Adding elements to the front
    deque.Insert(0, 1);
    deque.Insert(0, 2);

    // Adding elements to the back
    deque.Add(3);
    deque.Add(4);

    // Removing elements from the front
    int front = deque[0];
    deque.RemoveAt(0);

    // Removing elements from the back
    int back = deque[deque.Count - 1];
    deque.RemoveAt(deque.Count - 1);

    foreach (int value in deque) {
      Console.WriteLine(value);
    }
  }
}
```

Output:

```shell
1
3
```

## Codebyte Example

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
      Console.WriteLine(item);
    }
  }
}
```
