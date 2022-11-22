---
Title: 'Variables'
Description: 'Variables store data for later use, and allow their contents to be updated or changed.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-php'
  - 'paths/front-end-engineer-career-path'
  - 'paths/computer-science'
---

**Variables** store data for later use, and allow their contents to be updated or changed. They're needed when the same code needs to operate on different values at different times. They're also used when the same value is needed at multiple places throughout the code.

## Declaring a Variable

A variable in PHP begins with the `$` sign followed by the variable name. Unlike other languages, a variable is created as soon as you assign a value to it:

```php
<?php
  $x = 1500;
  $y = 3.1415;
  $z = 'cheese';
?>
```

In the above, `$x` is assigned the integer `1500`, `$y` is assigned the float `3.1416`, and `$z` is assigned the string `'cheese'`.

Variable names obey the following rules in PHP:

- Variable names are preceded by `$`.
- Variable names must start with a letter or the underscore character.
- Variable names can only contain alphanumeric characters and underscores.
- Variable names are case-sensitive.
