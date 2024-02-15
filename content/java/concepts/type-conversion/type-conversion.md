---
Title: 'Type Conversion'
Description: 'Type conversion is the process of converting a value of one data type into another data type.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Integers'
  - 'Strings'
  - 'Numbers'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Type conversion is the process of converting a value of one [data type](https://www.codecademy.com/resources/docs/java/data-types) into another data type. There are many situations where data is available in one type and the program needs to treat it as another type. Common instances are situations where a mathematical operation needs a `float` value and one of the operands needed is an `integer`, or when processing [user input](https://www.codecademy.com/resources/docs/java/user-input) that comes in as [`String`](https://www.codecademy.com/resources/docs/java/strings) data and it needs to be interpreted as some sort of number.

## Converting Between Numeric Types

In certain situations, where the data types are compatible, Java can do type conversion automatically. This happens when a smaller data type, like `int`, is assigned to a variable of a longer data type, like `long`.

```java
// Automatic type conversion
int x = 15;
long y = 0L;
y = x; // y is now 15L
```

This process is also known as widening and follows the following pattern:

```pseudo
byte -> short -> int -> long -> float -> double
```

Any data type can be "widened" to a data type to the right on this list.

Converting to a smaller data type, i.e. going to the left on this list, requires explicit conversion or type casting.

```java
// Explicit type casting
long x = 15L;
int y = 0;
y = (int)x; // y is now 15
```

## Converting Strings to Numeric Types

`String` values are not directly compatible with numeric values. However, Java provides `Number` subclasses for the primitive numeric types; `Byte`, `Integer`, `Double`, `Float`, `Long` and `Short`. Each of these provides a `.parseXXXX()` method that takes a string and provides the equivalent data type.

```java
// Convert a string into a number using .parseXXXX()
String s = "15";
// Convert a string into an integer.
int x = Integer.parseInt(s); // x is now 15
// Convert a string into a float.
float y = Float.parseFloat(s); // y is now 15f
```

## Converting Numeric Types Into Strings

Converting numbers to strings can occur in a few different ways.

When a number is concatenated with a string, it will be converted automatically:

```java
// Automatically convert an integer to a string
int i = 15;
String s = "" + i; // s now has the value "15"
```

The `String.valueOf()` method can be used:

```java
// Convert an integer to a string using the .valueOf() method.
int i = 15;
String s = String.valueOf(i); // s now has the value "15"
```

Also, each of the `Number` subclasses has a `.toString()` method that converts its associated primitive numeric type into a `String`:

```java
// Convert an integer to a string using the .toString() method.
int i = 15;
String s = Integer.toString(i); // s now has the value "15"
```
