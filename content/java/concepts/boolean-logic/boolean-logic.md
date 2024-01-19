---
Title: 'Boolean Logic'
Description: 'A set of operators and methods in Java for manipulating booleans.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Booleans'
  - 'Logic'
  - 'Logical'
  - 'Operators'
  - 'Conditionals'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/introduction-to-android-with-java'
---

One of the primitive [data types](https://www.codecademy.com/resources/docs/java/data-types) in Java is the `boolean`. A boolean object takes a value of `true` or `false`.

**Boolean logic** describes how boolean values can be combined and manipulated. Java implements boolean logic through a set of [operators](https://www.codecademy.com/resources/docs/java/operators) and [methods](https://www.codecademy.com/resources/docs/java/methods).

## Boolean Logical Operators

The boolean logical operators available in Java are described in the following table:

| Operator Symbol | Syntax | Behavior | Equivalent Logical Concept |
|-|-|-|-|
| `&&` | `(boolean A) && (boolean B)` | Returns `true` if both arguments equal `true`; otherwise returns `false` | AND / Conjunction |
| `\|\|` | `(boolean A) \|\| (boolean B)` | Returns `true` if at least one argument equals `true`; otherwise returns `false` | OR / Inclusive disjunction |
| `!` | `!(boolean A)` | Returns `true` if the argument equals `false`; otherwise returns `false` | NOT / Negation |
| `^` | `(boolean A) ^ (boolean B)` | Returns `true` if exactly one argument equals `true`; otherwise returns `false` | XOR / Exclusive disjunction |

## Boolean Logical Methods

The boolean logical methods available in Java are described in the following table:

| Method Syntax | Behavior | Equivalent Logical Concept |
|-|-|-|
| `logicalAnd(boolean A, boolean B)` | Returns the result of `(A && B)` | AND / Conjunction |
| `logicalOr(boolean A, boolean B)` | Returns the result of `(A \|\| B)` | OR / Inclusive disjunction |
| `logicalXor(boolean A, boolean B)` | Returns the result of `(A ^ B)` | XOR / Exculsive disjunction |

### Use in Conditionals

Boolean logic is commonly used within conditionals to control the flow of a program.

## Example

The following example illustrates the use of boolean logical operators within conditionals.

```java
// File: GateTest.java
public class GateTest{
  public static void main(String args[]) {
    boolean gate1IsOpen = false ;
    boolean gate2IsOpen = false ;
    boolean gate3IsOpen = true ;
    if(!(gate1IsOpen || gate2IsOpen || gate3IsOpen)){
      System.out.println("All gates closed.");
    }
    else {
      System.out.println("Gate open! Identify and close immediately.");
    }
  }
}
```

The above example gives following output:

```shell
Gate open! Identify and close immediately.
```
