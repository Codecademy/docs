---
Title: '.asMap()'
Description: 'Returns a new **`Map`** view of a **`List`** where keys are the indices and values are elements'
Subjects:
 - 'Computer Science'
 - 'Web Development'
Tags:
 - 'Methods'
 - 'Dart'
 - 'Lists'
CatalogContent:
 - 'learn-dart'
 - 'paths/computer-science'
---

In Dart, the **`.asMap()`** method is used to obtain a new **`Map`** view of a **`List`**, where the keys are the indices of the list and the values are the elements at those indices. This method is particularly useful when you need to work with list elements in a map-line manner, accessing them by their indices.

## Syntax

```pseudo
list.asMap()
```
- this method does not take any arguments.

## Example

In this example, the `.asMap()` method is used to convert a list object of names into a map where the indices are the `keys` and the `names` are the values:

```dart
void main() {
    List<String> names = ['Steve', 'Tonny', 'Jack', 'Jamie'];
    print('Original List: $names')

    // Converting the list to a map
    Map<int, String> nameMap = names.asMap();
    print('Map view of the list: $nameMap');
} 
```

Here is the output for the above code example:

```shell
Original List: [Steve, Tonny, Jack, Jamie]
Map view of the list: {0: Steve, 1: Tonny, 2: Jack, 3: Jamie}
```

With this approach, the list undergoes converstion into a map. The resulting map remains immutable. 

