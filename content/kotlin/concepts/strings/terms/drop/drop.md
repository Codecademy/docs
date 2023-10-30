---
Title: '.drop()'
Description: 'Returns a list containing all elements excluding 0th to nth elements.' # 
Subjects: 
  - 'Computer Science'
  - 'Code Foundations'
Tags: 
  - 'Kotlin'
  - 'Strings'
  - 'Function'
CatalogContent: 
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.drop()`** method removes all elements from the original or 0th index element to the nth index element. 

## Syntax

```pseudo
String.drop(nth-element)
```
- `String`: The sequence of chars to be removed from and replaced.
- `nth-element`: The index of the fartherest element to be removed from the front. 

## Example

The example demonstrates the use of `.drop()` to remove elements from the beginning of the string.

```kotlin
fun main() {
  val str = "This is new"
  val str2 = "I'm a string"
  
  str.drop(8) // drops 'This is '
  str2.drop(6) // drops 'I'm a '

  println(str)
  println(str2)
}
```

The output of the code above will be:

```shell
new
string
```