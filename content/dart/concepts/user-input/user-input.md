---
Title: 'User Input'
Description: 'User input in Dart is used to read the data from the console and interact with the web applications.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dart'
  - 'Input'
  - 'Flutter'
  - 'Console'
  - 'Form'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

**User input** is a fundamental aspect of interaction between users and software. In Dart, it varies depending on the type of application being used. It can be a web application, a Flutter application, or a console application. Dart provides a variety of tools and libraries to manage user input effectively.

## Syntax

```pseudo
import 'dart:io';

void main(){
  String? input = stdin.readLineSync();
}
```

## Example

The below code shows the implementation of user input in Dart. It inputs a value as an age from the user and generates an output:

```dart
import 'dart:io';
void main() {
  stdout.write('Enter your age: ');
  String? input = stdin.readLineSync();
  if (input != null) {
    int age = int.parse(input);
    print('Dear Friend, You are $age years old.');
  } else {
    print('Invalid input.');
  }
}
```

The above code produces the following output:

```shell
Enter your age: 21
Dear Friend, You are 21 years old.
```
