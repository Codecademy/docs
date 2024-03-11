---
Title: 'Variables'
Description: 'A variable is a location in computer memory used to store data.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
---

A **`variable`** is a location in computer memory used to store references, usually for use in a program. Variables serve as symbolic names (identifiers) for values in the computer's memory. Variables allow programmers to manipulate and process data dynamically within their programs.

## Syntax

When declaring a variable in Dart, the type of variable goes first, followed by the name, and then the value:

```pseudo
type name = 'value';
```

The default type 'var' is inferred to be a `string`. If an object isn't restricted to a single type, specify the Object type (or dynamic if necessary):

```pseudo
Object name = 'value';
```

The Dart Language enforces sound null safety, allowes to set default values, constants and to declare the late variables.

## Example

To display a constant name "Alex" one should write:

```dart
void main() {
   const name = 'Alex';
   print(name);
}
```

The output for above code will be:

```shell
Alex
```
