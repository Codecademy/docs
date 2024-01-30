---
Title: 'Queue'
Description: 'A collection that can be manipulated at both ends.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Classes'
  - 'Queues'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **Queue** is a collection that can be manipulated at both ends. A Queue inserts data from one end and deletes data from another end, it is considered a "first in first out" collection.

## Syntax

Creating a queue:

```
Queue variable_name = new Queue();
```
You can also create a queue from an existing list:

```
var variable_name = new Queue.from(list_name);
```
It must be noted that to use a queue in a dart program you have to import "dart:collection" module. If you don’t do so then you will see the following error:

```
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
  geek.add("This");
  geek.add("Is");
  geek.add("A");
  geek.add("Queue");
   
  // Printing the new updated queue
  print(example_queue);
}
```
Output:

```
{}
{This, Is, A, Queue}
```

