---
Title: '.removeWhere()'
Description: 'Removes values in a list that meet a given condition.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'

The **.removeWhere()** method removes elements from a list, based on a given condition that is provided as an argument. 

## Syntax
```pseudo
void removeWhere(bool Function(E element) test)
```

The '.removeWhere()' method takes in a bool function as an argument, where the function defines the condition. Values in the list are removed if the condition evaluates to 'true'.
## Example

```dart
void main(){

List<int> numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.removeWhere((int number) => number % 2 ==0);

print(numbers); // Output: [2,4,6,8,10]
}
```
