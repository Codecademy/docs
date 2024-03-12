---
Title: '.clear()'
Description: 'Removes all the elements from a map.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Map'
  - 'Elements'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.clear()`** method in Dart is used to remove all the key-value pairs from a map, effectively making it empty. This method is useful when there is a need to remove all the elements from a map. Even if a map doesn't have any key-value pairs, the method will not throw any error.

## Syntax

```pseudo
map.clear()
```

- `map`: The name of the map on which the `.clear()` method is called.

## Example

In the following example, the `.clear()` method is used to remove all the key-value pairs from the `scores` map:

```dart
void main() {
  Map<String, int> scores = {'John': 100, 'Alice': 85, 'Bob': 92};

  //Clearing the 'scores' map
  scores.clear();
  print(scores);

  Map<String, String> emptyMap = {};

  emptyMap.clear();
  print(emptyMap);

  Map<String, dynamic> user = {'name': 'John Doe', 'age': 30, 'email': 'john@example.com'};
  user.clear();

  //Clearing a map and inserting different values
  user['name'] = 'Alice';
  user['age'] = 28;
  user['email'] = 'alice@example.com';
  print(user);
}
```

The output for the above code is:

```shell
{}
{}
{name: Alice, age: 28, email: alice@example.com}
```
