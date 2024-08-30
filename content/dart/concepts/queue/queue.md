---
Title: 'Queue'
Description: 'A collection that can be manipulated at both ends.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Classes'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **queue** is a type of collection that supports operations at both ends. Data is added to one end and removed from the other, following a "first in, first out" (FIFO) principle.

## Syntax

Creating a queue:

```pseudo
Queue queue_name = new Queue();
```

We can also create a queue from an existing list:

```pseudo
var queue_name = new Queue.from(list_name);
```

> **Note:** To use a queue in a Dart program, we have to import the `dart:collection` module. If we don’t do so, then we will see the following error:

```pseudo
Error compiling to JavaScript:
main.dart:6:3:
Error: 'Queue; isn't a type
  Queue<String> example_queue = new Queue<String>();
  ^^^^^
main.dart:6:28:
Error: Method not found: 'Queue'.
  Queue<String> example_queue = new Queue<String>();
                                    ^^^^^
Error: Compilation failed.
```

## Example

In the following example, a queue is created and elements are inserted in the queue using the `.add()` method:

```dart
import 'dart:collection';

void main()
{
  // Creating a queue
  Queue<String> example_queue = new Queue<String>();

  // Printing the default value of example_queue
  print(example_queue);

  // Adding elements to example_queue
  example_queue.add("This");
  example_queue.add("Is");
  example_queue.add("A");
  example_queue.add("Queue");

  // Printing the updated example_queue
  print(example_queue);
}
```

The above code will result in the following output:

```shell
{}
{This, Is, A, Queue}
```
