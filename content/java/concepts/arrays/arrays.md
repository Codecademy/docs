---
Title: 'Arrays'
Description: 'Arrays are used for storing elements of the same data type in a fixed-sized collection, ordered by insertion.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, an array is used for storing elements of the same data type in a fixed-sized collection, ordered by insertion. Arrays are classified as a [reference data type](https://www.codecademy.com/resources/docs/java/data-types#reference-data-types). Being fixed in size means that unlike with an [ArrayList](https://www.codecademy.com/resources/docs/java/array-list), elements cannot be removed or added after the array has been created. They can only be modified.

## Syntax

Array variables are defined with a type followed by square brackets `[]`. Next, the actual elements are comma-separated and surrounded by curly brackets `{}`:

```pseudo
dataType[] varName = {elemOne, elemTwo, elemThree, elemN};
```

Alternatively, an array can be defined with the `new` keyword, the `arrayLength` integer defined, and each of the elements defined afterward:

```pseudo
dataType[] varName = new dataType[arrayLength];

varName[0] = valueOne;
varName[1] = valueTwo;
varName[n] = valueN;
```

It is important the referenced index is valid. Otherwise, an `ArrayIndexOutOfBoundsException` will be thrown.

## Example

In the example below, an array can be created in the following ways:

```java
int[] semesterOneMarks = {10, 20, 30, 40, 50};

String[] semesterOneCourses = new String[5];

semesterOneCourses[0] = "Algebra";
semesterOneCourses[1] = "World History";
semesterOneCourses[2] = "Literature";
semesterOneCourses[3] = "Programming";
semesterOneCourses[4] = "Gym";
```

Elements within the array can be accessed and changed as well:

```java
System.out.print(semesterOneCourses[0] + ": ");
System.out.println(semesterOneMarks[0]);

// Changed from "World History" to "History"
semesterOneCourses[1] = "History";
System.out.print(semesterOneCourses[1] + ": ");
System.out.println(semesterOneMarks[1]);

System.out.print(semesterOneCourses[2] + ": ");
System.out.println(semesterOneMarks[2]);

System.out.print(semesterOneCourses[3] + ": ");
System.out.println(semesterOneMarks[3]);

System.out.print(semesterOneCourses[4] + ": ");
System.out.println(semesterOneMarks[4]);
```

The output will look like this:

```shell
Algebra: 10
History: 20
Literature: 30
Programming: 40
Gym: 50
```

## The `Arrays` Class

Java includes an `Arrays` class in `java.util` that provides a number of static methods for manipulating arrays. Prominent ones are listed below:
