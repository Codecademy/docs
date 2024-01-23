---
Title: 'Switch Statements'
Description: 'Assesses a value expression based on a sequence of cases.'
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Switch'
  - 'Functions'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **Switch statement** is a control flow structure that allows a program to execute different code blocks based on the value of an expression.

## Syntax

```pseudo 
switch (expression) {
  case value1:
    // code block executed if the expression matches value1
    break;
  case value2:
    // code block executed if the expression matches value2
    break;
  //Additional cases as needed
  default:
    // code block executed if no case matches the expression
}
```

- `expression`: The value or variable being evaluated.
- `case`: Specifies a value to be compared with the expression.
- `break`: Terminates the switch statement, preventing fall-through to subsequent cases.
- `default`: Optional. Specifies code to be executed if none of the cases match the expression.

## Example

In the following example, the switch statement is used to determine and print a message based on the value of the `fruit` variable:

```dart
void main() {
  String fruit = 'apple';

  switch (fruit) {
    case 'banana':
      print('You chose a banana!');
      break;
    case 'apple':
      print('You chose an apple!');
      break;
    case 'orange':
      print('You chose an orange!');
      break;
    default:
      print('Invalid fruit selection');
  }
}
```

The corresponding case is executed if the value is `banana`, `apple`, or `orange`. If none of the cases match, the default block is executed, printing an error message.
