---
Title: '.firstWhere()'
Description: 'The first element of an array that satisfies a given condition is returned, if not, a default value is returned.'
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

The **`.firstWhere()`** method in Dart is a built-in **List** method that allows you to find the first element in a list that satisfies a given condition. If the condition is satisfied, that element is returned, if not, a default value is returned.

## Syntax

```pseudo
E firstWhere(bool test(E element), { E orElse() });
```

- `test(E element)`: This function takes one parameter element and searches that element in the list.
- `orElse()`: This method is invoked if no element satisfies the condition.

## Example

The following example demonstrates the use of the `.firstWhere()` method:

```dart
void main() {
var numbers = [51, 62, 73, 84, 95];
var firstEven = numbers.firstWhere((element) => element % 2 ==0);
print(firstEven);
}
```

In this example, **`.firstWhere()`** is used to identify the first even number in the `numbers` list.

The output for the above example is as follows:

```shell
6
```

If the condition is not satisfied, we can provide a default value to be returned instead.

```dart
void main() {
var numbers = [14, 25, 36, 47, 58];
var greaterThanFive = numbers.firstWhere((element) => element > 5, orElse: () => -1);
print(greaterThanFive);
}
```

In this example, **`.firstWhere()`** is used to identify the first number that is greater than the number 5 in the `numbers` list.

Following is the output for the above code:

```shell
-1
```
