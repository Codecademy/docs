---
Title: 'raw()'
Description: 'Returns the raw string form of template literals without processing escape sequences.'
Subjects:
  - 'Web Development'
  - 'JavaScript'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.raw()`** static method is a tag function for template literals that returns the raw string form without processing escape sequences. It allows developers to access the literal characters in a template string, including backslashes and other escape characters, exactly as they were typed in the source code.

The `.raw()` method is particularly useful when working with file paths, regular expressions, or any scenario where escape sequences should be preserved rather than interpreted. It serves as the only built-in template literal tag function in JavaScript and provides functionality similar to raw string literals found in other programming languages.

## Syntax

```pseudo
String.raw(strings)
String.raw(strings, sub1)
String.raw(strings, sub1, sub2)
String.raw(strings, sub1, sub2, /* …, */ subN)

String.raw`templateString`
```

**Parameters:**

- `strings`: A well-formed template literal array object with a `raw` property whose value is an array-like object of strings
- `sub1`, `...`, `subN`: Contains substitution values that replace placeholders in the template literal

**Return value:**

The `.raw()` method returns a string representing the raw string form of the given template literal.

## Example 1: Basic Usage

This example demonstrates the fundamental difference between a regular template literal and `String.raw()`:

```js
// Regular template literal processes escape sequences
const regularString = `Line 1\nLine 2\tTabbed`;
console.log(regularString);

// String.raw() preserves escape sequences
const rawString = String.raw`Line 1\nLine 2\tTabbed`;
console.log(rawString);

console.log(rawString.length); // 20 characters including \n and \t
```

This example results in the following output:

```shell
Line 1
Line 2    Tabbed
Line 1\nLine 2\tTabbed
20
```

In this example, the regular template literal interprets `\n` as a newline character and `\t` as a tab character. However, `String.raw()` treats these as literal backslash-n and backslash-t character sequences, preserving them exactly as written.

## Example 2: File Path Handling

This example shows how `String.raw()` simplifies working with Windows file paths that contain backslashes:

```js
// Without String.raw() - requires double escaping
const windowsPath1 = 'C:\\Users\\John\\Documents\\file.txt';
console.log(windowsPath1);

// With String.raw() - no escaping needed
const windowsPath2 = String.raw`C:\Users\John\Documents\file.txt`;
console.log(windowsPath2);

// Dynamic path construction with substitution
const username = 'Alice';
const filename = 'report.pdf';
const dynamicPath = String.raw`C:\Users\${username}\Desktop\${filename}`;
console.log(dynamicPath);
```

This example results in the following output:

```shell
C:\Users\John\Documents\file.txt
C:\Users\John\Documents\file.txt
C:\Users\Alice\Desktop\report.pdf
```

> **Note:** While escape sequences are preserved in static parts, interpolated values (e.g. `${username}`) are still evaluated normally.

This example demonstrates how `String.raw()` eliminates the need for double-escaping backslashes when working with file paths, making the code more readable and less error-prone.

## Codebyte Example: Regular Expression Patterns

This example illustrates using `String.raw()` to create cleaner regular expression patterns by avoiding double escaping. It compares traditional string-based regex patterns with those created using `String.raw()` for both date and URL matching:

```codebyte/javascript
// Traditional string literal requires escaping backslashes
const regexPattern1 = new RegExp("\\d{4}-\\d{2}-\\d{2}");

// String.raw() eliminates double escaping
const regexPattern2 = new RegExp(String.raw`\d{4}-\d{2}-\d{2}`);

// Both patterns work identically for date strings
const dateString = "2024-03-15";
console.log(regexPattern1.test(dateString));
console.log(regexPattern2.test(dateString));

// Traditional way: URL pattern with double escaping
const urlRegex1 = new RegExp("^https?:\\/\\/[\\w\\-\\.]+\\.[a-z]{2,}(\\/.*)?");

// Using String.raw() to simplify escaping
const urlRegex2 = new RegExp(String.raw`^https?:\/\/[\w\-\.]+\.[a-z]{2,}(\/.*)?`);

const url = "https://example.com/path";
console.log(urlRegex1.test(url));
console.log(urlRegex2.test(url));
```

## Frequently Asked Questions

### 1. When should I use String.raw() instead of regular template literals?

Use `String.raw()` when you need to preserve escape sequences exactly as written, such as when working with file paths, regular expressions, or any text that contains backslashes that should not be interpreted as escape characters.

### 2. Can I use String.raw() with variable substitution?

Yes, `String.raw()` supports template literal substitution using `${}` syntax. The substituted values are processed normally while escape sequences in the literal parts remain raw.

### 3. Does String.raw() work with all escape sequences?

Yes, `String.raw()` preserves all escape sequences including `\n`, `\t`, `\"`, `\'`, `\\`, and Unicode escapes like `\u0041`. None of these are processed or converted.
