---
Title: 'Java-TreeSet' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'TreeSet is one of the implementations of the SortedSet interface in Java. This type of set uses a Tree for storage. The ordering of the elements is maintained by a set using their natural ordering whether or not an explicit comparator is provided. ex. Set set = new TreeSet<>()' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Sets'
  - 'Strings'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-java'
---

**Tree set** is a sorted collection. It stores unique elements and sorts them in ascending order. 

## Syntax

```pseudo
Set <String> treeset = new TreeSet<>();
```

## Example

Tree set may be helpful for a string set beacause if someone add some String twice, program will show it only once.
The following example demonstrates using `TreeSet<>()` with Strings:

```java
// Example.java
import java.util.*;
public class MyClass {
  public static void main(String[] args) {
    Set <String> treeset = new TreeSet<>();
    treeset.add("Diablo III");
    treeset.add("The Witcher");
    treeset.add("Doom");
    treeset.add("Doom");

    System.out.println(treeset);
  }
}
```


This results in the following output:

```shell
[Diablo III, Doom, The Witcher]
```
