---
Title: 'indexWhere()'
Description: 'The indexWhere() method is used to find the index of an element in a list.' 
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'dart'
  - 'list'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The method **`indexWhere()`** returns the list’s first index that matches the given condition.

## Syntax

```pseudo
int indexWhere (bool test(E element), [ int start = 0 ]);
```

It searches the list from the beginning of the index to the end. The index of the item is returned the first time an item is encountered, ensuring that the condition is true. Otherwise, it returns -1.

## Example

The following code shows how to use the method `indexWhere()` in dart:

```
void main(){
  // Creating list
  List<String> book = ['Flutter Cookbook', 'Dart NoteBook', 'educative.io']; 
  // returns index where the list 'book' endsWith 'k'
  final int foundIndex = book.indexWhere((book) => book.endsWith('k'));
  // Display result 
  if (foundIndex != -1) {
    print('Index: $foundIndex');
  }
}
```
  - Line 3: We create a list named book.
  - Line 5: We use the method indexWhere() and pass the function endsWith() to check the list item that ends  with k. It returns the index where the list ‘book’ ends with ‘k’ which is then stored in variable foundIndex.
  - Lines 7 & 8: We print the index that satisfies the condition.