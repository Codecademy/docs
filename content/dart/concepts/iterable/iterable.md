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

An **iterable** is a collection of elements that can be accessed sequentially. Dart uses the Iterable<E> abstract class to represent iterable objects.

An iterable object has an iterator getter that returns an iterator object. The iterable object uses the iterator to step through its elements.

Each time you access the iterator getter, the iterable object returns a new iterator. For this reason, you can create more than one iterator from the same iterable object.

If an object is iterable, you can use the for-in statement to iterate over its elements.

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
