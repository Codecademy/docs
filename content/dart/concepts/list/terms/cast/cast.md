---
Title: '.cast()'
Description: 'Changes a list type.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Arithmetic'
  - 'Dart'
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.cast()`** method in Dart is used to change a list type and is used when all elements in a list need to be of a specific [data type](https://www.codecademy.com/resources/docs/dart/data-types). It ensures type safety in collections, but all list elements must conform to the specific type that the list is changing to or a `TypeError` will be thrown at runtime.

## Syntax

```pseudo
List<R> newList = originalList.cast<R>();
```

- `R`: Refers to the list type. The most common list types for a typed list are `int`, `double`, [`string`](https://www.codecademy.com/resources/docs/dart/strings), and `bool`. Besides that, it can also be `dynamic`.
- `newList`: The new list of elements after conforming to a specific type.
- `originalList`: The original list of elements that need to be changed.

## Examples

In the following example, the `.cast()` method is used to cast a list containing elements of the same type (`int`) to a `num` list:

```dart
void main() {
  List<int> intList = [14, 25, 36, 47, 58];
  print(intList);

  List<num> numList = intList.cast<num>();
  print(numList);
}
```

The output of the above code is the same for both `intList` and `numList` because `num` is a type that all numbers conform to, whether they are `int` or `double`:

```shell
[14, 25, 36, 47, 58]
[14, 25, 36, 47, 58]
```

Here is another example that uses the `.cast()` method to cast a `dynamic` list containing elements of different types to an `int` list:

```dart
void main() {
  List<dynamic> dynamicList = [1, 'Two', 'Three', 4, 5];
  print(dynamicList);
  
  List<int> intList = dynamicList.cast<int>();
  print(intList);
}
```

The code above will print `dynamicList` in the output. However, `dynamicList` will not be successfully cast to `intList` because a `string` cannot be changed to an `int`. Hence, the method returns an error:

```shell
[1, Two, Three, 4, 5]
DartPad caught unhandled _TypeError:
TypeError: "Two": type 'String' is not a subtype of type 'int'
```
