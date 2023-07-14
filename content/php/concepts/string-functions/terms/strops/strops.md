---
Title: 'strpos()'

Description: 'Returns the position of the first occurrence of a string inside another string. It is a case-sensitive function'

Subjects:
  - 'Computer Science'

  - 'Web Design'

  - 'Web Development'

Tags:
  - 'Strings'

  - 'Functions'

CatalogContent:
  - 'learn-php'

  - 'paths/computer-science'
---

The **`strpos()`** function performs a case-sensitive search for the position of the first occurrence of a substring in a given string. If the substring is found, it will return the index of the beginning of the substring. If it isn't found, the function won't return any output.

## Syntax

```pseudo

strpos(string,find,start)

```

Parameters:

- `string` is the string that the function searches.

- `find` is the value to search for within `string`.

- `start` tells the function to start the search at a specified index which is optional.

> **Note:** If the substring is found, the function returns the position where the substring starts. If the substring is not found, it returns `false`.

## Example

```php

<?php

echo  strpos("I love php, I love php too!","php");

?>

```

The output of the above code will be `7`, as the string "php" starts at index 7.

`strpos()` is case-sensitive. In the example above, the result would not be the same if the second parameter was written as "PHP" instead of "php".

## Codebyte

```codebyte/php

<?php

echo strpos("I love php, I love php too!","php", 10);

?>

```
