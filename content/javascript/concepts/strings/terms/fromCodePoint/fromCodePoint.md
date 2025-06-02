# fromCodePoint()

`String.fromCodePoint()` is a static method in JavaScript that returns a string created from the specified sequence of code points.

## Syntax

```javascript
String.fromCodePoint(num1[, ...numN])

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
// Output: ☃★♲你

const snowman = String.fromCodePoint(9731);
console.log(snowman); // ☃

