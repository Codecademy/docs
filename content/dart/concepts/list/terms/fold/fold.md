---
Title: '.fold()'
Description: 'Starts with an initial value and applies a given function to each element of a list to return a single, accumulated value.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Dart'
  - 'Lists'
  - 'Syntax'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.fold()`** method in Dart is a built-in **List** method that reduces a given array of elements to a single value by iteratively applying a given function on all the elements of that array, starting with an initial value. It's particularly handy for tasks like calculating aggregate values (e.g., sum, product), concatenating strings, finding maximum or minimum values, generating data structures, and handling errors.

## Syntax

```pseudo
T fold<T>(T initialValue, T combine(previousValue, element))
```

- `initialValue`: The initial value to use for the accumulator.
- `combine`: A function that takes two arguments, the previous accumulated value (or the `initialValue` for the first element) and the current element, and returns the new accumulated value.

## Example

The following example demonstrates the use of the `.fold()` method:

```dart
void main() {
  List<int> ages = [22, 28, 27, 19, 18];
  int totalAge = ages.fold(10, (totalLength, element) => totalLength + element);
  print(totalAge);
}
```

In this example, **`.fold()`** is used to calculate the sum of all elements in the `ages` list. The initial value (10) is provided as the starting point for the sum, and the function (totalLength, element) => totalLength + element is used to add each element to the accumulator.

Here is the output for the above example:

```shell
124
```
