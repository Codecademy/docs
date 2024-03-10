---
Title: '.forEach()'
Description: 'Iterates through elements within iterable collections and executes a specified function for each element of the collection.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`forEach()`** method in Dart serves as a mechanism for iterating through elements within iterable collections like [lists](https://www.codecademy.com/resources/docs/dart/list), [maps](https://www.codecademy.com/resources/docs/dart/map), or sets. This method executes a specified function on each element of the collection.

## Syntax

```
collection.forEach((element) {
  // Code to be executed for each element on the collection
});
```

* `collection`: The iterable (list, map or set) that you want to iterate over.
* `(element)`: A variable representing the current element on each iteration.
* `{}` following the attribute, goes the anonymous function that will execute on each iteration.

## Example

Let's say we have a list of numbers and we want to print each number multiplied by 2 using the `forEach` method.

```
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  // Using forEach to print each number multiplied by 2
  numbers.forEach((number) {
    print(number * 2);
  });
}
```

* We declare a list of integers named `numbers`.
* The `forEach` method is applied to `numbers`, with an anonymous function that takes each `number` from the list and prints its value multiplied by 2.

The above code gives the following output:

```
2
4
6
8
10
```