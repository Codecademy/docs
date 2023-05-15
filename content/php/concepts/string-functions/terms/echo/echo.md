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

> The metadata above provides information about the entry for the PHP String Functions echo().

One of the most commonly used functions in PHP is **`echo()`**, which is used to output one or more strings to the browser or command-line interface.
## Syntax:

```php
echo string1, string2, ..., stringN;
```

The `echo()` function can accept one or more strings as arguments, separated by commas. The strings can be enclosed in double or single quotes.

## Examples:

This example will output the text "Hello, world!" to the screen.

```php
echo "Hello World!";
echo "Hello", " ", "World", "!";
```

You can also use `echo()` to output variables:

```php
  $name = "John";
  echo "My name is $name";
  or
  echo 'My name is ' . $name;
```

This example will output:

```shell
My name is John
```

This will output "My name is John" to the screen. In the example above, we use the concatenation operator (.) to join the string "My name is " with the variable `$name`.

It is also possible to use `echo()` to output HTML code. For example:

```php
  echo '<h1>Welcome to my website!</h1>';
```

This will output a heading tag to the screen. Note that you can mix HTML and PHP code freely in your `echo()` statements.

One important thing to keep in mind when using `echo()` is that it does not return a value. In other words, you cannot assign the output of `echo()` to a variable or use it in an expression.
For example, the following code will not work:

```php
  $result = echo 'Hello, world!';
```

The output error will be something like this:

```shell
Parse error: syntax error, unexpected token "echo" in /home/user/scripts/code.php on line 2
```

Instead, you should use return to send a value from a function or method. The return statement is followed by the value that you want to return.

Here's an example of how to correctly use return:


```php
function getGreeting() {
  return 'Hello, world!';
}

$result = getGreeting();
echo $result; // Output: Hello, world!
```

In summary, the `echo()` function is a powerful tool for outputting text and variables to the screen in PHP. It is simple to use and flexible enough to handle a wide range of use cases.
