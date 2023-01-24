---
Title: '.indexOf()'
Description: 'Returns the index of the first occurrence of a given element, or -1 if not found.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Elements'
  - 'Search'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.indexOf()`** method returns the index of the first occurrence of the specified element in an `ArrayList`. If the element is not found, -1 is returned.

## Syntax

```pseudo
myArrayList.indexOf(element);
```

The index of its first occurrence is returned if the `element` exists, even if the value is `null`. If the `element` can't be found, -1 will be returned.

## Example

The following example features two calls to `.indexOf()` on an `ArrayList` called `animals`. The first call will print the index of the first occurrence of the element  `"Tiger"`. The second will return -1 because the element `"Elephant"` does not exist:

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create ArrayList of type String named animals
    ArrayList<String> animals = new ArrayList<String>();

    animals.add("Lion");
    animals.add("Tiger");
    animals.add("Cat");
    animals.add("Dog");
    animals.add("Tiger");
    animals.add("Lion");
    animals.add("Tiger");

    System.out.println(animals.indexOf("Tiger"));
    System.out.println(animals.indexOf("Elephant"));
  }
}
```

This will print the following output:

```shell
1
-1
```

The `.indexOf()` method does not work with primitive data types.

```java
import java.util.ArrayList;

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    ArrayList<int> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);

    int index = list.indexOf(2);
    System.out.println("ArrayList: " + list);
    System.out.println("Index with value of 2: " + index);
  }
}
```

Since `.indexOf()` method does not work with primitive data types. the following error will be thrown:

```shell
javac /tmp/CmHIzfwn03/HelloWorld.java
/tmp/CmHIzfwn03/HelloWorld.java:7: error: unexpected type
ArrayList<int> list = new ArrayList<>();
                  ^
  required: reference
  found:    int
1 error
```

Wrapper classes (e.g., `Integer`) must be used for the `.indexOf()` method to work with primitive values:

```java
import java.util.ArrayList;

public class HelloWorld {

  public static void main(String[] args) {
    System.out.println("Hello, World!");
    ArrayList<Integer> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);

    int index = list.indexOf(2);
    System.out.println("ArrayList: " + list);
    System.out.println("Index with value of 2: " + index);
  }
}
```

This will print the following output:

```shell
Hello, World!
ArrayList: [1, 2, 3]
Index with value of 2: 1
```
