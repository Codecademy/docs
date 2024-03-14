---
Title: '.firstWhere()'
Description: 'Returns the first element in a list that satisfies a given condition.'
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

The **`.firstWhere()`** method in Dart is a built-in [`List`](https://www.codecademy.com/resources/docs/dart/list) method that returns the first element in a list that satisfies a given condition. If no element satisfies the condition, it returns a predefined default value.

## Syntax

```pseudo
E firstWhere(bool test(E element), { E orElse() });
```

- `test(E element)`: A function that takes an element as a parameter and checks if it satisfies a given condition.
- `.orElse()`: If no element satisfies the condition, this method is invoked and the default value defined using it is returned.

## Example 1

In this example, the `.firstWhere()` method is used to identify the first even number in the `numbers` list:

```dart
void main() {
    var numbers = [5, 6, 7, 8, 9];
    var firstEven = numbers.firstWhere((element) => element % 2 == 0);
    print(firstEven);
}
```

The output for the above example is as follows:

```shell
6
```

In case the condition is not satisfied, the `.orElse()` method can be used to provide a default return value instead.

## Example 2

In this example, the `.firstWhere()` method is used to identify the first number that is greater than 5 in the `numbers` list, provided along with a `.orElse()` method:

```dart
void main() {
    var numbers = [1, 2, 3, 4, 5];
    var greaterThanFive = numbers.firstWhere((element) => element > 5, orElse: () => -1);
    print(greaterThanFive);
}
```

Following is the output for the above code:

```shell
-1
```
