---
Title: 'user-input'
Description: 'User input in Dart is used to read the data from console and interact with the web applications.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobilr Development'
Tags:
  - 'Dart'
  - 'Input'
  - 'Flutter'
  - 'Console'
  - 'Forms'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

**User input** is the most basic aspect of intearction between the user and the software. In Dart it varied depending on the type of application being used. It can be a web application, a Flutter or a console application. Dart provides varitey of tools and libraried to manage the user input effectively.

## Syntax

```pseudo
import 'dart:io';

void main(){
  String? input = stdin.readLineSync();
}
```


## Example

The below code shows the implementation of user input in dart. It inputs a value as an age from the user and generates it as output:

```dart
import 'dart:io';
void main(){
  stdout.write('Enter your age: ');
  String? input=stdin.readLineSync();
  
  if(input !=null){
  int age=int.parse(input);
  print('Dear Friend, You are $age years old.');
  }else{
  print('Invalid input.');
  }
}
```

The above code produces the following output:

```shell
Enter your age: 21
Dear Friend, You are 21 years old.
```