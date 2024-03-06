---
Title: '.fold()'
Description: 'Starts with an initial value and applies a given function to each element of a list to return a single, accumulated value.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.fold()`** method in Dart is a built-in `List` method that starts with an initial value and applies a given function to each element of a list to return a single, accumulated value. It's particularly handy for tasks like calculating aggregate values (e.g., sum, product), concatenating strings, finding maximum or minimum values, generating data structures, and handling errors.

## Syntax

```pseudo
T fold<T>(T initialValue, T combine(previousValue, element))
```

- `initialValue`: The initial value to use for the accumulator.
- `combine`: A function that takes the `initialValue` for the first element and the current element as arguments and returns the new accumulated value.

## Example

In this example, the `.fold()` method is used to calculate the sum of all the elements in the `ages` list:

```dart
void main() {
  List<int> ages = [22, 28, 27, 19, 18];
  int totalAge = ages.fold(10, (totalLength, element) => totalLength + element);
  print(totalAge);
}
```

Here is the output for the above example:

```shell
124
```
