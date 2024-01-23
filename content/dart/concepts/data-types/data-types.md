---
Title: 'Data Types'
Description: 'In Dart, data types are stored in variables, just like in other languages like C, Python or Java.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Dart'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In Dart, **data types** are stored in variables, just like in other languages like [C](https://www.codecademy.com/resources/docs/c/variables), [Python](https://www.codecademy.com/resources/docs/python/variables) or [Java](https://www.codecademy.com/resources/docs/java/variables). And since [Dart](https://www.codecademy.com/resources/docs/dart) is a type-safe language, to guarantee that a variable's value always matches the variable's static type, it combines runtime and static type checking. Meaning that trying to store a string in an integer variable would not work.

## What is Static Typing?

Static typing refers to the property of the programming language where variables are bound to their types at compile-time. What does this mean? It means that the type of a variable is known and checked by the compiler before the code is executed, allowing for early detection of type-related errors.

On the example below all variables (myInteger, myDouble, myBoolean, and myString) are declared with an explicit data type (int, double, bool, and String, respectively).

```
int myInteger = 42;
double myDouble = 3.14;
bool myBoolean = true;
String myString = "Hello, Codecademy!";
```
Below are a couple of examples with incorrect declarations of values to variables.

```
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

Numbers are used to hold numeric values. They can be classified as `int`,`num` and `double`.

```
int wholeNumber = 42;
double floatingPointNumber = 3.14;
num inheritedNumber = 7; // num can hold both int and double values

print(wholeNumber);          // Output: 42
print(floatingPointNumber);  // Output: 3.14
print(inheritedNumber);      // Output: 7

```

Below is an example with incorrect declarations of values to ``int``, ``num``, and ``double`` data type variables.

```
int invalidInt = "42"; // Assigning a string to an int
double missingType = 3; // Assigning an int to a double
bool booleanNumber = 3.14; // Assigning a double to a bool
String stringNumber = 123; // Assigning an int to a string

print(invalidInt);       // Incompatible types
print(missingType);      // Missing type annotation
print(booleanNumber);    // Incompatible types
print(stringNumber);     // Incompatible types

```

## Strings

Strings``string`` are used to represent a sequence of characters, and they are embedded in either single'...' or double-quotes "...". 

```
String greeting = "Double quotes work!";
String anotherString = 'Single quotes work too!';

print(greeting);  // Output: Double quotes work!
print(anotherString);  // Output: Single quotes work too!

```

Below is an example with incorrect declarations of values to ``string`` data type variables.

```
String missingQuotes = Hello, Dart!; // Missing quotes around the string

print(missingQuotes); // Outcome: Error, missing quotes

```

## Booleans

Booleans ``bool`` represents values true and false. 

```
bool isDartFun = true;
bool isPythonFun = false;

print(isDartFun); // Output: true
print(isPythonFun); // Output: false

```

## Symbols

Symbol ``Symbol`` object represents an operator or identifier. Objects are particularly valuable for APIs that identify elements by name. This is crucial for APIs because while minification can alter identifier names, it does not impact the underlying identifier symbols.

```
Symbol goodSymbol = Symbol('myIdentifier');

print(goodSymbol);  // Output: Symbol("myIdentifier")

```

Below is an example of incorrect declarations of values to ``Symbol`` data type variables.

```

String identifierName = 'myIdentifier';
Symbol badSymbol = Symbol(identifierName);

print(badSymbol);  // Outcome: Error, minification can impact identifier symbols

```

## Lists

List ``List`` is used to represent a collection of ordered group of objects, working simillar to `arrays` in other programming languages.

```

List<int> numbersList = [1, 2, 3, 4, 5];

print(numbersList);  // Output: [1, 2, 3, 4, 5]

```

Below is an example of incorrect declarations of values to ``List`` data type variables.

```

List<String> invalidList = [1, 2, 3];  // Incorrect: Mismatched types in the list

print(invalidList);  // Outcome: Error, incompatible types in the list

```

## Maps

Map ``Map`` object consists in a key and value pair and they can be any data type.

```

Map<String, int> studentScores = {
  'Alice': 95,
  'Bob': 87,
  'Charlie': 92,
};

print(studentScores['Alice']);  // Output: 95
print(studentScores['Bob']);    // Output: 87

```

Below is of example with incorrect or not so recommended declarations of values to `Map` data type variable.

```
Map<int, String> invalidMap = {
    'John': 'Doe'};  // Mismatched key-value types

Map<dynamic, dynamic> dynamicMap = {
    'name': 'Alice', 42: 'age'};  // Works, but not recommended for type safety 

print(invalidMap['John']);  // Outcome: Error, incompatible key type
print(dynamicMap[42]);  // Output: age (not recommended)

```

## Nulls

Nulls `Null`is a type that represents the absence of a value in a variable. This type can only have one possible value, which is null. Dart uses a sound null safety system, meaning that variables are non-nullable by default, and they have to be explicitly declared as nullable if they need to be able to hold a null value.

```

int? nullableInt;  // Nullable integer
String? nullableString;  // Nullable string

print(nullableInt);  // Output: null
print(nullableString);  // Output: null

```

## Runes

Runes ``Runes`` expose the Unicode code points of a string. Unicode is a character encoding standard that aims to encompass all characters used by humans for writing.

```

String greeting = 'Hello 👋'; // String with emoji

// Using Runes to iterate over the Unicode code points
for (var codePoint in greeting.runes) {
  print('Code Point: $codePoint, Character: ${String.fromCharCode(codePoint)}');
}

```

Below is an example of incorrect declarations of values to `Runes` data type variable.

```

String invalidString = 'Invalid 😞'; // String with emoji

// Attempting to iterate over Unicode code points without using Runes
for (var character in invalidString.runes) {
  print('Character: $character');
}

```

## What is Dynamic?

Dynamic typing is checked dynamically at runtime rather than statically at compile-time. It introduces flexibility but at the same time sacrifices some of the benefits of static typing

```

dynamic flexibleVariable = 42;

print(flexibleVariable);  // Output: 42

```

Below are some more examples.

```

int staticVariable = 42; // Non-dynamic, statically checked variable
dynamic dynamicVariable = "Hello";

int resultDynamic = dynamicVariable + 10; // Error: Dynamic type can lead to runtime errors
int resultStatic = staticVariable + 10; // Correct: Static type checking

print(resultDynamic);  // Outcome: Error
print(resultStatic);   // Output: 52


```