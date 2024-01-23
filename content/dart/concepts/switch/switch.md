---
Title: 'switch-statements'
Description: 'Assesses a value expression based on a sequence of cases.'
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code foundation'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Methods'
  - 'Switch'
  - 'Functions'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'paths/computer-science'
---

The **Switch statement** is a control flow structure that allows a program to execute different code blocks based on the value of an expression.

## Syntax

```pseudo 
switch (expression) {
  case value1:
    // code block executed if expression matches value1
    break;
  case value2:
    // code block executed if expression matches value2
    break;
  // additional cases as needed
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

If the value is `banana`, `apple`, or `orange`, the corresponding case is executed. If none of the cases match, the default block is executed, printing an error message.
