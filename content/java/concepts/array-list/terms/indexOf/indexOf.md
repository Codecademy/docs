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

The index, if it exists, of the first occurrence of `element` is returned, even if the value is `null`. If the `element` cannot be found, -1 will be returned.

## Example

The following example features two calls to `.indexOf()` on an `ArrayList` called `animals`:

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // Create ArrayList of strings named animals
    ArrayList<String> animals = new ArrayList<>();

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

This will print the index of the first occurrence of the elements `"Tiger"` and `"Elephant"`, respectively:

```shell
1
-1
```

In the example above, `"Elephant"` does not exist in the collection so -1 is returned.

In addition, the `.indexOf()` method does not work with primitive data types.

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

Since the `.indexOf()` method does not work with primitive data types, the following error will be thrown:

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
