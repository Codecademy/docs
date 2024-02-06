---
Title: '.contains()' 

Description: 'determines whether a specified element is present in a list.'

Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
  - 'Developer Tools'

Tags: 
  - 'Dart'
  - 'Development'
  - 'Lists'
  
CatalogContent: 
  - 'learn-dart'
  - 'paths/computer-science'
---

The ***`List.contains()`*** method determines whether a specified element is present in a list. It returns a boolean value: true if the element is found in the list, and false otherwise.

## Syntax
```preudo
bool contains(Object element)
```
* `element`: The element to search for within the list.
* `bool`: A boolean value indicating whether the specified `element` is present (true) or not present (false) in the list.

## Example

```
void main() {
  List<String> fruits = ['apple', 'banana', 'orange'];

  // Check if the list contains 'banana'
  bool containsBanana = fruits.contains('banana');

  print(containsBanana);  // Output: true
}
```
In this example, the `.contains()` method is used to check if the string 'banana' is present in the fruits list. The method returns true since 'banana' is indeed included within the list...