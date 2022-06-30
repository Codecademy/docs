---
Title: 'Comparable'
Description: 'The Comparable interface is used to define how a class is to be sorted.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **Comparable** interface is used to define how a class is to be sorted. It is not to be confused with the [Comparator](https://www.codecademy.com/resources/docs/java/comparator) interface, which is implemented in a separate class. The Comparable interface is implemented in the class to be sorted.

The Comparable interface only has one method, `.compareTo()` that is used to compare elements. It is used to compare the current instance with another instance of the same class, and the sort is based on the return value of `.compareTo()`:

| Return Value | Means                           |
|:------------:|---------------------------------|
|    `>= 1`    | this instance > passed instance |
|      `0`     | this instance = passed instance |
|    `<= -1`   | this instance < passed instance |
