---
Title: '.length()'
Description: 'Returns the length or number of characters in a string.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Characters'
  - 'Index'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.length()`** [method](https://www.codecademy.com/resources/docs/java/methods) returns the length or number of characters in a string. It's a built-in method that comes with the `String` [class](https://www.codecademy.com/resources/docs/java/classes). This is particularly useful while validating user input, manipulating text, or working with dynamic content.

## Syntax

```pseudo
string.length()
```

**Parameters:**

The `.length()` method requires no parameters.

**Return value:**

The `.length()` method returns the length or number of characters in a string.

## Example 1: Basic Usage of `.length()`

This example uses the `.length()` method to get the length of a string:

```java
class Example {
  public static void main(String[] args) {
    String greetings = "Hello, Code Ninja!";
    System.out.println(greetings.length());
  }
}
```

Here is the output:

```shell
18
```

## Example 2: Using `.length()` on an Empty String

This example uses the `.length()` method to get the length of an empty string:

```java
public class EmptyString {
  public static void main(String[] args) {
    String empty = "";
    System.out.println("Length of the empty string: " + empty.length());
  }
}
```

Here is the output:

```shell
Length of the empty string: 0
```

## Example 3: Using `.length()` in Conditional Statements

This example uses the `.length()` method in conditional statements to check if a password is at least 8 characters long:

```java
public class PasswordCheck {
  public static void main(String[] args) {
    String password = "pass123";
    if (password.length() < 8) {
      System.out.println("Password is too short.");
    } else {
      System.out.println("Password length is acceptable.");
    }
  }
}
```

Here is the output:

```shell
Password is too short.
```

## Frequently Asked Questions

### 1. Does `.length()` count spaces and special characters?

Yes, `.length()` counts all characters, including whitespaces, symbols, and punctuations.

### 2. What happens if I call `.length()` on `null`?

You will get a `NullPointerException`. Always ensure the string is not `null` before calling `.length()`.

### 3. Can I use `.length()` with other data types like `int` or `char`?

No, `.length()` is only applicable to strings.
