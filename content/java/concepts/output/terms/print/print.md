---
Title: '.print()'
Description: 'Prints its argument to the console.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Output'
  - 'Strings'
  - 'Print'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.print()`** method prints its argument to the console. Unlike the similar [`.println()`](https://www.codecademy.com/resources/docs/java/output/println) method, `.print()` does not follow its argument with a new line, and any subsequent characters sent to the console will begin wherever the prior `.print()` command left off.

## Syntax

```pseudo
System.out.print(argument);
```

The `argument` passed to the `print()` method will be displayed on the console.

## Example

The following example prints some content to the console (Note: if there is to be any spacing between uses of `.print()` it must be accounted for in the arguments.):

```java
public class PrintExample {
  public static void main(String[] args) {
    System.out.print("Output");
    System.out.print(123.456);
    System.out.print(true);
  }
}
```

This results in the output:

```shell
Output123.456true
```
