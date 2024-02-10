---
Title: '.contains()' 
Description: 'Determines whether a specified element is present in a list.'
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Dart'
  - 'Development'
  - 'Lists'  
CatalogContent: 
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.contains()`** method determines whether a specified element is present in a list. It returns a Boolean value of `true` if the element is found in the list and `false` if it happens otherwise.

## Syntax

```pseudo
list.contains(element)
```

- `list`: The name of the list that needs to be searched.
- `element`: The element that needs to be searched.

## Example

In this example, the `.contains()` method is used to check if the string `banana` is present in the `fruits` list: 

```dart
void main() {
  List<String> fruits = ['apple', 'banana', 'orange'];

  // The .contains() method searches for the element 'banana' in the 'fruits' list
  bool containsBanana = fruits.contains('banana');

  print(containsBanana);  
}
```

Here is the output for the above code:

```shell
true
```
