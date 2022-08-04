---
Title: 'Hash Table'
Description: 'A hash table is a data structure that stores an arbitrary number of items, mapping keys to values, and uses a hash function to compute an index.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Hashes'
  - 'Conceptual'
  - 'Data Structures'
CatalogContent:
  - 'complex-data-structures'
  - 'paths/computer-science'
---

A **hash table** is a data structure that stores an arbitrary number of items, mapping keys to values, and uses a hash function to compute an index. The hash table relates the hashed keys to an [array](https://www.codecademy.com/resources/docs/general/array) of buckets where the associated value can be found. When looking up a value, the provided key is hashed and the resulting hash is used to retrieve the corresponding value.

## Implementation

Hash tables are implemented in many different programming languages such as [Java](https://www.codecademy.com/resources/docs/java) (as a [`HashMap`](https://www.codecademy.com/resources/docs/java/hashmap)) or JavaScript as a [`HashTable`](https://www.codecademy.com/resources/docs/javascript/hashtables) or [Python](https://www.codecademy.com/resources/docs/python) (as a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries)). Hash table implementations typically allow the modification, insertion, and deletion of the contained key-value pairs.

## Efficiency

On average, hash tables prove to be more efficient than other table lookup structures. Because of this, they are widely used for things such as [dictionaries](https://www.codecademy.com/resources/docs/general/dictionary), [database indexing](https://www.codecademy.com/resources/docs/general/database/index), and [caching](https://www.codecademy.com/resources/docs/general/cache).
