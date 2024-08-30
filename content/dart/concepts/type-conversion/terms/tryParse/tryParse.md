---
Title: '.tryParse()'
Description: 'Parses a string and converts it into the given data type.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Dart'
  - 'Data Types'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **`.tryParse()`** is a static method available on several [data types](https://www.codecademy.com/resources/docs/dart/data-types), such as `int` and `double`. When called on a `string`, the `.tryParse()` method parses the string and converts it into the given data type if the parsing is successful. However, if parsing fails due to an invalid format in the string, the method returns `null`.

## Syntax

```pseudo
dataType.tryParse(stringToParse)
```

- `stringToParse`: Represents the `string` to be converted into the desired data type.
- `dataType`: Represents the data type to be used to parse `stringToParse`.

## Example

```dart
void main() {
  String input = '42';
  int? parsedInt = int.tryParse(input);

  if (parsedInt != null) {
    print('Parsed integer: $parsedInt');
  } else {
    print('Failed to parse the string as an integer!');
  }
}
```

The above code returns the following output:

```shell
Parsed integer: 42
```
