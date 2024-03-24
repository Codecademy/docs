---
Title: 'Type Conversion'
Description: 'The process of changing the data type of a value from one type to another.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Arithmetic'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

In Dart, **type conversion** refers to the process of converting a value from one data type to another. Dart supports both Implicit and Explicit type conversion.

## Implicit Type Conversion

Implicit type conversion is done automatically, when operations involving different numeric types are performed.

## Implicit conversion Example 1

```dart
void main() {
  int intValue = 10;
  double doubleValue = .5;

  // Implicit type conversion in arithmetic operation
  double result = intValue + doubleValue;

  print(result);
}
```

The `Shell` output:

```shell
10.5
```

In Example 1, the `int` intValue (10) is implicitly converted to a `double` (10.0) to perform the addition with doubleValue.

## Implicit conversion Example 2

```dart
void main() {
  int intValue = 42;
  String stringValue = "The value is: $intValue"; // Implicit toString() call
  print(stringValue);
}
```

The `Shell` output:

```shell
The value is: 42
```

The `toString()` method is implicitly called when an object is used in a string interpolation. In Example 2, Dart automatically calls the `toString()` method on `intValue` to obtain the string representation.

---

## Explicit Type Conversion

Explicit type conversion is done by the programmer using predefined functions or methods to convert values from one type to another. The following are the methods for Explicit type conversion:

* `toString()`[^1] : Converts a value to a string.
* `toDouble()`[^2] : Converts a value to a double.
* `toInt()`[^3] : Converts a value to an integer.
* `parse()`[^4] : Converts a string to a numeric type.
* `tryParse()`[^5]: Similar to `parse()`, but returns `null` if the conversion fails.

---

## toString() Method

In Dart, the `toString()` method plays a significant role in type conversion, especially when converting non-string types to strings. When you explicitly or implicitly convert an object to a string, Dart often relies on the `toString()` method to provide a meaningful string representation of that object.

## toString Method Example 1

```dart
void main() {
  var intValue = 42;
  var stringValue = intValue.toString(); // Explicit toString() call

  print(stringValue);

  var checkCondition = (stringValue.runtimeType == String) ? "$stringValue is a string" : "$stringValue is not a string";

  print(checkCondition);
}
```

The `Shell` output:

```shell
42
42 is a string
```

## toString Method Output Variations

For all `double` values of input ranging from 10^-6 (inclusive) to 10^21 (exclusive), the `toString` method returns decimal representation of its input in `string` format. For all other doubles, except for special values like `NaN` or `Infinity`, this method returns an exponential representation using `toStringAsExponential` method.

## Example toString Output 1

```dart
void main() {
  var doubleValue1 = 2000000.2/2;
  var doubleValue2 = 1/2000000;

  var strValue1 = doubleValue1.toString();
  var strValue2 = doubleValue2.toString();

  print(strValue1);
  print(strValue2);
}
```

The `Shell` output:

```Shell
1000000.1
5e-7
```

For special values, returns `NaN` if the input is `NaN`, returns `Infinity`, if input is `Infinity`, and `-Infinity`, if the input is `-Infinity`.

## Example toString Output 2

```dart
void main() {
  var doubleValue1 = 0.0/0.0;
  var doubleValue2 = 1.0/0.0;
  var doubleValue3 = -1.0/0.0;

  var strValue1 = doubleValue1.toString();
  var strValue2 = doubleValue2.toString();
  var strValue3 = doubleValue3.toString();

  print(strValue1);
  print(strValue2);
  print(strValue3);
}
```

The `Shell` output:

```Shell
NaN
Infinity
-Infinity
```

An `int` is converted to a decimal representation with no decimal point.

## Example toString Output 3

```dart
void main() {
  var intValue1 = 123e18;
  var intValue2 = 123e20;

  var strValue1 = intValue1.toString();
  var strValue2 = intValue2.toString();

  print(strValue1);
  print(strValue2);
}
```

The `Shell` output:

```Shell
123000000000000000000
1.23e+22
```

---

## Variations Of `toString` Method

* `toStringAsFixed()`[^6]
* `toStringAsExponential()`[^7]
* `toStringAsPrecision()`[^8]

---

## toStringAsFixed() Method

## Implementation

```pseudo
String toStringAsFixed(int fractionDigits);
```

The `toStringAsFixed` method converts the input number to a `double` before computing the string representation of that number.

The parameter `fractionDigits` must be an integer satisfying:

  0 <= `fractionDigits` <= 20.

Meaning the `fractionDigits` must be a Non-Zero and a Positive value and must be less than 21.

If `fractionDigits` equals 0, then the decimal point is omitted.

If the absolute value of the input is greater than or equal to 10^21, then this methods returns an exponential representation computed by `toStringAsExponential()`.

## toStringAsFixed Method Example

```dart
  void main() {
  var a = 1.toStringAsFixed(3);
  var b = (256463.51554546).toStringAsFixed(3);
  var c = (2351.44464661).toStringAsFixed(5);
  var d = 254645466111.toStringAsFixed(3);
  var e = 1224.toStringAsFixed(20);
  var f = 5.25.toStringAsFixed(0);
  
  print(a);
  print(b);
  print(c);
  print(d);
  print(e);
  print(f);
}
```

The `Shell` output:

```Shell
1.000
256463.516
2351.44465
254645466111.000
1224.00000000000000000000
5
```

