---
Title: 'Operators'
Description: 'Operators are symbols used to operate on variables and values across different data types.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Operators'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Operators are used to perform various operations on variables and values of various data types.

## Arithmetic Operators

Basic math operations can be applied to `int`, `double`, and `float` data types:

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` modulo (yields the remainder)

These operations are not supported for other data types.

```java
int a = 20;
int b = 10;

int result;

result = a + b;  // 30
result = a - b;  // 10
result = a * b;  // 200
result = a / b;  // 2
result = a % b;  // 0
```

## Comparison Operators

Comparison operators can be used to compare two values:

- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to
- `==` equal to
- `!=` not equal to

They are supported for primitive data types and the result of a comparison is a boolean value `true` or `false`:

```java
int a = 5;
int b = 3;

boolean result = a > b;
// Result now holds the boolean value true
```

There is also a type comparison operator, `instanceof`. It tests if a given object is an instance of a particular class, subclass, or interface. It will return `false` if the object being compared has a `null` value.

```java
class Example {
  public static void main(String args[]) {
  Example test = new Example();
  System.out.println(test instanceof Example);
  // Outputs true
 }
}
```

## Bitwise Operators

Bitwise operators are used to manipulate individual bits of a number.

- `&` Bitwise AND
- `|` Bitwise OR
- `^` Bitwise XOR
- `~` Bitwise complement
- `<<` Left shift operator
- `>>` Signed right shift operator
- `>>>` Unsigned right shift operator

They can only be operated on data of `int`, `char`, `byte`, `long`, and `short`.

```java
int a = 5;
int b = 3;

int bitwiseAnd = a & b;
// 1

int bitwiseOr = a | b;
// 7

int bitwiseXor = a ^ b;
// 6

int bitwiseComplement = ~a;
// -6

int bitwiseRightShift = a >> b;
// 0

int bitwiseLeftShift = a << b;
// 40
```

## Logical Operators

Logical operators combine multiple boolean expressions or values. They return a boolean result (`true` or `false`).

These are the logical operators in Java:

- `&&` Logical AND: Returns true if **both** expressions are `true`.
- `||` Logical OR: Returns true if **any** expression is `true`.
- `!` Logical NOT: Reverses the result (`true` → `false`).

```java
int a = 10;
int b = 5;
int c = 20;

System.out.println((a > b) && (a < c));  // true, both conditions are true
System.out.println((a > b) || (a > c));  // true, one condition is true
System.out.println(!(a > b));            // false, negates true
```
