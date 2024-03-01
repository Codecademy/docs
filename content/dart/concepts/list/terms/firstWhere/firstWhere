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

The **`.firstWhere()`** method in Dart is a built-in **List** method that allows you to find the first element in a list that satisfies a given condition. It takes a function as an argument that returns a boolean value, indicating whether the current element satisfies the condition. If the condition is satisfied, that element is returned, if not, a default value is returned.

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
var numbers = [5, 6, 7, 8, 9];
var firstEven = numbers.firstWhere((element) => element % 2 ==0);
print(firstEven);
}
```

In this example, **`.firstWhere()`** is used to identify the first even number in the `numbers` list. We pass in a function that checks whether the current element is even by using the modulo (`%`) operator.

Here is the output for the above example:

```shell
6
```

If the condition is not satisfied, we can provide a default value to be returned instead.

```dart
void main() {
var numbers = [1, 2, 3, 4, 5];
var greaterThanFive = numbers.firstWhere((element) => element > 5, orElse: () => -1);
print(greaterThanFive);
}
```

In this example, **`.firstWhere()`** is used to identify the first number that is greater than the number 5 in the `numbers` list. Since there are no numbers greater than 5 in the list, we provide a default value of -1 to be returned instead.

Here is the output for the above example:

```shell
-1
```
