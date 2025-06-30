---
Title: 'Strings'
Description: 'Strings in Java are immutable objects that represent sequences of characters enclosed in double quotes.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Characters'
  - 'Data Types'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Strings** in Java are objects that can hold a sequence of characters contained within a pair of double quotes (`""`). Strings are immutable, meaning once a string is created, it cannot be changed. This provides benefits such as better performance, security, and thread safety.

## Creating Strings

In Java, there are two ways to create a string:

- Using string literals
- Using the `new` keyword

### Creating Strings Using String Literals

This example uses string literals ("...") to create a string in Java:

```java
class Main {
  public static void main(String[] args) {
    String s1 = "Hello";

    System.out.println(s1);
  }
}
```

Here is the output:

```shell
Hello
```

### Creating Strings Using `new`

This example uses the `new` keyword to create a string in Java:

```java
class Main {
  public static void main(String[] args) {
    String s1 = new String("Hello");

    System.out.println(s1);
  }
}
```

Here is the output:

```shell
Hello
```

## Accessing String Characters

In Java, an index refers to the numerical position of an element within a data structure like an array or a string.

The [`charAt()`](https://www.codecademy.com/resources/docs/java/strings/charAt) method is used to access string characters.

Here is an example that uses this [method](https://www.codecademy.com/resources/docs/java/methods) to access the first character (index `0`) of a Java string:

```java
class Main {
  public static void main(String[] args) {
    String str = "Java";

    // Indexing starts at '0'
    char ch = str.charAt(0);

    System.out.println(ch);
  }
}
```

Here is the output:

```shell
J
```

## Get the Length of a String

The [`length()`](https://www.codecademy.com/resources/docs/java/strings/length) method can be used to get the length or the number of characters in a string:

```java
String str = "Java Programming";

int len = str.length();

System.out.println("Length: " + len);
```

Here is the output:

```shell
Length: 16
```

## Join Two Strings

The [`concat()`](https://www.codecademy.com/resources/docs/java/strings/concat) method is used to join two strings in Java:

```java
class Main {
  public static void main(String[] args) {
    String first = "Hello ";
    String second = "World";

    String result = first.concat(second);

    System.out.println(result);
  }
}
```

Here is the output:

```shell
Hello World
```

## Frequently Asked Questions

### 1. Are strings in Java mutable?

No, strings in Java are immutable. To create mutable strings, use `StringBuilder` or `StringBuffer`.

### 2. What is the difference between `String`, `StringBuilder`, and `StringBuffer` in Java?

- `String` is immutable.
- `StringBuilder` is mutable and not thread-safe.
- `StringBuffer` is mutable and thread-safe.

### 3. Can we override methods of the `String` class in Java?

No. the `String` class in Java is final, which means it cannot be subclassed.
