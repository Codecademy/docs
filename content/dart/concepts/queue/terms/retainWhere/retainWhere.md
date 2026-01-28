---
Title: '.retainWhere'
Description: 'Remove all the elements that fail to satisfy a test in a queue.'
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

In Dart, the **`.length`** property removes all the elements that fail to satisfy a test in a queue.

## Syntax

```pseudo
queueName.retainWhere()
```

- `queueName`: The name of the queue to be checked.

## Example

The below example creates a queue named `example_queue`, appends five integer elements to it, and checks if any of its strictly superior to 4 using the `.retainWhere ()` property:

```dart
import 'dart:convert';
import 'dart:collection';

void main()
{
  // Initializing a queue
  Queue<int> example_queue = Queue<int>();

  // Appending elements to the queue
  example_queue.addAll([1, 3, 5, 2, 0]);

  // Check if any element it's superior to 4
  example_queue.retainWhere((element) => element < 4);
  print("The queue with the correct numbers is: ${example_queue.retainWhere()}");
}
```

The above code will give the following output:

```shell
The queue with the correct numbers is: 1, 3, 2, 0 
```
