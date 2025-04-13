---
Title: '.charAt()'
Description: 'Returns the character at the given index in the string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns the character at the given index in the string.

## Syntax

```java
string.charAt(int index)
```

- `index` (required): An integer value that represents the index of the character value you want to retrieve.

## Example 1

Use `.charAt()` to print the first five characters of the string `"Hello World"`:

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

```
H
e
l
l
o
```

## Example 2

Use `.charAt()` in a for loop to print all the characters in the string `"Hello World"`:

```java
class PrintAllCharacters {
  public static void main(String[] args) {
    String greeting = "Hello World";

    for (int i = 0; i < greeting.length(); i++) {
      char ch = greeting.charAt(i);
      System.out.println(ch);
    }
  }
}
```

The output would be:

```
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