> **Note:** If the `fractionDigit` value is not in specified range, console output will display a `RangeError`.

## Range Error Example

```dart
  var a = 1.toStringAsFixed(21);
  
  print(a);
```

The `Shell` output:

```Shell
Uncaught Error: RangeError (fractionDigits): Invalid value: Not in inclusive range 0..20: 21
```

---

## toStringAsExponential() Method

## toStringAsExponential Implementation

```pseudo
String toStringAsExponential([int? fractionDigits]);
```

The `toStringAsExponential` method converts the input number to a `double` before computing the exponential string representation of that number.

If the parameter `fractionDigits` is given, then it must be an integer satisfying:

  0 <= `fractionDigits` <= 20.

Meaning the `fractionDigits` must be a Non-Zero and a Positive value and must be less than 21.

Otherwise, without the parameter, the returned string uses the shortest number of digits that accurately represent this number.

If `fractionDigits` equals 0, then the decimal point is omitted.

## Example

```dart
void main() {

  var a = 1.toStringAsExponential(3);
  var b = (256463.51554546).toStringAsExponential(3);
  var c = (2351.44464661).toStringAsExponential();
  var d = 254645466111.toStringAsExponential(3);
  var e = 1224.toStringAsExponential(20);
  var f = 5.25.toStringAsExponential(0);

  print(a);
  print(b);
  print(c);
  print(d);
  print(e);
  print(f);

}
```

The `Shell` output:

```Shell
1.000e+0
2.565e+5
2.35144464661e+3
2.546e+11
1.22400000000000000000e+3
5e+0
```

---

## toStringAsPrecision() Method

## toStringAsPrecision Implementation

```pseudo
String toStringAsPrecision(int precision);
```

The `toStringAsPrecision` method converts the input number to a `double` and returns a string representation of that value with exactly `precision` significant digits.

The parameter `precision` must be an integer satisfying:
  
  1 <= `precision` <= 21.

## Example1

```dart
void main() {

  var a = 1.toStringAsPrecision(3);
  var b = (256463.51554546).toStringAsPrecision(1);
  var c = (2351.44464661).toStringAsPrecision(2);
  var d = 254645466111.toStringAsPrecision(3);
  var e = 1224.toStringAsPrecision(20);
  var f = 5.25.toStringAsPrecision(12);

  print(a);
  print(b);
  print(c);
  print(d);
  print(e);
  print(f);

}
```

The `Shell` output:

```Shell
1.00
3e+5
2.4e+3
2.55e+11
1224.0000000000000000
5.25000000000
```

---

## toDouble() Method

The `toDouble()` method converts a value to a double.

## toDouble Method Example

```dart
void main() {
  int intValue = 42;
  double doubleValue = intValue.toDouble();

  var checkCondition = (doubleValue == 42.0) ? true : false;

  print(checkCondition);
}
```

The `Shell` output:

```Shell
true
```

---

## toInt() Method

The `toInt()` method converts a value to an integer.

## toInt Method Example

```dart
void main() {
  double doubleValue = 42.75;
  int intValue = doubleValue.toInt();

  var checkCondition = (intValue == 42) ? true : false;

  print(checkCondition);
}
```

The `Shell` output:

```Shell
true
```

---

## parse() Method

The `parse()` method converts a String to a numeric type. Parses a string containing a number literal into a number.

### parse() Method Variations

### `num.parse()`

  The method first tries to read the input as `integer` (similar to `int.parse` without a `radix`). If that fails, it tries to parse the input as a `double` (similar to `double.parse`). If that fails, too, it throws a `FormatException`.

### `int.parse()`

  Converts a String to an `integer` type value. If that fails, too, it throws a `FormatException`.

### `double.parse()`

  Converts a String to an `double` type value. If that fails, too, it throws a `FormatException`.

## parse Method Example

```dart
void main() {
  String stringValue = "42";
  int intValue = int.parse(stringValue);

  var checkCondition = (intValue.runtimeType == int) ? true : false;
  print(checkCondition);
}
```

The `Shell` output:

```Shell
true
```

---

## tryParse() Method

The `tryParse()` method converts a String to a numeric type, similar to `parse()`, but returns `null` if the conversion fails.

### tryParse() Method Variations

### `num.tryParse()`

  The method first tries to read the input as `integer` (similar to `int.tryParse` without a `radix`). If that fails, it tries to parse the input as a `double` (similar to `double.tryParse`). If that fails, too, the function returns `null` instead of throwing `FormatException`.

### `int.tryParse()`

  Converts a String to an `integer` type value. For invalid input, the function returns `null`.

### `double.tryParse()`

  Converts a String to an `double` type value. For invalid input, the function returns `null`.

## tryParse Method Example

```dart
void main() {
  print(int.tryParse('42'));
  print(int.tryParse('42f'));
}
```

The `Shell` output:

```Shell
42
null
```

---

## References

[^1]: [toString: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toString.html)
[^2]: [toDouble: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toDouble.html)
[^3]: [toInt: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toInt.html)
[^4]: [parse: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toString.html)
[^5]: [tryParse: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toString.html)
[^6]: [toStringAsFixed: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toString.html)
[^7]: [toStringAsExponential: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toString.html)
[^8]: [toStringAsPrecision: Dart Documentation](https://api.dart.dev/stable/3.2.6/dart-core/num/toString.html)
