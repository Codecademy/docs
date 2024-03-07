---
Title: '.containsKey'
Description: 'Checks if a specific key exists in the Map object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Dart'
  - 'Properties'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.containsKey()`** method is an efficient and quick way to check if a `Map` object contains a specific key.

## Syntax

```pseudo
Map-variable.containsKey(key)
```

- `Map-variable`: Represents a variable that is a `Map` object.
- `key`: Represents the key to be checked within the `Map`.

## Example 1

In the following example, the `.containsKey()` method is used to check if the keys are present in the `Map` object.

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

## Example 2

The `.containsKey()` method can also work with keys of different data types:

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

The output for the above example is as follows:

```shell
true
false
```
