---
Title: '.indexOf()'
Description: 'Returns the first index at which an element can be found.'
Subjects: 
- 'Computer Science'
- 'Web Development'
Tags:
- 'Dart'
- 'Method'
- 'Index'
- 'List'
CatalogContent:
- 'learn-dart'
- 'paths/computer-science'
---

In Dart, the **`.indexOf()`** method returns the first occurance of the indicated element in a list. If the element is not found, the method will return `-1`.

## Syntax
```pseudo
list_name.indexOf(element);
```
The following parameters are used in the `indexOf()` method:
- `list_name`: The name of the list where the element is searched.
- `element`: The value of which index we are looking for in the list.

  ## Example
  Here is an example of `indexOf()` for a list:
  ```dart
  List<String> colors = ['blue','yellow','red','green','orange','pink'];
  int index = colors.indexOf('red');
  print(index); //Output: 2
  ```
  Here is an example of `indexOf()` for a string:
  ```dart
  String sentence = 'I love the color green!';
  int index = sentence.indexOf('green');
  print(index); //Output: 14
  ```
