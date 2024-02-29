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

A **variable** is a location in computer memory used to store reference, usually for use in a program.

## Syntax

```pseudo
type name = 'value';
```

When declaring a variable in Dart, the type of variable goes first, followed by the name, and then the value. The default type 'var' is inferred to be string. If an object isn't restricted to a single type, specify the Object type (or dynamic if necessary).

```pseudo
Object name = 'value';
```

The Dart Language enforces sound null safety (https://dart.dev/language/variables#null-safety), allowes to set default values (https://dart.dev/language/variables#default-value), constants (https://dart.dev/language/variables#final-and-const) and to declare the late variables(https://dart.dev/language/variables#late-variables). 

## Example

To display a constant name "Alex" one should write:

```c
void main() { 
   const name = 'Alex'; 
   print(name); 
}

```

The output would be:

```shell
Alex
```
