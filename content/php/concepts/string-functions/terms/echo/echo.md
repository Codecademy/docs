---
Title: 'echo()'
Description: 'Outputs one or more strings.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Output'
CatalogContent:
  - 'learn-php'
  - 'paths/web-development'
---

One of the most commonly used functions in PHP is **`echo()`**, which is used to output one or more strings to the browser or command-line interface.

## Syntax

```pseudo
echo string1, string2, ..., stringN;
```

The `echo()` function can accept one or more strings as arguments, separated by commas. The strings can be enclosed in double or single quotes.

## Examples

This example will output the text "Hello, world!" to the screen.

```php
echo "Hello World!";
echo "Hello", " ", "World", "!";
```

`echo()` can also be used to output variables:

```php
$name = "John";
echo "My name is $name";
```

In the example above, the output will be "My name is John".
The concatenation operator (.) joins the string "My name is " with the variable `$name`.

It is also possible to use `echo()` to output HTML code. For example:

```php
echo '<h1>Welcome to my website!</h1>';
```

This will output a heading tag to the screen.

> **Note:** HTML and PHP code can both be used within `echo()` statements.

One important thing to keep in mind when using `echo()` is that it does not return a value. In other words, the output of `echo()` cannot be assigned to a variable or used in an expression.

For example, the following code will not work:

```php
$result = echo 'Hello, world!';
```

The output error will be something like this:

```shell
Parse error: syntax error, unexpected token "echo" in /home/user/scripts/code.php on line 2
```

Instead, the value of the function or method should be returned first using the `return` keyword.

The following example shows how to use `echo` on a returned value:

```codebyte/php
function getGreeting() {
  return 'Hello, world!';
}

$result = getGreeting();
echo $result;
```
