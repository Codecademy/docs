---
Title: '.forEach()'
Description: 'Iterates through elements within iterable collections and executes a specified function for each element of the collection.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Elements'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.forEach()`** method in Dart serves as a mechanism for iterating through elements within [iterable](https://www.codecademy.com/resources/docs/dart/iterable) collections like [lists](https://www.codecademy.com/resources/docs/dart/list), [maps](https://www.codecademy.com/resources/docs/dart/map), or sets. This method executes a specified function on each element of the collection.

## Syntax

```pseudo
collection.forEach((element) {
  // Code to be executed for each element on the collection
});
```

- `collection`: The list, map, or set to iterate over.
- `element`: A variable representing the current element on each iteration.

## Example

In the example below, a list of numbers is declared. Each number is multiplied by 2 and printed utilizing the `.forEach` method:

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  numbers.forEach((number) {
    print(number * 2);
  });
}
```

The above code returns the following output:

```shell
2
4
6
8
10
```
