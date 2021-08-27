---
Title: "Strings"
Subjects:
  - "Computer Science"
Tags: 
  - "Strings"
  - "Data Types"
  - "Characters"
CatalogContent:
  - "learn-java"
  - "paths/computer-science"
---

A `String` in Java is an object that holds a sequence of characters contained within a pair of double quotes (`"`). It is not a primitive datatype.

Java strings provide a way to store something like a word, sentence, or whole paragraph. They can be any length and can contain letters, numbers, symbols, and spaces.

```java
// Creating a String variable
String name = "Codecademy";

// Creating another String variable
String address = "575 Broadway #5, New York, NY 10012"
```

To compare `String`s, the `.equals()` method must be used instead of the primitive equality comparator `==`.

```java
 // The following will print "false" because strings are case-sensitive
System.out.println(name.equals("bob"));
```

