---
Title: '.addAll()'
Description: 'Adds all elements of a collection to the end of a queue.'
Subjects:
 - 'Computer Science'
Tags:
 - 'Dart'
 - 'Methods'
 - 'Queues'
CatalogContent:
 - 'learn-dart'
 - 'paths/computer-science'
---
 
The Dart Queue `.addAll()` method is used to insert multiple elements of a collection to the end of a queue. This method is part of the `Queue` class in Dart's collection library. This method is useful for merging two collections, where the order of the elements is preserved, and duplicates are not removed.
 
## Syntax
 
```pseudo
queue.addAll(collection)
```
 
- `queue`: The instance of a `Queue` where elements will be added.
- `collection`: The collection of elements to add to the queue. This can be any class that implements the `Iterable` interface.
 
> The `.addAll()` method does not return a value.
 
## Example
 
The following example shows how `.addAll()` takes all elements from `moreNumbers` list and adds them to the end of the `numbers` queue.
 
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
[1, 2, 3]
[1, 2, 3, 4, 3, 5, 6]
```

> **Note:** The `Queue` class is part of Dart's `'dart:collection'` package; ensure to import it at the beginning of the file.
