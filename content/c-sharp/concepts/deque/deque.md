---
Title: 'Deque'
Description: 'A deque is a type of data structure that allows insert and delete elements at both end.'
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

An **deque** is a data structure that allows elements to be added or removed from both ends, making it more versatile than a traditional queue or stack. In `C#` there is no build-in `deque` but it can be impleted using `LinkedList` and `List` classes `C#`.

## Implementing using LinkedList Class

```pseudo
LinkedList<T> deque = new LinkedList<T>();
```

- `T`: Specifies the element type.

## Example 1

Below example show how to implement deque using `LinkedList`.

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

## Implementing using List Class

```pseudo
List<T> deque = new List<T>();
```

- `T`: Specifies the element type.

## Example 2

Below example show to implement deque using `List`.

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
