---
Title: '.clear()'
Description: 'Removes all entries from the map.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Arithmetic'
  - 'Map'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.clear()`** method in Dart allows you to remove all key-value pairs from the map effectively making it empty. This method is useful when you want to reset or clear the contents of a map.

## Syntax

```pseudo
map.clear()
```

## Example

The **`.clear()`** method is used to remove all key-value pairs from the scores map. After calling the clear() method, the map becomes empty. Even if a map does not have any key-value pairs, calling the method on it will not cause any error.

```dart
void main()
{
    Map<String, int> scores = {'John': 100, 'Alice': 85, 'Bob': 92};
    //Clearing the scores map
    scores.clear();
    print(scores);
    
    Map<String, String> emptyMap = {};
    //Clearing an empty map does not give any error
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

The output of the above code is:

```shell
{}
{}
{name: Alice, age: 28, email: alice@example.com}
```