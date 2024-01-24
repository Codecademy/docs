---
Title: 'Iterable' 

Description: '**Iterable** is an object which can be looped over or iterated over with the help of a for loop. Objects like lists, tuples, sets, dictionaries, strings, etc. are called iterables. In short and simpler terms, iterable is anything that you can loop over.' 
Subjects: 
  - Data Science 
Tags: 
  - 'Data'
  - 'Objects'
  - 'Loops'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

An **iterable** is a collection of elements that can be accessed sequentially. Dart uses the Iterable<E> abstract class to represent iterable objects.

An iterable object has an iterator getter that returns an iterator object. The iterable object uses the iterator to step through its elements.

Each time you access the iterator getter, the iterable object returns a new iterator. For this reason, you can create more than one iterator from the same iterable object.

If an object is iterable, you can use the for-in statement to iterate over its elements.



## Syntax

[Text, code, images, parameters, etc. about the syntax]

## Example

Since List and Set are iterable, you can use the for-in statement to iterate over their elements. For example:

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
