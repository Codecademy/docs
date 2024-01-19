---
Title: 'Data Types'
Description: 'Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

**Data types** are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.

## Primitive Data Types

JavaScript uses seven primitive data types that are listed in the table below:

| Data Type   | Wrapper Object                                                                  | Description                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `number`    | [`Number`](https://www.codecademy.com/resources/docs/javascript/number-methods) | Any number, including numbers with decimals: `1`, `-2`, `99`, `3.14`.                                                                      |
| `bigint`    | `BigInt`                                                                        | Any number, greater than 2<sup>53</sup>-1 or less than -(2<sup>53</sup>-1) with `n` appended to the number: `1234567890123456n`.           |
| `string`    | [`String`](https://www.codecademy.com/resources/docs/javascript/strings)        | Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single `''` or double `""`.            |
| `boolean`   | `Boolean`                                                                       | This data type only has two possible values — either `true` or `false`.                                                                    |
| `null`      | None                                                                            | This data type represents the intentional absence of a value, and is represented by the keyword `null`.                                    |
| `undefined` | None                                                                            | This data type is denoted by the keyword `undefined`. It also represents the absence of a value though it has a different use than `null`. |
| `symbol`    | `Symbol`                                                                        | A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.      |

## Objects

[Objects](https://www.codecademy.com/resources/docs/javascript/objects) are a little more complex since they are collections of related data.

> **Note:** The `null` type cannot be tested with `typeof` like all the other primitive types because it will return `"object"`. This must be tested with the type equality operator (i.e., `=== null`).

## Number  

In JavaScript, numbers are always stored as double-precision floating point numbers. In this format, each number uses 64 bits to represent 3 parts, 
- 52 bits for the number (bits 0 to 51)
- 11 bits for the exponent (bits 52 to 62)
- 1 bit for the sign (bit 63)

```js
let x = 7;
let y = 123e5;
```
The integer precision for the `Number` type is `15 digits`.
```js
let x = 999999999999999;
let y = 9999999999999999;
console.log(x);
console.log(y);
```
The above lines give the following output,
```shell
999999999999999
10000000000000000
```

The `Number()` method converts a string or other value to the number type. If the value can't be converted, it returns `NaN`.
```js
Number('123'); // 123
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number("Harry"); // NaN 
```
Numbers are primitives, but they can be defined as objects using the keyword `new`.
```js
let x = 123;
let y = new Number(123);

console.log(typeof x); // "number"
console.log(typeof y); // "object"
```
## BigInt  

Any integer greater than 2<sup>53</sup>-1 and less than -(2<sup>53</sup>-1) cannot be represented by the `Number` type. Instead, they are represented by another datatype `BigInt`.      

To create a `BigInt`, append `n` at the end of the integer or by use the `BigInt()` function.  
```js
let bigNum = 9999999999999999n;
let b = BigInt(1234567890123456789012345);
```

The Javascript `typeof` for `BigInt` is "bigint".  
```js
let x = BigInt(1234567890123456789012345);
console.log(typeof x);
```
The above code snippet gives the following output:
```shell
bigint
```

## String

Strings in JavaScript are a sequence of characters enclosed in single `' '` or double `" "` quotes.

```js
let greeting = 'Hi buddy';
let message = "You are doing great! Keep studying!";
```

To find the length of the string, the built-in `length` property is used.
```js
let text = "abracadabra";
console.log(text.length); // 11
```

### Template Literals
Template literals, often informally called _template strings_, are characters delimited within backticks ` `` `. They allow for _multi-line strings_, _string interpolation_ with embedded expressions, and special constructs called _tagged templates_.

#### Multi-Line Strings
Any newline characters inserted within the backticks are part of the template literal, unlike single or double quoted strings, allowing for multi-line strings.
```js
let text = `All the world's a stage
and all the men and women
merely players`;

console.log(text);
```
The output for the above snippet,
```shell
All the world's a stage
and all the men and women
merely players
```
#### String Interpolation
In order to combine outputs from expressions with strings, the addition operator `+` is used to concatenate them. 
```js
let age_min = 20;
let age_max = 50;
console.log("Candidates of age between " + age_min + " and " + age_max + " can appear for the test.");
// Candidates of age between 20 and 50 can appear for the test. 
```
This is very tedious, especially when there are multiple expressions. Using template literals, the concatenation operator 
can be avoided, and placeholders of the form `${expression}` are used for the expressions, which makes the code more readable.

```js
let age_min = 20;
let age_max = 50;
console.log(`Candidates of age between ${age_min} and ${age_max} can appear for the test.`);
// Candidates of age between 20 and 50 can appear for the test.  
```

#### Tagged Templates
Tags are functions that allow parsing of template literals. The first argument of a tag function contains an array of string values.
The rest arguments are related to the expressions. 

```js
let name = 'Harry';
let age = 20;

function ageTag(strings, nameExp, ageExp) {
  const str0 = strings[0]; // "He is "
  const str1 = strings[1]; // "and he is a"
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 25 ? "teenager" : "adult";

  return `${str0}${nameExp}${str1}${ageStr}${str2}`;
}

const output = ageTag`He is ${name} and he is a ${age}.`;

console.log(output);
// He is Harry and he is a teenager.
```

Strings can also be defined as objects using the `new` keyword.

```js
let name = "Jhon";
let name2 = new String("Jhon");

console.log(typeof name); // "string"
console.log(typeof name2); // "object"
```
## Boolean

Boolean represents a truth value, either `true` or `false`.

```js
let lateToWork = true;
let isTheEarthFlat = false;
```

Booleans can also be defined as objects, using the `new` keyword.

Any object, including a boolean object with a value `false`, evaluates to `true` when passed into a conditional statement.
For instance, the condition in the following `if` statement evaluates to true.

```js
let x = new Boolean(false); // x--> Boolean object

if(x) console.log(true); // this statement is executed
else console.log(false);
```
But, this does not apply to boolean primitives.

```js
let x = false; // x--> primitive

if(x) console.log(true);
else console.log(false); // this statement is executed
```
To convert a non-boolean value into a boolean, the `Boolean` function or double not `!!` is used.

```js
let value = Boolean('Harry'); // returns true
let value2 = !!'Harry'; // returns true
```
Those values which are returned as false are `falsy`, whereas other values are `truthy`.

Truthy values can be loosely equal to `false` and vice-versa.

```js
if([]) console.log("[] is truthy"); // statement is executed
if([] == false) console.log("[] == false"); // this is also executed
```

## Null and Undefined

Null and Undefined are both for the absence of a value, but they have different meanings.

```js
// Undefined means there should be some values, but it is undefined now
let finishCourseTime = undefined;

// Null means there is no value here
let finishStudyingDate = null;
```

## Object

Objects can have fields with different values and types inside:

```js
const user = {
  name: 'Jane',
  age: 20,
  isActive: true,
};
```
