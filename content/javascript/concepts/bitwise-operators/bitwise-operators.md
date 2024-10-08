---
Title: 'Bitwise Operators'
Description: 'Bitwise operators in JavaScript perform operations on binary representations of integers. They manipulate bits directly using AND, OR, XOR, NOT, shifts, etc.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Operators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/create-a-back-end-app-with-javascript'
---

Bitwise operators in JavaScript perform operations on binary representations of integers. They manipulate bits directly using AND, OR, XOR, NOT, shifts, etc.

JavaScript uses the following bitwise operators:

| Operator | Name                  | Description                                                                           |
| -------- | --------------------- | ------------------------------------------------------------------------------------- |
| `&`      | AND                   | If both bits are 1, result is 1; otherwise 0.                                         |
| `\|`     | OR                    | If either bit is 1, result is 1; otherwise 0.                                         |
| `^`      | XOR                   | If bits are different, result is 1; otherwise 0.                                      |
| `~`      | NOT                   | If bit is 0, result is 1; otherwise 0.                                                |
| `<<`     | Zero fill left shift  | Pushes zeros in from right, leftmost bits fall off.                                   |
| `>>`     | Signed right shift    | Pushes copies of leftmost bit in from left, rightmost bit falls off (preserves sign). |
| `>>>`    | Zero fill right shift | Pushes zeros in from left, rightmost bits fall off.                                   |

## Examples

### AND

The `&` operator performs a bitwise AND on two numbers. The result is 1 only where both bits are 1.

```javascript
console.log(19 & 7); // Output: 3

// 10011 = 19
// 00111 =  7
// 00011 =  3
```

### OR

The `|` operator performs a bitwise OR on two numbers. The result is 1 if either bit is 1.

```javascript
console.log(19 | 7); // Output: 23

// 10011 = 19
// 00111 =  7
// 10111 = 23
```

### XOR

The `^` operator performs a bitwise XOR on two numbers. The result is 1 if the bits are different.

```javascript
console.log(19 ^ 7); // Output: 20

// 10011 = 19
// 00111 =  7
// 10100 = 20
```

### NOT

Because integers are stored in two's complement (to change the sign, invert the binary digits and add one), a `~` operation will change the sign of the number and change the absolute value by one.

```javascript
console.log(~19); // Output: -20

// 00000000000000000000000000010011 =  19
// 11111111111111111111111111101100 = -20
```

### Zero fill left shift

The `<<` operator shifts the bits of a number to the left, pushing zeros in from the right. The leftmost bits fall off and are discarded.

```javascript
console.log(19 << 3); // Output: 152

// 00000000000000000000000000010011 =  19
// 00000000000000000000000010011000 = 152

console.log(5 << 2);

// 00000000000000000000000000000101 = 5
// 00000000000000000000000000010100 = 20
```

### Signed right shift

The `<<` operator shifts the bits of a number to the right, pushing zeros in from the left. The rightmost bits fall off and are discarded.

```javascript
console.log(19 >> 3); // Output: 2

// 00000000000000000000000000010011 =  19
// 00000000000000000000000000000010 =   2

console.log(-20 >> 3); // Output: -3

// 11111111111111111111111111101100 = -20
// 11111111111111111111111111111101 =  -3
```

### Zero fill right shift

The `>>>` operator does not preserve the sign. It pushes zeros in from the left, pushing the sign bit out of its leftmost position.

```javascript
console.log(19 >>> 3); // Output: 2

// 00000000000000000000000000010011 =  19
// 00000000000000000000000000000010 =   2

console.log(-20 >>> 3); // Output: 536870909

// 11111111111111111111111111101100 = -20
// 00011111111111111111111111111101 = 536870909
```

## Codebyte Examples

Execute the following to illustrate the use of Bitwise `&` operator:

```codebyte/javascript
console.log(-5 & 12);
```

Execute the following to illustrate the use of Bitwise `|` operator:

```codebyte/javascript
console.log(13 | 10);
```

Execute the following to illustrate the use of Bitwise `^` operator:

```codebyte/javascript
console.log(4 ^ -11);
```

Execute the following to illustrate the use of Bitwise `~` operator:

```codebyte/javascript
console.log(~-10);
```

Execute the following to illustrate the use of Bitwise `<<` operator:

```codebyte/javascript
console.log(34 << 2);
```

Execute the following to illustrate the use of Bitwise `>>` operator:

```codebyte/javascript
console.log(-15 >> 4);
```

```codebyte/javascript
console.log(50 >> 4);
```

Execute the following to illustrate the use of Bitwise `>>>` operator:

```codebyte/javascript
console.log(-8 >>> 6);
```

```codebyte/javascript
console.log(96 >>> 6);
```
