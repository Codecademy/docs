---
Title: 'inheritance.md' 
Description: 'Write term entry on the concept of inheritance in Dart' 
Subjects: 
  - 'Code foundations'
  - 'Infoprmation technology'
  - 'Mobile development'
Tags: 
  - 'Classes'
  - 'Data'
  - 'Frameworks'
CatalogContent: 
  - 'learn-c'
  - 'paths/computer-science'
---

Definition - **Dart** is a language created to develop server-side applications. 

## Syntax
- The hash(#) symbol, followed by the name is used to define Symbol in Dart.

- Symbol obj = new Symbol("name")  
Here the valid identifier such as function, valid class, public member name, or library name can be used in place of name value.
 
-  '=>' The arrow syntax is a way to define a function that executes the expression to its right and returns its value.

-  We can use '${}' to interpolate the value of Dart expressions within strings.

-  The '==' in Dart means the equality operator.

## Example
Dart supports the usual flow of statements:

if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
## Codebyte Example (if applicable)

```codebyte/dart
void main() {
  print('Hello, World!');
}
```