# trimStart()

The `trimStart()` method removes whitespace characters from the beginning of a string. It returns a new string without modifying the original string. This method is also available as `trimLeft()`, which is an alias for `trimStart()`.

Whitespace characters include spaces, tabs, line breaks, and other Unicode whitespace characters.

## Syntax

```javascript
string.trimStart()
```

### Parameters

The `trimStart()` method does not take any parameters.

### Return Value

Returns a new string with whitespace removed from the beginning of the original string. The original string remains unchanged.

## Example

The following example demonstrates how `trimStart()` removes leading whitespace:

```javascript
const greeting = "   Hello, World!";
const trimmedGreeting = greeting.trimStart();

console.log(greeting);
// Output: "   Hello, World!"

console.log(trimmedGreeting);
// Output: "Hello, World!"

console.log(greeting.length);
// Output: 16

console.log(trimmedGreeting.length);
// Output: 13
```

In this example, `trimStart()` removes the three leading spaces from the string, reducing its length from 16 to 13 characters.

## Codebyte Example

Run the following code to see `trimStart()` in action:

```codebyte/javascript
// Example with various whitespace characters
const text1 = "   JavaScript";
const text2 = "\t\tProgramming";
const text3 = "\n\nCoding";

console.log("Original:", text1);
console.log("Trimmed:", text1.trimStart());

console.log("Original:", text2);
console.log("Trimmed:", text2.trimStart());

console.log("Original:", text3);
console.log("Trimmed:", text3.trimStart());

// Example showing that trailing spaces are preserved
const text4 = "   Both sides   ";
console.log("Original length:", text4.length);
console.log("After trimStart length:", text4.trimStart().length);
```