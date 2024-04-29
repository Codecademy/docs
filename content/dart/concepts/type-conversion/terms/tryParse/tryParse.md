---
Title: '.tryParse()'
Description: 'Parses a string and converts it to a specific data type'
Subjects: 
  - 'Web Development'
  - 'Developer Tools'
  - 'Mobile Development'
Tags:
  - 'Methods'
  - 'Dart'
  - 'Integers'
CatalogContent: 
 - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, .tryParse() is a static method available on several data types, such as int, for example. The .tryParse() method returns a nullable value of the target data type if the parsing is successful. If parsing fails, the returned value is null.  

## Syntax

```pseudo
dataType.tryParse(stringValue)
```
1. stringValue is the string one wishes to convert into a specific data type.
2. dataType is the data type that one wishes to convert stringValue to.

## Example

1. value = num.tryParse('5'); // 5
2. value = num.tryParse('five'); // null


## Codebyte Example (if applicable)

```dart
void main() {
  String input = '42';
  int? parsedInt = int.tryParse(input);

  if (parsedInt != null) {
    print('Parsed integer: $parsedInt');
  } else {
    print('Failed to parse the string as an integer');
  }
}
```
The above code will return the following output: 

```dart
//Parsed integer: 42
```


