---
Title: 'Generics'
Description: 'Generics refer to the ability to use a type as a parameter to methods and classes.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Data Types'
  - 'Constructors'
  - 'Methods'
  - 'OOP'
  - 'Parameters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Generics** refer to the ability to use a [type](https://www.codecademy.com/resources/docs/java/data-types) as a parameter to [methods](https://www.codecademy.com/resources/docs/java/methods) and [classes](https://www.codecademy.com/resources/docs/java/classes). This provides the ability to define a set of related classes or methods that can operate on many different types with a single declaration. This also allows type safety at compile-time allowing invalid types to be caught during compilation.

**Note:** Java type parameters can only be reference types, not primitive types (like `int`, `double`, or `char`).

## Generic Methods

A generic method declaration can be called with arguments of different types. The compiler handles each method call appropriately based on the types of the arguments.

### Syntax

```pseudo
<T> void myMethod( T argument ) {
  // Method body
}
```

The type parameter section is before the return type and is enclosed in angle brackets `<...>`. Inside are one or more type parameters separated by commas (`T` above) each one is an identifier for a specific type name. The identifiers can be used to declare the return type, the types of the arguments passed to the method, and as type specifiers within the method body.

### Example

The following example shows how a generic method can accept [arrays](https://www.codecademy.com/resources/docs/java/arrays) of different types:

```java
public class GenericMethodExample {
  // Generic method
  public static <T> void arrayPrint( T[] a ) {
    for(T item : a) {
      System.out.printf("%s",item);
      System.out.println();
    }
  }

  // Use example
  public static void main(String args[]) {
    Integer[] array1 = {0,1,2,3};
    String[] array2 = {"Hello","World"};
    Character[] array3 = {'G','E','N','E','R','I','C'};

    arrayPrint(array1);
    arrayPrint(array2);
    arrayPrint(array3);
  }
}
```

This results in the output:

```shell
0
1
2
3
Hello
World
G
E
N
E
R
I
C
```

## Generic Classes

A generic class takes one or more type parameters when it is declared. One of the more familiar uses of a generic class is with Java's various collection classes. An [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) for instance is a generic class. When it is declared it requires a type parameter to specify what kind of type the `ArrayList` contains. For example:

```java
ArrayList<String> a = new ArrayList<String>();
```

### Syntax

A generic class is defined just like a normal class, with the addition of a list of type parameters in angle brackets `<...>` after the class name. The type parameters can then be used throughout the class definition to declare variables and specify parameter types for methods.

```pseudo
accessModifier class ClassName<T> {
  // Class body
}
```

### Example

This example creates a `Bucket` class that can hold contents of various types.

This defines the generic `Bucket` class:

```java
// Bucket.java
class Bucket<T> {
  private T item;

  public void putInBucket(T item) {
    this.item = item;
  }

  public T fetchFromBucket() {
    return item;
  }
}
```

This uses the generic `Bucket` class:

```java
// UseBucket.java
public class UseBucket {

  public static void main(String[] args) {
    Bucket<String> bucket1 = new Bucket<String>();
    Bucket<Integer> bucket2 = new Bucket<Integer>();

    bucket1.putInBucket("Hello World!");
    bucket2.putInBucket(12345);

    System.out.printf("%s",bucket1.fetchFromBucket());
    System.out.println();
    System.out.printf("%s",bucket2.fetchFromBucket());
  }
}
```

This results in the output:

```shell
Hello World!
12345
```
