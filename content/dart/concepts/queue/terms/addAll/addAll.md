---
Title: '.addAll()'
Description: 'Adds all elements of a collection to the end of a queue.'
Subjects:
 - 'Computer Science'
 - 'Code Foundations'
Tags:
 - 'Dart'
 - 'Methods'
 - 'Queues'
CatalogContent:
 - 'learn-dart'
 - 'paths/computer-science'
---
 
In Dart, the **`.addAll()`** method adds all elements of a collection to the end of a queue. This method is part of the `Queue` class in the `dart:collection` library. It is useful for merging two collections where the order of the elements is preserved and duplicates are not removed.
 
## Syntax
 
```pseudo
queue.addAll(collection)
```
 
- `queue`: The instance of a `Queue` where elements will be added.
- `collection`: The collection of elements to add to the queue. This can be of any class that implements the [`Iterable`](https://www.codecademy.com/resources/docs/dart/iterable) interface.

> **Note:** The `.addAll()` method does not return a value.
 
## Example
 
In the following example, the `.addAll()` method takes all elements from the `moreNumbers` [list](https://www.codecademy.com/resources/docs/dart/list) and adds them to the end of the `numbers` queue:
 
```dart
import 'dart:collection';
 
void main() {
  Queue<int> numbers = Queue.from([1, 2, 3]);
  List<int> moreNumbers = [4, 3, 5, 6];
  
  print(numbers);
  
  numbers.addAll(moreNumbers);
  
  print(numbers);
}
```

The output for the above code is:

```shell
{1, 2, 3}
{1, 2, 3, 4, 3, 5, 6}
```

> **Note:** Since the `Queue` class is part of the `dart:collection` library, the library needs to be imported into the code to make `Queue` work as intended.
