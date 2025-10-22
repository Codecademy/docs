---
Title: 'Template literals' 
Description: 'String literals that allow embedded expressions, multi-line strings, and improved readability in JavaScript.'
Subjects: 
  - 'Web Development'
  - 'Computer Science'

Tags: 
  - 'JavaScript'
  - 'Strings'
  - 'ES6'
  - 'Syntax'
CatalogContent: 
  - 'learn-javascript'
  - 'paths/full-stack-engineer-career-path'
---

**Template literals** are string literals in JavaScript that allow embedded expressions, multi-line strings, and more readable string formatting. Introduced in ES6, they make string manipulation more powerful and expressive than traditional concatenation.

Template literals are enclosed by **backticks** (`` ` ``) instead of single or double quotes.

## Syntax 
Template literals use backticks (`` `...` ``) to define the string. To embed expressions, use `${expression}` within the template literal. The syntax is as follows:

```js 
`string text`

`string text ${expression} string text`

`string text line 1
 string text line 2`

```
- Backticks (`` `...` ``): Define the template literal.
- `${expression}`: Placeholder for JavaScript expressions, which can include variables, calculations, or function calls.
- Multi-line support: Line breaks within backticks are preserved, eliminating the need for `\n`.


## Basic Example 
Template literals simplify string concatenation by allowing variables or expressions to be embedded directly:

```js
const name = "Oscar";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Oscar!

```

In this example, the variable `name` is embedded using `${}`. This is more readable than traditional concatenation (`"Hello, " + name + "!"`).



## Multi-line Strings
Template literals make multi-line strings straightforward without needing explicit newline characters:

```js
const poem = `
  Roses are red,
  Violets are blue,
  JavaScript is fun,
  And so are you!
`;
console.log(poem);

```
The output preserves the line breaks as written, making it ideal for formatting text like HTML or poetry.



## Expression Interpolation
Template literals can include any valid JavaScript expression inside `${}`:

```js
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.

```
Expressions can also include function calls or complex calculations:

```js
const getName = () => "Oscar";
const message = `Hi, ${getName()}! Your score is ${Math.random() * 100}.`;
console.log(message); // Output: Hi, Oscar! Your score is <random number>.

```


## Tagged Template Literals
Template literals can be used with a tag function to customize their behavior. A tag function processes the template literal’s strings and expressions:


```js
function myTag(strings, ...values) {
  return strings[0] + values[0].toUpperCase() + strings[1];
}
const name = "Oscar";
const tagged = myTag`Hello, ${name}!`;
console.log(tagged); // Output: Hello, OSCAR!

```
Here, `myTag` is a custom function that manipulates the template literal’s parts. The `strings` parameter holds the static parts, and `values` contains the evaluated expressions.


## Codebyte Example 

```codebyte/js
const user = "Oscar";
const age = 25;
const info = `User: ${user}, Age: ${age}`;
console.log(info); 

```
