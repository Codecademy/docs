---
Title: '.cast()'
Description: 'Changes a list type.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Arithmetic'
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

- `R`: Refers to the list type. The most common list types for a typed list are `int`, `double`, [`String`](https://www.codecademy.com/resources/docs/dart/strings), and `bool`. Besides that, it can also be `dynamic`.
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
//intList
[1, 2, 3, 4, 5];

//numList
[1, 2, 3, 4, 5];
```

## Example 2
List elements are different types.

```dart
void main() {
  List<dynamic> dynamicList = [1, 'Two', 'Three', 4, 5];
  print(dynamicList);
  
  List<int> intList = dynamicList.cast<int>();
  print(intList);
}
```

The output of the code above will print DynamicList but DynamicList will not change to intList and instead returns an error.

```shell
//DynamicList
[1, Two, Three, 4, 5]

//Trying to cast DynamicList to intList
DartPad caught unhandled _TypeError:
TypeError: "Two": type 'String' is not a subtype of type 'int'
```