---
Title: 'Strings'
Description: 'Strings are immutable objects that are sequences of characters contained within a pair of double quotes.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Strings** are immutable objects that represents a sequence of characters contained within double quotes (`""`).

## Syntax

```pseudo
val stringName: String = "string value"
```

In Kotlin, string values are always defined as instances of the `String` class.
## Example

Here is an example of how you might use strings in Kotlin:

```kotlin
fun main(args: Array<String>) {
  val greeting: String = "Hello, World!"
  println(greeting)
}
```

The output for the above code will be:

```shell
Hello, World!
```

## String Templates

We can also use `string` templates to include dynamic values in your strings. To do this, you enclose the dynamic value in curly braces and precede it with a dollar sign, like this:

```kotlin
val dynamicValue = 4
val stringName: String = "The value of dynamicValue is $dynamicValue"
```

Below we will see an example with use of curly braces `{}`:

```java
val a = 4
val b = 5
val stringName: String = "The sum of a and b is ${a + b}"
System.out.println(stringName)
```

The output for the above code will be:

```
The sum of a and b is 9
```
