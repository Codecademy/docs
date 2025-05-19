---
Title: '.charAt()'
Description: 'Returns the character at a particular index in a string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'Values'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.charAt()`** [method](https://www.codecademy.com/resources/docs/java/methods) returns the character at a specified index in a string. It is commonly used in string parsing, comparisons, analysis, and algorithm implementation.

## Syntax

```pseudo
string.charAt(index)
```

**Parameters:**

- `index`: An integer that represents the index of the character to be accessed.

**Return value:**

The `.charAt()` method returns the element at the given index in a string.

## Example 1: Basic Usage of `.charAt()`

The following example uses the `.charAt()` method to print the first five characters of a string:

```java
class CharacterAt {
  public static void main(String[] args) {
    String greeting = "Hello World";

    System.out.println(greeting.charAt(0));
    System.out.println(greeting.charAt(1));
    System.out.println(greeting.charAt(2));
    System.out.println(greeting.charAt(3));
    System.out.println(greeting.charAt(4));
  }
}
```

The output would be:

```shell
H
e
l
l
o
```

## Example 2: Using `.charAt()` in a Loop

This example uses the `.charAt()` method in a `for` [loop](https://www.codecademy.com/resources/docs/java/loops) to print all the characters in a string:

```java
class PrintAllCharacters {
  public static void main(String[] args) {
    String greet = "Hello World";

    for (int i = 0; i < greet.length(); i++) {
      char ch = greet.charAt(i);

      System.out.println(ch);
    }
  }
}
```

The output would be:

```shell
H
e
l
l
o

W
o
r
l
d
```

## Example 3: Handling Exceptions in `.charAt()`

This example demonstrates the usage of the `try...catch` block to handile exceptions in the `.charAt()` method:

```java
public class CharAt {
  public static void main(String[] args) {
    String name = "OpenAI";

    try {
      char ch = name.charAt(10);

      System.out.println("Character: " + ch);
    } catch (StringIndexOutOfBoundsException e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}
```

The output would be:

```shell
Error: Index 10 out of bounds for length 6
```

## Frequently Asked Questions

### 1. What is the index range for `.charAt()`?

The valid index range for `.charAt()` is from `0` to `len-1`, where `len` is the length of the string. Accessing an index outside this range will throw an exception.

### 2. Can I use `.charAt()` on an empty string?

No. Calling `.charAt(0)` on an empty string (`""`) will result in an exception because there are no characters to access.

### 3. Is `.charAt()` zero-based?

Yes, string indexing in `.charAt()` starts from `0`.
