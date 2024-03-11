---
Title: '.keys'
Description: 'Returns an iterable collection that contains all the keys present in a map.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Data Structures'
  - 'Properties'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, the **`.keys`** property returns an iterable collection that contains all the keys present in a map.

## Syntax

When working with a Dart Map, you can access all its keys by using the `.keys` property which returns an iterable collection.


## Example
void main() {
  Map<String, String> adventurers = {
    '001': 'Alice the Archer',
    '002': 'Bob the Barbarian',
    '003': 'Charlie the Cleric'
  };

  for (var id in adventurers.keys) {
    print(id);
  }
}
