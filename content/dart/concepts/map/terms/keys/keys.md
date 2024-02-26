---
Title: 'Dart Maps .keys()' 
Description: 'Explore how to access all keys in a Dart Map with the .keys method, a straightforward way to iterate over keys or check their existence.' 
Subjects: 
  - 'Computer Science'
  - 'Data Structures'
  
Tags: 
  - 'Dart'
  - 'Maps'
  - 'Data Structures'
  - 'Keys'
CatalogContent: 
  - 'learn-dart'
  - 'paths/computer-science'
---

The **.keys** method in Dart Map is both simple and powerful allowing you to easily access all the keys present in the map.

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
