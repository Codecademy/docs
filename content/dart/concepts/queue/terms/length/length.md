---
Title: '.length'
Description: 'Returns the number of elements in a queue.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Queues'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.length`** property returns the number of elements in a queue.

## Syntax

```pseudo
queueName.length
```

- `queueName`: The name of the queue to be checked.

## Example

The below example creates a queue named `example_queue`, appends five integer elements to it, and calculates its length using the `.length` property:

```dart
import 'dart:convert';
import 'dart:collection';

void main()
{
  // Initializing a queue
  Queue<int> example_queue = Queue<int>();

  // Appending elements to the queue
  example_queue.addAll([1, 3, 5, 2, 0]);

  // Calculating the length of the queue
  print("The length of the queue is: ${example_queue.length}");
}
```

The above code will give the following output:

```shell
The length of the queue is: 5
```
