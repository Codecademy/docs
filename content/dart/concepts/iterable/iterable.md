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

## Syntax

[Text, code, images, parameters, etc. about the syntax]

## Example

In the following example, an iterable object is iterated over using the `for-in` loop and its elements are printed to the terminal:

void main() {
Iterable<int> iterable = [1, 2, 3, 4, 5];
for (var n in iterable) {
print(n);
}
}
Code language: Dart (dart)

In this example, we assign a list to an iterable and use the for-in loop to display the elements.

The first and last properties return the first and last elements respectively. For example:

void main() {
Iterable<int> iterable = [1, 2, 3, 4, 5];
print(iterable.first);
print(iterable.last);
}
Code language: Dart (dart)

Unlike a list, you cannot access an element via an iterable object using the square brackets []. Instead, you use the elementAt() method:

void main() {
Iterable<int> iterable = [1, 2, 3, 4, 5];
print(iterable.elementAt(1));
}
Code language: Dart (dart)

Output:

2

## Summary

    An iterable is a collection of elements that can be accessed sequentially.
    Dart uses the Iterable<E> abstract class to represent iterable objects.
