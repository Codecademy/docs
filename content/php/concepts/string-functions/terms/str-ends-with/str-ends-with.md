---
Title: 'str_ends_with()'
Description: 'Checks if a string ends with a given substring.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
Tags:
  - 'Strings'
  - 'Functions'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`str_ends_with()`** function checks if a string ends with a given substring.

## Syntax

```pseudo
str_ends_with( $string , $substring )
```

The `str_ends_with()` function has two required parameters:

- `$string`: Specifies the string to check.
- `$substring`: Specifies the substring to check for in the `$string` .

The `str_ends_with()` function returns a boolean value which is `true` if `$string` ends with `$substring`, and `false` otherwise.

## Example

The following example uses the `str_ends_with()` function to check if the `"fiddlesticks"` ends with `"sticks"` and then prints to the console:

```php
<?php
if (str_ends_with('fiddlesticks', 'sticks')) {
echo " fiddlesticks end with sticks ";
}
?>
```

The example will result in the following output:

```shell
fiddlesticks end with sticks
```

## Codebyte Example

This example is runnable and uses the `str_ends_with()` function:

> **Note 1:** The second echo statement will be true as all strings end with empty strings.

<!--empty line-->

> **Note 2:** The third echo statement will be false because the case does not match.

```codebyte/php
<?php
if (str_ends_with('NiceJob', 'Bob')) {
    echo "NiceJob Ends with Bob\n";
}
if (str_ends_with('NiceJob', '')) {
    echo "All Strings end with empty String\n";
}
if (str_ends_with('NiceJob', 'job')) {
    echo "str_ends_with() doesn't care about Case\n";
}
?>
```
