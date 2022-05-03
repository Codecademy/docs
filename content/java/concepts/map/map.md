---
Title: 'Map'
Description: 'A collection interface allowing items to be stored as key-value pairs.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Interface'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `Map` interface is found in `java.util` and it allows collections to store items as key-value pairs. It is implemented in the [`HashMap`](https://www.codecademy.com/resources/docs/java/hashmap) and [`TreeMap`](https://www.codecademy.com/resources/docs/java/treemap) classes. A `Map` allows its contents to be accessed as a set of keys, a set of values, or a set of key-value pairs. The [data types](https://www.codecademy.com/resources/docs/java/data-types) of the keys and values are set when the `Map` is declared, and each can be any data type.

## Syntax

```pseudo
MapClass<KeyDataType,ValueDataType> myMap = new MapClass<KeyDataType,ValueDataType>
```

The `MapClass` is a class that implements the `Map` interface, and is initialized with two generic types inside angle brackets `< ... >`. The generic data types for `KeyDatatype` and `ValueDatatype` can either be different or the same.

## Methods

A `Map` class will implement the following methods:

- `.clear()`: removes all key-value pairs from the `Map`.
- `.containsKey(key)`: returns `true` if `key` is one of the keys in the `Map`.
- `.containsValue(value)`: returns `true` if `value` is one of the values in the `Map`.
- `.get(key)`: returns the value of the given `key` from the `Map`.
- `.put(key,value)`: adds a key-value pair to the `Map`.
- `.remove(key)`: removes the key-value pair associated with `key` from the `Map`.
- `.size()`: returns an `int` that represents the number of key-value pairs in the `Map`.
