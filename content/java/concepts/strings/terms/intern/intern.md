---
Title: '.intern()'
Description: 'Creates an exact copy of a string located in the heap memory and stores it in the string constant pool.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Java'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.intern()`** method creates an exact copy of a string located in the heap memory and stores it in the string constant pool. With this method, it is possible to optimize memory usage in a Java program by reusing identical string objects.

However, if in the string constant pool exists another string with the same value, a new object won’t be created and the new reference will point to the other string.

## Syntax

There are two ways to invoke the `intern()` method. The first one is used with the `new` keyword. The second one is directly used on a string literal.

```pseudo
// Using new keyword
String <variable name> = new String(<"string value">).intern();

// Used on a string literal
<String name>.intern();
```

## Example

```java
String str1 = "hello";
String str2 = new String("hello");
String str3 = str2.intern();

System.out.println(str1 == str2);
System.out.println(str1 == str3);
```

The output of the code above will be:

```shell
false
true
```

In this example above, there are three string objects: `str1`, `str2`, and `str3`. `str1` is created using the string literal syntax, while `str2` is created using the `new` keyword to create a new instance of the string class. The `intern()` method is called on `str2`, which returns a reference to the interned string. The `==` operator is used to compare the references of `str1` and `str2`, which returns `false` because they are different objects with different memory addresses. However, when we compare `str1` and `str3`, which are both interned string objects, the `==` operator returns `true` because they are the same object with the same memory address.
