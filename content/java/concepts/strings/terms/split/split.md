---
Title: '.split()'
Description: 'Splits a string into an array of substrings based on a delimiter pattern.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Arrays'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.split()` method takes a string and splits it into an array of substrings based on a pattern delimiter. The pattern provided is a regular expression that will split the original string based on where the pattern is matched in the string.

The method will throw a `PatternSyntaxException` for a pattern that is an invalid regular expression.

## Syntax

```java
String[] result = string.split(delimiter, limit);
```

Where `string` is the string to be split, and `delimiter` is a string containing a regular expression pattern.

The optional `limit` parameter is an integer, and has the following behavior:

- `limit` > 0: `.split()` will return at most `limit` entries, stopping after `limit`-1 matches.
- `limit` < 0: `.split()` will match as many times as possible, resulting in an array of any size.
- `limit` = 0: `.split()` is the same as `limit` < 0 except that trailing empty strings will be discarded.

## Example 1

The following uses the regular expression "\s+" which matches one or more whitespace characters.

```java
public class Example{
  public static void main(String args[]){
    String words = "This  is  a    string    of  words.";
    String[] result = words.split("\\s+"); // Splits words on matching sequences of whitespace.
    for(String w:result){
      System.out.println(w);
    }
  }
}
```

This outputs the following:

```shell
This
is
a
string
of
words.
```

## Example 2

This example uses the pattern ",\s\*" which matches a comma followed by zero or more whitespace characters, it also uses a limit parameter.

```java
public class Example{
  public static void main(String args[]){
    String words = "This, is, a, comma,delimited, list, of, words";
    String[] result = words.split(",\\s*",6); // Splits words on matching commas followed by arbitrary whitespace.
    for(String w:result){
      System.out.println(w);
    }
  }
}
```

This outputs the following:

```shell
This
is
a
comma
delimited
list, of, words
```

## Example 3

This example shows the difference between a negative limit and a limit of zero.

```java
public class Example{
  public static void main(String args[]){
    String words = "This,string,has,extra,commas,,,,";
    String[] result1 = words.split(",",-2); // Split on each comma.
    String[] result2 = words.split(",",0); // Split on each comma, but discard trailing empty strings.
    System.out.println("Limit of -2 produces an array of length " + result1.length);
    System.out.println("Limit of 0 produces an array of length " + result2.length);
  }
}
```

This outputs the following:

```shell
Limit of -2 produces an array of length 9
Limit of 0 produces an array of length 5
```
