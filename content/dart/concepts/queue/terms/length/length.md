---
Title: '.length'
Description: 'Returns the number of elements in a Dart queue'
Subjects: 
  - 'Computer Science'
  - 'Code Foundations'
Tags: 
  - 'Dart'
  - 'Classes'
  - 'Queues'
CatalogContent: 
  - 'learn-dart'
  - 'paths/computer-science'
---

The Dart queue method **`.length`** returns the number of elements in a Dart queue.

## Syntax

// Displaying the queue's length:
Queue queue_name = queue_name.length;

In Dart, the **.length** unveils the amounts of elements in a queue.

## Example

This Dart code creates a queue named `example_queue`, adds five integer elements, and then prints out its length using the print statement:

import 'dart:convert';
import 'dart:collection';

void main() 
{
    // Initializing the queue
    Queue<int> example_queue = Queue<int>();

    // Appending elements to the queue
    example_queue.addAll([1, 3, 5, 2, 0]);

    // Displaying the queue's length
    print("The length of the first queue (example_queue) is: ${example_queue.length}");
}

The above code will output:

    The length of the first queue (example_queue) is: 5
