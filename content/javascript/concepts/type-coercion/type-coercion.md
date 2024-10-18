---
Title: 'Type Coercion'
Description: 'The process of converting a value from one data type to another.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
  - 'Operators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Type coercion** is the process of converting a value from one data type to another (such as a string to number). It works on both primitive data types and objects. However, it always results in a primitive data type.

Type coercion can be done both implicitly and explicitly. Explicit type coercion is the intentional conversion of a value from one data type to another and is typically done using native constructors such as `String()` without the `new` keyword in front of them. There is also implicit type coercion, in which values are converted from one data type to another by JavaScript.

## String Type Coercion

To coerce a value into a primitive string value explicitly, the `String()` function is used. To implicitly coerce a value into a string, the value simply needs to be added to an empty string. When coercing a string, the result is as expected, with the value staying the same, but the data type becomes a string.

Here is an example:

```js
var a = 54.1;

console.log(String(a));
console.log(a + '');

console.log(String(true));
console.log(String(null));
```

The code above will output:

```shell
54.1
54.1
true
null
```

## Number Type Coercion

To explicitly coerce a value into a number, the `Number()` function is used. A value can be coerced implicitly by using it in a mathematical operation, such as subtracting 0 from it or multiplying it by 1 to not change its value. Implicit coercion will also occur if the value is used with a comparison operator such as `<`, a bitwise operator such as `|`, the unary `+` operator, or with any of the arithmetic operators. It's important to note that using a comparison operator to coerce a value to a number depends on the type of the operands. For example, if two strings are compared with a comparison operator, they will simply be compared lexicographically, and no type coercion will occur.

Using `Number()` on booleans gives the expected results of `true` becoming `1` and `false` becoming `0`. When using `Number()` on a string, if the string's value is a valid number, it will successfully be converted into a number. If the string contains any non-numeric characters, the result will be `NaN`. An empty string returns `0`.

Here is an example:

```js
var a = '-76.2';

console.log(Number(a));
console.log(a * 1);

console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number('7km'));
```

The code above will output:

```shell
-76.2
-76.2
1
0
NaN
NaN
```

## Boolean Type Coercion

To explicitly coerce a value into a boolean, the `Boolean()` function is used. A value undergoes implicit coercion when used in a test expression for an `if` statement, `for` loop, `while` loop, or a ternary expression. A value can also undergo implict coercion when used as the left-hand operand to the logical operators (`||`, `&&`, and `!`).

Nearly all possible values will convert into `true`, but only a handlful will convert into `false`. The values that will become false are:

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`

All other values, including objects, when coerced to a boolean, will be converted into `true`.

Here is an example:

```js
var a = 'lamp';

console.log(Boolean(a));
console.log(!!a);

console.log(Boolean(''));
console.log(Boolean(null));
```

The code above will output:

```shell
true
true
false
false
```

## Loose vs Strict Equals

When using loose equals `==`, only the values of the operands are compared. If the values are of different types, one or both of the values will be implicitly coerced. On the other hand, strict equals `===` will not allow coercion and compares both the value and type of the operands.

Here is an example:

```js
var a = '12';
var b = 12;

console.log(a == b);
console.log(a === b);
```

The code above will output:

```shell
true
false
```

## Codebyte Example

The example below shows how type coercion works between a string and number with both loose and strict equals:

```codebyte/javascript
var num = 5;
var str = "10";

var result1 = num + str;
var result2 = num * str;
var result3 = num == "5";
var result4 = num === "5"

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
```
