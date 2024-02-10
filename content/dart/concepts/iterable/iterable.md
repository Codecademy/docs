---
Title: 'Iterable'
Description: 'An iterable is a group of elements which can be retrieved sequentially.'
Subjects:
  - 'Data Science'
Tags:
  - 'Dart'
  - 'Data'
  - 'Objects'
  - 'Loops'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

An **iterable** is a group of elements which can be retrieved sequentially. Dart makes use of the `Iterable<E>` abstract class for representing iterable objects. The elements inside these objects can be traversed using the `for-in` loop.

An iterable object consists of an iterator getter, which returns an iterator object. The returned iterator is then used by the iterable object for element traversal. Each time the iterator getter is accessed, a new iterator is returned by the iterable object. This means that more than one iterator can be returned by the same iterable object.

## Example

In the following example, an iterable object is iterated over using the `for-in` loop and its elements are printed to the terminal:

void main() {
Iterable<int> iterable = [1, 2, 3, 4, 5];
for (var n in iterable) {
print(n);
}
}
Code language: Dart (dart)

Here is the output for the above code:

```shell
12
23
34
45
56
```
