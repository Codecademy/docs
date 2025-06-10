---
Title: 'explode()'
Description: 'Splits a string into an array based on a specified delimiter'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

The **`explode()`** function is a built-in PHP string function that splits a string into an array based on a specified delimiter. It takes a string and breaks it apart at every occurrence of the delimiter, returning an array containing the resulting substrings. This function is essential for string manipulation and data processing tasks in PHP applications.

The `explode()` function is commonly used in scenarios such as parsing CSV data, processing user input, splitting file paths, extracting words from sentences, and converting delimited strings into manageable array elements. It serves as the counterpart to the [`implode()`](https://www.codecademy.com/resources/docs/php/string-functions/implode) function, which joins array elements into a single string.

## Syntax

```pseudo
explode(separator, string, limit)
```

**Parameters:**

- `separator`: The delimiter string that specifies where to split the original string. This parameter is required and cannot be an empty string.
- `string`: The input string to be split into an array. This parameter is required.
- `limit`: An optional integer parameter that controls the number of array elements to return. Possible values:
  - **Positive integer**: Returns an array with a maximum of `limit` elements, with the last element containing the rest of the string
  - **Negative integer**: Returns an array with all elements except for the last `limit` elements
  - **Zero**: Returns an array containing one element (the whole string)
  - **Not specified**: Returns an array with all possible elements

**Return value:**

The `explode()` function returns an array of strings, where each element is a substring of the original string separated by the specified delimiter.

## Example 1: Basic String Splitting using `.explode()`

This example demonstrates the fundamental usage of `explode()` to split a simple sentence into individual words:

```php
<?php
// Split a sentence into words using space as delimiter
$sentence = "Hello world from PHP programming";
$words = explode(" ", $sentence);

// Display the resulting array
print_r($words);
?>
```

The output of this code is:

```shell
Array
(
    [0] => Hello
    [1] => world
    [2] => from
    [3] => PHP
    [4] => programming
)
```

This code splits the sentence at each space character, creating an array where each word becomes a separate element. This is useful for text processing and word analysis tasks.

## Example 2: Processing CSV Data

This example shows how `explode()` can be used to parse comma-separated values, which is common when working with data imports or API responses:

```php
<?php
// Simulate CSV data from a file or API
$csvData = "John,25,Engineer,New York";
$userInfo = explode(",", $csvData);

// Extract individual fields
$name = $userInfo[0];
$age = $userInfo[1];
$profession = $userInfo[2];
$city = $userInfo[3];

// Display parsed information
echo "Name: " . $name . "\n";
echo "Age: " . $age . "\n";
echo "Profession: " . $profession . "\n";
echo "City: " . $city . "\n";

// Alternative: Display the complete array
print_r($userInfo);
?>
```

This code produces the following output:

```shell
Name: John
Age: 25
Profession: Engineer
City: New York
Array
(
    [0] => John
    [1] => 25
    [2] => Engineer
    [3] => New York
)
```

This example demonstrates practical data parsing where a single string containing user information is split into manageable components. The `explode()` function makes it easy to access individual data fields for further processing or database storage.

## Codebyte Example: Advanced Usage with Limit Parameter

This example illustrates the power of the limit parameter to control how many array elements are created, which is useful for processing partially structured data:

```codebyte/php
<?php
// URL path processing with different limit values
$urlPath = "/category/subcategory/product/details/reviews";

// Split with positive limit - get first 3 parts only
$limitedSplit = explode("/", $urlPath, 3);
echo "With limit 3:\n";
print_r($limitedSplit);

// Split with negative limit - exclude last 2 parts
$negativeLimitSplit = explode("/", $urlPath, -2);
echo "With limit -2:\n";
print_r($negativeLimitSplit);

// Split without limit - get all parts
$fullSplit = explode("/", $urlPath);
echo "Without limit:\n";
print_r($fullSplit);

// Practical example: Extract domain parts
$email = "user.name@subdomain.example.com";
$emailParts = explode("@", $email, 2);
$username = $emailParts[0];
$domain = $emailParts[1];

echo "Username: " . $username . "\n";
echo "Domain: " . $domain . "\n";
?>
```

This example shows how the limit parameter provides fine-grained control over string splitting. A positive limit creates a maximum number of elements, a negative limit excludes elements from the end, and the practical email example shows how limiting can prevent over-splitting when you only need specific parts.

## Frequently Asked Questions

### 1. What is the difference between `implode()` and `explode()`?

The `explode()` function splits a string into an array using a delimiter, while `implode()` does the opposite by joining array elements into a single string using a specified separator. They are complementary functions for string and array conversion.

### 2. Can the separator parameter be an empty string?

No, the separator parameter cannot be an empty string. PHP will generate a warning if you attempt to use an empty separator. Use alternative string functions like `str_split()` if you need to split a string into individual characters.

### 3. What happens if the delimiter is not found in the string?

If the delimiter is not found in the string, `explode()` returns an array containing the original string as the single element. No splitting occurs, and the function doesn't generate an error.
