---
Title: '.setAll()'
Description: 'Overwrites a specific range of elements within a list with new values.'
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

In Dart, the **`.setAll()`** method is a fundamental method that is used to overwrite a specific range of elements within a list with new values. It is particularly useful for updating specific sections of a list without changing its overall structure or size, ensuring efficient and precise modification of list data.

## Syntax

```pseudo
list.setAll(index, iterable)
```

- `index`: An integer representing the starting index from where the elements should be replaced.
- `iterable`: A collection of new elements that will replace the original elements from the starting index.

## Example

In the following example, the `.setAll()` method is used to replace the elements at index 1 and 2 (`Banana` and `Cherry`) in the `fruits` list with `Grape` and `Kiwi` respectively.

```dart
void main() {
  List<String> fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  print('Original List: $fruits');

  // Replacing 'Banana' and 'Cherry' with 'Grape' and 'Kiwi'
  fruits.setAll(1, ['Grape', 'Kiwi']);
  print('Updated List: $fruits');
}
```

Here is the output for the above example:

```shell
Original List: [Apple, Banana, Cherry, Date]
Updated List: [Apple, Grape, Kiwi, Date]
```
