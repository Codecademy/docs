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
type name = value;
```

- `type`: It can be any data type like `Int`, `String` or can also take the value `var`, `const`.
- `value`: This is what the variable `name` represents. It corresponds to the data type `type`.

> **Note:** The default type 'var' is inferred to be a `string`.

If an object isn't restricted to a single type, specify the Object type (or dynamic if necessary):

```pseudo
Object name = 'value';
```

The Dart Language enforces sound null safety, allows to set default values and constants, and declares the late variables.

## Example

To display a constant name "Alex" one should write:

```dart
void main() {
   const name = 'Alex';
   print(name);
}
```

The output for the above code will be:

```shell
Alex
```
