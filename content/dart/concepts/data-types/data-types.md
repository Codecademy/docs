---
Title: 'Data Types'
Description: 'Data types categorize the various types of values that a program can store and manipulate.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Arithmetic'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **data types** are stored in variables, just like in other languages like [`C`](https://www.codecademy.com/resources/docs/c/variables), [`Python`](https://www.codecademy.com/resources/docs/python/variables) or [`Java`](https://www.codecademy.com/resources/docs/java/variables), and since [`Dart`](https://www.codecademy.com/resources/docs/dart) is a type-safe language, to guarantee that a variable's value always matches the variable's static type, it combines runtime and static type checking. Meaning that trying to store a string in an integer variable would not work.

## What is Static Typing?

Static typing refers to the property of the programming language where variables are bound to their types at compile-time. What does this mean? It means that the type of a variable is known and checked by the compiler before the code is executed, allowing for early detection of type-related errors. In the example below all variables (myInteger, myDouble, myBoolean, and myString) are declared with an explicit data type (int, double, bool, and String, respectively):

```dart
int myInteger = 42;
double myDouble = 3.14;
bool myBoolean = true;
String myString = "Hello, Codecademy!";
```

Below are a couple of examples of incorrect declarations of values to variables:

```dart
// Non-integer value to an int variable
int myInteger = "42";

// Omitted the explicit data type for a variable
var missingType = 3.14;

// Declared a boolean variable but provided a string value
bool myBoolean = "false";

// Mismatch between declared type and assigned value
String myString = 123;
```

## Numbers

Numbers are used to hold numeric values. They can be classified as `int`, `num`, and `double`:

```dart
int wholeNumber = 42;
double floatingPointNumber = 3.14;
num inheritedNumber = 7; // num can hold both int and double values

print(wholeNumber);          // Output: 42
print(floatingPointNumber);  // Output: 3.14
print(inheritedNumber);      // Output: 7
```

## Strings

Strings `string` are used to represent a sequence of characters, and they are embedded in either single "..." or double-quotes "...":

```dart
String greeting = "Double quotes work!";
String anotherString = 'Single quotes work too!';

print(greeting);  // Output: Double quotes work!
print(anotherString);  // Output: Single quotes work too!
```

## Booleans

Booleans `bool` represents values true or false:

```dart
bool isDartFun = true;
bool isPythonFun = false;

print(isDartFun); // Output: true
print(isPythonFun); // Output: false
```

## Symbols

Symbol `Symbol` object represents an operator or identifier. Objects are particularly valuable for APIs that identify elements by name. This is crucial for APIs because while minification can alter identifier names, it does not impact the underlying identifier symbols:

```dart
Symbol goodSymbol = Symbol('myIdentifier');

print(goodSymbol);  // Output: Symbol("myIdentifier")
```

## Lists

List `List` represents a collection of an ordered group of objects, working similar to `arrays` in other programming languages:

```dart
List<int> numbersList = [1, 2, 3, 4, 5];

print(numbersList);  // Output: [1, 2, 3, 4, 5]
```

## Maps

Map `Map` object consists of a key and value pair and they can be any data type:

```dart
Map<String, int> studentScores = {
  'Alice': 95,
  'Bob': 87,
  'Charlie': 92,
};

print(studentScores['Alice']);  // Output: 95
print(studentScores['Bob']);    // Output: 87
```

## Nulls

Nulls `Null` is a type that represents the absence of a value in a variable. This type can only have one possible value, which is null. Dart uses a sound null safety system, meaning that variables are non-nullable by default, and they have to be explicitly declared as nullable if they need to be able to hold a null value:

```dart
int? nullableInt;  // Nullable integer
String? nullableString;  // Nullable string

print(nullableInt);  // Output: null
print(nullableString);  // Output: null
```

## Runes

Runes `Runes` exposes the Unicode code points of a string. Unicode is a character encoding standard that aims to encompass all characters used by humans for writing:

```dart
String greeting = 'Hello 👋'; // String with emoji

// Using Runes to iterate over the Unicode code points
for (var codePoint in greeting.runes) {
  print('Code Point: $codePoint, Character: ${String.fromCharCode(codePoint)}');
}
```

## What is Dynamic?

Dynamic typing is checked dynamically at runtime rather than statically at compile-time. It introduces flexibility but at the same time sacrifices some of the benefits of static typing:

```dart
dynamic flexibleVariable = 42;

print(flexibleVariable);  // Output: 42
```

Below are some more examples:

```dart
int staticVariable = 42; // Non-dynamic, statically checked variable
dynamic dynamicVariable = "Hello";

int resultDynamic = dynamicVariable + 10; // Error: Dynamic type can lead to runtime errors
int resultStatic = staticVariable + 10; // Correct: Static type checking

print(resultDynamic);  // Outcome: Error
print(resultStatic);   // Output: 52
```
