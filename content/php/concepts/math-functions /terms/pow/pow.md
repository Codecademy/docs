---
Title: 'pow()'
Description: 'Returns the number raised to the power of the exponent.'
Subjects: 
  - 'Web Development
  - 'Code Foundations'
Tags: 
  - 'Methods'
  - 'Arithmetic'
  - 'Numbers'
  - 'Functions'
CatalogContent:
  -'learn-PHP'
  -' paths/web-development
--- 

The **`pow()`** function returns the number raised to the power of the exponent.

## Syntax 

```pseudo 
pow ( number $base, number $exp ) : number
``` 

The `pow()` function takes up to two parameters: 

-`base` is the number to be raised.
-`exp` is the power for a base to be raised. 

## Example 

The following example calculates 5^2:

```php
<?php
echo "pow(5,2) = " . pow(5,2);
echo " using ** operator ". 5**2;
?> 
``` 

The example will result in the following output:

```shell 
pow(5,2) = 25 using ** operator 25
``` 

## Codebyte Example

The following example calculates any number to the power of 0:

```codebyte/php 
<?php
$x=5;
$y=0;
echo "pow(" . $x, "," . $y . ")=". pow($x,$y);
?> 
```
