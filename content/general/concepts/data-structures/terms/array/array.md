---
Title: 'Array'
Description: 'Stores elements of various data types in an ordered collection.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

An **array** is an ordered collection of elements, and the elements can be of mixed data types. Arrays themselves are considered to be a composite [data type](https://www.codecademy.com/resources/docs/general/data-types). Python uses [lists](https://www.codecademy.com/resources/docs/python/lists) as an equivalent type. One key difference between lists and arrays is how memory is allocated. Elements of an array must be saved in adjacent or contiguous memory locations. This constraint allows for quick access of an element, but slow insertion or modification. Elements of a list, in contrast, can be saved anywhere and each element is saved with a reference to the previous element's location. This arrangement results in fast insertion or updating of a list, but relatively poor access speed.

## Syntax

Arrays are often created by using square brackets `[]` with a comma-separated list of individual elements inside:

```pseudo
array = [element0, element1, element2, element3]
```

Nested arrays (arrays within arrays) are also possible:

```pseudo
nested = [elementB, elementC]
outer = [elementA, nested, element4]
```

The length of the `outer` array is 3 elements-long because the inner `nested` array counts as an individual element. By itself, the `nested` array is 2 elements-long.

## Index Number

Array elements are usually referenced by an index number, which represents their position in the sequence.

The indices of most arrays start with 0:

```pseudo
groceryList = ["milk", "cookies", "berries", "carrots"]
// index:        0         1          2          3
```

- The first element `"milk"` is at index 0.
- The second element `"cookies"` is at index 1.
- ...and so on.

## Arrays in Different Languages

- [C++](https://www.codecademy.com/resources/docs/cpp/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
- [JavaScript](https://www.codecademy.com/resources/docs/javascript/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
- [Java](https://www.codecademy.com/resources/docs/java/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
- [PHP](https://www.codecademy.com/resources/docs/php/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
- [Python](https://www.codecademy.com/resources/docs/python/lists?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_list)
- [TypeScript](https://www.codecademy.com/resources/docs/typescript/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
- [Swift](https://www.codecademy.com/resources/docs/swift/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
- [Ruby](https://www.codecademy.com/resources/docs/ruby/arrays?utm_source=docs&utm_medium=docs&utm_campaign=docs_link_test&utm_content=docs_array)
