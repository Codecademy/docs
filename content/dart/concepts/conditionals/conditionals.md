---
Title: 'Conditionals'
Description: 'Conditionals in Dart are responsible for decision-making. They perform specific tasks based on some predefined conditions.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'If'
  - 'Else'
  - 'Switch'
  - 'Control Flow'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

**Conditionals** in Dart are responsible for controlling the flow of a program. They are the basic building blocks for decision-making. Conditionals allow a block of code to be executed after specific predefined conditions are met based on whether they are true or false. Some of the common conditional statements that Dart includes are `if-else`, `if-else-if` ladder, `switch` and conditional expressions.

## if Statement

The `if` statement gets executed when a block of code satisfies a specific condition, i.e., when the condition becomes true.

### Syntax

```pseudo
if(condition){
  // Code to be executed
}
```

### Example

The following example demonstrates the usage of the `if` statement:

```dart
void main(){
  int age = 18;
  if(age >= 18){
    print("You are an adult.You are eligible to vote");
  }
}
```

Here is the output:

```shell
You are an adult.You are eligible to vote
```

## if-else Statement

The `if-else` statement is a combination of `if` and `else` statements. This statement executes the `if` block if a specific condition is true and executes the `else` block if it's false.

### Syntax

```pseudo
if(condition){
  // Code to be executed if and only if the condition is true
}else{
  // Code to be executed if the above condition is false
}
```

### Example

The following example demonstrates the usage of the `if-else` statement:

```dart
void main(){
  int age = 12;

  if(age>=18){
    print("You are an adult.You are eligible to vote.");
  } else {
    print("Oops! You aren't eligible to vote.");
  }
}
```

Here is the output:

```shell
Oops! You aren't eligible to vote.
```

## Nested if-else Statement

Dart supports nested `if-else` statements. These statements include multiple `if-else` conditions nested in one another. They are used to handle more complex conditions.

### Syntax

```pseudo
if(condition1) {
  // Code to be executed if condition1 is true
  if(condition2) {
    // Code to be executed if condition1 and condition2 are both true
  } else {
    // Code to be executed if condition1 is true but condition2 is false
  }
} else {
  // Code to be executed if condition1 is false
  if(condition3){
    // Code to be executed if condition1 is false and condition3 is true
  } else {
    // Code to be executed if both condition1 and condition3 are false
  }
}
```

### Example

The following example demonstrates the usage of nested `if-else` statements:

```dart
void main(){
  int age = 20;
  bool hasID = true;
  if (age>=18){
    if(hasID){
      print("You have Voter ID. Hence are eligible to vote");
    } else {
      print("You need an Voter ID.");
    }
  } else {
    print("You are not allowed to vote.");
  }
}
```

Here is the output:

```shell
You have Voter ID. Hence are eligible to vote
```

## if-else-if Ladder

An `if-else-if` ladder is used to handle multiple statements sequentially. It executes the code block associated with the very first true condition it meets and else executes the `else` block.

### Syntax

```pseudo
if (condition1) {
    // Code to execute if condition1 is true
  } else if (condition2) {
    // Code to execute if condition1 is false but condition2 is true
  } else if (condition3) {
    // Code to execute if condition1 and condition2 are false but condition3 is true
  } else {
    // Code to execute if all the above conditions are false
}
```

### Example

The following example demonstrates the usage of the `if-else-if` ladder:

```dart
void main(){
int age = 25;
if(age >= 0 && age <= 12){
  print ("Category: Child");
  } else if (age >= 13 && age <=19){
    print("Category: Teenager");
  } else if (age >= 20 && age <=64){
    print("Category: Adult");
  } else if (age >= 65){
    print("Category: Senior");
  } else {
    print("Please enter a valid age");
  }
}
```

Here is the output:

```shell
Category: Adult
```

## switch Statement

The [`switch`](https://www.codecademy.com/resources/docs/dart/switch) statement is used to execute a code block based on a specific value of a expression. It is composed of several cases which specify a unique value to be compared to the value of the expression. The `break` statement terminates the `switch` statement. The `default` case contains a code block to be executed if none of the cases match the value of the expression specified in `switch`.

### Syntax

```pseudo
switch (expression) {
  case value1:
    // Code to execute if expression == value1
    break;
  case value2:
    // Code to execute if expression == value2
    break;
  case value3:
    // Code to execute if expression == value3
    break;
  default:
    // Code to execute if the value of the expression does not match any case
}
```

### Example

The following example demonstrates the usage of the `switch` statement:

```dart
void main(){
int age = 25;
  String category;
  if (age >= 0 && age <= 12) {
    category = 'Child';
  } else if (age >= 13 && age <= 19) {
    category = 'Teenager';
  } else if (age >= 20 && age <= 64) {
    category = 'Adult';
  } else if (age >= 65) {
    category = 'Senior';
  } else {
    category = 'Invalid age';
  }
  switch (category) {
    case 'Child':
      print('Category: Child');
      break;
    case 'Teenager':
      print('Category: Teenager');
      break;
    case 'Adult':
      print('Category: Adult');
      break;
    case 'Senior':
      print('Category: Senior');
      break;
    default:
      print('Invalid age');
  }
}
```

Here is the output:

```shell
Category: Adult
```

## Conditional Expressions

Conditional expressions in Dart are created using the `??` [operator](https://www.codecademy.com/resources/docs/dart/operators), which is known as _null-aware operator_. It gets evaluated only if the expression is null and returns the value on its right-hand side.

### Syntax

```pseudo
condition ? expressionIfTrue : expressionIfFalse;
```

### Example

The following example demonstrates the usage of conditional expressions:

```dart
void main(){
  String? userName;

  String displayName = userName ?? 'Guest';
    print("Welcome, $displayName!");
}
```

Here is the output:

```shell
Welcome, Guest!
```
