---
Title: 'insert-all'
Description: 'Inserts multiple elements into a list at a specified index and shifts the following elements by the number of the elements to be inserted.'
Subjects:
  - 'Mobile Development'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/mobile-development'
  - 'paths/web-development'
---

The **insertAll()** method in Dart is a built-in list operation that allows for the insertion of multiple elements into a list at a specified index. It takes two parameters: the index at which insertion should begin and an iterable containing the elements to be inserted. Upon invocation, the method inserts the elements from the iterable into the list, shifting existing elements as necessary to accommodate the new ones. If the index is beyond the length of the list, the elements are appended to the end. If the index is negative, it counts from the end of the list. This method is particularly useful when there's a need to expand a list by inserting multiple items without disrupting the order of existing elements.

## Syntax

![insertAll-dart-syntax](https://raw.githubusercontent.com/Codecademy/docs/main/media/<insertAll-dart-syntax>.<png>)
