---
Title: '.update()'
Description: 'Updates the value for a specific key in a Map using a provided function.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.update()`** method is used to update the value for a specific key in a `Map`. It takes a key and a function that computes the new value based on the existing value. If the key does not exist, an optional `ifAbsent` function can be provided to add a new key-value pair.

## Syntax

```pseudo
map.update(key, update, ifAbsent)
```

**Parameters:**

- `key`: The key whose value is to be updated.
- `update`: A function that takes the current value associated with `key` and returns the new value.
- `ifAbsent` (optional): A function that provides a value to insert if `key` does not exist in the map.

**Return value:**

Returns the new value associated with `key` after the update or insertion.

## Example 1

In the following example, the `.update()` method is used to update the value for an existing key in a `Map`:

```dart
void main() {
  Map<String, int> fruits = {'Apple': 5, 'Banana': 3};

  // Update the value for 'Apple'
  fruits.update('Apple', (value) => value + 2);

  print(fruits);
}
```

Here is the output for the above example:

```shell
{Apple: 7, Banana: 3}
```

## Example 2

The `.update()` method can use the `ifAbsent` parameter to add a key if it does not exist:

```dart
void main() {
  Map<String, int> fruits = {'Apple': 5};

  // 'Orange' does not exist, so ifAbsent adds it
  fruits.update('Orange', (value) => value + 5, ifAbsent: () => 10);

  print(fruits);
}
```

Here is the output for the above example:

```shell
{Apple: 5, Orange: 10}
```

## Example 3

The `.update()` method can also work with different [data types](https://www.codecademy.com/resources/docs/dart/data-types) for keys and values:

```dart
void main() {
  Map<int, String> students = {1: 'Alice', 2: 'Bob'};

  // Update the value for key 1
  students.update(1, (value) => '$value Smith');

  print(students);
}
```

Here is the output for the above example:

```shell
{1: Alice Smith, 2: Bob}
```
