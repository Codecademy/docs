---
Title: '.contains()'
Description: 'Checks if a specified element is present in the queue.'
Subjects:
 -'Code foundations'
 -'Computer science'
Tags:
 -'Dart'
 -'Concepts'
 -'Queue'
CatalogContent:
 -'learn-dart'
 -'paths/computer-science'
---

The Dart **.contains()** method in the 'Queue' class is used to check if a specified element is present in the queue. 

## Sintax:

The syntax for this method is as follows:

```pseudo
bool contains(Object element)
```
- `element`: The element is the object that needs to be checked in the queue.

## Exaple-1:

```dart
var queue = Queue();
queue.addAll([1, 2, 3, 4, 5]);
print(queue.contains(3)); // Output will be true
```
This method returns `true` if the element is found in the queue, otherwise it returns `false`.

## Exaple-2:

```dart
var names = Queue<String>();
names.addAll(['Alice', 'Bob', 'Charlie', 'David']);
print(names.contains('Bob')); // Output will be true
```
In this example, we first add a collection of names to the queue and then use the '.contains()' method to check if the name 'Bob' is present in the queue. The method will return `true` in this case because 'Bob' is indeed present in the queue.






