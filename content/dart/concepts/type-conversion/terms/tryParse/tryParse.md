---
Title: '.tryParse()'
Description: 'Parses a string and converts it to a specific data type'
Subjects: 
  - 'Computer Science'
  - 'Developer Tools'
  - 'Mobile Development'
  - 'Web Development'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Methods'
  - 'Strings'
CatalogContent: 
 - 'learn-dart'
 - 'paths/computer-science'
---

In Dart, **`.tryParse()`** is a static method available on several data types, such as `int` and `double`, for example. When called on a `string`, the `.tryParse()` method attempts to parse the string and returns a nullable value of the target data type if the parsing is successful. However, if parsing fails due to an invalid format in the string, the method returns `null`.

## Syntax

```pseudo
dataType.tryParse(stringToParse)
```
- `stringToParse` - Represents the `string` to be converted into the desired data type.
- `dataType` - Represents the data type to be converted to stringValue.

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


