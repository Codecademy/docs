---
Title: '.getRange()'
Description: 'Retrieves a range of elements from a list.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.getRange()`** method is used to get a specific section of elements from a list. It is useful for picking out a series of elements by their positions without changing the original list. It gives back an `Iterable` that covers from the starting index to, but not including, the ending index. This makes it perfect for tasks where you need just a part of the list's elements.

## Syntax

```pseudo
list.getRange(start, end)
```

- `start`: An integer representing the starting index of the range to be retrieved.
- `end`: An integer indicating the end index of the range (exclusive).

## Example

In the following example, the `.getRange()` method is used to obtain elements at index 1 through 3 from the `fruits` list. Note that the result is an iterable, which represents the specified range of elements.

```dart
void main() {
  List<String> fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  print('Original List: $fruits');

  // Getting range of 'Banana', 'Cherry', 'Date'
  Iterable<String> fruitRange = fruits.getRange(1, 4);
  print('Fruits in the range: $fruitRange');
}
```

Here is the output for the above example:

```shell
Original List: [Apple, Banana, Cherry, Date]
Fruits in the range: (Banana, Cherry, Date)
```
