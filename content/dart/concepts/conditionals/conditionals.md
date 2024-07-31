---
Title: 'conditionals' 
Description: 'Conditional statements in Dart are responsible for decision-making.They perform specific tasks based on some predefined conditions.' 
Subjects:
  - 'Code Foundations'
  - 'Web Development'
  - 'Mobile Development'
Tags:
  - 'If'
  - 'Else'
  - 'Switch'
  - 'Control Flow'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

**Conditionals** in Dart are responsible for controlling the flow of a program. They are the basic building blocks for decision making. Conditionals allow the block of code to be executed after specific predefined conditions are met based on whether they are true or false. Some of the common conditional statements that dart includes are if-else, if-else-if ladder, switch and conditional expressions.


## if Statement
The `if` statement gets executed when a block of code satisfies a specific condition which means that the if statement gets executed if the condition comes is true.

### Syntax

```pseudo
if(condition){
  //code to be executed
}
```

### Example

```dart
void main(){
int age = 18;
if(age >= 18){
  print("You are an adult.You are eligible to vote");
}
}
```

## if-else Statement

The `if-else` statement is an combination of if and else statements. This statement executes the if block based on the specific condition and executes the else block if the if condition doesn't gets executed.

### Syntax

```pseudo
if(condition){
  //code to be executed if and only if the condition is true
  }else{
  //code to be executed if the above condition is false
  }
```

### Example

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

## Nested if-else Statement

Dart supports the nested `if-else` statements, These statements include multiple if-else conditions nested in one another. They are used to handle more complex conditions.

### Syntax

```pseudo
if(condition1) {
  //code to be executed if the given condition1 is true
  if(condition2) {
  //code to be executed if condition1 and condition2 both are correct
  } else {
  //code to be executed if condition1 is true but the condition2 is false
  }
  } else {
  //code to be executed if condition1 is false
  if(condition3){
  //code to be executed if condition1 is false and condition3 is true
  } else {
  //code to be executed if both condition1 and condition3 are false
  }
  }
```

### Example

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
## if-else-if ladder

An `if-else-if ladder` is used to handle multiple statements sequentially. It executes the code block associated with the very first true condition it meets and else executes the else block.

### Syntax

```pseudo
if (condition1) {
  // code to execute if condition1 is true
  } else if (condition2) {
  // code to execute if condition1 is false and condition2 is true
  } else if (condition3) {
  // code to execute if condition1 and condition2 are false and condition3 is true
  } else {
  // code to execute if all above conditions are false
  }
```

### Example

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
## switch Statement

The `switch` statement are used to execute a code based on a specific values of a expression. It is composed of `case` which specifies the value to be compared for switch `expression`. The `break` statement terminates the `switch` sxpression. `default` case contains a code to execute if none of the above cases match the value of the expression specified in switch.

### Syntax

```pseudo
switch (expression) {
  case value1:
  // code to execute if expression == value1
  break;
  case value2:
  // code to execute if expression == value2
  break;
  case value3:
  // code to execute if expression == value3
  break;
  default:
  // code to execute if expression does not match any case
  }
```

### Example

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
  
## Conditional expression (`??`)

The `??` operator in Dart is also known as `null-aware operator`. It gets evaluated only if the expression is null and returns the value on its right-hand side.

### Syntax 

```pseudo
condition ? expressionIfTrue : expressionIfFalse;
```

### Example

```dart
void main(){
String? userName;

String displayName = userName ?? 'Guest';
  print("Welcome, $displayName!");
  }
```