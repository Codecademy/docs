---
Title: '.remove()'
Description: 'Removes the first occurence of a specified value from the list.'
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

In Dart, the **`.remove()`** method is used to remove the first occurence of a specified value from the list. This method is useful when a particular element from a list has to be removed without knowing it's index. It returns true if the specified value is removed from the list.

## Syntax

```pseudo
List.remove(value)
```

- `value`: The value of the item that should be removed from the list.

## Example

In the following example, the `.remove()` method is used to remove a specific element from a list of numbers:

```dart
void main() {
    List<int> numbers = [1, 2, 3, 4, 5, 6];
    print('Original List: $numbers');

    // Removing an element from the list
    numbers.remove(3);
    print('List after removing element 3: $numbers');
}
```

Here is the output for the above code example:

```shell
Original List: [1, 2, 3, 4, 5, 6]
List after removing element '3': [1, 2, 4, 5, 6]
```

With this approach, the `.remove()` method removes the first occurence of `3` in the list.

> **Note** If the specified value is not found in the list, the list remains unchanged.
