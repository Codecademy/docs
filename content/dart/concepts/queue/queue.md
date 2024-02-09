---
Title: 'Queue'
Description: 'A collection that can be manipulated at both ends.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **Queue** is a type of collection that supports operations at both ends. Data is added to one end and removed from the other, following a "first in, first out" (FIFO) principle.

## Syntax

Creating a queue:

```pseudo
Queue queue_name = new Queue();
```

You can also create a queue from an existing list:

```pseudo
var queue_name = new Queue.from(list_name);
```

> **Note:** To use a queue in a dart program you have to import `dart:collection` module. If you don’t do so then you will see the following error:

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

In the following example, a queue is created and elements are inserted in the queue using the **.add()** method.

```dart
import 'dart:collection';
 
void main()
{
  // Creating a Queue
  Queue<String> example_queue = new Queue<String>(); 
   
  // Printing default value of queue
  print(example_queue);
   
  // Adding elements in a Queue
  example_queue.add("This");
  example_queue.add("Is");
  example_queue.add("A");
  example_queue.add("Queue");
   
  // Printing the new updated queue
  print(example_queue);
}
```

The above code will result in the following output:

```shell
{}
{This, Is, A, Queue}
```
