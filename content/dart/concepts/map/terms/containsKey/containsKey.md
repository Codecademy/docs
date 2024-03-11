---
Title: '.containsKey()'
Description: 'Checks if a particular key is present in a Map object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.containsKey()`** method is an efficient and quick way to check if a particular key is present in a `Map` object.

## Syntax

```pseudo
mapVariable.containsKey(key)
```

- `mapVariable`: The name of the `Map` object to be checked.
- `key`: The key to be checked within the `Map` object.

## Examples

In the following example, the `.containsKey()` method is used to check if the specified keys are present in the `Map` object:

```dart
void main() {
  Map<String, String> nbaTeams = {
    'BOS': 'Boston Celtics',
    'GSW': 'Golden State Warriors',
    'LAL': 'Los Angeles Lakers'
  };
  print(nbaTeams.containsKey('BOS'));
  print(nbaTeams.containsKey('OKC'));
}
```

Here is the output for the above example:

```shell
true
false
```

The `.containsKey()` method can also work with keys of different [data types](https://www.codecademy.com/resources/docs/dart/data-types):

```dart
void main() {
  Map<int, String> runnerPositions = {
    1: 'Andrew',
    2: 'Benedict',
    3: 'Charlie'
  };
  print(runnerPositions.containsKey(1));
  print(runnerPositions.containsKey(4));
}
```

The above example gives the following output:

```shell
true
false
```
